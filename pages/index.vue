<template>
  <div class="">
    <main class="w-full">
      <!-- section one -->
      <section id="hero" class="bg-secondary text-white overflow-hidden">
        <HomeHero />
      </section>
      <!-- section two -->

      <section id="services">
        <HomeServices />
      </section>
      <!-- section three -->
      <section id="offers">
        <HomeOffers />
      </section>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
</script>
