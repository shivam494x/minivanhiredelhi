<template>
  <div class="side_padding">
    <section class="container grid gap-10 grid-cols-3 pt-20">
      <div class="col-span-2 img">
        <div class="img grid grid-cols-1 grid-rows-3 h-[28rem] gap-4">
          <div class="row-span-2 relative">
            <div class="swiper-container">
              <swiper
                :pagination="{ type: 'fraction' }"
                :navigation="{
                  nextEl: '.img .custom-next',
                  prevEl: '.img .custom-prev',
                }"
                :draggable="false"
                :loop="true"
                :grab-cursor="false"
                :grab="false"
                :modules="modules"
                :space-between="20"
                :allow-touch-move="false"
                :slides-per-view="1"
                class="mySwiper"
              >
                <swiper-slide v-for="img in carData.img" :key="img">
                  <div class="card border border-gray-200 flex flex-col">
                    <div class="img h-72 m-auto">
                      <NuxtImg
                        class="w-full h-full object-cover"
                        :src="`${img}`"
                      />
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="custom-prev group">
              <div
                class="w-2 h-2 border-t-2 border-l-2 border-gray-400 -rotate-45 group-hover:border-pri duration-150"
              ></div>
            </div>
            <div class="custom-next group">
              <div
                class="w-2 h-2 border-t-2 border-r-2 border-gray-400 rotate-45 group-hover:border-pri duration-150"
              ></div>
            </div>
          </div>
          <div class="h-full mini">
            <div class="swiper-container h-32">
              <swiper
                :pagination="false"
                :navigation="{
                  nextEl: '.img .custom-next',
                  prevEl: '.img .custom-prev',
                }"
                :draggable="false"
                :loop="true"
                :direction="'horizontal'"
                :modules="modules"
                :space-between="40"
                :allow-touch-move="false"
                :slides-per-view="4"
                class="mySwiper h-32 p-4"
              >
                <swiper-slide v-for="img in carData.img" :key="img">
                  <div class="card border border-gray-200 flex flex-col gap-4">
                    <div class="img h-24 aspect-square">
                      <NuxtImg
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
      </div>
      <div class="info col-span-1 max-w-[21rem]">
        <div class="border border-red-300 h-max px-8 py-4 w-full">
          <div class="w-full text-start text-lg mb-4">
            <h3>
              {{ carData.name }}
            </h3>
          </div>
          <ul class="">
            <li
              v-for="(key, value) in carData.features"
              class="py-2 text-sm capitalize flex justify-between max-w-48"
            >
              <span class="text-gray-600">
                {{ value }}
              </span>
              <span class="text-pri"> {{ key }} </span>
            </li>
          </ul>
        </div>
        <div
          class="btn mx-auto uppercase font-bold w-full mt-4 py-4 center rounded-full bg-pri text-white hover:bg-white hover:text-pri border border-pri duration-150 cursor-pointer"
        >
          Rent a car
        </div>
      </div>
    </section>

    <section class="container my-12 py-4">
      <div
        class="heading text-xl tracking-tight py-4 border-b border-red-300 text-pri"
      >
        <h4>Vehical overview</h4>
      </div>
      <div class="desc text-gray-600 text-sm py-5 leading-loose">
        <p v-for="p in carData.description.overall">
          {{ p }}
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 text-gray-600 text-sm my-4">
        <div class="vid w-full m-auto h-72 relative">
          <div class="brightness-50 aspect-[1/0.5] w-full h-full">
            <NuxtImg
              class="w-full h-full object-contain"
              src="https://minivanhiredelhi.com/uploads/72057_Land-Range%20Rover%20Vogue.jpeg"
            />
          </div>
          <div
            class="absolute top-1/2 center left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-10 cursor-pointer"
          >
            <Icon name="ei:play" class="h-full w-full text-5xl font-bold text-pri"/>
          </div>
        </div>
        <div class="flex flex-col">
          <ul class="h-full flex flex-col justify-around">
            <li
              v-for="l in carData.description.bullet_points"
              class="flex justify-start space-x-3 py-1 items-center"
            >
              <Icon name="lucide:arrow-right-circle" class="text-pri" />
              <p>{{ l }}</p>
            </li>
          </ul>
          <div class="desc center my-5">
            <p v-for="p in carData.description.bottom">
              {{ p }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="query border-t border-pri w-3/5">
      <UtilityQueryForm />
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const modules = [Pagination, Navigation];
definePageMeta({
  layout: "van",
});
const carData = ref({});

const getCarData = () => {
  const data = {
    name: "Range Rover Vogue",
    img: [
      "https://minivanhiredelhi.com/uploads/72057_Land-Range%20Rover%20Vogue.jpeg",
      "https://minivanhiredelhi.com/uploads/21769_WhatsApp%20Image%202023-03-22%20at%2011.25.37.jpeg",
      "https://minivanhiredelhi.com/uploads/8643_WhatsApp%20Image%202023-03-22%20at%2011.25.36%20(1).jpeg",
      "https://minivanhiredelhi.com/uploads/3632_WhatsApp%20Image%202023-03-22%20at%2011.25.37%20(1).jpeg",
      "https://minivanhiredelhi.com/uploads/85466_WhatsApp%20Image%202023-03-22%20at%2011.25.35%20(1).jpeg",
    ],
    features: {
      transmission: "Auto",
      airbags: 4,
      technology: "Hi-Fi",
      fuelType: "Petrol",
      power: "350 Hp",
      seats: 4,
      fuelCapacity: "20 Litres",
      modelYear: 2016,
    },
    description: {
      overall: [
        "5 Seater the latest 2023 model Range Rover Vogue car is the most desirable ever made and will continue to be the world's must-have luxury SUV from Jaguar Land, a British Luxury car manufacturing company. Cherish the perfect balance of features, blending technology & luxury together which makes the new Range Rover Vogue so distinctive & individual. The new Range Rover is considered to be a perfect balance of technology, efficiency & luxury. Besides its power the Range Rover is engineered for ultimate efficiency making it a smart choice for a family vacation or road trip. Highly responsive its adaptive dynamics react to every movement of the car to minimize roll and maximize passenger comfort. ",
        "5 Seater Range Rover Vogue Van is trendy for family tours, corporate travel and small group tours. Aspark Holidays offer safe and reliable imported vans on hire. Because of the new launch Range Rover Vogue Van is currently accessible in Delhi, Gurugram, and Noida. Luxury Range Rover Vogue is competent to hold 5 passengers, perfect for corporate tour, family travel, business meetings, airport transfers and sightseeing tours.",
      ],
      bullet_points: [
        "5 Luxurious seats with seat belts for comfort and safety",
        "Forward-thinking exterior design",
        "Innovative Pixel LED Headlights with signature DRL",
        "Plug-in electric hybrid (PHEV) with rapid DC charging capability",
        "Contemporary Interior",
        "Intuitive and innovative technologies",
        "On and off-road handling",
        "All-weather capability",
      ],
      bottom: [
        "The weather started getting rough the tiny ship was lost the min ting a maxum security road and back stock a against ade lost the minnow weather started ting rough the tiny ship was lost the min ting a maximum security road and back at stock a against ade lost the minnow the min ting a maximum.",
      ],
    },
  };
  carData.value = data;
};
getCarData();
</script>
<style scoped>
.custom-prev,
.custom-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 35px;
  border-radius: 0.175rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  border: 1px solid rgb(189, 189, 189);
  transition: all 200ms linear;
}
.custom-prev:hover,
.custom-next:hover {
  border-color: var(--primary-color);
}
.swiper-slide {
  filter: brightness(0.4);
  display: flex;
  justify-content: center;
  align-items: end;
}
.swiper-slide-active {
  filter: brightness(1);
}

.custom-prev {
  transform: translateY(-50%);
  left: 0;
}
.custom-next {
  right: 0;
  transform: translateY(-50%);
}
</style>
