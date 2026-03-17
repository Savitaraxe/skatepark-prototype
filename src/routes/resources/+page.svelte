<script lang="ts">
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
      image: "/instagram-1.jpg",
      link: "https://publicskateparkguide.org/"
    },
    {
      id: 2,
      title: "The Skatepark Adoption Model (SAM)",
      description: "SAM calculates a community's skatepark space needs by assessing service area, population, and skater numbers, advocating for multiple facilities for long-term planning.",
      image: "/instagram-5.jpg",
      link: "https://publicskateparkguide.org/vision/skatepark-adoption-model/"
    },
    {
      id: 3,
      title: "Skatepark Project: Best Practices Guide",
      description: "PDF Download: Emphasis on hiring experienced builders and rallying community input. Ensures attractive, functional parks and long-term community stewardship.",
      image: "/instagram-2.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "The Skatepark Project",
      description: "The Skatepark Project offers free resources, guidance, support and grant funding to help the average person and public agencies create more skate space their area.",
      image: "/instagram-6.jpg",
      link: "https://skatepark.org/start/"
    },
    {
      id: 5,
      title: "Skatepark Respect",
      description: "Skatepark's Respect's mission is to create awareness and community involvement in keeping skateparks clean and maintained worldwide.",
      image: "/instagram-3.jpg",
      link: "https://www.skateparkrespect.org/"
    },
    {
      id: 6,
      title: "Aspen Institute Article: Project Play Survey",
      description: "Most kids quit sports by age 11 due to lack of fun and high costs. The Aspen Institute survey highlights challenges in youth programming and aims to keep kids engaged in sports.",
      image: "/instagram-4.jpg",
      link: "https://projectplay.org/news/kids-quit-most-sports-by-age-11"
    }
  ];
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Raleway:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>


<div class="min-h-screen bg-white">

  <!-- Hero Section with Background Image - Limited Width -->
  <section style="margin-top: 0px; padding: 0; background: white; display: flex; justify-content: center;">
    <div class="relative" style="width: 980px; max-width: 980px; height: 352px; overflow: hidden;">
      <img src="/hero-bg.jpg" alt="Blacksmith Fork Skatepark" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;" />
      
      <!-- White box with "Resources" text centered -->
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(255,255,255,0.7); padding: 16px 17px; width: 494px; text-align: center;">
        <h1 style="font-size: 56px; font-weight: 400; margin: 0; font-family: 'Oswald', sans-serif; color: #1a1a1a; line-height: normal;">Resources</h1>
      </div>
      
      <!-- Bottom left text -->
      <div style="position: absolute; bottom: 11px; left: 11px;">
        <p style="font-size: 20px; margin: 0; font-family: 'Raleway', sans-serif; color: #1a1a1a; font-weight: 400;">Blacksmith Fork Skatepark - Hyrum, UT</p>
      </div>
      
      <!-- Bottom right text -->
      <div style="position: absolute; bottom: 11px; right: 11px;">
        <p style="font-size: 20px; margin: 0; font-family: 'Raleway', sans-serif; color: #1a1a1a; font-weight: 400;">Designed & Built by Hunger Skateparks</p>
      </div>
    </div>
  </section>

  <!-- Resources Grid -->
<section style="padding: 52px 0 52px 0; background: white;">
  <div style="max-width: 980px; margin: 0 auto; padding: 0 0;">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; justify-items: center;">
        {#each resources as resource}
          <div style="display: flex; flex-direction: column;">
            <!-- Title FIRST (above image) -->
            <h2 style="font-size: 20px; font-weight: 500; margin: 0 0 22px 0; font-family: 'Oswald', sans-serif; line-height: normal;">
              <a href={resource.link} target="_blank" rel="noopener noreferrer" style="color: #1a1a1a; text-decoration: underline;">
                {resource.title}
              </a>
            </h2>
            
            <!-- Description SECOND -->
                <p style="font-size: 16px; line-height: 1.6em; color: #1a1a1a; margin: 0 0 29px 0; font-family: 'Raleway', sans-serif; font-weight: 400; max-width: 358px;">
                    {resource.description}
                </p>
            
            <!-- Image LAST (at bottom) -->
            <a href={resource.link} target="_blank" rel="noopener noreferrer" style="display: block; margin-bottom: 150px;">
                <img src={resource.image} alt={resource.title} style="width: 358px; height: 212px; object-fit: cover;" />
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

</div>

<style>
  a:hover {
    opacity: 0.7;
  }
</style>