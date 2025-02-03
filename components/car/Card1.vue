<template>
  <div class="grid w-full  border" 
  :class="grid ? 'grid-rows-2' : 'grid-cols-2'">
    <div
    class="w-full aspect-square overflow-hidden ">
      <NuxtLink class="w-full h-full overflow-hidden" to="halo">
        <NuxtImg
          class="w-full object-contain hover:rotate-3 hover:scale-110 duration-300 ease-in overflow-hidden"
          :src="img"
        />
      </NuxtLink>
    </div>
    <div class="p-4 flex flex-col">
      <div class="pb-4 border-b mx-2 flex justify-start items-center px-2">
        <h3 class="text-xl font-medium capitalize tracking-tight">
          <span> {{ heading }} </span>
        </h3>
      </div>
      <ul class="flex-grow flex flex-col justify-around pt-4 px-4 text-sm">
        <li v-for="(item, index) in details" :key="index" class="space-x-1">
          <span class="text-gray-600">{{ item.label }}:</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  heading: String,
  path: String,
  details: Array,
  img: String,
  grid: Boolean,
});
</script>
