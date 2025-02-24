<template>
  <div
    class="heading font-semibold lg:text-8xl text-6xl relative capitalize lg:h-56 h-32 text-end px-8"
  >
    <!-- Dynamic Background -->
    <div
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      class="absolute left-0 top-0 z-10 h-full w-full bg-cover bg-center"
    ></div>

    <!-- Dynamic Title -->
    <div class="z-20 relative h-full flex flex-col justify-end items-center">
      <h2
        class="text-transparent bg-gradient-to-r from-cyan-300 to-white bg-clip-text uppercase font-extrabold tracking-tight shadow-lg"
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>
<style scoped>
.heading > div:first-child {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.heading > div:first-child::before {
  content: "";
  height: 100%;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(2, 1, 13, 1) 0%,
    rgba(87, 227, 255, 0) 80%
  );
}
.heading .uppercase {
  color: transparent;
  background: white;
  background-clip: text;
}
</style>
<script setup>
defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  backgroundImage: {
    type: String,
    default: "/img/van.webp",
  },
});
</script>
