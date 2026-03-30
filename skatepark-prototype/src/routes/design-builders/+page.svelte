<script lang="ts">
  import Footer from "$lib/components/home/Footer.svelte";

  type Builder = {
    id: string;
    name: string;
    phone: string;
    type: string;
    location: string;
    link: string;
    image: string;
  };

  const builders: Builder[] = [
    {
      id: "1",
      name: "5th Pocket Skateparks",
      phone: "(215) 208-6070",
      type: "Design and Build",
      location: "Pennsylvania",
      link: "https://www.5thpocketskateparks.com/",
      image: "/fifthpocket.png"
    },
    {
      id: "2",
      name: "Artisan Skateparks",
      phone: "(252) 202-1333",
      type: "Design and Build",
      location: "North Carolina",
      link: "https://www.artisanskateparks.com/",
      image: "/artisan.png"
    },
    {
      id: "3",
      name: "California Skateparks",
      phone: "(909) 949-1601",
      type: "Design and Build",
      location: "California",
      link: "https://www.californiaskateparks.com/",
      image: "/california.png"
    },
    {
      id: "4",
      name: "Dreamland Skateparks",
      phone: "(503) 577-9277",
      type: "Design and Build",
      location: "Oregon",
      link: "https://www.dreamlandskateparks.com/home",
      image: "/dreamland.png"
    },
    {
      id: "5",
      name: "Evergreen Skateparks",
      phone: "(503) 804-1193",
      type: "Design and Build",
      location: "Oregon",
      link: "https://www.evergreenskateparks.com/",
      image: "/evergreen.png"
    },
    {
      id: "6",
      name: "GeoCon Skateparks",
      phone: "Contact Form",
      type: "Design and Build",
      location: "California",
      link: "https://www.geoconskateparks.com/",
      image: "/geocon.png"
    },
    {
      id: "7",
      name: "Grindline Skateparks",
      phone: "(206) 932-6414",
      type: "Design and Build",
      location: "Washington",
      link: "https://www.grindline.com/",
      image: "/grindline.png"
    },
    {
      id: "8",
      name: "Hunger Skateparks",
      phone: "(812) 322-8044",
      type: "Design and Build",
      location: "Indiana",
      link: "https://hungerskateparks.com/",
      image: "/hunger.png"
    },
    {
      id: "9",
      name: "Newline Skateparks",
      phone: "(866) 463-9546",
      type: "Design and Build",
      location: "California / Canada",
      link: "https://www.newlineskateparks.com/",
      image: "/newline.png"
    },
    {
      id: "10",
      name: "Omega Ramps",
      phone: "(702) 249-6425",
      type: "Design and Build",
      location: "Utah",
      link: "https://www.omegaramps.com/",
      image: "/omega.png"
    },
    {
      id: "11",
      name: "Pillar Design Studios",
      phone: "(480) 777-3470",
      type: "Design and Build",
      location: "Arizona",
      link: "https://www.pillardesignstudios.com/",
      image: "/pillar.png"
    },
    {
      id: "12",
      name: "Pivot Custom",
      phone: "(417) 206-6816",
      type: "Design and Build",
      location: "Missouri",
      link: "https://pivotcustom.com/",
      image: "/pivot.png"
    },
    {
      id: "13",
      name: "Platform Group",
      phone: "info@platformgroup43.com",
      type: "Design",
      location: "Florida",
      link: "https://platformgroup43.com/",
      image: "/platform.png"
    },
    {
      id: "14",
      name: "PUSH Parks",
      phone: "(732) 687-5886",
      type: "Design and Build",
      location: "California",
      link: "https://www.pushparks.co/",
      image: "/push.png"
    },
    {
      id: "15",
      name: "SITE Design Group",
      phone: "(877) 734-7275",
      type: "Design and Build",
      location: "California",
      link: "https://www.sitedesigngroup.com/",
      image: "/site.png"
    },
    {
      id: "16",
      name: "SPA Skateparks",
      phone: "(512) 203-5445",
      type: "Design and Build",
      location: "Texas",
      link: "https://www.spaskateparks.com/",
      image: "/spa.png"
    },
    {
      id: "17",
      name: "Spohn Ranch Skateparks",
      phone: "(626) 330-5803",
      type: "Design and Build",
      location: "California",
      link: "https://www.spohnranch.com/",
      image: "/spohn-ranch.png"
    },
    {
      id: "18",
      name: "Team Pain Skateparks",
      phone: "(407) 366-9221",
      type: "Design and Build",
      location: "Florida",
      link: "https://teampain.com/",
      image: "/team-pain.png"
    }
  ];
</script>

<svelte:head>
  <title>Design and Builders | Utah Skatepark Advocacy Group</title>
  <meta name="description" content="Qualified skatepark design and build companies recommended by the Utah Skatepark Advocacy Group." />
</svelte:head>

<!-- HERO -->
<section class="heroWrap">
  <img src="/designheroimage.avif" alt="Skatepark Design and Builders" class="heroImg" />
</section>

<!-- TITLE BANNER -->
<section class="titleBanner">
  <div class="inner">
    <h1 class="pageTitle">Design and Builders</h1>
  </div>
</section>

<!-- INTRO TEXT -->
<section class="introSection">
  <div class="inner">
    <p class="introText">
      The design-bid-build (DBB) process, where the city hires a designer to create detailed plans
      and then invites qualified builders to bid on the project, is a common and standardized
      approach. This method helps ensure the selection of capable vendors while minimizing the risk
      of unqualified builders. Involving the local skating community in the design phase ensures the
      park caters to various skill levels and preferences. Although the DBB process may sometimes
      lead to less ambitious designs and the potential for strategic underbidding, it provides a
      transparent and competitive framework. Researching companies' experience, quality of work, and
      community reputation is vital, as their expertise and relationships within the industry can
      significantly impact the project's success. By adhering to these principles, cities can secure
      a reputable company that will deliver a sustainable and community-focused skatepark.
    </p>
    <p class="disclaimer">
      <strong>
        *The list provided here is NOT an endorsement or guarantee of any kind from The Utah
        Skatepark Advocacy Group or it's affiliates. The Utah Skatepark Advocacy Group assumes no
        liability for the use of this list or its vendors. The list of vendors is presented in
        alphabetical order.
      </strong>
    </p>
  </div>
</section>

<!-- BUILDERS GRID -->
<section class="buildersSection">
  <div class="inner">
    <div class="buildersGrid">
      {#each builders as builder}
        <div class="card">
          <!-- Logo image -->
          <a
            class="cardImg"
            href={builder.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={builder.name}
          >
            <img src={builder.image} alt={builder.name} />
          </a>

          <!-- Card content -->
          <div class="cardBody">
            <div class="cardTop">
              <h2 class="builderName">
                <a href={builder.link} target="_blank" rel="noopener noreferrer">
                  {builder.name}
                </a>
              </h2>

              <p class="builderPhone">
                {#if builder.phone.includes('@')}
                  <a href="mailto:{builder.phone}">{builder.phone}</a>
                {:else if builder.phone === 'Contact Form'}
                  <a href="{builder.link}" target="_blank" rel="noopener noreferrer">Contact Form</a>
                {:else}
                  <a href="tel:{builder.phone.replace(/\D/g, '')}">{builder.phone}</a>
                {/if}
              </p>

              <p class="builderType">{builder.type}</p>
            </div>

            <div class="cardBottom">
              <a
                class="learnMore"
                href={builder.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<Footer />

<style>
  * {
    box-sizing: border-box;
  }

  /* ── Shared inner container ────────────────────────────────────── */
  .inner {
    max-width: var(--containerMax);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  /* ── Hero ─────────────────────────────────────────────────────── */
  .heroWrap {
    width: 100%;
  }

  .heroImg {
    width: 100%;
    height: 340px;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  /* ── Title banner ─────────────────────────────────────────────── */
  .titleBanner {
    background: var(--brown);
    padding: 28px 0 20px;
  }

  .pageTitle {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 700;
    margin: 0;
    color: #1a1a1a;
  }

  /* ── Intro text ───────────────────────────────────────────────── */
  .introSection {
    background: var(--bg);
    padding: 0 0 40px;
  }

  .introText {
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: #1a1a1a;
    margin: 0 0 20px;
  }

  .disclaimer {
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #1a1a1a;
    margin: 0;
  }

  /* ── Builders grid section ────────────────────────────────────── */
  .buildersSection {
    background: var(--bg);
    padding: 0 0 80px;
    border-top: 6px solid var(--brown);
  }

  .buildersGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-top: 32px;
  }

  /* ── Individual card ──────────────────────────────────────────── */
  .card {
    display: flex;
    flex-direction: row;
    background: var(--bg);
    border: 1px solid #000;
    min-height: 160px;
  }

  /* Logo block */
  .cardImg {
    width: 140px;
    min-width: 140px;
    background: #000;
    display: block;
    overflow: hidden;
    flex-shrink: 0;
  }

  .cardImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Text + button block */
  .cardBody {
    flex: 1;
    padding: 18px 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    overflow: hidden;
  }

  .cardTop {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .builderName {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    line-height: 1.2;
  }

  .builderName a {
    color: #1a1a1a;
    text-decoration: none;
  }

  .builderName a:hover {
    text-decoration: underline;
  }

  .builderPhone {
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    font-weight: 700;
    margin: 0;
  }

  .builderPhone a {
    color: #3d9be9;
    text-decoration: none;
  }

  .builderPhone a:hover {
    text-decoration: underline;
  }

  .builderType {
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #1a1a1a;
    margin: 0;
  }

  /* Bottom row with Learn More button */
  .cardBottom {
    display: flex;
    justify-content: flex-end;
    margin-top: 14px;
    /* stretch to card right/bottom edge — no padding on these sides */
    margin-right: 0;
    margin-bottom: 0;
  }

  .learnMore {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #1a1a1a;
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 20px;
    /* soft rounded corners on top-left only; bottom-right corner is the card corner */
    border-radius: 6px 0 0 0;
    text-decoration: none;
    transition: background 100ms;
    white-space: nowrap;
  }

  .learnMore:hover {
    background: #444;
  }

  /* ── Responsive ───────────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .buildersGrid {
      grid-template-columns: 1fr;
    }

    .card {
      max-width: 600px;
      margin: 0 auto;
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    .heroImg {
      height: 220px;
    }

    .cardImg {
      width: 110px;
      min-width: 110px;
    }
  }
</style>
