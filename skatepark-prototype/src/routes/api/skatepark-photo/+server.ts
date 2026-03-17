import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

type CacheEntry = { url: string | null; exp: number };

const CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
const cache = new Map<string, CacheEntry>();

// Nominatim public instance guideline is ~1 req/sec. Throttle on the server to reduce blocks.
let lastNominatimAt = 0;

function nowMs(): number {
  return Date.now();
}

function cacheGet(key: string): string | null | undefined {
  const hit = cache.get(key);
  if (!hit) return undefined;
  if (hit.exp < nowMs()) {
    cache.delete(key);
    return undefined;
  }
  return hit.url;
}

function cacheSet(key: string, url: string | null): void {
  cache.set(key, { url, exp: nowMs() + CACHE_TTL_MS });
  // Basic bound to avoid unbounded growth (prototype).
  if (cache.size > 2000) {
    const firstKey = cache.keys().next().value as string | undefined;
    if (firstKey) cache.delete(firstKey);
  }
}

function safeParam(v: string | null, maxLen: number): string {
  const s = (v ?? "").trim();
  return s.length > maxLen ? s.slice(0, maxLen) : s;
}

async function fetchJson<T>(url: string, init?: RequestInit, timeoutMs = 7000): Promise<T> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);

  try {
    const res = await fetch(url, { ...init, signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } finally {
    clearTimeout(t);
  }
}

async function tryWikidataCommonsImage(name: string, city: string): Promise<string | null> {
  // 1) Search Wikidata entity
  const search = `${name} ${city} Utah skatepark`;
  const wdSearchUrl =
    "https://www.wikidata.org/w/api.php?" +
    new URLSearchParams({
      action: "wbsearchentities",
      format: "json",
      language: "en",
      limit: "5",
      search
    }).toString();

  type WdSearch = { search?: Array<{ id: string; label?: string; description?: string }> };
  const wdSearch = await fetchJson<WdSearch>(wdSearchUrl, {
    headers: { "Accept": "application/json" }
  });

  const id = wdSearch.search?.[0]?.id;
  if (!id) return null;

  // 2) Get claims for P18 (image)
  const wdEntityUrl =
    "https://www.wikidata.org/w/api.php?" +
    new URLSearchParams({
      action: "wbgetentities",
      format: "json",
      ids: id,
      props: "claims"
    }).toString();

  type WdEntities = {
    entities?: Record<
      string,
      {
        claims?: {
          P18?: Array<{ mainsnak?: { datavalue?: { value?: string } } }>;
        };
      }
    >;
  };

  const wdEntities = await fetchJson<WdEntities>(wdEntityUrl, {
    headers: { "Accept": "application/json" }
  });

  const fileName = wdEntities.entities?.[id]?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
  if (!fileName) return null;

  // 3) Resolve Commons file to a thumbnail URL
  const commonsUrl =
    "https://commons.wikimedia.org/w/api.php?" +
    new URLSearchParams({
      action: "query",
      format: "json",
      prop: "imageinfo",
      titles: `File:${fileName}`,
      iiprop: "url",
      iiurlwidth: "900"
    }).toString();

  type CommonsQuery = {
    query?: {
      pages?: Record<
        string,
        {
          imageinfo?: Array<{ thumburl?: string; url?: string }>;
        }
      >;
    };
  };

  const commons = await fetchJson<CommonsQuery>(commonsUrl, {
    headers: { "Accept": "application/json" }
  });

  const pages = commons.query?.pages;
  if (!pages) return null;

  const firstPage = pages[Object.keys(pages)[0] ?? ""];
  const info = firstPage?.imageinfo?.[0];
  return info?.thumburl ?? info?.url ?? null;
}

async function throttleNominatim(): Promise<void> {
  const gap = 1100; // ms
  const elapsed = nowMs() - lastNominatimAt;
  if (elapsed < gap) {
    await new Promise((r) => setTimeout(r, gap - elapsed));
  }
  lastNominatimAt = nowMs();
}

async function geocodeToLatLon(query: string): Promise<{ lat: number; lon: number } | null> {
  await throttleNominatim();

  const url =
    "https://nominatim.openstreetmap.org/search?" +
    new URLSearchParams({
      format: "jsonv2",
      limit: "1",
      countrycodes: "us",
      q: query
    }).toString();

  type NomRes = Array<{ lat: string; lon: string }>;

  const data = await fetchJson<NomRes>(url, {
    headers: {
      "Accept": "application/json",
      // Set something identifying; replace with your org/site.
      "User-Agent": "utah-skateparks-site/0.1 (admin@example.com)"
    }
  });

  const first = data?.[0];
  if (!first) return null;

  const lat = Number(first.lat);
  const lon = Number(first.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return { lat, lon };
}

async function tryOpenStreetCamNearbyPhoto(lat: number, lon: number): Promise<string | null> {
  const body = new URLSearchParams({
    lat: String(lat),
    lng: String(lon),
    radius: "250",
    page: "1",
    ipp: "1"
  });

  const res = await fetch("https://api.openstreetcam.org/1.0/list/nearby-photos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    body
  });

  if (!res.ok) return null;

  type OsvPhoto = { lth_name?: string; th_name?: string; name?: string };
  type OsvNearby = { currentPageItems?: OsvPhoto[] };

  const data = (await res.json()) as OsvNearby;
  const p = data.currentPageItems?.[0];
  if (!p) return null;

  // Prefer large thumbnail.
  return p.lth_name ?? p.th_name ?? p.name ?? null;
}

export const GET: RequestHandler = async ({ url }) => {
  const name = safeParam(url.searchParams.get("name"), 160);
  const city = safeParam(url.searchParams.get("city"), 120);
  const address = safeParam(url.searchParams.get("address"), 220);

  if (!name || !city) {
    return json({ url: null });
  }

  const cacheKey = `${name}|||${city}|||${address}`;
  const cached = cacheGet(cacheKey);
  if (cached !== undefined) {
    return json({ url: cached });
  }

  let photoUrl: string | null = null;

  // Attempt 1: Wikidata -> Commons P18 image (best when available)
  try {
    photoUrl = await tryWikidataCommonsImage(name, city);
  } catch {
    // ignore
  }

  // Attempt 2: Geocode -> OpenStreetCam nearest street-level photo (fallback)
  if (!photoUrl) {
    try {
      const q =
        address
          ? `${address}, ${city}, UT`
          : `${name}, ${city}, UT`;

      const ll = await geocodeToLatLon(q);
      if (ll) {
        photoUrl = await tryOpenStreetCamNearbyPhoto(ll.lat, ll.lon);
      }
    } catch {
      // ignore
    }
  }

  cacheSet(cacheKey, photoUrl);
  return json({ url: photoUrl });
};