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
  <div
    @click="toggleRateBtn"
    class="rate group z-[9999] center rounded-full bg-pri w-14 bottom-4 right-8 h-14 fixed cursor-pointer"
  >
    <span
      class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 delay-200 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      Rate Us
    </span>
    <svg
      class="w-8 h-8"
      viewBox="0 0 24 24"
      fill="#FFC107"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
        stroke="#FFC107"
        stroke-width="1"
        fill="#FFC107"
      />
    </svg>
  </div>
  =
  <div
    class="fixed take_screen qr z-[9999999] overflow-hidden"
    v-if="isRateUsActive"
  >
    <div class="absolute take_screen p-10" @click="toggleRateBtn">
      <NuxtImg class="h-full object-contain m-auto" src="/img/rateus.png" />
    </div>
  </div>
</template>
<style scoped>
.rate:hover {
  transform: translateZ(15px);
}
@keyframes blur {
  from {
    filter: blur(100px);
  }
  to {
    filter: blur(0px);
  }
}
.qr img {
  animation: blur 1s ease-in-out 1;
}
.qr {
  backdrop-filter: blur(5px);
}
</style>
<script setup>
const isRateUsActive = ref(false);
const toggleRateBtn = () => {
  isRateUsActive.value = !isRateUsActive.value;
};
definePageMeta({
  layout: "home",
});
</script>
