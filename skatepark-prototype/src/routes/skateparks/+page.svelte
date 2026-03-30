<!-- src/routes/skateparks/+page.svelte -->

<script lang="ts">
  import { base } from "$app/paths";
  import Footer from "$lib/components/home/Footer.svelte";

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
    photo: string;
  };

  const skateparks: Skatepark[] = [
    {
      name: "All Together Skatepark",
      city: "Salt Lake City",
      status: "Complete",
      sizeSqFt: "5000",
      address: "660 South 400 West Suite 300, Salt Lake City, UT 84101",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "2022",
      surface: "Wood",
      lights: "Yes",
      type: "Indoor",
      access: "Paid",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Ashley Valley Skatepark",
      city: "Vernal",
      status: "Planning Phase",
      sizeSqFt: "14500",
      address: "1175 W 250 N, Vernal, UT 84078",
      designedBy: "Skatewave",
      builtBy: "Skatewave",
      yearBuilt: "Unknown",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
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
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Carry On Skatepark",
      city: "Provo",
      status: "Complete",
      sizeSqFt: "0",
      address: "244 West 100 South, Provo, UT 84601",
      designedBy: "Ridge Ramps",
      builtBy: "Ridge Ramps",
      yearBuilt: "2024",
      surface: "Wood",
      lights: "Yes",
      type: "Indoor",
      access: "Paid",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Castle Dale Skatepark",
      city: "Castle Dale",
      status: "Complete",
      sizeSqFt: "6100",
      address: "240 S 500 E, Castle Dale, UT 84513",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Steel & Wood",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Cedar City Skatepark",
      city: "Cedar City",
      status: "Complete",
      sizeSqFt: "12000",
      address: "665 W 1045 N, Cedar City, UT 84721",
      designedBy: "American Ramp Company",
      builtBy: "American Ramp Company",
      yearBuilt: "2024",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Clinton Skatepark",
      city: "Clinton",
      status: "Complete",
      sizeSqFt: "6000",
      address: "1711 1740 N, Clinton, UT 84015",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Steel & Wood",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Cook Family Park Skatepark",
      city: "Pleasant Grove",
      status: "Under Construction",
      sizeSqFt: "15000",
      address: "568 W 800 N, Pleasant Grove, UT 84062",
      designedBy: "American Ramp Company",
      builtBy: "Pivot Custom",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Copperview Skatepark",
      city: "Midvale",
      status: "Complete",
      sizeSqFt: "11000",
      address: "8446 Harrison St, Midvale, UT 84047",
      designedBy: "Site Design Group",
      builtBy: "Stapp Construction",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Crossroads Skatepark & Skate Shop",
      city: "Ogden",
      status: "Complete",
      sizeSqFt: "9000",
      address: "251 W 12th St, Ogden, UT 84404",
      designedBy: "Crossroads",
      builtBy: "Crossroads",
      yearBuilt: "2008",
      surface: "Wood",
      lights: "Yes",
      type: "Indoor",
      access: "Paid",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Daybreak (Skateable Art)",
      city: "South Jordan",
      status: "Complete",
      sizeSqFt: "20000",
      address: "4513 Dorena Ln, South Jordan, UT 84095",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Delta Skatepark",
      city: "Delta",
      status: "Complete",
      sizeSqFt: "17000",
      address: "115 N 100 W Rd, Delta, UT 84624",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Pre-fab Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Dow James Memorial Skatepark",
      city: "Tooele",
      status: "Complete",
      sizeSqFt: "6500",
      address: "438 West 400 North Street, Tooele, UT 84074",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Eagle Mountain Skatepark",
      city: "Eagle Mountain",
      status: "Complete",
      sizeSqFt: "9800",
      address: "4593 Eagle Mountain Blvd, Eagle Mountain, UT 84005",
      designedBy: "American Ramp Company",
      builtBy: "American Ramp Company",
      yearBuilt: "Unknown",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Ellison Skatepark",
      city: "Layton",
      status: "Complete",
      sizeSqFt: "16700",
      address: "700 N 2200 W, Layton, UT 84041",
      designedBy: "Site Design Group",
      builtBy: "Stacey Construction",
      yearBuilt: "2003",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Fairmont Skatepark",
      city: "Salt Lake City",
      status: "Complete",
      sizeSqFt: "17915",
      address: "2333 S 900 E, Salt Lake City, UT 84106",
      designedBy: "Site Design Group",
      builtBy: "Stapp Construction",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Fillmore Skatepark",
      city: "Fillmore",
      status: "Complete",
      sizeSqFt: "11900",
      address: "434 N 100 E St., Fillmore, UT 84631",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Fort Utah Skatepark",
      city: "Provo",
      status: "Planning Phase",
      sizeSqFt: "6875",
      address: "300 N Geneva Rd, Provo, UT 84601",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Glendale Skatepark",
      city: "Salt Lake City",
      status: "Planning Phase",
      sizeSqFt: "0",
      address: "1700 W S, Salt Lake City, UT 84104",
      designedBy: "California Skateparks",
      builtBy: "To Be Determined",
      yearBuilt: "Unknown",
      surface: "Unknown",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Jeanie Stevens Skatepark",
      city: "Tremonton",
      status: "Complete",
      sizeSqFt: "8490",
      address: "735 N 980 W, Tremonton, UT 84337",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Jordan / 9&9th Skatepark",
      city: "Salt Lake City",
      status: "Complete",
      sizeSqFt: "12680",
      address: "1400 N 1200 W, Salt Lake City, UT 84116",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Kearns Skatepark",
      city: "Kearns",
      status: "Complete",
      sizeSqFt: "28500",
      address: "5850 S 4800 W, Kearns, UT 84118",
      designedBy: "Site Design Group",
      builtBy: "Psomas Engineering Firm",
      yearBuilt: "2010",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Kids That Rip (KTR) Skatepark",
      city: "Midvale",
      status: "Complete",
      sizeSqFt: "10000",
      address: "7220 Union Park Ave, Midvale, UT 84047",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "2020",
      surface: "Wood",
      lights: "Yes",
      type: "Indoor",
      access: "Paid",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Legacy Farms",
      city: "Saratoga Springs",
      status: "Private",
      sizeSqFt: "0",
      address: "379 E Willowstone Ln, Saratoga Springs, UT 84045",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Private",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Little Valley Skatepark",
      city: "St. George",
      status: "Planning Phase",
      sizeSqFt: "0",
      address: "S 2350 E St, St. George, UT 84790",
      designedBy: "Omega Ramps",
      builtBy: "Omega Ramps",
      yearBuilt: "Unknown",
      surface: "Pre-fab Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Lone Peak Skatepark",
      city: "Sandy",
      status: "Complete",
      sizeSqFt: "28000",
      address: "10140 S 700 E, Sandy, UT 84070",
      designedBy: "Site Design Group",
      builtBy: "Stapp",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Lorin Farr Skatepark",
      city: "Ogden",
      status: "Complete",
      sizeSqFt: "12800",
      address: "769 Canyon Rd, Ogden, UT 84404",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Oakley Skatepark",
      city: "Oakley",
      status: "Complete",
      sizeSqFt: "10550",
      address: "4122 Utah 32, Oakley, UT 84036",
      designedBy: "Site Design Group",
      builtBy: "Site Design Group",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Payson Skatepark",
      city: "Payson",
      status: "Complete",
      sizeSqFt: "19500",
      address: "68 E 600 S, Payson, UT 84651",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "2007",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Price Skatepark",
      city: "Price",
      status: "Complete",
      sizeSqFt: "14365",
      address: "1050 E 7th N, Price, UT 84501",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Providence Skatepark",
      city: "Providence",
      status: "Complete",
      sizeSqFt: "12500",
      address: "250 W 100 N, Providence, UT 84332",
      designedBy: "Hunger Skateparks",
      builtBy: "Hunger Skateparks",
      yearBuilt: "2024",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Provo Plaza Skatepark",
      city: "Provo",
      status: "Complete",
      sizeSqFt: "24000",
      address: "320 500 N, Provo, UT 84601",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2013",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Richard L. Guthrie Skatepark",
      city: "Cottonwood Heights",
      status: "Complete",
      sizeSqFt: "26000",
      address: "2495 Bengal Blvd, Cottonwood Heights, UT 84121",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Richfield Skatepark",
      city: "Richfield",
      status: "Complete",
      sizeSqFt: "6780",
      address: "700 W 400 N, Richfield, UT 84701",
      designedBy: "American Ramp Company",
      builtBy: "American Ramp Company",
      yearBuilt: "2022",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Riverton Skatepark",
      city: "Riverton",
      status: "Complete",
      sizeSqFt: "14225",
      address: "1435 W 12600 S, Riverton, UT 84065",
      designedBy: "Unknown",
      builtBy: "Stapp Construction",
      yearBuilt: "2005",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Riverside Park Skatepark",
      city: "Morgan",
      status: "Complete",
      sizeSqFt: "4890",
      address: "195 E 125 N, Morgan, UT 84050",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Rosewood Park Skatepark",
      city: "Salt Lake City",
      status: "Complete",
      sizeSqFt: "15625",
      address: "1400 N 1200 W, Salt Lake City, UT 84116",
      designedBy: "Site Design Group",
      builtBy: "Site Design Group",
      yearBuilt: "2007",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Roy City Skatepark",
      city: "Roy",
      status: "Complete",
      sizeSqFt: "8445",
      address: "2900 W 4600 S, Roy, UT 84067",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Santaquin Skatepark",
      city: "Santaquin",
      status: "Planning Phase",
      sizeSqFt: "0",
      address: "No Location Announced",
      designedBy: "American Ramp Company",
      builtBy: "Not Approved Yet",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Sk8 George Skatepark",
      city: "St. George",
      status: "Complete",
      sizeSqFt: "17000",
      address: "171 E 1160 S, St. George, UT 84770",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Smith Fields Park",
      city: "Draper",
      status: "Complete",
      sizeSqFt: "20500",
      address: "13390 S 300 E, Draper, UT 84020",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Smith Ranch Park",
      city: "Eagle Mountain",
      status: "Complete",
      sizeSqFt: "12000",
      address: "3985 Smith Ranch Rd, Eagle Mountain, UT 84005",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2024",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Smithfield Skatepark",
      city: "Smithfield",
      status: "Complete",
      sizeSqFt: "8500",
      address: "100 N 100 W, Smithfield, UT 84335",
      designedBy: "Grindline Skateparks",
      builtBy: "Grindline Skateparks",
      yearBuilt: "2017",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "South Jordan Skatepark",
      city: "South Jordan",
      status: "Complete",
      sizeSqFt: "17280",
      address: "10866 S Redwood Rd, South Jordan, UT 84095",
      designedBy: "Grindline Skateparks",
      builtBy: "Grindline Skateparks",
      yearBuilt: "2004",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "South Ogden Skatepark",
      city: "South Ogden",
      status: "Complete",
      sizeSqFt: "20000",
      address: "580 40th St, South Ogden, UT 84403",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2024",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "South Salt Lake",
      city: "South Salt Lake",
      status: "Planning Phase",
      sizeSqFt: "0",
      address: "No Location Announced",
      designedBy: "Not Approved Yet",
      builtBy: "Not Approved",
      yearBuilt: "Unknown",
      surface: "Unknown",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Spanish Fork Skatepark",
      city: "Spanish Fork",
      status: "Complete",
      sizeSqFt: "10000",
      address: "521 S 600 E, Spanish Fork, UT 84660",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Spencer's Field Skatepark",
      city: "Tooele",
      status: "Complete",
      sizeSqFt: "18000",
      address: "Timpie Rd & S 810 W, Tooele, UT 84074",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Springville Skatepark",
      city: "Springville",
      status: "Complete",
      sizeSqFt: "13840",
      address: "260 S 700 E, Springville, UT 84663",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Stansbury Skatepark",
      city: "Stansbury",
      status: "Complete",
      sizeSqFt: "4800",
      address: "8 Plaza, Stansbury Park, UT 84074",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Sunset Skatepark",
      city: "Sunset",
      status: "Complete",
      sizeSqFt: "5470",
      address: "166 W 2400 N, Sunset, UT 84015",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Swanny Park Skatepark",
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
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Syracuse Skatepark",
      city: "Syracuse",
      status: "Complete",
      sizeSqFt: "10000",
      address: "Banbury Dr & W 1500 S, Syracuse, UT 84075",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Taylorsville Skatepark",
      city: "Taylorsville",
      status: "Complete",
      sizeSqFt: "8500",
      address: "4743 Plymouth View Dr, Taylorsville, UT 84123",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2025",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Trailside Skatepark",
      city: "Park City",
      status: "Complete",
      sizeSqFt: "16300",
      address: "5715 Trailside Dr, Park City, UT 84098",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete / Steel",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Unity Park Skatepark",
      city: "Ivins",
      status: "Complete",
      sizeSqFt: "8000",
      address: "200 W 400 S, Ivins, UT 84738",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2019",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Utero Indian Skatepark",
      city: "Fort Duchesne",
      status: "Complete",
      sizeSqFt: "6500",
      address: "6964 E 1000 S, Fort Duchesne, UT 84026",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2012",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Private",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Vans Skatepark",
      city: "Salt Lake City",
      status: "Complete",
      sizeSqFt: "28000",
      address: "1098 W 200 N, Salt Lake City, UT 84116",
      designedBy: "California Skateparks",
      builtBy: "California Skateparks",
      yearBuilt: "2019",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Veterans Skatepark",
      city: "Monticello",
      status: "Complete",
      sizeSqFt: "6600",
      address: "1st St N & N 100 E, Monticello, UT 84535",
      designedBy: "Unknown",
      builtBy: "Unknown",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Vineyard Skatepark",
      city: "Vineyard",
      status: "Planning Phase",
      sizeSqFt: "0",
      address: "125 South Main Street, Vineyard, UT 84059",
      designedBy: "Hunger Skateparks",
      builtBy: "Hunger Skateparks",
      yearBuilt: "Unknown",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Wasatch Academy Skatepark",
      city: "Mt. Pleasant",
      status: "Private",
      sizeSqFt: "6000",
      address: "200 S 200 W, Mt. Pleasant, UT 84647",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2017",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Private",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Washington Wheels Park",
      city: "Washington",
      status: "Under Construction",
      sizeSqFt: "35000",
      address: "3730 Rolling Rock Dr, Washington, UT 84780",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2025",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "West Jordan Wheels Park",
      city: "West Jordan",
      status: "Complete",
      sizeSqFt: "20000",
      address: "8600 S Ron Wood Pkwy, West Jordan, UT 84081",
      designedBy: "Spohn Ranch",
      builtBy: "Spohn Ranch",
      yearBuilt: "2024",
      surface: "Concrete",
      lights: "No",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "West Valley City Skatepark",
      city: "West Valley City",
      status: "Complete",
      sizeSqFt: "31000",
      address: "3189 S 5600 W, West Valley City, UT 84128",
      designedBy: "Think Architecture",
      builtBy: "Stapp Construction",
      yearBuilt: "2016",
      surface: "Concrete",
      lights: "Yes",
      type: "Outdoor",
      access: "Public",
      photo: "/NOPHOTO.png"
    },
    {
      name: "Woodward Park City",
      city: "Park City",
      status: "Complete",
      sizeSqFt: "10000",
      address: "3863 Kilby Rd, Park City, UT 84098",
      designedBy: "California Skateparks",
      builtBy: "Jacobsen Construction",
      yearBuilt: "2019",
      surface: "Concrete",
      lights: "Yes",
      type: "Indoor",
      access: "Paid",
      photo: "/NOPHOTO.png"
    }
  ];

  // ── Filter / Sort state ──────────────────────────────────────────
  let filterOpen = false;
  let sortBy = "name-asc";
  let filterStatuses = new Set<string>();
  let filterSurfaces = new Set<string>();
  let filterLights = new Set<string>();
  let filterSizes = new Set<string>(); // "small" | "medium" | "large"
  let filterTypes = new Set<string>();
  let filterAccess = new Set<string>();

  // Static option lists derived from data (computed once)
  const statusOptions = [...new Set(skateparks.map((p) => p.status))].sort();
  const surfaceOptions = [...new Set(skateparks.map((p) => p.surface))].sort();
  const typeOptions = [...new Set(skateparks.map((p) => p.type))].sort();
  const accessOptions = [...new Set(skateparks.map((p) => p.access))].sort();

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
      if (filterTypes.size > 0 && !filterTypes.has(p.type)) return false;
      if (filterAccess.size > 0 && !filterAccess.has(p.access)) return false;
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
    filterStatuses.size + filterSurfaces.size + filterLights.size + filterSizes.size + filterTypes.size + filterAccess.size;
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
    filterTypes = new Set();
    filterAccess = new Set();
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

  // ── Local static photo filename map ─────────────────────────────
  // Maps park name → exact filename in /static/
  const localPhotos: Record<string, string> = {
    "Bluffdale Skatepark":         "Bluffdale Skatepark.png",
    "Constitution Park Skatepark": "Brigham Constitutional Skatepark.png",
    "Coalville Skatepark":         "Coalville Skatepark.png",
    "Delta Skatepark":             "Delta Skatepark.png",
    "Ephraim Skatepark":           "Epharim Skatepark.png",
    "Farmington Skatepark":        "Farmington Skatepark.png",
    "Fillmore Skatepark":          "Filimore North End Skate Park.png",
    "Grantsville Skatepark":       "Grantsville Skatepark.png",
    "Heber City Skatepark":        "Heber City Skatepark.png",
    "Herriman Skatepark":          "Herriman Skatepark Alt.png",
    "Holladay Skatepark":          "Holladay Skatepark.png",
    "Hyrum Skatepark":             "Hyrum Skatepark.png",
    "Kanab Skatepark":             "Kanab Skatepark.png",
    "Millcreek Common":            "Millcreek Common.png",
    "Moab Skatepark":              "Moab Swanny Skatepark.png",
    "North Ogden Skatepark":       "North Ogden Skatepark.png",
    "Orem Skatepark":              "Orem Skatepark.png",
    "Park City Skatepark":         "Park City Woodward Skatepark.png",
  };

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
    const filename = localPhotos[p.name];
    if (filename) {
      photoState = { ...photoState, [k]: `/${filename}` };
    } else {
      // No local photo — fall back to API
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
  }

  async function loadPhotoFallback(p: Skatepark): Promise<void> {
    const k = keyFor(p);
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
  <img src="/SkateparksHeroImage.avif" alt="Utah Skateparks" class="heroImg" />
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

          <div class="panelSection">
            <div class="sectionLabel">Type</div>
            <div class="chipRow">
              {#each typeOptions as t}
                <button
                  type="button"
                  class="chip"
                  class:chipActive={filterTypes.has(t)}
                  on:click={() => (filterTypes = toggleChip(filterTypes, t))}
                >{t}</button>
              {/each}
            </div>
          </div>

          <div class="panelSection">
            <div class="sectionLabel">Access</div>
            <div class="chipRow">
              {#each accessOptions as a}
                <button
                  type="button"
                  class="chip"
                  class:chipActive={filterAccess.has(a)}
                  on:click={() => (filterAccess = toggleChip(filterAccess, a))}
                >{a}</button>
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
          <div class="photoArea">
            {#if p.photo}
              <img class="photoImg" src={p.photo} alt={"Photo of " + p.name} loading="lazy" />
            {/if}

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

<Footer />

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
    object-position: top;
  }

  .heroBanner {
    background: var(--brown);
    padding: 18px var(--gutter);
  }

  .heroTitle {
    font-family: "Kanit", system-ui, sans-serif;
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
    gap: 36px;
    justify-content: center;
  }

  .card {
    width: 280px;
    display: flex;
    flex-direction: column;
    border: 1.5px solid #c0b8b4;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
    padding: 14px 16px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  .parkName {
    font: 400 20px Oswald, sans-serif;
    color: #000;
    margin: 0;
    width: 100%;
  }

  .parkCity {
    font: 400 13px Raleway, sans-serif;
    color: #555;
    margin-top: 2px;
    width: 100%;
  }

  .parkAddress {
    font: 400 13px Raleway, sans-serif;
    color: #000;
    margin-top: 6px;
    line-height: 1.4;
    width: 100%;
  }

  .detailsBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: auto;
    padding: 6px 14px;
    width: 100%;
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
      gap: 28px;
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
