<template>
  <div class="flex w-full border max-h-[30rem] h-full" :class="grid ? 'flex-col' : ''">
    <div
      class="aspect-square overflow-hidden"
      :class="grid ? 'h-56' : ' w-1/2'"
    >
      <NuxtLink class="w-full h-full overflow-hidden" :to="path">
        <NuxtImg
          class="w-full h-full object-cover hover:rotate-3 hover:scale-110 duration-300 ease-in overflow-hidden"
          :src="img"
        />
      </NuxtLink>
    </div>
    <div class="p-4 flex flex-col"
      :class="grid ? 'w-full' : ' w-1/2'"
    >
      <div
        class="pb-4 border-b border-red-300 mx-2 flex justify-start items-center px-2"
      >
        <h3 class="text-xl font-medium capitalize tracking-tight">
          <span> {{ name }} </span>
        </h3>
      </div>
      <ul
        class="flex-grow flex flex-col justify-around pt-4 px-4 text-sm max-w-72"
      >
        <li
          v-for="(item, index) in details"
          :key="index"
          class="flex justify-between items-center py-1"
        >
          <div class="space-x-2 flex items-center justify-center">
            <span v-if="item.icon">
              <Icon
                :name="item.icon"
                class="text-complementary text-lg inline-flex justify-center items-center"
              />
            </span>

            <span v-if="item.label" class="text-gray-600"
              >{{ item.label }}:</span
            >
          </div>
          <span class="text-pri" v-if="item.value">{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  name: String,
  path: String,
  details: Array,
  img: String,
  grid: Boolean,
});
</script>
