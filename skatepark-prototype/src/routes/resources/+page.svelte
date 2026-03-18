<script lang="ts">
  import Footer from "$lib/components/home/Footer.svelte";
</script>

<svelte:head>
  <title>Planning and Resources | Utah Skatepark Advocacy Group</title>
  <meta
    name="description"
    content="Find skatepark design and building resources, qualified vendors, and planning guides to help your community build a quality skatepark."
  />
</svelte:head>

<main>
  <!-- Hero -->
  <section class="pageHero">
    <img class="heroImg" src="/hero-bg.jpg" alt="Skatepark planning" />
    <div class="heroBanner">
      <h1 class="heroTitle">Planning and Resources</h1>
    </div>
  </section>

  <!-- Design and Builders -->
  <section class="contentSection">
    <div class="inner">
      <h2 class="sectionTitle">Design and Builders</h2>
      <p class="sectionText">
        Selecting the right skatepark design company is crucial for ensuring the success of
        your city's skatepark project. Professional, experienced skatepark designers are
        essential to create high-quality, durable, and safe facilities that exceeds your riding
        communities expectations. In order to ensure that your skatepark exceeds the demands that
        our Utah skatepark community demands, we recommend that you select a vendor that specializes
        in concrete design and/or building. All of the skatepark design and build companies listed
        below are considered qualified experts in the industry.
      </p>
      <a class="ctaBtn" href="/design-builders">View Designer List</a>
    </div>
  </section>

  <!-- Resources -->
  <section class="contentSection resourcesSection">
    <div class="inner">
      <h2 class="sectionTitle">Resources</h2>
      <p class="sectionText">
        If you're looking for more information about helping USAG develop upcoming projects,
        our team has included links to websites and documents that can help get you started.
        If you're seeking to volunteer with USAG directly, please visit our Contact Us page
        to send us an email about joining our team.
      </p>
      <a class="ctaBtn" href="/design-builders#resources">View Resources</a>
    </div>
  </section>

  <Footer />
</main>

<style>
  main {
    width: 100%;
  }

  /* ── Hero ──────────────────────────────────────────────────────── */
  .pageHero {
    width: 100%;
  }

  .heroImg {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
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

  /* ── Content sections ──────────────────────────────────────────── */
  .contentSection {
    background: var(--bg);
    padding: 52px 0 56px;
  }

  .resourcesSection {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .inner {
    max-width: var(--containerMax);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  .sectionTitle {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: clamp(24px, 3.5vw, 36px);
    margin: 0 0 18px;
    color: var(--text);
  }

  .sectionText {
    font-size: 15px;
    line-height: 1.7;
    color: var(--text);
    max-width: 760px;
    margin: 0 0 28px;
  }

  .ctaBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 11px 28px;
    border: 2px solid var(--text);
    background: transparent;
    color: var(--text);
    font-weight: 700;
    font-size: 14px;
    border-radius: 3px;
    text-decoration: none;
    transition: background 120ms ease, color 120ms ease;
  }

  .ctaBtn:hover {
    background: var(--text);
    color: var(--white);
  }

  @media (max-width: 640px) {
    .heroImg {
      height: 220px;
    }
  }
</style>
