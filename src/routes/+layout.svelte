<script lang="ts">
  import "./app.css";
  import { page } from "$app/stores";
  import { afterNavigate } from "$app/navigation";

  let menuOpen = false;

  const nav: Array<{ label: string; href: string }> = [
    { label: "Home", href: "/" },
    { label: "Skateparks", href: "/skateparks" },
    { label: "Planning and Resources", href: "/resources" },
    { label: "Community", href: "/community" },
    // IMPORTANT: make this go to home + hash, not just "#contact"
    { label: "Contact Us", href: "/#contact" }
  ];

  // CRITICAL: reactive values so Svelte re-renders on client navigation
  $: pathname = $page.url.pathname;
  $: hash = $page.url.hash;

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return pathname === "/" && hash === href;

    // exact match or nested route match
    return pathname === href || pathname.startsWith(href + "/");
  }

  function closeMenu(): void {
    menuOpen = false;
  }

  afterNavigate(() => {
    menuOpen = false;
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&family=Wendy+One&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="siteBg">
  <header class="headerOuter">
    <div class="headerInner">
      <a class="brand" href="/" aria-label="Home" on:click={closeMenu}>
        <img class="logo" src="/USAG_logo.png" alt="USAG logo" />
      </a>

      <nav class="navDesktop" aria-label="Primary navigation">
        {#each nav as item}
          <a
            class="navItem"
            class:active={isActive(item.href)}
            href={item.href}
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <button
        class="burger"
        type="button"
        aria-label="Menu"
        aria-expanded={menuOpen}
        on:click={() => (menuOpen = !menuOpen)}
      >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>

    {#if menuOpen}
      <button class="menuOverlay" type="button" aria-label="Close menu" on:click={closeMenu}></button>

      <nav class="menuPanel" aria-label="Mobile navigation">
        {#each nav as item}
          <a
            class="menuItem"
            class:active={isActive(item.href)}
            href={item.href}
            on:click={closeMenu}
          >
            {item.label}
          </a>
        {/each}
      </nav>
    {/if}
  </header>

  <slot />
</div>

<style>
  :global(:root) {
    --bg: #eedfda;
    --brown: #FFC03A;
    --navActive: #eca712;
    --blue: #0222d8;

    --text: #2b2b2b;
    --muted: #6a6a6a;
    --white: #ffffff;
    --creamText: #f5efe9;

    --containerMax: 1440px;
    --siteWidth: 1440px;
    --gutter: 34px;
    --headerH: 80px;
    --headerPadX: 1px;
    --logoInsetY: 4px; 
  }

  @media (max-width: 1024px) {
    :global(:root) {
      --gutter: 24px;
      --headerH: 80px;
      --headerPadX: 1px;
    }
  }

  @media (max-width: 640px) {
    :global(:root) {
      --gutter: 18px;
      --headerH: 64px;
      --headerPadX: 1px;
    }
  }

  :global(html, body) {
    height: 100%;
    margin: 0;
    padding: 0;
    background: var(--bg);
    color: var(--text);
    font-family: "Raleway", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  .siteBg {
    min-height: 100vh;
    background: var(--bg);
  }

  .headerOuter {
    background: var(--bg);
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 6px solid var(--brown);
  }

  .headerInner {
    height: var(--headerH);
    max-width: var(--containerMax);
    margin: 0 auto;
    padding: 0 var(--gutter) 0 0;
    padding-left: var(--headerPadLeft);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .brand {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0;
    min-width: 0;
    margin: 0;
    line-height: 0;
}

  .logo {
    width: auto;
    height: calc(var(--headerH) - (var(--logoInsetY) * 2));
    width: auto;
    display: block;
    height: 100%;
    margin: 0;
    margin-left: -10px;
}

  .navDesktop {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
    margin-left: auto;
  }

  .navItem {
    padding: 12px 14px;
    border-radius: 3px;
    color: var(--muted);
    font-weight: 600;
    line-height: 1;
    transition: background 120ms ease, color 120ms ease;
  }

  .navItem:hover,
  .navItem.active {
    background: var(--navActive);
    color: var(--white);
  }

  .burger {
    display: none;
    margin-left: auto;
    height: calc(var(--headerH) - 12px);
    width: 120px;
    background: var(--brown);
    border: 0;
    border-radius: 2px;
    padding: 0;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    gap: 7px;
    flex-direction: column;
  }

  .line {
    width: 46px;
    height: 4px;
    background: var(--white);
    border-radius: 999px;
    display: block;
  }

  .menuOverlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    border: 0;
    z-index: 60;
  }

  .menuPanel {
  position: fixed;
  inset: 0;
  background: var(--brown);

  /* start under the header, not centered */
  padding: calc(var(--headerH) + 12px) 0 24px;
  z-index: 70;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  gap: 0;
  overflow-y: auto;
}

/* full-width, big tap targets, big text */
.menuItem {
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 72px;

  padding: 18px var(--gutter);

  font-size: 24px;
  font-weight: 800;
  line-height: 1.1;

  color: var(--white);

  /* white divider line between buttons */
  border-bottom: 2px solid rgba(255, 255, 255, 0.75);
}

/* top border so the first item is boxed in too */
.menuPanel .menuItem:first-child {
  border-top: 2px solid rgba(255, 255, 255, 0.75);
}

/* clearer hover/active states */
.menuItem:hover {
  background: rgba(255, 255, 255, 0.12);
}

.menuItem.active {
  background: rgba(255, 255, 255, 0.22);
}

  @media (max-width: 1024px) {
    
    .navDesktop {
      display: none;
      
    }

    .burger {
      display: flex;
    }
  }

  @media (max-width: 640px) {
    .logo {
    margin-left: -5px;
    }
    .burger {
      width: 96px;
    }
    

    .line {
      width: 40px;
      height: 4px;
    }
  }
</style>