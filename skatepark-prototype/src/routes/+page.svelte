<script lang="ts">
  import Footer from "$lib/components/home/Footer.svelte";

  const values = [
    {
      title: "Awareness",
      text: "Raising awareness of the benefits that skateparks provide for riders of all ages, abilities, and their communities in an effort to break down negative stereotypes."
    },
    {
      title: "Advocacy",
      text: "Developing civility and respect between riders and their local municipalities through education, civil engagement, and collaboration with community leaders in their skatepark advocacy efforts."
    },
    {
      title: "Strategy",
      text: "Aiding communities in the education and planning process for long term growth by utilizing the Skatepark Adoption Model to strategically place skateparks on publicly accessible land."
    },
    {
      title: "Fundraising",
      text: "Working with community leaders through the planning, building, expanding and upgrading of professionally designed skatepark facilities through grassroots fundraising, donations, grants, and land improvement arrangements."
    },
    {
      title: "Stewardship",
      text: "Providing long-term guidance by utilizing the Skatepark Adoption Model, attaining grants, and supporting local improvement arrangements to ensure sustainability of skatepark facilities across Utah."
    }
  ];

  const board = [
    {
      name: "Sean Peterson",
      role: "President and Founder",
      photo: "/SeanPeterson.png"
    },
    {
      name: "Jared Strain",
      role: "USAG Board Member",
      photo: "/JaredStrain.png"
    },
    {
      name: "Geoff Geertsen",
      role: "USAG Board Member",
      photo: "/GeoffGeertsen.png"
    },
    {
      name: "Jack Parker",
      role: "Board Member and Secretary",
      photo: "/JackParker.png"
    }
  ];
</script>

<svelte:head>
  <title>Utah Skatepark Advocacy Group</title>
  <meta
    name="description"
    content="The Utah Skatepark Advocacy Group exists to support Utah communities in expanding access to quality and safe skateparks."
  />
</svelte:head>

<main>
  <!-- Hero -->
  <section class="hero">
    <img
      class="heroImg"
      src="/6e2c1f_a4d92e2051c94d75a200f2aaaed9932c~mv2.jpg"
      alt="Utah Skatepark Advocacy Group"
    />
  </section>

  <!-- Mission banner -->
  <section class="missionBanner">
    <div class="inner">
      <h1 class="missionTitle">Our Mission</h1>
      <p class="missionText">
        The Utah Skatepark Advocacy Group exists to support Utah communities in expanding
        access to quality and safe skateparks.
      </p>
    </div>
  </section>

  <!-- Values -->
  <section class="valuesSection">
    <div class="inner">
      <h2 class="sectionHeading">Our Values</h2>
      <div class="valuesGrid">
        {#each values as v}
          <div class="valueItem">
            <h3 class="valueTitle">{v.title}</h3>
            <p class="valueText">{v.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Meet the Board -->
  <section class="boardSection">
    <div class="inner">
      <h2 class="sectionHeading">Meet the Board</h2>
      <div class="boardGrid">
        {#each board as member}
          <div class="boardMember">
            <div class="boardPhoto">
              {#if member.photo}
                <img src={member.photo} alt={member.name} />
              {:else}
                <div class="boardPhotoPlaceholder">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
              {/if}
            </div>
            <div class="boardName">{member.name}</div>
            <div class="boardRole">{member.role}</div>
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
  .hero {
    width: 100%;
  }

  .heroImg {
    width: 100%;
    height: 420px;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  /* ── Shared inner container ────────────────────────────────────── */
  .inner {
    max-width: var(--containerMax);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  /* ── Mission banner (yellow, matches other pages) ──────────────── */
  .missionBanner {
    background: var(--brown);
    padding: 24px 0;
  }

  .missionTitle {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 600;
    margin: 0 0 10px;
    color: #1a1a1a;
  }

  .missionText {
    font-size: 15px;
    line-height: 1.65;
    color: #1a1a1a;
    font-weight: 500;
    max-width: 680px;
    margin: 0;
  }

  /* ── Values ────────────────────────────────────────────────────── */
  .valuesSection {
    background: var(--bg);
    padding: 0 0 56px;
  }

  .sectionHeading {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: clamp(28px, 4vw, 42px);
    margin: 0 0 32px;
    color: var(--text);
  }

  .valuesGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 48px;
  }

  .valueItem {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .valueTitle {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: 22px;
    margin: 0;
    color: var(--text);
  }

  .valueText {
    font-size: 14px;
    line-height: 1.65;
    margin: 0;
    color: var(--text);
  }

  /* ── Board ─────────────────────────────────────────────────────── */
  .boardSection {
    background: var(--bg);
    padding: 52px 0 64px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .boardGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 48px;
  }

  .boardMember {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }

  .boardPhoto {
    width: 340px;
    height: 340px;
    border-radius: 4px;
    overflow: hidden;
    background: #d0ccc8;
  }

  .boardPhoto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .boardPhotoPlaceholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Kanit", system-ui, sans-serif;
    font-size: 48px;
    color: rgba(0, 0, 0, 0.3);
  }

  .boardName {
    font-family: "Kanit", system-ui, sans-serif;
    font-size: 18px;
    color: var(--text);
  }

  .boardRole {
    font-size: 13px;
    color: var(--muted);
  }

  /* ── Responsive ────────────────────────────────────────────────── */
  @media (max-width: 900px) {
    .boardPhoto {
      width: 280px;
      height: 280px;
    }
  }

  @media (max-width: 640px) {
    .heroImg {
      height: 280px;
    }

    .valuesGrid {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .boardGrid {
      grid-template-columns: 1fr;
      gap: 36px;
    }

    .boardPhoto {
      width: 85vw;
      height: 85vw;
    }
  }
</style>
