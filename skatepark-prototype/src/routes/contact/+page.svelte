<script lang="ts">
  import Footer from "$lib/components/home/Footer.svelte";

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
  }
</script>

<svelte:head>
  <title>Contact Us | Utah Skatepark Advocacy Group</title>
  <meta
    name="description"
    content="Contact the Utah Skatepark Advocacy Group to volunteer, submit photos, or share news about Utah skateparks."
  />
</svelte:head>

<main>
  <!-- Hero -->
  <section class="pageHero">
    <img class="heroImg" src="/skatepark3.jpeg" alt="Contact Utah Skatepark Advocacy Group" />
    <div class="heroBanner">
      <h1 class="heroTitle">Contact Us</h1>
    </div>
  </section>

  <!-- Form section -->
  <section class="formSection">
    <div class="inner">
      <p class="introText">
        Interested in volunteering or helping the community? Want to submit your photos to add
        to our skatepark database? Feel free to leave us a message using the contact form listed
        below.
      </p>
      <p class="introText">
        If you need to contact us quicker, shoot us a message on our Instagram page.
      </p>

      <form class="form" on:submit={handleSubmit}>
        <div class="field">
          <label class="label" for="firstName">First Name</label>
          <input id="firstName" type="text" placeholder="First Name" required />
        </div>

        <div class="field">
          <label class="label" for="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder="Last Name" required />
        </div>

        <div class="field">
          <label class="label" for="email">Email Address</label>
          <input id="email" type="email" placeholder="Email Address" required />
        </div>

        <div class="field">
          <label class="label" for="subject">Subject</label>
          <input id="subject" type="text" placeholder="Subject" />
        </div>

        <div class="field">
          <label class="label" for="message">Message</label>
          <textarea id="message" rows="6" placeholder="Message"></textarea>
        </div>

        <button class="submitBtn" type="submit">Submit Form</button>
      </form>
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

  /* ── Form section ──────────────────────────────────────────────── */
  .formSection {
    background: var(--bg);
    padding: 52px 0 72px;
  }

  .inner {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 var(--gutter);
  }

  .introText {
    font-size: 15px;
    line-height: 1.7;
    color: var(--text);
    margin: 0 0 16px;
  }

  /* ── Form ──────────────────────────────────────────────────────── */
  .form {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .label {
    font-weight: 700;
    font-size: 14px;
    color: var(--text);
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 14px;
    border: 1.5px solid #c8c0b8;
    border-radius: 2px;
    background: #fff;
    font-family: "Raleway", system-ui, -apple-system, sans-serif;
    font-size: 14px;
    color: var(--text);
    outline: none;
    transition: border-color 120ms ease;
  }

  input:focus,
  textarea:focus {
    border-color: var(--brown);
  }

  textarea {
    resize: vertical;
    min-height: 140px;
  }

  .submitBtn {
    align-self: flex-start;
    padding: 11px 32px;
    border: 2px solid var(--text);
    background: transparent;
    color: var(--text);
    font-family: "Raleway", system-ui, -apple-system, sans-serif;
    font-weight: 700;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    transition: background 120ms ease, color 120ms ease;
  }

  .submitBtn:hover {
    background: var(--text);
    color: var(--white);
  }

  @media (max-width: 640px) {
    .heroImg {
      height: 220px;
    }
  }
</style>
