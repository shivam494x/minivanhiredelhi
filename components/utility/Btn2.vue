<template>
  <div v-if="phase == 0">
    <NuxtLink :to="path" class="">
      <div
        class="h-7 md:h-8 relative group overflow-hidden center px-3 border border-pri hover:bg-pri hover:text-white transition duration-200 ease-in-out"
      >
        <span class="duration-300 group-hover:-translate-y-16">
          {{ title }}
        </span>
        <span
          class="absolute duration-300 group-hover:translate-y-0 group-hover:translate-x-0 translate-y-16 -translate-x-16 center"
          ><Icon name="i-fa:send"
        /></span>
      </div>
    </NuxtLink>
  </div>
  <div v-if="phase == 1">
    <NuxtLink :to="path" class="">
      <div
        class="h-7 md:h-8 text-white relative group overflow-hidden bg-complementary center px-3 border border-complementary hover:bg-white hover:text-black transition duration-200 ease-in-out"
      >
        <span class="duration-300 group-hover:-translate-y-16">
          <span>{{ title }}</span></span
        >
        <span
          class="absolute duration-300 group-hover:translate-y-0 translate-y-16 center"
        >
          <Icon name="mdi:ticket-confirmation"
        /></span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  path: String,
  title: String,
  phase: Number,
});
</script>
