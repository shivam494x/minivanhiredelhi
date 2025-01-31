<template>
  <div class="van">
    <div class="swiper-container px-12">
      <swiper
        :pagination="{ type: 'progressbar' }"
        :navigation="{ nextEl: '.van .custom-next', prevEl: '.van .custom-prev' }"
        :modules="modules"
        :space-between="20"
        :breakpoints="{
          0: { slidesPerView: 1 }, // Small screens (default)
          768: { slidesPerView: 2 }, // 'sm:' screens (640px and up)
          1280: { slidesPerView: 3 }, // 'md:' screens (768px and up)
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="{ name, img, details,desc } in arr" :key="name">
          <div class="card border border-gray-200 flex flex-col">
            <div class="img h-56">
              <NuxtImg
                class="w-full h-full object-cover"
                :src="`/img/${img}`"
              />
            </div>
            <div class="content pt-3 row-span-1 flex flex-col center">
              <div class="text-xl font-medium capitalize tracking-tight flex-1">
                {{ name }}
              </div>
              
            <div v-if="desc"
            class="text-sm text-gray-600 center text-center px-4 py-2"
              >
                {{ desc }}
              </div>
              <div class="btn center w-full text-white my-3">
                <UtilityButton1
                  class="capitalize w-max py-1 px-6"
                  title="view more"
                  :border="false"
                />
              </div>
              <div
                v-if="details"
                class="bottom w-full h-8 border-t grid grid-cols-4 text-gray-500"
              >
                <div
                  v-for="{ icon, quality } in details"
                  class="border-r center gap-2"
                >
                  <div class="icon">
                    <Icon :name="icon" />
                  </div>
                  <div class="content text-sm">{{ quality }}</div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Custom Navigation Buttons -->
    <div class="custom-prev">
      <div class="w-1/2 h-1/2 border-t-2 border-l-2 border-black"></div>
    </div>
    <div class="custom-next">
      <div class="w-1/2 h-1/2 border-t-2 border-r-2 border-black"></div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  height: max-content;
}
.swiper-container {
  position: relative;
  padding: 0 80px;
}
.custom-prev,
.custom-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  border: 2px solid black;
}
.custom-prev {
  left: 2rem;
  transform: rotate(-45deg) translateY(-50%);
}
.custom-next {
  right: 2rem;
  transform: rotate(45deg) translateY(-50%);
}
.custom-prev:hover,
.custom-next:hover {
  background: white;
  color: black;
}
</style>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const props = defineProps({
  arr: Array,
  phase: Number,
});

const modules = [Pagination, Navigation];
</script>
