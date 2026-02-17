<script>
  import Hero from "$lib/components/home/Hero.svelte";
  import ContactForm from "$lib/components/home/ContactForm.svelte";
  import Footer from "$lib/components/home/Footer.svelte";
</script>

<main class="page">
  <Hero />

  <section class="brownBlock">
    <div class="brownInner">
      <h2 class="blockTitle">Our Mission</h2>
      <p class="blockText">
        The Utah Skatepark Advocacy Group exists to support Utah communities in expanding access to quality and safe skateparks.
      </p>
      <a class="btn primary" href="#contact">Contact Us</a>

      <div class="spacer"></div>

      <h3 class="blockSubtitle">How have skateparks positively impacted your life?</h3>

      <div class="quoteWrap">
        <p class="quote">
          "I grew up skateboarding at local parks every day after school for years and years. You fall, get back up, fall, get back up - on and on and on. This teaches resilience. I now run a multimillion-dollar business without schooling or prior experience with the worlds biggest companies as clients. I credit my ability to get back up and keep trying as the reason I found success."
        </p>
        <div class="quoteBy">- Tyson, Sandy, UT</div>

        <div class="dots" aria-hidden="true">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  </section>

  <section class="igBlock">
    <div class="igInner">
      <h3 class="igTitle">Follow us on Instagram</h3>
      <div class="igHandle">@goskateutah</div>

      <a class="btn primary" href="#">Follow Us</a>

      <div class="igIcons" aria-label="Social links">
        <a href="#" aria-label="Instagram">
          <img src="/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="#" aria-label="Facebook">
          <img src="/facebook-icon.png" alt="Facebook" />
        </a>
      </div>

      <div class="carousel">
        <button class="arrow" type="button" aria-label="Previous">&lt;</button>

        <div class="cards">
          <div class="card">
            <img src="/img_left.png" alt="Instagram post 1" />
          </div>
          <div class="card">
            <img src="/img_center.png" alt="Instagram post 2" />
          </div>
          <div class="card">
            <img src="/img_right.png" alt="Instagram post 3" />
          </div>
        </div>

        <button class="arrow" type="button" aria-label="Next">&gt;</button>
      </div>
    </div>
  </section>

  <ContactForm />
  <Footer />
</main>

<style>
  .page {
    width: 100%;
  }
  

  .brownBlock {
    background: var(--brown);
    padding: 56px 0 66px;
  }

  .brownInner {
    width: min(var(--siteWidth), 100%);
    margin: 0 auto;
    padding: 0 34px;
    text-align: center;
    color: var(--creamText);
  }

  .blockTitle {
    font-family: "Wendy One", system-ui, sans-serif;
    font-size: 52px;
    margin: 0 0 10px;
    letter-spacing: 0.2px;
  }

  .blockText {
    max-width: 520px;
    margin: 0 auto 18px;
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.95;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
    padding: 10px 18px;
    border-radius: 4px;
    text-decoration: none;
    user-select: none;
  }

  .btn.primary {
    background: var(--blue);
    color: var(--white);
  }

  .spacer {
    height: 42px;
  }

  .blockSubtitle {
    font-family: "Wendy One", system-ui, sans-serif;
    font-size: 20px;
    margin: 0 0 14px;
  }

  .quoteWrap {
    max-width: 820px;
    margin: 0 auto;
  }

  .quote {
    margin: 0;
    font-size: 12.5px;
    line-height: 1.7;
    opacity: 0.95;
  }

  .quoteBy {
    margin-top: 10px;
    font-size: 12px;
    opacity: 0.95;
    text-align: right;
  }

  .dots {
    margin-top: 18px;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: rgba(245, 239, 233, 0.45);
  }

  .dot.active {
    background: rgba(245, 239, 233, 0.95);
  }

  .igBlock {
    background: var(--bg);
    padding: 56px 0 56px;
  }

  .igInner {
    width: min(var(--siteWidth), 100%);
    margin: 0 auto;
    padding: 0 34px;
    text-align: center;
  }

  .igTitle {
    font-family: "Wendy One", system-ui, sans-serif;
    font-size: 22px;
    margin: 0;
  }

  .igHandle {
    font-family: "Wendy One", system-ui, sans-serif;
    font-size: 18px;
    margin-top: 6px;
    margin-bottom: 16px;
  }

  .igIcons {
    margin-top: 14px;
    display: flex;
    justify-content: center;
    gap: 14px;
    align-items: center;
    filter: brightness(0) invert(0);
    color: black;
}
  

  .igIcons img {
    height: 20px;
    width: auto;
    display: block;
    filter: grayscale(1);
    filter: brightness(0) invert(0);
  }

  .carousel {
    margin-top: 26px;
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    gap: 10px;
    align-items: center;
  }

  .arrow {
    background: transparent;
    border: 0;
    font-size: 36px;
    line-height: 1;
    color: #2b2b2b;
    cursor: pointer;
    padding: 10px 0;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    align-items: stretch;
  }

  .card {
    border: 6px solid #101010;
    background: #101010;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .card img {
    width: 100%;
    height: auto;
    display: block;
  }
</style>