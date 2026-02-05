<script lang="ts">
  function noopSubmit(e: SubmitEvent) {
    e.preventDefault();
  }
</script>

<section class="contactBlock" id="contact">
  <div class="contactInner">
    <h2 class="blockTitle">Contact us</h2>
    <p class="tip">
      Trick Tip: Get in contact with us faster through a direct message on Instagram
    </p>

    <div class="contactIcons">
      <a href="#" aria-label="Instagram">
        <img src="/instagram-icon.png" alt="Instagram" />
      </a>
      <a href="#" aria-label="Facebook">
        <img src="/facebook-icon.png" alt="Facebook" />
      </a>
    </div>

    <form class="form" on:submit={noopSubmit}>
      <label class="field">
        <span class="label">First Name *</span>
        <input type="text" placeholder="Duy" required />
      </label>

      <label class="field">
        <span class="label">Last Name *</span>
        <input type="text" placeholder="Hoang" required />
      </label>

      <label class="field">
        <span class="label">Email *</span>
        <input type="email" placeholder="Type your email" required />
      </label>

      <label class="field">
        <span class="label">Subject</span>
        <input type="text" placeholder="Type your subject here" />
      </label>

      <label class="field">
        <span class="label">Message</span>
        <textarea rows="6" placeholder="Type your message here..."></textarea>
      </label>

      <button class="btn submit" type="submit">Submit</button>
    </form>
  </div>
</section>

<style>
  .contactBlock {
    background: var(--brown);
    padding: 62px 0 72px;
    color: var(--creamText);
  }

  .contactInner {
    width: min(var(--siteWidth), 100%);
    margin: 0 auto;
    padding: 0 34px;
    text-align: center;
  }

  .blockTitle {
    font-family: "Wendy One", system-ui, sans-serif;
    font-size: 52px;
    margin: 0 0 10px;
    letter-spacing: 0.2px;
  }

  .tip {
    margin: 10px 0 14px;
    font-size: 12px;
    opacity: 0.95;
  }

  .contactIcons {
    display: flex;
    justify-content: center;
    gap: 14px;
    align-items: center;
    margin-bottom: 22px;
  }

  .contactIcons img {
    height: 20px;
    width: auto;
    display: block;
    filter: grayscale(1) invert(1);
    opacity: 0.9;
  }

  .form {
    max-width: 760px;
    margin: 0 auto;
    text-align: left;
  }

  .field {
    display: grid;
    gap: 8px;
    margin: 14px 0;
  }

  .label {
    font-weight: 700;
    font-size: 13px;
    color: var(--creamText);
  }

  input,
  textarea {
    width: 100%;
    border: 0;
    border-radius: 2px;
    padding: 12px 12px;
    font-family: "Raleway", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    font-size: 13px;
    outline: none;
  }

  textarea {
    resize: vertical;
    min-height: 140px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
    padding: 10px 22px;
    border-radius: 4px;
    user-select: none;
  }

  .btn.submit {
    background: #e9edf7;
    color: var(--blue);
    border: 1px solid rgba(2, 34, 216, 0.25);
    margin-top: 10px;
  }
</style>