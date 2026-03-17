<!-- src/routes/skateparks/+page.svelte -->

<script lang="ts">
  import { base } from "$app/paths";

  type Skatepark = {
    name: string;
    city: string;
    status: string;
    sizeSqFt: string;
    address: string;
    designedBy: string;
    builtBy: string;
    yearBuilt: string;
    surface: string;
    lights: string;
    type: string;
    access: string;
  };

  const skateparks: Skatepark[] = [
    {
      name: "Bluffdale Skatepark",
      city: "Bluffdale",
      status: "Complete",
      sizeSqFt: "9000",
      address: "15400 S 1200 W, Bluffdale, UT 84065",
      designedBy: "American Ramp Company",
      builtBy: "Pivot Custom (ARC)",
      yearBuilt: "2023",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Bountiful Skatepark",
      city: "Bountiful",
      status: "Complete",
      sizeSqFt: "12000",
      address: "359 W 740 S, Bountiful, UT 84010",
      designedBy: "Spohn Ranch",
      builtBy: "Stapp Construction",
      yearBuilt: "2023",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Constitution Park Skatepark",
      city: "Brigham City",
      status: "Complete",
      sizeSqFt: "10500",
      address: "450 E 700 S, Brigham City, UT 84302",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "1999",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Coalville Skatepark",
      city: "Coalville",
      status: "Complete",
      sizeSqFt: "4400",
      address: "54 Center St, Coalville, UT 84017",
      designedBy: "Skatewave",
      builtBy: "Skatewave",
      yearBuilt: "Unknown",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Delta Skatepark",
      city: "Delta",
      status: "Complete",
      sizeSqFt: "17000",
      address: "115 N 100 W, Delta, UT 84624",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Pre-fab Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Ephraim Skatepark",
      city: "Ephraim",
      status: "Complete",
      sizeSqFt: "26000",
      address: "650 S 100 E, Ephraim, UT 84627",
      designedBy: "Grindline Skateparks",
      builtBy: "Grindline Skateparks",
      yearBuilt: "2023",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Firefly Skatepark",
      city: "Fairfield",
      status: "Complete",
      sizeSqFt: "10000",
      address: "2223 W Wander Ln, Fairfield, UT 84013",
      designedBy: "Evergreen Skateparks",
      builtBy: "Evergreen Skateparks",
      yearBuilt: "2024",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Farmington Skatepark",
      city: "Farmington",
      status: "Complete",
      sizeSqFt: "3600",
      address: "1384 S Frontage Rd, Farmington, UT 84025",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Fillmore Skatepark",
      city: "Fillmore",
      status: "Complete",
      sizeSqFt: "11900",
      address: "434 N 100 E St, Fillmore, UT 84631",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Grantsville Skatepark",
      city: "Grantsville",
      status: "Complete",
      sizeSqFt: "4000",
      address: "60 E Cherry St, Grantsville, UT 84029",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Heber City Skatepark",
      city: "Heber City",
      status: "Complete",
      sizeSqFt: "26000",
      address: "758 W Midway Ln, Heber City, UT 84032",
      designedBy: "Wally Hollyday Designs",
      builtBy: "California Skateparks",
      yearBuilt: "2008",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Herriman Skatepark",
      city: "Herriman",
      status: "Complete",
      sizeSqFt: "20000",
      address: "5900 13400 S, Herriman, UT 84096",
      designedBy: "Wally Hollyday Designs",
      builtBy: "California Skateparks",
      yearBuilt: "2007",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Holladay Skatepark",
      city: "Holladay",
      status: "Complete",
      sizeSqFt: "8000",
      address: "4621 Holladay Blvd E, Holladay, UT 84117",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2022",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Hyrum Skatepark",
      city: "Hyrum",
      status: "Complete",
      sizeSqFt: "30000",
      address: "1494 E 300 S, Hyrum, UT 84319",
      designedBy: "Hunger Skateparks",
      builtBy: "Hunger Skateparks",
      yearBuilt: "2022",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Kanab Skatepark",
      city: "Kanab",
      status: "Complete",
      sizeSqFt: "12000",
      address: "566 N 100 E, Kanab, UT 84741",
      designedBy: "American Ramp Company",
      builtBy: "American Ramp Company",
      yearBuilt: "2016",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Lehi Skatepark",
      city: "Lehi",
      status: "Complete",
      sizeSqFt: "11000",
      address: "2000 W 2100 N, Lehi, UT 84043",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2017",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Logan Skatepark",
      city: "Logan",
      status: "Complete",
      sizeSqFt: "17000",
      address: "449 Center Ave, Logan, UT 84321",
      designedBy: "Site Design Group",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Magna Skatepark",
      city: "Magna",
      status: "Complete",
      sizeSqFt: "10200",
      address: "S 8950 W St, Magna, UT 84044",
      designedBy: "Skatewave",
      builtBy: "Skatewave",
      yearBuilt: "Unknown",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Millcreek Common",
      city: "Millcreek",
      status: "Planning Phase",
      sizeSqFt: "0",
      address: "1354 E Chambers Ave, Millcreek, UT 84106",
      designedBy: "Evergreen Skateparks",
      builtBy: "Evergreen Skateparks",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Moab Skatepark",
      city: "Moab",
      status: "Complete",
      sizeSqFt: "6680",
      address: "400 N 100 W, Moab, UT 84532",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "North Ogden Skatepark",
      city: "North Ogden",
      status: "Complete",
      sizeSqFt: "7200",
      address: "530 E 2650 N, North Ogden, UT 84414",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Orem Skatepark",
      city: "Orem",
      status: "Complete",
      sizeSqFt: "23000",
      address: "355 1200 W, Orem, UT 84057",
      designedBy: "Purkiss Rose",
      builtBy: "Unknown",
      yearBuilt: "2002",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    },
    {
      name: "Park City Skatepark",
      city: "Park City",
      status: "Complete",
      sizeSqFt: "31000",
      address: "1220 Park Ave, Park City, UT 84060",
      designedBy: "Site Design Group",
      builtBy: "Homes and Narver Engineering Group",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public"
    }
  ];

  // ── Filter / Sort state ──────────────────────────────────────────
  let filterOpen = false;
  let sortBy = "name-asc";
  let filterStatuses = new Set<string>();
  let filterSurfaces = new Set<string>();
  let filterLights = new Set<string>();
  let filterSizes = new Set<string>(); // "small" | "medium" | "large"

  // Static option lists derived from data (computed once)
  const statusOptions = [...new Set(skateparks.map((p) => p.status))].sort();
  const surfaceOptions = [...new Set(skateparks.map((p) => p.surface))].sort();

  const sortOptions = [
    { value: "name-asc",  label: "Name A–Z" },
    { value: "name-desc", label: "Name Z–A" },
    { value: "city-asc",  label: "City A–Z" },
    { value: "city-desc", label: "City Z–A" },
    { value: "size-desc", label: "Largest First" },
    { value: "size-asc",  label: "Smallest First" },
    { value: "year-new",  label: "Year: Newest" },
    { value: "year-old",  label: "Year: Oldest" }
  ];

  const sizeOptions = [
    { value: "small",  label: "Small  (< 5,000 sq ft)" },
    { value: "medium", label: "Medium  (5,000 – 15,000 sq ft)" },
    { value: "large",  label: "Large  (> 15,000 sq ft)" }
  ];

  function sizeCategory(sqft: string): string {
    const n = parseInt(sqft, 10);
    if (!n) return "small";
    if (n < 5000) return "small";
    if (n <= 15000) return "medium";
    return "large";
  }

  // Reactive filtered + sorted list
  $: filteredParks = skateparks
    .filter((p) => {
      if (filterStatuses.size > 0 && !filterStatuses.has(p.status)) return false;
      if (filterSurfaces.size > 0 && !filterSurfaces.has(p.surface)) return false;
      if (filterLights.size > 0 && !filterLights.has(p.lights)) return false;
      if (filterSizes.size > 0 && !filterSizes.has(sizeCategory(p.sizeSqFt))) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name-asc":  return a.name.localeCompare(b.name);
        case "name-desc": return b.name.localeCompare(a.name);
        case "city-asc":  return a.city.localeCompare(b.city);
        case "city-desc": return b.city.localeCompare(a.city);
        case "size-desc": return (parseInt(b.sizeSqFt) || 0) - (parseInt(a.sizeSqFt) || 0);
        case "size-asc":  return (parseInt(a.sizeSqFt) || 0) - (parseInt(b.sizeSqFt) || 0);
        case "year-new":  return (parseInt(b.yearBuilt) || 0) - (parseInt(a.yearBuilt) || 0);
        case "year-old": {
          const ay = parseInt(a.yearBuilt) || 9999;
          const by = parseInt(b.yearBuilt) || 9999;
          return ay - by;
        }
        default: return 0;
      }
    });

  $: activeFilterCount =
    filterStatuses.size + filterSurfaces.size + filterLights.size + filterSizes.size;
  $: hasActiveFilters = activeFilterCount > 0 || sortBy !== "name-asc";

  function toggleChip(set: Set<string>, value: string): Set<string> {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  }

  function clearAll(): void {
    filterStatuses = new Set();
    filterSurfaces = new Set();
    filterLights = new Set();
    filterSizes = new Set();
    sortBy = "name-asc";
  }

  // Close panel when clicking outside the filter container
  function handleWindowClick(e: MouseEvent): void {
    if (!filterOpen) return;
    const target = e.target as HTMLElement;
    if (!target.closest?.(".filterContainer")) {
      filterOpen = false;
    }
  }

  // ── Photo lazy-load state ────────────────────────────────────────
  type PhotoState = Record<string, string | null>;
  let photoState: PhotoState = {};

  function keyFor(p: Skatepark): string {
    return `${p.name}|||${p.city}`;
  }

  function getPhotoUrl(p: Skatepark): string {
    const v = photoState[keyFor(p)];
    return typeof v === "string" ? v : "";
  }

  function isLoading(p: Skatepark): boolean {
    return photoState[keyFor(p)] === null;
  }

  async function loadPhoto(p: Skatepark): Promise<void> {
    const k = keyFor(p);
    if (photoState[k] !== undefined) return;
    photoState = { ...photoState, [k]: null };
    try {
      const qs = new URLSearchParams({ name: p.name, city: p.city, address: p.address }).toString();
      const res = await fetch(`${base}/api/skatepark-photo?${qs}`);
      if (!res.ok) throw new Error();
      const data: { url: string | null } = await res.json();
      photoState = { ...photoState, [k]: data.url ?? "" };
    } catch {
      photoState = { ...photoState, [k]: "" };
    }
  }

  function lazyPhoto(node: HTMLElement, p: Skatepark) {
    let done = false;
    const obs = new IntersectionObserver(
      (entries) => {
        if (done) return;
        if (entries[0]?.isIntersecting) {
          done = true;
          loadPhoto(p);
          obs.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    obs.observe(node);
    return { destroy() { obs.disconnect(); } };
  }

  // ── Expand/collapse state ────────────────────────────────────────
  let expandedCards = new Set<string>();

  function toggleExpand(key: string): void {
    const next = new Set(expandedCards);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    expandedCards = next;
  }
</script>

<svelte:head>
  <title>Skateparks | Utah Skatepark Advocacy Group</title>
  <meta name="description" content="Community organizations supported by the Utah Skatepark Advocacy Group." />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:wght@200;300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<svelte:window on:click={handleWindowClick} />

<!-- HERO -->
<section class="heroWrap">
  <img src="/skatepark-hero.jpg" alt="Utah Skateparks" class="heroImg" />
  <div class="heroBanner">
    <h1 class="heroTitle">Skateparks</h1>
  </div>
</section>

<!-- FILTER BAR -->
<section class="infoWrap">

  <!-- Filter bar + dropdown panel -->
  <div class="filterContainer">
    <div class="filterBar">
      <button
        type="button"
        class="filterToggleBtn"
        class:filterToggleActive={hasActiveFilters}
        on:click|stopPropagation={() => (filterOpen = !filterOpen)}
        aria-expanded={filterOpen}
      >
        <svg class="filterIcon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        Filters
        {#if activeFilterCount > 0}
          <span class="filterBadge">{activeFilterCount}</span>
        {/if}
        <svg class="chevron" class:chevronOpen={filterOpen} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div class="filterRight">
        Skateparks Shown: <strong>{filteredParks.length}</strong>
      </div>
    </div>

    {#if filterOpen}
      <div class="filterPanel" role="dialog" aria-label="Filter and sort options">

        <!-- Sort By -->
        <div class="panelSection">
          <div class="sectionLabel">Sort By</div>
          <div class="chipRow">
            {#each sortOptions as opt}
              <button
                type="button"
                class="chip"
                class:chipActive={sortBy === opt.value}
                on:click={() => (sortBy = opt.value)}
              >{opt.label}</button>
            {/each}
          </div>
        </div>

        <div class="panelDivider"></div>

        <!-- Filter rows -->
        <div class="panelGrid">
          <div class="panelSection">
            <div class="sectionLabel">Status</div>
            <div class="chipRow">
              {#each statusOptions as s}
                <button
                  type="button"
                  class="chip"
                  class:chipActive={filterStatuses.has(s)}
                  on:click={() => (filterStatuses = toggleChip(filterStatuses, s))}
                >{s}</button>
              {/each}
            </div>
          </div>

          <div class="panelSection">
            <div class="sectionLabel">Surface</div>
            <div class="chipRow">
              {#each surfaceOptions as s}
                <button
                  type="button"
                  class="chip"
                  class:chipActive={filterSurfaces.has(s)}
                  on:click={() => (filterSurfaces = toggleChip(filterSurfaces, s))}
                >{s}</button>
              {/each}
            </div>
          </div>

          <div class="panelSection">
            <div class="sectionLabel">Lights</div>
            <div class="chipRow">
              {#each ["Yes", "No"] as l}
                <button
                  type="button"
                  class="chip"
                  class:chipActive={filterLights.has(l)}
                  on:click={() => (filterLights = toggleChip(filterLights, l))}
                >{l === "Yes" ? "Has Lights" : "No Lights"}</button>
              {/each}
            </div>
          </div>

          <div class="panelSection panelSectionFull">
            <div class="sectionLabel">Park Size</div>
            <div class="chipRow">
              {#each sizeOptions as s}
                <button
                  type="button"
                  class="chip"
                  class:chipActive={filterSizes.has(s.value)}
                  on:click={() => (filterSizes = toggleChip(filterSizes, s.value))}
                >{s.label}</button>
              {/each}
            </div>
          </div>
        </div>

        {#if hasActiveFilters}
          <div class="panelDivider"></div>
          <div class="panelFooter">
            <button type="button" class="clearAllBtn" on:click={clearAll}>
              &#x2715; Clear All Filters
            </button>
          </div>
        {/if}

      </div>
    {/if}
  </div>
</section>

<!-- GRID -->
<section class="pageWrap">
  {#if filteredParks.length === 0}
    <div class="noResults">
      <p>No skateparks match your current filters.</p>
      <button type="button" class="clearAllBtn" on:click={clearAll}>Clear All Filters</button>
    </div>
  {:else}
    <div class="cardsGrid">
      {#each filteredParks as p}
        <div class="card">
          <!-- photo area -->
          <div class="photoArea" use:lazyPhoto={p}>
            {#if getPhotoUrl(p)}
              <img class="photoImg" src={getPhotoUrl(p)} alt={"Photo of " + p.name} loading="lazy" />
            {:else}
              {#if isLoading(p)}
                <div class="photoLoading"></div>
              {/if}
            {/if}

            <div class="photoBtns">
              <button type="button" class="pillBtn">+ Add Photo</button>
              <button type="button" class="pillsubmitBtn">Submit</button>
            </div>
          </div>

          <!-- always-visible basic info -->
          <div class="cardBasic">
            <div class="parkName">{p.name}</div>
            <div class="parkCity">{p.city}</div>
            <div class="parkAddress">{p.address}</div>
            <button
              type="button"
              class="detailsBtn"
              on:click={() => toggleExpand(keyFor(p))}
              aria-expanded={expandedCards.has(keyFor(p))}
            >
              {expandedCards.has(keyFor(p)) ? "Hide Details" : "Details"}
              <svg
                class="chevron"
                class:chevronOpen={expandedCards.has(keyFor(p))}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <!-- expandable details -->
          {#if expandedCards.has(keyFor(p))}
            <div class="detailBox">
              <div class="twoCol">
                <div>
                  <div class="label">Status:</div>
                  <div class="value">{p.status}</div>
                </div>
                <div>
                  <div class="label">Size (Sq. Ft):</div>
                  <div class="value">{p.sizeSqFt}</div>
                </div>
              </div>

              <div class="oneCol">
                <div class="label">Designed by:</div>
                <div class="value">{p.designedBy}</div>
              </div>

              <div class="oneCol">
                <div class="label">Built by:</div>
                <div class="value">{p.builtBy}</div>
              </div>

              <div class="oneCol">
                <div class="label">Year Built:</div>
                <div class="value">{p.yearBuilt}</div>
              </div>

              <div class="twoCol">
                <div>
                  <div class="label">Surface:</div>
                  <div class="value">{p.surface}</div>
                </div>
                <div>
                  <div class="label">Lights?</div>
                  <div class="value">{p.lights}</div>
                </div>
              </div>

              <div class="twoCol">
                <div>
                  <div class="label">Type:</div>
                  <div class="value">{p.type}</div>
                </div>
                <div>
                  <div class="label">Access:</div>
                  <div class="value">{p.access}</div>
                </div>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</section>

<style>
  * {
    box-sizing: border-box;
  }

  /* ── Hero ─────────────────────────────────────────────────────── */
  .heroWrap {
    width: 100%;
  }

  .heroImg {
    width: 100%;
    height: 320px;
    display: block;
    object-fit: cover;
  }

  .heroBanner {
    background: var(--brown);
    padding: 18px var(--gutter);
  }

  .heroTitle {
    font-family: "Wendy One", system-ui, sans-serif;
    font-size: clamp(28px, 4vw, 44px);
    margin: 0;
    color: #1a1a1a;
    max-width: var(--containerMax);
    margin-left: auto;
    margin-right: auto;
  }

  /* ── Filter wrapper ───────────────────────────────────────────── */
  .infoWrap {
    max-width: var(--containerMax);
    margin: 16px auto 16px;
    padding: 0 var(--gutter);
  }

  /* ── Filter container ─────────────────────────────────────────── */
  .filterContainer {
    position: relative;
  }

  .filterBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 0 20px;
    background: #fff;
    border: 2px solid #d9d9d9;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.08);
  }

  .filterToggleBtn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 0;
    font: 700 16px Raleway, sans-serif;
    color: #1a1a1a;
    cursor: pointer;
    padding: 6px 0;
  }

  .filterToggleBtn:hover {
    color: #000;
  }

  .filterToggleActive {
    color: #000;
  }

  .filterIcon {
    flex-shrink: 0;
  }

  .filterBadge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ffc03a;
    color: #1a1a1a;
    font: 700 11px Raleway, sans-serif;
    min-width: 18px;
    height: 18px;
    border-radius: 99px;
    padding: 0 5px;
  }

  .chevron {
    transition: transform 180ms ease;
  }

  .chevronOpen {
    transform: rotate(180deg);
  }

  .filterRight {
    font: 400 16px Raleway, sans-serif;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* ── Filter panel dropdown ────────────────────────────────────── */
  .filterPanel {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    right: 0;
    background: #fff;
    border: 2px solid #d9d9d9;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    z-index: 50;
    padding: 20px 24px;
  }

  .panelSection {
    /* spacing handled by grid gap */
  }

  .panelSectionFull {
    grid-column: 1 / -1;
  }

  .sectionLabel {
    font: 700 11px Raleway, sans-serif;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    margin-bottom: 10px;
  }

  .chipRow {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    padding: 6px 14px;
    border-radius: 99px;
    border: 1.5px solid #d0d0d0;
    background: #fff;
    font: 400 13px Raleway, sans-serif;
    color: #333;
    cursor: pointer;
    transition: background 80ms, border-color 80ms, color 80ms;
    white-space: nowrap;
  }

  .chip:hover {
    border-color: #999;
    background: #f5f5f5;
  }

  .chipActive {
    background: #ffc03a;
    border-color: #e8a800;
    color: #1a1a1a;
    font-weight: 700;
  }

  .chipActive:hover {
    background: #f0b400;
    border-color: #d9a000;
  }

  .panelDivider {
    height: 1px;
    background: #ebebeb;
    margin: 18px 0;
  }

  .panelGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px 32px;
  }

  .panelFooter {
    display: flex;
    justify-content: flex-end;
  }

  .clearAllBtn {
    background: transparent;
    border: 1.5px solid #d0d0d0;
    font: 600 13px Raleway, sans-serif;
    color: #666;
    padding: 6px 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 80ms, color 80ms;
  }

  .clearAllBtn:hover {
    border-color: #999;
    color: #222;
  }

  /* ── No results ───────────────────────────────────────────────── */
  .noResults {
    max-width: 960px;
    margin: 48px auto;
    padding: 0 20px;
    text-align: center;
    font: 400 16px Raleway, sans-serif;
    color: #555;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .noResults p {
    margin: 0;
  }

  /* ── Cards grid ───────────────────────────────────────────────── */
  .pageWrap {
    max-width: var(--containerMax);
    margin: 0 auto;
    padding: 0 var(--gutter) 60px;
  }

  .cardsGrid {
    display: grid;
    grid-template-columns: repeat(3, 280px);
    gap: 24px;
    justify-content: center;
  }

  .card {
    width: 280px;
    display: flex;
    flex-direction: column;
  }

  .photoArea {
    width: 280px;
    height: 220px;
    background: #2f2e2e;
    position: relative;
    overflow: hidden;
  }

  .photoImg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .photoLoading {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 55%;
    background: rgba(255, 255, 255, 0.35);
  }

  .photoBtns {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    gap: 12px;
    z-index: 2;
  }

  .pillBtn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgb(255, 192, 58);
    color: #000;
    font: 700 14px Raleway, sans-serif;
    padding: 10px 14px;
    border-radius: 24px;
    border: 2px solid #000;
    cursor: pointer;
  }

  .pillBtn:hover {
    opacity: 0.9;
  }

  .pillsubmitBtn {
    margin-left: 30px;
    width: 84px;
    height: 37px;
    border-radius: 34px;
    background: rgb(255, 192, 58);
    border: none;
    font: 700 14px Raleway, sans-serif;
    color: #000;
    cursor: pointer;
  }

  .pillsubmitBtn:hover {
    opacity: 0.9;
  }

  /* ── Basic always-visible info ────────────────────────────────── */
  .cardBasic {
    background: #dfdfdf;
    padding: 12px 14px 14px;
  }

  .parkName {
    font: 400 20px Oswald, sans-serif;
    color: #000;
    margin: 0;
  }

  .parkCity {
    font: 400 13px Raleway, sans-serif;
    color: #555;
    margin-top: 2px;
  }

  .parkAddress {
    font: 400 13px Raleway, sans-serif;
    color: #000;
    margin-top: 6px;
    line-height: 1.4;
  }

  .detailsBtn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    padding: 6px 14px;
    background: #ffc03a;
    border: 1.5px solid #1a1a1a;
    border-radius: 3px;
    font: 700 13px Raleway, sans-serif;
    color: #1a1a1a;
    cursor: pointer;
    transition: background 80ms;
  }

  .detailsBtn:hover {
    background: #f0b400;
  }

  .chevron {
    transition: transform 180ms ease;
    flex-shrink: 0;
  }

  .chevronOpen {
    transform: rotate(180deg);
  }

  /* ── Expandable detail box ────────────────────────────────────── */
  .detailBox {
    background: #dfdfdf;
    border-top: 1px solid #c8c8c8;
    padding: 12px 14px 16px;
  }

  .label {
    font: 700 14px Raleway, sans-serif;
    color: #000;
    margin-top: 10px;
  }

  .value {
    font: 400 14px Raleway, sans-serif;
    color: #000;
    margin-top: 2px;
  }

  .twoCol {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  .oneCol {
    display: block;
  }

  /* ── Responsive ───────────────────────────────────────────────── */
  @media (max-width: 900px) {
    .cardsGrid {
      grid-template-columns: repeat(2, 280px);
    }

    .panelGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    .cardsGrid {
      grid-template-columns: 300px;
    }

    .card {
      width: 300px;
    }

    .photoArea {
      width: 300px;
    }

    .panelGrid {
      grid-template-columns: 1fr;
    }

    .panelSectionFull {
      grid-column: 1;
    }
  }
</style>
