<footer class="footer">
  <div class="footerInner">
    <img class="footerLogo" src="/USAG_logo.png" alt="Utah Skatepark Advocacy Group" />
    <div class="footerIcons">
      <a href="https://www.facebook.com/goskateutah" target="_blank" rel="noopener" aria-label="Facebook">
        <img src="/facebook-icon.png" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/goskateutah/" target="_blank" rel="noopener" aria-label="Instagram">
        <img src="/instagram-icon.png" alt="Instagram" />
      </a>
    </div>
    <p class="footerCopy">The Utah Skatepark Advocacy Group ©2026 All Rights Reserved</p>
  </div>
</footer>

<style>
  .footer {
    background: var(--bg);
    border-top: 4px solid var(--brown);
    padding: 32px 0 28px;
  }

  .footerInner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .footerLogo {
    height: 64px;
    width: auto;
  }

  .footerIcons {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .footerIcons img {
    height: 28px;
    width: 28px;
    object-fit: contain;
  }

  .footerCopy {
    font-size: 13px;
    color: var(--text);
    margin: 0;
    text-align: center;
  }
</style>
