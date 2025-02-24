<template>
  <div class="flex w-full border max-h-[28rem] h-full m-auto"
    :class="grid ? 'flex-col max-w-80 md:max-w-96' : 'md:flex-row flex-col md:max-w-2xl max-w-96'">

    <div class="overflow-hidden" :class="grid ? 'h-48 md:h-52 ' : 'md:w-1/2'">
      <NuxtLink class="w-full h-full overflow-hidden" :to="name">
        <NuxtImg
          class="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:rotate-2 hover:scale-105"
          :src="img" alt="Image description" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" :srcset="{
            '320': img + '?w=320&auto=format',
            '640': img + '?w=640&auto=format',
            '1280': img + '?w=1280&auto=format',
          }" loading="lazy" />
      </NuxtLink>
    </div>

    <div class="p-2 flex flex-col" :class="grid ? 'w-full' : 'md:w-1/2'">
      <div class="pb-4 border-b border-red-300 mx-2 flex justify-start items-center px-2">
        <h3 class="text-xl font-medium capitalize tracking-tight">
          <NuxtLink class="w-full h-full overflow-hidden" :to="name">
            <span> {{ name }} </span>
          </NuxtLink>
        </h3>
      </div>
      <div v-if="description" class="p-3 text-sm text-gray-700 space-y-6">
        <p>{{ description }}</p>
        <div class="btn flex justify-start space-x-6 items-center w-full my-3 capitalize text-sm">
          <UtilityBtn2 :phase="0" :title="btn" :path="name" />
          <UtilityBtn2 :phase="1" title="Book now" :path="name" />
        </div>
      </div>
      <ul v-else class="flex-grow flex flex-col justify-around pt-4 px-4 text-sm max-w-72">
        <li v-for="(item, index) in details" :key="index" class="flex justify-between items-center py-1">
          <div class="space-x-2 flex items-center justify-center">
            <span v-if="item.icon">
              <Icon :name="item.icon" class="text-complementary text-lg inline-flex justify-center items-center" />
            </span>

            <span v-if="item.label" class="text-gray-600">{{ item.label }}:</span>
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
  description: String,
  details: Array,
  img: String,
  grid: Boolean,
  btn: String,
});
</script>
