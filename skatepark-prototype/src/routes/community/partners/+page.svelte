<script lang="ts">
  import Footer from "$lib/components/home/Footer.svelte";

  const partners = [
    {
      name: "Carry On Foundation",
      link: "https://carryon.org/",
      image: "/carry on.webp",
      description:
        "501(c)(3) non-profit utilizing skateboarding to teach resilience skills, promote mental health, and foster the development of confidence, competence, connection and character."
    },
    {
      name: "Pushing Ahead",
      link: "https://www.pushingahead.org/",
      image: "/pushing aheadbig (3)_edited.jpg",
      description:
        "501(c)(3) non-profit that empowers youth through skateboarding, fostering confidence and community in a safe, nurturing environment in the Salt Lake City area."
    },
    {
      name: "Utah Amateur Skateboard League (UASL)",
      link: "http://www.skatecasl.com/uasl-utah",
      image: "/uasl.webp",
      description:
        "Utah's \"Little League\" of Skateboarding. UASL provides a competitive league where skaters can find other skaters, feel valued and part of the skateboard community, and make new friends."
    },
    {
      name: "Spock's Skate Camp / Sisterhood of Shred",
      link: "https://www.spocksskatecamp.com/",
      image: "/spock logo.png",
      description:
        "Spock's Skate Camp & The Sisterhood of Shred (all-girls program) offer skateboarding instruction for beginners through advanced riders, focusing on safety, fun, and community throughout northern Utah."
    },
    {
      name: "The Rose Club",
      link: "https://the-rose-club.com/",
      image: "/rose.png",
      description:
        "The Rose Club in Northern Utah is a women-focused skate and snow collective for all women, trans, non-binary, and gender expansive individuals of all skill levels."
    }
  ];
</script>

<svelte:head>
  <title>Community Partners | Utah Skatepark Advocacy Group</title>
  <meta
    name="description"
    content="Community organizations that support skateboarding across Utah."
  />
</svelte:head>

<main>
  <!-- Hero image (same as community page) -->
  <section class="pageHero">
    <img class="heroImg" src="/CommunityHeroImage.avif" alt="Community Partners" />
    <div class="heroBanner">
      <h1 class="heroTitle">Community</h1>
    </div>
  </section>

  <!-- Partners grid -->
  <section class="partnersSection">
    <div class="inner">
      <div class="partnersGrid">
        {#each partners as partner}
          <a class="partnerCard" href={partner.link} target="_blank" rel="noopener noreferrer">
            <div class="partnerImgWrap">
              <img src={partner.image} alt={partner.name} class="partnerImg" />
            </div>
            <div class="partnerInfo">
              <h2 class="partnerName">{partner.name}</h2>
              <p class="partnerDesc">{partner.description}</p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <Footer />
</main>

<style>
  main {
    width: 100%;
  }

  .inner {
    max-width: var(--containerMax);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  /* ── Hero ─────────────────────────────────────────────────────── */
  .pageHero {
    width: 100%;
  }

  .heroImg {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  .heroBanner {
    background: var(--brown);
    padding: 14px var(--gutter);
  }

  .heroTitle {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: clamp(26px, 4vw, 40px);
    margin: 0;
    color: #1a1a1a;
    max-width: var(--containerMax);
    margin-left: auto;
    margin-right: auto;
  }

  /* ── Partners section ─────────────────────────────────────────── */
  .partnersSection {
    background: var(--bg);
    padding: 28px 0 56px;
  }

  /* 3-column grid, compact */
  .partnersGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  /* Card */
  .partnerCard {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #ddd;
    text-decoration: none;
    color: inherit;
    transition: box-shadow 120ms ease;
  }

  .partnerCard:hover {
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  }

  /* Square image — shorter than before */
  .partnerImgWrap {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #1a1a1a;
  }

  .partnerImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Compact text block */
  .partnerInfo {
    padding: 14px 14px 16px;
  }

  .partnerName {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 10px;
    color: #1a1a1a;
    text-decoration: underline;
    line-height: 1.4;
  }

  .partnerDesc {
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    line-height: 1.6;
    color: #333;
    margin: 0;
  }

  /* ── Responsive ───────────────────────────────────────────────── */
  @media (max-width: 900px) {
    .partnersGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    .heroImg {
      height: 180px;
    }

    .partnersGrid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }
</style>
