<template>
  <div class="grid grid-cols-4">
    <section class="details col-span-3 mr-8">
      <div
        class="title text-3xl font-semibold tracking-tight capitalize text-pri"
      >
        <h2 class="px-4 py-2 border-b">{{ data.title }}</h2>
      </div>
      <div class="img grid grid-cols-5 mb-6 h-96">
        <div class="col-span-4 relative">
          <div class="swiper-container">
            <swiper
              :pagination="{ type: 'progressbar' }"
              :navigation="{
                nextEl: '.img .custom-next',
                prevEl: '.img .custom-prev',
              }"
              :modules="modules"
              :space-between="20"
              :slides-per-view="1"
              class="mySwiper"
            >
              <swiper-slide
                v-for="img in data.img"
                :key="img"
              >
                <div class="card border border-gray-200 flex flex-col">
                  <div class="img h-96">
                    <NuxtImg
                      class="w-full h-full object-cover"
                      :src="`${img}`"
                    />
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="custom-prev">
            <div class="w-1/2 h-1/2 border-t-2 border-l-2 border-white"></div>
          </div>
          <div class="custom-next">
            <div class="w-1/2 h-1/2 border-t-2 border-r-2 border-white"></div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="content">
        <h3>Introduction</h3>
      </div>
    </section>
    <aside class="query"></aside>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
definePageMeta({
  layout: "van",
});
const route = useRoute();
// const title = route.params.type.replace(/-/g, " ");
const data = {
  title: "6-seater-toyota-vellfire",
  desc: [
    "If you are looking for 100% Comfort, VIP Style, and Luxurious Feel, then Toyota Vellfire imported van is the best choice. With multiple design modes and thoughtful design, choose this classic model for your sophisticated journey. We assure to provide contactless delivery and pick-up of the luxury van with 100% sanitization, safety and hygiene practices. Moreover, you are free to take away the luxury vip van with no limits and zero hidden charg.",
    "We offer Toyota Vellfire imported luxury van on hire in Delhi, Gurugram, Noida, Agra and Jaipur on best price. You can rent a Toyota Vellfire VIP luxury van for Local run Personal Uses, Business Trip for Corporate clients and Outstation Trip in India. Rent a 6 Seater Toyota Vellfire imported luxurious VIP Van reservation can be done for Leisure Trips, VIP Meetings & Conventions, Business Travel, Wedding, Corporate Meeting, Video Shoots, Celebrity and Outstation Trip. Get a best deals on  Toyota Vellfire imported van rental service or online booking of Vehicles is available for Airport Pick Up and Drop Service, Local Run, City Tour and Outstation Trips such as Agra Jaipur Tour, Shimla Manali Tour, Haridwar Rishikesh Tours, Himachal Tour, Uttarakhand Tour, North India Tour, Rajasthan Tour and many more.",
  ],
  img: [
    "https://minivanhiredelhi.com/uploads/4978_6.jpeg",
    "https://minivanhiredelhi.com/uploads/30756_8.jpeg",
    "https://minivanhiredelhi.com/uploads/97063_16.jpeg",
    "https://minivanhiredelhi.com/uploads/8496_vellfire-toyota%20van.jpg",
  ],
};

const modules = [Pagination, Navigation];
</script>
<style scoped>
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
  border: 2px solid white;
}
.custom-prev {
  left: 2rem;
  transform: rotate(-45deg) translateY(-50%);
}
.custom-next {
  right: 2rem;
  transform: rotate(45deg) translateY(-50%);
}
</style>
