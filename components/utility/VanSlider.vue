<template>
  <div class="van max-w-2xl mx-auto ">
    <!-- 3-column grid layout -->
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 md:px-2 grid-cols-1 gap-4 justify-between max-w-full mx-auto w-full"
    >
      <div
        v-for="({ name, img, desc }, index) in arr"
        :key="name"
        class="card border border-gray-200 flex flex-col h-full"
      >
        <div class="img h-full">
          <NuxtImg
            class="w-full h-full object-contain max-h-44"
            :src="`${img}`"
            alt="img"
          />
        </div>
        <div class="content row-span-1 flex flex-col center">
          <div
            class="text-base py-2 font-normal capitalize tracking-tight flex-1"
          >
            <span class="before relative">
              {{ name }}
            </span>
          </div>

          <div
            v-if="desc"
            class="text-xs text-gray-600 center text-center px-4 py-2"
          >
            {{ desc }}
          </div>
          <div
            class="btn flex justify-around items-center w-full m-auto capitalize text-xs mb-1 max-w-56"
          >
            <UtilityBtn2 :phase="0" title="Read more" :path="path" />
            <UtilityBtn2 :phase="1" title="Book now" :path="path" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .btn {
    display: flex !important;
  }
}
.card {
  width: 100%;
  height: 100%;
}
.card .content span.before::before {
  width: 90%;
  height: 1px;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
}
</style>

<script setup>
const props = defineProps({
  arr: Array,
  btn: String,
  path: String,
});
</script>
