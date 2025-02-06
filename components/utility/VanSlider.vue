<template>
  <div class="van">
    <div class="swiper-container px-12">
      <swiper
        :pagination="{ type: 'progressbar' }"
        :navigation="{
          nextEl: '.van .custom-next',
          prevEl: '.van .custom-prev',
        }"
        :loop="true"
        :modules="modules"
        :space-between="20"
        :autoplay="true"
        :breakpoints="{
          0: { slidesPerView: 1 }, // Small screens (default)
          768: { slidesPerView: 2 }, // 'sm:' screens (640px and up)
          1280: { slidesPerView: 3 }, // 'md:' screens (768px and up)
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="({ name, img, details, desc }, index) in arr"
          :key="name"
          class=""
        >
          <div class="card border border-gray-200 flex flex-col">
            <div class="img h-48">
              <NuxtImg class="w-full h-full object-cover" :src="`${img}`" alt="img" />
            </div>
            <div class="content row-span-1 flex flex-col center">
              <div
                class="text-xl py-4 font-medium capitalize tracking-tight flex-1"
              >
                <span class="before relative">
                  {{ name }}
                </span>
              </div>

              <div
                v-if="desc"
                class="text-sm text-gray-600 center text-center px-4 py-2"
              >
                {{ desc }}
              </div>
              <div
                class="btn flex justify-start space-x-6 items-center w-max m-auto my-3 capitalize text-sm"
              >
                <UtilityBtn2 phase="0" :title="btn" :path="getPath(name)" />
                <UtilityBtn2 phase="1" title="Book now" :path="getPath(name)" />
              </div>
              <div
                v-if="details"
                class="bottom w-full h-8 border-t grid grid-cols-4 text-gray-500"
              >
                <div
                  v-for="{ icon, quality } in details"
                  class="border-r center gap-2"
                >
                  <div class="icon text-pri">
                    <Icon :name="icon" />
                  </div>
                  <div class="content text-sm text-complementary">
                    {{ quality }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Custom Navigation Buttons -->
    <div class="custom-prev btn">
      <div class="w-1/2 h-1/2 border-t-2 border-l-2 border-black"></div>
    </div>
    <div class="custom-next btn">
      <div class="w-1/2 h-1/2 border-t-2 border-r-2 border-black"></div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  height: max-content;
}
.card .content span.before::before {
  width: 90%;
  height: 1px;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
}
.swiper-container {
  position: relative;
  padding: 0 80px;
}
.swiper-button-lock {
  cursor: not-allowed !important;
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
  transition: filter 150ms ease-in-out;
  border: 3px solid black;
}
.custom-prev:hover,
.custom-next:hover {
  /* border-color: var(--); */
  filter: invert(1);
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

const { getPath } = useUtility();
const props = defineProps({
  arr: Array,
  phase: Number,
  btn: String,
});
const modules = [Pagination, Navigation];
onMounted(() => {
  const btns = document.querySelectorAll(".van .btn");
  btns.forEach((b) => {
    if (b.classList.contains("swiper-button-lock")) {
      const newBtn = b.cloneNode(true);
      b.parentNode.replaceChild(newBtn, b);
    }
  });
});
</script>
