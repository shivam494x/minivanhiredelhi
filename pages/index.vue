<template>
  <div class="w-full absolute top-16">
    <div>
      <Header></Header>
      <main class="absolute top-0 w-full">
        <!-- section one -->
        <section id="hero" class="bg-secondary text-white overflow-hidden">
          <HomeHero />
        </section>
        <!-- section two -->
        <section id="about-us">
          <HomeAbout />
        </section>
        <!-- section three -->
        <section id="offers">
          <HomeOffers />
        </section>
        <Footer />
      </main>
    </div>
  </div>
</template>
