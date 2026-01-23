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
  <!-- NAV -->
<nav style="
  background:#1a1a1a;
  position:fixed;
  width:100%;
  top:0;
  z-index:50;
">
  <div style="
    height:50px;
    display:flex;
    align-items:center;
    padding:0 20px;
  ">
    <!-- Logo (far left, vertically centered) -->
    <a href="https://www.utahskateparkadvocacygroup.com/"
       target="_blank"
       rel="noopener"
       style="display:flex;align-items:center;margin-right:25px;">
      <img
        src="/icon-mini.png"
        alt="Utah Skatepark Advocacy Group"
        style="width:32px;height:32px;display:block;"
      />
    </a>

    <!-- Navigation -->
    <div style="display:flex;align-items:center;gap:20px;">
      <a href="/" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Home</a>
      <a href="/skateparks" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Skateparks</a>
      <a href="/resources" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Resources</a>
      <a href="/design-builders" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Design & Builders List</a>
      <a href="/community" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">Community</a>
      <a href="/news" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">News & Media</a>
      <a href="/about" style="color:#f7f7f7;font:400 14px Raleway,sans-serif;text-decoration:none;">About</a>
    </div>

    <!-- Social icons pushed to far right -->
    <div style="
      margin-left:auto;
      display:flex;
      align-items:center;
      gap:16px;
    ">
    </div>
  </div>
</nav>

  <!-- Hero Section with Background Image - Limited Width -->
  <section style="margin-top: 50px; padding: 0; background: white; display: flex; justify-content: center;">
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

  <!-- Footer -->
  <footer style="background: #000000; color: white; padding: 302px 0 10px 0; text-align: center;">
    <div style="max-width: 1400px; margin: 0 auto;">
      <h4 style="font-size: 22px; font-weight: 400; margin-bottom: 21px; font-family: 'Oswald', sans-serif; line-height: 1.41em;">UTAH SKATEPARK ADVOCACY GROUP</h4>
      <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 33px;">
        <a href="https://www.facebook.com/goskateutah" target="_blank">
          <svg style="width: 20px; height: 20px; fill: white;" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="https://www.instagram.com/goskateutah/" target="_blank">
          <svg style="width: 20px; height: 20px; fill: white;" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
      </div>
      <p style="font-size: 14px; color: #fff; font-family: 'Raleway', sans-serif; line-height: 1.79em; margin: 0;">2025 by The Utah Skatepark Advocacy Group.</p>
    </div>
  </footer>
</div>

<style>
  a:hover {
    opacity: 0.7;
  }
</style>