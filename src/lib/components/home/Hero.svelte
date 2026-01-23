<svelte:head>
  <meta name="description" content="Utah Skatepark Advocacy Group" />
</svelte:head>

<section class="relative w-full">
  <!-- Background image -->
  <div class="absolute inset-0">
    <img
      src="/images/home/hero-bg.jpg"
      alt=""
      class="h-full w-full object-cover"
      loading="eager"
      fetchpriority="high"
    />
    <!-- subtle wash so text stays readable -->
    <div class="absolute inset-0 bg-white/70"></div>
  </div>

  <!-- Content -->
  <div class="relative mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
    <div class="min-h-[260px] py-10 md:min-h-[360px] md:py-16 lg:min-h-[420px] lg:py-20">
      <div class="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <!-- Left: logo + name -->
        <div class="flex items-center justify-center md:justify-start">
          <div class="flex items-center gap-5">
            <img
              src="/images/home/usag-mark.png"
              alt="Utah Skatepark Advocacy Group logo"
              class="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
            <div class="leading-tight">
              <div class="text-base font-semibold tracking-wide text-black md:text-lg lg:text-xl">
                UTAH
              </div>
              <div class="text-base font-semibold tracking-wide text-black md:text-lg lg:text-xl">
                SKATEPARK
              </div>
              <div class="text-base font-semibold tracking-wide text-black md:text-lg lg:text-xl">
                ADVOCACY
              </div>
              <div class="text-base font-semibold tracking-wide text-black md:text-lg lg:text-xl">
                GROUP
              </div>
            </div>
          </div>
        </div>

        <!-- Right: statement -->
        <div class="text-center md:text-left">
          <p class="mx-auto max-w-xl text-base leading-relaxed text-black/80 md:mx-0 md:text-lg lg:text-xl">
            Expanding skatepark access with an end goal that every rider in Utah has a quality and safe place to ride.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
