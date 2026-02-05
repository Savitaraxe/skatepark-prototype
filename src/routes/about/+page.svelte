<script>
  const community = [
    {
      name: 'Carry On Foundation',
      link: 'https://carryon.org/',
      image: '/carry on.webp',
      description:
        '501(c)(3) non-profit utilizing skateboarding to teach resilience skills, promote mental health, and foster the development of confidence, competence, connection and character.'
    },
    {
      name: 'Pushing Ahead',
      link: 'https://www.pushingahead.org/',
      image: '/pushing aheadbig (3)_edited.jpg',
      description:
        '501(c)(3) non-profit that empowers youth through skateboarding, fostering confidence and community in the Salt Lake City area.'
    },
    {
      name: 'Utah Amateur Skateboard League (UASL)',
      link: 'http://www.skatecasl.com/uasl-utah',
      image: '/uasl.webp',
      description:
        'Utah’s “Little League” of Skateboarding. UASL provides a competitive league where skaters can find community, feel valued, and make new friends.'
    },
    {
      name: "Spock's Skate Camp / Sisterhood of Shred",
      link: 'https://www.spocksskatecamp.com/',
      image: '/spock logo.png',
      description:
        'Skateboarding instruction for beginners through advanced riders, focusing on safety, fun, and community throughout northern Utah.'
    },
    {
      name: 'The Rose Club',
      link: 'https://the-rose-club.com/',
      image: '/rose.png',
      description:
        'Women-focused skate and snow collective for all women, trans, non-binary, and gender expansive individuals of all skill levels.'
    }
  ];
</script>
<!-- NAV -->
<svelte:head>
  <title>Community | Utah Skatepark Advocacy Group</title>
  <meta name="description" content="Community organizations supported by the Utah Skatepark Advocacy Group." />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:wght@200;300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
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


<!-- HERO -->
<section style="position:relative;max-width:980px;margin:80px auto 0;">
  <img
    src="/Screenshot 2024-03-16 at 11_19_01 AM.png"
    alt="Community"
    width="980"
    height="352"
    style="width:100%;display:block;object-fit:cover;"
  />

  <h1
    style="
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      font:400 56px Oswald,sans-serif;
      margin:0;
      background:rgba(255,255,255,.75);
      padding:12px 120px;
    "
  >
    Community
  </h1>

  <div
    style="
      position:absolute;
      bottom:16px;
      left:16px;
      font:400 20px Raleway,sans-serif;
      background:rgba(0,0,0,.75);
      color:#fff;
      padding:6px 10px;
    "
  >
    Fairmont Skatepark
  </div>

  <div
    style="
      position:absolute;
      bottom:16px;
      right:16px;
      font:400 20px Raleway,sans-serif;
      background:rgba(0,0,0,.75);
      color:#fff;
      padding:6px 10px;
    "
  >
    Skatepark Cleanup - Spring 2023
  </div>
</section>

<!-- COMMUNITY GRID -->
<section style="padding:60px 0 80px;">
  <div
    style="
      max-width:980px;
      margin:0 auto;
      padding:0 20px;
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:40px;
    "
  >
    {#each community as item}
      <div
        style="
          padding:24px;
          display:flex;
          flex-direction:column;
          gap:22px;
        "
      >
        <h2 style="font:600 20px Oswald,sans-serif;margin:0;">
          <a href={item.link} target="_blank" style="color:#1a1a1a;text-decoration:underline;">
            {item.name}
          </a>
        </h2>

        <p style="font:400 16px/1.6 raleway,sans-serif;margin:0;">
          {item.description}
        </p>

        <a href={item.link} target="_blank">
          <img
            src={item.image}
            alt={item.name}
            width="358"
            height="212"
            style="
              width:90%;
              height:200px;
              object-fit:cover;
              display:block;
              margin:0 auto;
            "
          />
        </a>
      </div>
    {/each}
  </div>
</section>

<!-- FOOTER -->
<footer style="background:#000;color:#fff;padding:40px 20px;text-align:center;">
  <h4 style="font:400 22px Oswald,sans-serif;margin-bottom:20px;">
    UTAH SKATEPARK ADVOCACY GROUP
  </h4>

  <div style="display:flex;justify-content:center;gap:12px;margin-bottom:20px;">
    <a href="https://www.facebook.com/goskateutah" target="_blank">
      <img src="/facebook-icon.png" width="20" height="20" alt="Facebook" />
    </a>
    <a href="https://www.instagram.com/goskateutah/" target="_blank">
      <img src="/instagram-icon.png" width="20" height="20" alt="Instagram" />
    </a>
  </div>

  <p style="font:400 12px Raleway,sans-serif;margin:0;">
    2025 by The Utah Skatepark Advocacy Group.
  </p>
</footer>

<style>
  * { box-sizing: border-box; }
  a:hover { opacity: 0.8; }

  @media (max-width: 768px) {
    section div[style*="grid-template-columns"] {
      grid-template-columns: 1fr;
    }
  }
</style>
