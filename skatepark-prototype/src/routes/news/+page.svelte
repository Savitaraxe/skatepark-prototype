<script lang="ts">
  import Footer from "$lib/components/home/Footer.svelte";

  const articles = [
    {
      image: "/latest-news-left.png",
      title: "Boom Recreation seeks input on plans to transform Trailside skate park into accessible 'wheels park'",
      author: "By Paul I Aaron",
      source: "The Park Record",
      date: "March 3rd, 2026",
      link: "#"
    },
    {
      image: "/latest-news-center.png",
      title: "Riverton to bring city leaders, residents, youth together to examine future of skate park",
      author: "Curtis Booker",
      source: "ABC4 News",
      date: "January 13th, 2026",
      link: "#"
    },
    {
      image: "/latest-news-right.png",
      title: "Beloved Riverton skate park closes immediately over safety concerns",
      author: "Momentum Star",
      source: "ABC4 News",
      date: "December 3rd, 2025",
      link: "#"
    }
  ];
</script>

<svelte:head>
  <title>Latest News | Utah Skatepark Advocacy Group</title>
  <meta
    name="description"
    content="Stay up to date with the latest news and stories about skateparks in Utah."
  />
</svelte:head>

<main>
  <!-- Hero -->
  <section class="pageHero">
    <img class="heroImg" src="/CommunityHeroImage.avif" alt="Latest News" />
    <div class="heroBanner">
      <h1 class="heroTitle">Latest News</h1>
    </div>
  </section>

  <!-- News cards -->
  <section class="newsSection">
    <div class="inner">
      <div class="newsGrid">
        {#each articles as article}
          <div class="card">
            <div class="cardImgWrap">
              <img src={article.image} alt={article.title} class="cardImg" />
            </div>
            <div class="cardBody">
              <h2 class="cardTitle">{article.title}</h2>
              <p class="cardAuthor">{article.author}</p>
              <p class="cardSource">{article.source}</p>
              <p class="cardDate">{article.date}</p>
              <a class="readBtn" href={article.link} target="_blank" rel="noopener noreferrer">
                Read Full Article
              </a>
            </div>
          </div>
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
    height: 320px;
    object-fit: cover;
    object-position: top;
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

  /* ── News section ─────────────────────────────────────────────── */
  .newsSection {
    background: var(--bg);
    padding: 40px 0 72px;
  }

  .newsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  /* ── Card ─────────────────────────────────────────────────────── */
  .card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #ddd;
  }

  .cardImgWrap {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #1a1a1a;
  }

  .cardImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  .cardBody {
    padding: 18px 16px 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .cardTitle {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    color: #1a1a1a;
    margin: 0 0 14px;
  }

  .cardAuthor {
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 2px;
  }

  .cardSource {
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    color: #555;
    margin: 0 0 2px;
  }

  .cardDate {
    font-family: "Raleway", sans-serif;
    font-size: 12px;
    color: #777;
    margin: 0 0 18px;
  }

  .readBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding: 9px 20px;
    background: #1a1a1a;
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 3px;
    align-self: flex-start;
    transition: background 100ms;
  }

  .readBtn:hover {
    background: #444;
  }

  /* ── Responsive ───────────────────────────────────────────────── */
  @media (max-width: 900px) {
    .newsGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    .heroImg {
      height: 200px;
    }

    .newsGrid {
      grid-template-columns: 1fr;
    }
  }
</style>
