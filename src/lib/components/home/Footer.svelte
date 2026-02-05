<footer class="footerOuter">
  <div class="footerInner">
    <div class="left">
      <div class="title">Utah Skatepark Advocacy Group</div>
      <div class="icons">
        <a href="#" aria-label="Instagram">
          <img src="/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="#" aria-label="Facebook">
          <img src="/facebook-icon.png" alt="Facebook" />
        </a>
      </div>
    </div>

    <div class="right">
      <div class="links">
        <a href="/skateparks">Skateparks</a>
        <a href="/community">Community</a>
        <a href="/news">News &amp; Media</a>
        <a href="/resources">Resources</a>
        <a href="/design-builders">Design &amp; Builders List</a>
        <a href="/about">About</a>
      </div>
    </div>
  </div>

  <div class="bottom">2025 by The Utah Skatepark Advocacy Group</div>
</footer>

<style>
  .footerOuter {
    background: #f6f0ea;
    padding: 34px 0 22px;
  }

  .footerInner {
    width: min(var(--siteWidth), 100%);
    margin: 0 auto;
    padding: 0 34px;
    display: flex;
    justify-content: space-between;
    gap: 28px;
    align-items: flex-start;
  }

  .title {
    font-weight: 700;
    color: #111;
    margin-bottom: 10px;
  }

  .icons {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .icons img {
    height: 18px;
    width: auto;
    display: block;
    filter: grayscale(1);
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px 18px;
    color: #333;
    font-size: 13px;
  }

  .links a:hover {
    color: var(--navActive);
  }

  .bottom {
    width: min(var(--siteWidth), 100%);
    margin: 18px auto 0;
    padding: 0 34px;
    font-size: 12px;
    color: #555;
  }
</style>