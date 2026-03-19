<script lang="ts">
  import Footer from "$lib/components/home/Footer.svelte";

  type Resource = {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  };

  const resources: Resource[] = [
    {
      id: 1,
      title: "Public Skatepark Development Guide",
      description: "This free, non-commercial resource supports advocates and planners with information on public skateparks, ideal for those involved in or considering starting a skatepark.",
      image: "/resource-1.png",
      link: "https://publicskateparkguide.org/"
    },
    {
      id: 2,
      title: "Skatepark Adoption Model (SAM)",
      description: "SAM calculates a community's skatepark space needs by assessing service area, population, and skater numbers, advocating for multiple facilities for long-term planning",
      image: "/resource-2.png",
      link: "https://publicskateparkguide.org/vision/skatepark-adoption-model/"
    },
    {
      id: 3,
      title: "Skatepark Project: Best Practices",
      description: "PDF Download: A skatepark construction guidebook that places an emphasis on hiring experienced builders and rallying community input. Ensures attractive, functional parks and long-term community stewardship.",
      image: "/resource-3.png",
      link: "#"
    },
    {
      id: 4,
      title: "The Skatepark Project",
      description: "The Skatepark Project offers free resources, guidance, support and grant funding to help the average person and public agencies create more skate space their area.",
      image: "/resource-4.png",
      link: "https://skatepark.org/start/"
    },
    {
      id: 5,
      title: "Skatepark Respect Organization",
      description: "Skatepark's Respect's mission is to create awareness and community involvement in keeping skateparks clean and maintained worldwide.",
      image: "/resource-5.png",
      link: "https://www.skateparkrespect.org/"
    },
    {
      id: 6,
      title: "Public Skatepark Development Guide",
      description: "This free, non-commercial resource supports advocates and planners with information on public skateparks, ideal for those involved in or considering starting a skatepark.",
      image: "/resource-6.png",
      link: "https://publicskateparkguide.org/"
    }
  ];
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
    <img class="heroImg" src="/resourcesheroimage.avif" alt="Skatepark planning" />
    <div class="heroBanner">
      <h1 class="heroTitle">Planning and Resources</h1>
    </div>
  </section>

  <!-- Resources Grid -->
  <section class="resourcesSection">
    <div class="inner">
      <div class="grid">
        {#each resources as resource}
          <div class="card">
            <a href={resource.link} target="_blank" rel="noopener noreferrer" class="cardImgLink">
              <img src={resource.image} alt={resource.title} class="cardImg" />
            </a>
            <h3 class="cardTitle">
              <a href={resource.link} target="_blank" rel="noopener noreferrer" class="cardTitleLink">
                {resource.title}
              </a>
            </h3>
            <p class="cardDesc">{resource.description}</p>
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

  /* ── Resources Grid ─────────────────────────────────────────────── */
  .resourcesSection {
    background: white;
    padding: 52px 0 64px;
  }

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px 28px;
  }

  .card {
    display: flex;
    flex-direction: column;
  }

  .cardImgLink {
    display: block;
    margin-bottom: 14px;
  }

  .cardImg {
    width: 100%;
    height: 196px;
    object-fit: cover;
    display: block;
  }

  .cardTitle {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 10px;
    line-height: 1.3;
  }

  .cardTitleLink {
    color: #1a1a1a;
    text-decoration: underline;
  }

  .cardTitleLink:hover {
    opacity: 0.7;
  }

  .cardDesc {
    font-size: 14px;
    line-height: 1.65;
    color: #1a1a1a;
    margin: 0;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .grid {
      grid-template-columns: 1fr;
    }

    .heroImg {
      height: 220px;
    }
  }
</style>
