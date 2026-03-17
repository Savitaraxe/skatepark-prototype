<script lang="ts">
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
      phone: "(215) 208 6070",
      type: "Design & Build",
      location: "Pennsylvania",
      link: "https://www.5thpocketskateparks.com/",
      image: "/fifthpocket.png"
    },
    {
      id: "2",
      name: "Artisan Skateparks",
      phone: "(252) 202 1333",
      type: "Design & Build",
      location: "North Carolina",
      link: "https://www.artisanskateparks.com/",
      image: "/artisan.png"
    },
    {
      id: "3",
      name: "California Skateparks",
      phone: "(909) 949 1601",
      type: "Design & Build",
      location: "California",
      link: "https://www.californiaskateparks.com/",
      image: "/california.png"
    },
    {
      id: "4",
      name: "Dreamland Skateparks",
      phone: "(503) 577 9277",
      type: "Design & Build",
      location: "Oregon",
      link: "https://www.dreamlandskateparks.com/home",
      image: "/dreamland.png"
    },
    {
      id: "5",
      name: "Evergreen Skateparks",
      phone: "(503) 804 1193",
      type: "Design & Build",
      location: "Oregon",
      link: "https://www.evergreenskateparks.com/",
      image: "/evergreen.png"
    },
    {
      id: "6",
      name: "GeoCon Skateparks",
      phone: "Contact Form",
      type: "Design & Build",
      location: "California",
      link: "https://www.geoconskateparks.com/",
      image: "/geocon.png"
    },
    {
      id: "7",
      name: "Grindline Skateparks",
      phone: "(206) 932 6414",
      type: "Design & Build",
      location: "Washington",
      link: "https://www.grindline.com/",
      image: "/grindline.png"
    },
    {
      id: "8",
      name: "Hunger Skateparks",
      phone: "(812) 322 8044",
      type: "Design & Build",
      location: "Indiana",
      link: "https://hungerskateparks.com/",
      image: "/hunger.png"
    },
    {
      id: "9",
      name: "Newline Skateparks",
      phone: "(866) 463 9546",
      type: "Design & Build",
      location: "California / Canada",
      link: "https://www.newlineskateparks.com/",
      image: "/newline.png"
    },
    {
      id: "10",
      name: "Omega Ramps",
      phone: "(702) 249 6425",
      type: "Design & Build",
      location: "Utah",
      link: "https://www.omegaramps.com/",
      image: "/omega.png"
    },
    {
      id: "11",
      name: "Pillar Design Studios",
      phone: "(480) 777 3470",
      type: "Design & Build",
      location: "Arizona",
      link: "https://www.pillardesignstudios.com/",
      image: "/pillar.png"
    },
    {
      id: "12",
      name: "Pivot Custom",
      phone: "(417) 206 6816",
      type: "Design & Build",
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
      phone: "(732) 687 5886",
      type: "Design & Build",
      location: "California",
      link: "https://www.pushparks.co/",
      image: "/push.png"
    },
    {
      id: "15",
      name: "SITE Design Group",
      phone: "(877) 734 7275",
      type: "Design & Build",
      location: "California",
      link: "https://www.sitedesigngroup.com/",
      image: "/site.png"
    },
    {
      id: "16",
      name: "SPA Skateparks",
      phone: "(512) 203 5445",
      type: "Design & Build",
      location: "Texas",
      link: "https://www.spaskateparks.com/",
      image: "/spa.png"
    },
    {
      id: "17",
      name: "Spohn Ranch Skateparks",
      phone: "(626) 330 5803",
      type: "Design & Build",
      location: "California",
      link: "https://www.spohnranch.com/",
      image: "/spohn-ranch.png"
    },
    {
      id: "18",
      name: "Team Pain Skateparks",
      phone: "(407) 366 9221",
      type: "Design & Build",
      location: "Florida",
      link: "https://teampain.com/",
      image: "/team-pain.png"
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

  <!-- Hero Section -->
  <section style="margin-top: 50px; padding: 0; background: white; display: flex; justify-content: center;">
    <div style="width: 100%; max-width: 1080px; height: auto; position: relative; overflow: hidden;">
      <img src="/skatepark3.jpeg" alt="Skatepark" style="width: 100%; height: auto; object-fit: cover; display: block;" />
      
      <!-- White overlay box with title -->
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(255,255,255,0.7); padding: 20px 40px; text-align: center;">
        <h1 style="font-size: 56px; font-weight: 400; margin: 0; font-family: 'Oswald', sans-serif; color: #1a1a1a; line-height: normal;">Design & Builders List</h1>
      </div>
    </div>
  </section>

  <!-- Intro Text Section -->
  <section style="padding: 52px 0 40px 0; background: white;">
    <div style="max-width: 900px; margin: 0 auto; padding: 0 20px;">
      <p style="font-size: 20px; line-height: 1.6em; color: #1a1a1a; margin: 0; font-family: 'Raleway', sans-serif; font-weight: 400;">
        Selecting the right skatepark design company is crucial for ensuring the success of your city's skatepark project. Professional, experienced skatepark designers are essential to create high-quality, durable, and safe facilities that exceeds your riding communities expectations. In order to ensure that your skatepark exceeds the demands that our Utah skatepark community demands, we recommend that you select a vendor that specializes in concrete design and/or building. All of the skatepark design and build companies listed below are considered qualified experts in the industry.
      </p>
      <br><br>
      <p style="font-size: 20px; line-height: 1.6em; color: #1a1a1a; margin: 0; font-family: 'Raleway', sans-serif; font-weight: 400;">
        The design-bid-build (DBB) process, where the city hires a designer to create detailed plans and then invites qualified builders to bid on the project, is a common and standardized approach. This method helps ensure the selection of capable vendors while minimizing the risk of unqualified builders. Involving the local skating community in the design phase ensures the park caters to various skill levels and preferences. Although the DBB process may sometimes lead to less ambitious designs and the potential for strategic underbidding, it provides a transparent and competitive framework. Researching companies' experience, quality of work, and community reputation is vital, as their expertise and relationships within the industry can significantly impact the project's success. By adhering to these principles, cities can secure a reputable company that will deliver a sustainable and community-focused skatepark.
      </p>
      <br><br>
      <p style="font-size: 20px; line-height: 1.6em; color: #1a1a1a; margin: 0; font-family: 'Raleway', sans-serif; font-weight: 400;">
        *The list provided here is NOT an endorsement or guarantee of any kind from The Utah Skatepark Advocacy Group or it's affiliates. The Utah Skatepark Advocacy Group assumes no liability for the use of this list or its vendors. The list of vendors is presented in alphabetical order.
      </p>
    </div>
  </section>

 <!-- Builders List - Single Column with Grey Backgrounds -->
<section style="padding: 0 0 80px 0; background: white;">
  <div style="max-width: 990px; margin: 0 auto; padding: 0 20px;">
    {#each builders as builder, index}
      <div
        style="
          background: #F5F5F5;
          border: 1px solid #000;
          margin-bottom: {index === builders.length - 1 ? '0' : '20px'};
          display: flex;
          align-items: stretch;
          min-height: 282px;
          position: relative;
        "
      >
        <!-- Image -->
        <a
          href={builder.link}
          target="_blank"
          rel="noopener noreferrer"
          style="
            width: 310px;
            height: 282px;
            flex-shrink: 0;
            display: block;
            background: #000;
          "
        >
          <img
            src={builder.image}
            alt={builder.name}
            style="
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            "
          />
        </a>

        <!-- Content -->
        <div
          style="
            flex: 1;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 282px;
          "
        >
          <!-- Top content -->
          <div>
            <h2
              style="
                font-size: 28px;
                font-weight: 400;
                margin: 0 0 10px 0;
                font-family: 'Oswald', sans-serif;
                line-height: normal;
              "
            >
              <a
                href={builder.link}
                target="_blank"
                rel="noopener noreferrer"
                style="color: #1a1a1a; text-decoration: underline;"
              >
                {builder.name}
              </a>
            </h2>

            <p
              style="
                font-size: 16px;
                line-height: 1.5em;
                color: #3D9BE9;
                margin: 0 0 8px 0;
                font-family: 'Raleway', sans-serif;
                font-weight: 700;
              "
            >
              {#if builder.phone.includes('@')}
                <a href="mailto:{builder.phone}" style="color: #3D9BE9; text-decoration: underline;">
                  {builder.phone}
                </a>
              {:else if builder.phone === 'Contact Form'}
                <a
                  href="{builder.link}/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="color: #3D9BE9; text-decoration: underline;"
                >
                  {builder.phone}
                </a>
              {:else}
                <a
                  href="tel:{builder.phone.replace(/\s/g, '').replace(/[()]/g, '')}"
                  style="color: #3D9BE9; text-decoration: underline;"
                >
                  {builder.phone}
                </a>
              {/if}
            </p>

            <p
              style="
                font-size: 16px;
                line-height: 1.5em;
                color: #1a1a1a;
                margin: 0;
                font-family: 'Raleway', sans-serif;
                font-weight: 400;
              "
            >
              {builder.type}
            </p>
          </div>

          <!-- Bottom row -->
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              margin-top: 20px;
            "
          >
            <!-- Left: empty spacer (matches Wix feel) -->
            <div></div>

            <!-- Right column -->
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
              <p
                style="
                position: absolute;
                top: 30px;
                right: 30px;
                font-size: 16px;
                line-height: 1.5em;
                color: #1a1a1a;
                margin: 0;
                 font-family: 'Raleway', sans-serif;
                font-weight: 400;
                text-align: right;
                "
>
                {builder.location}
</p>


              <a
                href={builder.link}
                target="_blank"
                rel="noopener noreferrer"
                style="
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  background: #1a1a1a;
                  color: white;
                  padding: 10px 20px;
                  text-decoration: none;
                  font-family: 'Raleway', sans-serif;
                  font-size: 14px;
                  font-weight: 400;
                "
              >
                Learn More
                <svg
                  style="
                    width: 10px;
                    height: 10px;
                    margin-left: 8px;
                    fill: white;
                    transform: rotate(-90deg);
                  "
                  viewBox="0 0 200 200"
                >
                  <path d="M172.5 142a7.485 7.485 0 0 1-5.185-2.073L100 75.808l-67.315 64.12c-2.998 2.846-7.74 2.744-10.606-.234a7.454 7.454 0 0 1 .235-10.565l72.5-69.057a7.524 7.524 0 0 1 10.371 0l72.5 69.057a7.455 7.455 0 0 1 .235 10.565A7.503 7.503 0 0 1 172.5 142z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>


<style>
  * {
    box-sizing: border-box;
  }

  a:hover {
    opacity: 0.8;
  }
</style>
</div>
