<template>
  <div class="h-full w-full">
    <div class="flex h-full w-full overflow-x-hidden relative">
      <div class="w-full h-full">
        <Swiper
          v-if="content.length > 1"
          :modules="[Pagination, Autoplay]"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :slides-per-view="1"
          :loop="true"
          :draggable="false"
          :grab-cursor="false"
          :allow-touch-move="false"
          class="h-full w-full"
        >
          <SwiperSlide v-for="(item, i) in content" :key="i" class="relative">
            <NuxtImg
              :src="item.img"
              alt="img"
              class="h-full w-full brightness-50 object-cover absolute inset-0"
            />
            <div
              class="overlay absolute inset-0 bg-gradient-to-r from-black/50 to-black/5"
            ></div>
            <div
              class="content w-full md:w-[70vw] lg:w-[50vw] z-20 relative top-1/2 lg:[45%] -translate-y-1/2 left-1/2 sm:pl-2 md:left-24 lg:left-28 xl:left-36 -translate-x-1/2 md:-translate-x-0"
            >
              <div class="h-full center flex-col md:items-start">
                <div
                  class="center flex-col text-center md:text-start md:items-start md:justify-start"
                >
                  <div
                    class="heading text-4xl md:text-5xl xl:text-6xl font-semibold mb-4 tracking-tight"
                  >
                    <h1>{{ item.title }}</h1>
                  </div>
                  <div
                    class="sub md:text-lg brightness-[90%] mb-8 w-3/5 tracking-normal"
                  >
                    <h5>{{ item.sub }}</h5>
                  </div>
                  <UtilityButton1
                    class="capitalize w-max py-2 px-6"
                    title="read more"
                    :to="item.link"
                    :border="true"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<style scoped>
.router-link-active {
  color: white !important;
}
</style>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { useAll } from "~/stores/api";
const allStore = useAll();
const content = ref([]);

onBeforeMount(() => {
  async function init() {
    await allStore.fetchData(); // Fetch data once
    const { slider } = allStore;
    if (slider) {
      const filtered_data = Object.keys(slider)
        .filter((key) => key.includes("_title"))
        .map((key) => {
          const prefix = key.split("_")[0];
          return {
            title: slider[`${prefix}_title`]?.en || "",
            sub: slider[`${prefix}_description`]?.en || "",
            img: slider[`${prefix}_img`] || "",
            link: slider[`${prefix}_link`] || "",
          };
        })
        .filter((item) => item.title && item.img);

      if (filtered_data.length === 1) {
        filtered_data.push({ ...filtered_data[0] });
      }

      content.value = filtered_data;
    }
  }
  init();
});
</script>
