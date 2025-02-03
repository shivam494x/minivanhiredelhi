<template>
  <div class="grid grid-cols-4">
    <div class="col-span-3 mr-8">
      <section class="">
        <div
          class="title text-3xl font-semibold tracking-tight capitalize text-pri"
        >
          <h2 class="px-4 py-5">{{ data.title }}</h2>
        </div>
        <div class="img grid grid-cols-5 h-96 border border-b-0 gap-4">
          <div class="col-span-4 relative">
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
                :modules="modules"
                :space-between="20"
                :slides-per-view="1"
                class="mySwiper"
              >
                <swiper-slide v-for="img in data.img" :key="img">
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
          <div class="max-h-96 mini">
            <div class="swiper-container h-[28rem]">
              <swiper
                :pagination="false"
                :navigation="{
                  nextEl: '.img .custom-next',
                  prevEl: '.img .custom-prev',
                }"
                :loop="true"
                :direction="'vertical'"
                :modules="modules"
                :space-between="40"
                :slides-per-view="4"
                class="mySwiper h-96 p-4"
              >
                <swiper-slide v-for="img in data.img" :key="img">
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
        <div class="content">
          <div
            class="px-2 py-6 text-3xl border-b mx-1 font-medium capitalize border-pri tracking-tight"
          >
            <h3>Introduction</h3>
          </div>
          <div
            class="desc border-b py-6 px-5 text-gray-800 leading-relaxed space-y-4"
          >
            <p v-for="p in data.desc">
              {{ p }}
            </p>
          </div>
          <div class="details border-b py-6 px-4">
            <h4 class="capitalize font-medium pb-4">details</h4>
            <ul class="list-disc pl-11 text-sm capitalize text-gray-700">
              <li
                v-for="(value, key) in data.details"
                :key="key"
                v-if="data.details"
                class="py-1"
              >
                {{ key }}: {{ value }}
              </li>
            </ul>
          </div>
          <div class="features border-b py-6 px-4">
            <h4 class="capitalize font-medium pb-4">features</h4>
            <ul class="list-disc pl-11 text-sm capitalize text-gray-700">
              <li
                v-for="(value, key) in data.features.list"
                :key="key"
                v-if="data.features"
                class="py-1 space-x-3"
              >
                <span v-if="value.icon">
                  <Icon :name="value.icon" />
                </span>
                <span>
                  {{ value.feature }}
                </span>
              </li>
            </ul>
          </div>
          <div class="bottom_desc border-b py-6 px-4">
            <div class="text-gray-800 leading-relaxed">
              <p>
                {{ data.bottom_desc }}
              </p>
            </div>
          </div>
          <div class="note border-b py-6 px-4">
            <h4 class="capitalize font-medium pb-4">Please Note</h4>
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
        <UtilityQueryForm />
      </section>
    </div>
    <aside class="border border-gray-300 w-full h-max my-20">
      <div class="border-b mb-5 pb-4 p-3 border-pri">
        <div class="capitalize text-lg font-medium pb-3 border-b text-center">
          <h4>need help?</h4>
        </div>
        <div class="flex items-start flex-col space-y-4 mt-4">
          <span>Connect with Aspark Holidays with best price and offers.</span>
          <div class="text-sm text-gray-800 flex flex-col space-y-2 pl-2">
            <span>+91-9999317846, &nbsp; +91-9810817846</span>
            <span>sales@asparkholidays.com</span>
          </div>
        </div>
      </div>
      <div>
        <div
          class="capitalize mx-3 text-lg font-medium pb-3 text-center border-b"
        >
          <h4>why travel with us</h4>
        </div>
        <ul class="p-4 space-y-6">
          <li v-for="x in travelBenefits">
            <div>
              <h5>{{ x.title }}</h5>
              <p class="text-gray-800 text-sm">{{ x.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
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
  details: {
    manufacturer: "Toyota",
    style: "Passenger Van",
    capacity: "6 passenger + 01 Driver",
  },
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
      { feature: "Dual Panel Electric Sunroof", icon: "i-mdi-car-roof-box" },
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
const travelBenefits = [
  {
    title: "Excellent Support",
    description: "We provide 27x7 support to all our customers",
    image: "https://minivanhiredelhi.com/assets/images/support-1.png",
  },
  {
    title: "Best Price & Savings",
    description: "Serve with best prices and offers to customers",
    image: "https://minivanhiredelhi.com/assets/images/support-2.png",
  },
  {
    title: "Happy Customers",
    description: "Our motto is to give best services for our customers",
    image: "https://minivanhiredelhi.com/assets/images/support-3.png",
  },
];
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
.swiper-slide {
  filter: brightness(0.4);
}
.swiper-slide-active {
  filter: brightness(1);
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
