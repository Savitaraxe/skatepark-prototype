<script lang="ts">
  import Footer from "$lib/components/home/Footer.svelte";
</script>

<svelte:head>
  <title>Community and Media | Utah Skatepark Advocacy Group</title>
  <meta
    name="description"
    content="Stay up to date with Utah skatepark news and learn about community partners that support skateboarding across Utah."
  />
</svelte:head>

<main>
  <!-- Hero -->
  <section class="pageHero">
    <img
      class="heroImg"
      src="/Screenshot 2024-03-16 at 11_19_01 AM.png"
      alt="Community and Media"
    />
    <div class="heroBanner">
      <h1 class="heroTitle">Community and Media</h1>
    </div>
  </section>

  <!-- Latest News -->
  <section class="contentSection">
    <div class="inner">
      <h2 class="sectionTitle">Latest News</h2>
      <p class="sectionText">
        For those who want to keep up to date with everything about skateparks in the state of
        Utah. If you hear about a news story that needs to be showcased, reach out to us with
        a link to the article!
      </p>
      <a class="ctaBtn" href="/news">View Latest News</a>
    </div>
  </section>

  <!-- Community -->
  <section class="contentSection communitySection">
    <div class="inner">
      <h2 class="sectionTitle">Community</h2>
      <p class="sectionText">
        USAG isn't the only non-profit that helps enrich the lives of Utah skaters! Learn more
        about the community partners that help make skateboarding more accessible for riders of
        all ages and backgrounds.
      </p>
      <a class="ctaBtn" href="/resources">View Resources</a>
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
    font-family: "Wendy One", system-ui, sans-serif;
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

  .communitySection {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .inner {
    max-width: var(--containerMax);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  .sectionTitle {
    font-family: "Wendy One", system-ui, sans-serif;
    font-size: clamp(24px, 3.5vw, 36px);
    margin: 0 0 18px;
    color: var(--text);
  }

  .sectionText {
    font-size: 15px;
    line-height: 1.7;
    color: var(--text);
    max-width: 720px;
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
