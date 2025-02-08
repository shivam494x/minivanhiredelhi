<template>
  <div class="side_padding">
    <div class="lg:grid grid-cols-4 flex flex-col">
      <div class="col-span-3 lg:mr-8">
        <section class="">
          <div
            class="title md:text-3xl text-xl font-semibold tracking-tight capitalize"
          >
            <h2 class="px-4 py-5">{{ data.title }}</h2>
          </div>
          <div
            class="img md:grid flex flex-col grid-cols-5 md:h-96 gap-4 max-w-sm m-auto md:max-w-2xl xl:max-w-4xl"
          >
            <div class="col-span-4 relative ">
              <div class="swiper-container">
                <swiper
                  :pagination="{ type: 'fraction' }"
                  :navigation="{
                    nextEl: '.img .custom-next',
                    prevEl: '.img .custom-prev',
                  }"
                  :loop="true"
                  :grab-cursor="false"
                  :grab="false"
                  :allow-touch-move="false"
                  :modules="modules"
                  :space-between="20"
                  :slides-per-view="1"
                  class="mySwiper"
                >
                  <swiper-slide v-for="img in data.img" :key="img">
                    <div class="card border border-gray-200 flex flex-col">
                      <div class="img md:h-96 h-56">
                        <NuxtImg
                          alt="img"
                          class="w-full h-full object-cover bg-center"
                          :src="`${img}`"
                        />
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
              <div class="custom-prev left-6 h-5 md:h-8">
                <div
                  class="w-1/2 h-1/2 border-t-2 border-l-2 border-white"
                ></div>
              </div>
              <div class="custom-next right-6 h-5 md:h-8">
                <div
                  class="w-1/2 h-1/2 border-t-2 border-r-2 border-white"
                ></div>
              </div>
            </div>
            <div class="md:max-h-96 mini max-h-20">
              <div class="swiper-container md:h-[28rem]">
                <swiper
                  :pagination="false"
                  :navigation="{
                    nextEl: '.img .custom-next',
                    prevEl: '.img .custom-prev',
                  }"
                  :loop="true"
                  :direction="swiperDirection"
                  :allow-touch-move="false"
                  :modules="modules"
                  :breakpoints="{
                    0: { spaceBetween: 10 }, // Small screens (default)
                    768: { spaceBetween: 15 }, // Medium screens (sm/md)
                    1024: { spaceBetween: 40 }, // Large screens (lg and up)
                  }"
                  :slides-per-view="4"
                  class="mySwiper md:h-96 h-12 p-4"
                >
                  <swiper-slide v-for="img in data.img" :key="img">
                    <div
                      class="card border border-gray-200 flex flex-col gap-4"
                    >
                      <div class="img md:h-24 h-12 md:aspect-square">
                        <NuxtImg
                          alt="img"
                          class="w-full h-full object-cover"
                          :src="`${img}`"
                        />
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
          <div class="content">
            <div
              class="px-2 py-6 text-3xl border-b mx-1 font-medium capitalize border-pri tracking-tight text-pri"
            >
              <h3>Introduction</h3>
            </div>
            <div
              class="desc border-b py-6 lg:px-5 px-3 text-sm text-gray-800 leading-relaxed space-y-4"
            >
              <p v-for="p in data.desc">
                {{ p }}
              </p>
            </div>
            <div class="details text-pri border-b py-6 px-2 md:px-4">
              <h4 class="capitalize font-medium pb-4">details</h4>
              <ul
                class="text-sm capitalize text-gray-700 flex flex-col lg:flex-row gap-6 justify-between border-[10px] border-complementary p-4"
              >
                <li
                  v-for="(
                    { manufacturer, style, detail, icon }, key
                  ) in data.details"
                  :key="key"
                  class="py-1 flex space-x-3"
                >
                  <Icon v-if="icon" :name="icon" class="text-pri text-xl" />
                  <span class="center">
                    <span v-if="manufacturer" class=""
                      >Manufacturer:
                      <span class="text-black px-2">
                        {{ manufacturer }}
                      </span>
                    </span>
                    <span v-if="style" class=""
                      >Style:
                      <span class="text-black px-2">
                        {{ style }}
                      </span>
                    </span>
                    <span v-if="detail" class=""
                      >Capacity:
                      <span class="text-black px-2">
                        {{ detail }}
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div class="features text-pri border-b py-6 px-2 md:px-4">
              <h4 class="capitalize font-medium pb-4">features</h4>
              <ul
                class="pl-6 text-sm capitalize text-gray-700 grid md:grid-cols-2 grid-cols-1 gap-6 justify-between border-[10px] border-complementary p-4"
              >
                <li
                  v-for="(value, key) in data.features.list"
                  :key="key"
                  v-if="data.features"
                  class="py-1 space-x-3 flex"
                >
                  <span v-if="value.icon" class="center">
                    <Icon :name="value.icon" class="text-pri text-xl" />
                  </span>
                  <span class="h-full center">
                    {{ value.feature }}
                  </span>
                </li>
              </ul>
            </div>
            <div class="bottom_desc text-pri border-b py-6 px-4 text-sm">
              <div class="text-gray-800 leading-relaxed">
                <p>
                  {{ data.bottom_desc }}
                </p>
              </div>
            </div>
            <div class="note text-pri border-b py-6 px-4 text-sm">
              <h4
                class="capitalize font-medium pb-4 flex items-center space-x-2"
              >
                <span>Please Note</span>
                <Icon name="mdi:information-outline" class="text-pri text-xl" />
              </h4>
              <ul class="list-disc pl-11 text-sm capitalize text-gray-700">
                <li
                  v-for="(value, key) in data.additional_notes"
                  :key="key"
                  v-if="data.details"
                  class="py-1"
                >
                  {{ value }}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="query border-t border-pri">
          <UtilityQueryForm :title="data.title" />
        </section>
      </div>
      <aside class="w-full h-max lg:my-20 my-10 lg:space-y-10 md:grid grid-cols-2 lg:block gap-10 flex flex-col">
        <OthersNav2 :nav="van_links" class="w-full md:order-2"/>
        <UtilityNeedHelp />
      </aside>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const route = useRoute();
const van_links = ref();
const { data: navData, error } = await useFetch("/api/nav/van");
if (navData) {
  van_links.value = navData.value.sub;
} else {
  console.error(error);
}

const data = {
  title: "6-seater-toyota-vellfire",
  img: [
    "https://minivanhiredelhi.com/uploads/4978_6.jpeg",
    "https://minivanhiredelhi.com/uploads/30756_8.jpeg",
    "https://minivanhiredelhi.com/uploads/97063_16.jpeg",
    "https://minivanhiredelhi.com/uploads/8496_vellfire-toyota%20van.jpg",
    "https://minivanhiredelhi.com/uploads/97063_16.jpeg",
    "https://minivanhiredelhi.com/uploads/30756_8.jpeg",
  ],
  desc: [
    "If you are looking for 100% Comfort, VIP Style, and Luxurious Feel, then Toyota Vellfire imported van is the best choice. With multiple design modes and thoughtful design, choose this classic model for your sophisticated journey. We assure to provide contactless delivery and pick-up of the luxury van with 100% sanitization, safety and hygiene practices. Moreover, you are free to take away the luxury vip van with no limits and zero hidden charg.",
    "We offer Toyota Vellfire imported luxury van on hire in Delhi, Gurugram, Noida, Agra and Jaipur on best price. You can rent a Toyota Vellfire VIP luxury van for Local run Personal Uses, Business Trip for Corporate clients and Outstation Trip in India. Rent a 6 Seater Toyota Vellfire imported luxurious VIP Van reservation can be done for Leisure Trips, VIP Meetings & Conventions, Business Travel, Wedding, Corporate Meeting, Video Shoots, Celebrity and Outstation Trip. Get a best deals on  Toyota Vellfire imported van rental service or online booking of Vehicles is available for Airport Pick Up and Drop Service, Local Run, City Tour and Outstation Trips such as Agra Jaipur Tour, Shimla Manali Tour, Haridwar Rishikesh Tours, Himachal Tour, Uttarakhand Tour, North India Tour, Rajasthan Tour and many more.",
  ],
  details: [
    { manufacturer: "Toyota", icon: "i-mdi-car" },
    { style: "Passenger Van", icon: "i-mdi-bus" },
    { detail: "6 passenger + 01 Driver", icon: "i-mdi-account-group" },
  ],
  features: {
    title: "",
    list: [
      {
        feature: "6 Luxurious seats with seat belts for comfort and safety",
        icon: "i-mdi-seatbelt",
      },
      { feature: "7 SRS Airbags with ABS and EBD", icon: "i-mdi-airbag" },
      { feature: "VIP Lounge Seats", icon: "i-mdi-seat-recline-extra" },
      { feature: "Smart Power Sliding Rear Doors", icon: "i-mdi-car-door" },
      {
        feature: "13-inch display screens with Wifi and HDMI",
        icon: "i-mdi-monitor",
      },
      {
        feature:
          "JBL music system with 17 speakers for a lounge-class experience",
        icon: "i-mdi-speaker",
      },
      {
        feature: '18" Crystal Cut Alloy Steel Wheels',
        icon: "i-mdi-car-tire-alert",
      },
      { feature: "Tri one Fully Automatic AC", icon: "i-mdi-air-conditioner" },
      { feature: "Dual Panel Electric Sunroof", icon: "i-mdi-car" },
    ],
  },
  bottom_desc:
    "Rent Kia Carnival luxury car to metro cities such as New Delhi City, Gurugram, Noida, Ghaziabad, Faridabad (NCR) and Agra Jaipur Rajasthan. Hire Kia Carnival imported car for Local Run, City Tour, Airport Transfers, Sightseeing Tours, Corporate Travel and Business Meetings. We have a fleet of Kia Carnival Limousine Van accessible for outstation tours to Agra, Rajasthan Tour (Jaipur, Jodhpur, Udaipur, and Jaisalmer). We do customize special Rajasthan Holiday Tour Packages like Weekend Tours, Agra Jaipur Tour, Rajasthan Tour, Rajasthan Family Vacation, Golden Triangle Tour at affordable prices.",
  additional_notes: [
    "Limited numbers of 6 Seater Kia Carnival Passenger Car available.",
    "Nationwide services, booking subject to availability.",
    "Not available in all cities",
  ],
};
const modules = [Pagination, Navigation];
const swiperDirection = ref("horizontal");

const updateSwiperDirection = () => {
  swiperDirection.value = window.innerWidth >= 768 ? "vertical" : "horizontal";
};

onMounted(() => {
  updateSwiperDirection();
  window.addEventListener("resize", updateSwiperDirection);
});
</script>
<style scoped>
.custom-prev,
.custom-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  aspect-ratio: 1;
  z-index: 10;
  border: 2px solid white;
}
@keyframes moveGrid {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 40px 40px; /* Moves by the grid size */
  }
}
.features ul,
.details ul {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 40px 40px; /* Adjust grid size */
  animation: moveGrid 3s linear infinite;
}
.swiper-slide {
  filter: brightness(0.4);
}
.swiper-slide-active {
  filter: brightness(1);
}

.custom-prev {
  transform: rotate(-45deg) translateY(-50%);
}
.custom-next {
  transform: rotate(45deg) translateY(-50%);
}
</style>
