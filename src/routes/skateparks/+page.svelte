<!-- src/routes/skateparks/+page.svelte -->

<script lang="ts">
  
  // Lazy-load photo URLs per-card (no user uploads, no local /src images needed)
  // Photos are fetched from your server endpoint: /api/skatepark-photo
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

  // photoState values:
  // - undefined: not requested yet
  // - null: loading
  // - "": no photo found / failed
  // - "https://...": photo URL
  type skatepark = {
  name: string;
  city: string;
};
import { base } from "$app/paths";

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
  console.log("Fetching photo for", p.name, p.city);
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

  // Svelte action: lazy-load when the photo area scrolls near viewport
 function lazyPhoto(node: HTMLElement, p: Skatepark) {
  let done = false;

  const obs = new IntersectionObserver(
    (entries) => {
      if (done) return;

      if (entries[0]?.isIntersecting) {
        done = true;
        loadPhoto(p);   // NOW p exists
        obs.disconnect();
      }
    },
    { rootMargin: "400px" }
  );

  obs.observe(node);

  return {
    destroy() {
      obs.disconnect();
    }
  };
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

<!-- HERO -->
<section class="heroWrap">
  <img src="/skatepark-hero.jpg" alt="Utah Skateparks" width="980" height="352" class="heroImg" />
  <h1 class="heroTitle">Utah Skateparks</h1>
</section>

<!-- INFO / FILTER BAR -->
<section class="infoWrap">
  <div class="infoTop">
    <div class="infoText">
      <div class="infoTitle">Help Us Keep Your Skatepark Info Accurate!</div>
      <div class="infoDesc">
        Got updates or spot any missing details about your skatepark?<br />
        Let us know so we can keep the community informed!
      </div>
    </div>

    <button type="button" class="infoBtn">
  Request Info Update
</button>
  </div>

  <div class="filterBar">
    <div class="filterLeft">&#128305; Filters</div>

    <div class="filterRight">
      Skateparks displayed: <strong>84</strong>
      <span class="filterIcon">&#9660;</span>
    </div>
  </div>
</section>

<!-- GRID -->
<section class="pageWrap">
  <div class="cardsGrid">
    {#each skateparks as p}
      <div class="card">
        <!-- photo area -->
        <div class="photoArea" use:lazyPhoto={p}>
          {#if getPhotoUrl(p)}
            <img class="photoImg" src={getPhotoUrl(p)} alt={"Photo of " + p.name} loading="lazy" />
          {:else}
            <!-- keep your original dark block; show a subtle loading bar if fetching -->
            {#if isLoading(p)}
              <div class="photoLoading"></div>
            {/if}
          {/if}

          <div class="photoBtns">
            <button type="button" class="pillBtn">+ Add Photo</button>
            <button type="button" class="pillsubmitBtn">Submit</button>
          </div>
        </div>

        <!-- detail box -->
        <div class="detailBox">
          <div class="titleBlock">
            <div class="parkName">{p.name}</div>
            <div class="parkCity">{p.city}</div>
          </div>

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
            <div class="label">Address:</div>
            <div class="value">{p.address}</div>
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
      </div>
    {/each}
  </div>
</section>

<style>
  * {
    box-sizing: border-box;
  }

  .heroWrap {
    position: relative;
    max-width: 980px;
    margin: 0px auto 0;
    padding: 0 0;
  }

  .heroImg {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .heroTitle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font: 400 56px Oswald, sans-serif;
    margin: 0;
    background: rgba(230, 230, 230, 0.85);
    padding: 12px 24px;
  }

  .pageWrap {
    max-width: 960px;
    margin: 0 auto;
    padding: 0px 0px 0px;
  }

  .cardsGrid {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    justify-content: space-between;
    gap: 40px;
  }

  .card {
    width: 260px;
    display: flex;
    flex-direction: column;
  }

  /* Top "photo" block: 260x236 */
  .photoArea {
    width: 260px;
    height: 236px;
    margin: 0px;
    background: #2f2e2e;
    position: relative;
    overflow: hidden; /* needed for img crop */
  }

  /* Actual photo */
  .photoImg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Simple loading indicator */
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
    text-transform: none;
    text-decoration: none;
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

  .detailBox {
    width: 260px;
    height: 474px;
    background: #dfdfdf;
    padding: 14px 14px 16px;
    margin: 0 auto;
  }

  .titleBlock {
    margin-bottom: 12px;
  }

  .parkName {
    font: 400 22px Oswald, sans-serif;
    color: #000;
    margin: 0;
  }

  .parkCity {
    font: 400 14px Raleway, sans-serif;
    color: #000;
    margin-top: 2px;
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

  .infoWrap {
    max-width: 980px;
    margin: 16px auto 16px;
    padding: 0 20px;
  }

  .infoTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-bottom: 20px;
  }

  .infoTitle {
    font: 400 22px Oswald, sans-serif;
    margin-bottom: 6px;
  }

  .infoDesc {
    font: 400 14px/1.5 Raleway, sans-serif;
    color: #000;
  }

  .infoBtn {
    background: #000;
    color: #fff;
    font: 400 14px Raleway, sans-serif;
    padding: 10px 14px;
    text-decoration: none;
    white-space: nowrap;
  }

  .infoBtn:hover {
    opacity: 0.9;
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

  .filterLeft {
    font: 700 16px Raleway, sans-serif;
  }

  .filterRight {
    font: 400 16px Raleway, sans-serif;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .filterIcon {
    font-size: 12px;
  }

  @media (max-width: 980px) {
    .cardsGrid {
      grid-template-columns: repeat(2, 291px);
      justify-content: center;
    }
  }

  @media (max-width: 640px) {
    .cardsGrid {
      grid-template-columns: 291px;
      justify-content: center;
    }
  }
</style>