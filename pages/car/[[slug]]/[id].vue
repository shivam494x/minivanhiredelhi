<template>
  <div class="side_padding">
    <section
      class="container lg:grid gap-10 grid-cols-3 lg:pt-20 pt-10 flex flex-col"
    >
      <div class="col-span-2 img">
        <div class="img flex flex-col gap-4">
          <!-- Main Image Slider -->
          <div class="relative">
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
                :modules="modules"
                :space-between="10"
                :allow-touch-move="false"
                :slides-per-view="1"
                class="mySwiper"
              >
                <swiper-slide v-for="img in carData.img" :key="img">
                  <div class="card border border-gray-200 flex flex-col">
                    <div
                      class="img h-64 sm:h-72 md:h-96 lg:h-[300px] xl:h-[400px] m-auto"
                    >
                      <NuxtImg
                        alt="img"
                        class="w-full h-full object-cover rounded-lg"
                        :src="img"
                        format="webp"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 800px"
                        :width="800"
                        :height="500"
                        loading="lazy"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>

            <!-- Custom Navigation Buttons -->
            <div
              class="custom-prev group absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer"
            >
              <div
                class="w-3 h-3 border-t-2 border-l-2 border-black -rotate-45 group-hover:border-pri duration-150"
              ></div>
            </div>
            <div
              class="custom-next group absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
            >
              <div
                class="w-3 h-3 border-t-2 border-r-2 border-black rotate-45 group-hover:border-pri duration-150"
              ></div>
            </div>
          </div>

          <!-- Thumbnail Slider -->
          <div class="h-max mini">
            <div class="swiper-container">
              <swiper
                :pagination="false"
                :navigation="{
                  nextEl: '.img .custom-next',
                  prevEl: '.img .custom-prev',
                }"
                :draggable="false"
                :loop="true"
                :modules="modules"
                :space-between="10"
                :grab-cursor="false"
                :allow-touch-move="false"
                :breakpoints="{
                  0: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }"
                class="mySwiper p-2 md:p-4"
              >
                <swiper-slide v-for="img in carData.img" :key="img">
                  <div class="card flex flex-col">
                    <div class="img h-20 sm:h-16 md:h-24 lg:h-28">
                      <NuxtImg
                        class="w-full h-full object-cover rounded-md"
                        :src="img"
                        alt="img"
                        format="webp"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 150px"
                        :width="150"
                        :height="150"
                        loading="lazy"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <div class="info col-span-1 mx-auto max-w-96 w-full">
        <div class="border border-red-300 h-max py-2 w-full shadow-2 xl grid_bg">
          <div class="w-full py-3">
            <UDivider
              :label="carData.name"
              :ui="{
                label: 'text-lg text-pri',
              }"
            />
          </div>
          <ul class="px-6 max-w-64 m-auto">
            <li
              v-for="(key, value) in carData.features"
              class="py-2 text-sm capitalize flex justify-between w-full"
            >
              <span class="text-gray-600">
                {{ value }}
              </span>
              <span class="text-pri"> {{ key }} </span>
            </li>
          </ul>
        </div>
        <div
          class="btn shadow-inner shadow-red-400 mx-auto uppercase font-bold space-x-4 w-full mt-4 py-4 center rounded-full bg-pri text-white hover:bg-white hover:text-pri border border-pri duration-150 cursor-pointer"
        >
          <span> Rent now </span>
          <Icon name="mdi:car-key" class="text-xl" />
        </div>
      </div>
    </section>

    <section class="container my-12 py-4 lg:grid grid-cols-4 flex flex-col">
      <div class="col-span-3 lg:mr-8">
        <div
          class="heading lg:text-3xl text-xl capitalize font-medium tracking-tight border-b border-red-300 text-pri"
        >
          <h4 class="bg-red-50 shadow-inner w-max px-8 py-4">
            Vehical overview
          </h4>
        </div>
        <div class="desc">
          <p v-for="p in carData.description.overall">
            {{ p }}
          </p>
          <p v-for="p in carData.description.bottom">
            {{ p }}
          </p>
        </div>
        <div class="flex flex-col gap-4 text-gray-600 text-sm my-4">
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
          </div>
        </div>
      </div>
      <aside
        class="w-full h-max lg:space-y-10 md:grid grid-cols-2 lg:block gap-10 flex flex-col"
      >
        <UtilityQueryForm :title="carData.name" />
        <OthersNav2 :nav="carLinks" class="w-full md:order-2" />
        <UtilityNeedHelp />
      </aside>
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

const carData = ref({});
const carLinks = ref();

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
const { data: navData, error } = await useFetch("/api/nav/car");
if (navData) {
  carLinks.value = navData.value.sub;
} else {
  console.error(error);
}
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
  border: 2px solid rgb(0, 0, 0);
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
