<template>
  <div class="side_padding section_padding bg-white text-secondary">
    <div class="container">
    <div class="xl:space-y-20 md:space-y-14 space-y-10">
      <div class="headinngs uppercase center flex-col md:space-y-2">
        <h5 class="text-base md:text-lg tracking-wide center text-pri">
          services
        </h5>
        <h2
          class="text-2xl md:text-3xl font-semibold tracking-tight capitalize text-center"
        >
          providing amazing services to our clients
        </h2>
      </div>
      <div class="services lg:px-16 md:px-12 px-8">
        <ul
          class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-10 gap-y-14"
        >
          <li class="max-w-80" v-for="(service, index) in services">
            <div class="flex flex-col">
              <div class="icon">
                <div
                  class="border relative border-dashed rounded-full p-9 m-auto w-max center border-pink-900"
                >
                  <span
                    class="absolute top-0 right-0 w-8 h-8 rounded-full bg-pri text-offWhite center -translate-x-1"
                    >{{ formatToTwoDigits(index + 1) }}</span
                  >
                  <UIcon :name="service.icon" class="w-10 h-10" />
                </div>
              </div>
              <div class="heading center text-center my-4 font-semibold">
                <NuxtLink class="py-4 before relative">{{
                  service.heading
                }}</NuxtLink>
              </div>
              <div class="txt center text-center text-sm text-gray-500">
                <p>
                  {{ service.paragraph }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.container {
  padding: 3rem 0;
}
.before::before {
  height: 1px;
  width: 3rem;
  transform: translate(-50%, 0%);
  left: 50%;
  background-color: var(--primary-color);
  bottom: 0;
  z-index: 0;
}
</style>
<script setup>
const services = [
  {
    icon: "mdi:piggy-bank-outline",
    heading: "Fixed Rates",
    paragraph:
      "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.",
  },
  {
    icon: "mdi:car-outline",
    heading: "Reliable Transfers",
    paragraph:
      "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.",
  },
  {
    icon: "mdi:monitor-mouse",
    heading: "Free Cancellation",
    paragraph:
      "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.",
  },
  {
    icon: "mdi:medal-outline",
    heading: "Award Winning Service",
    paragraph:
      "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.",
  },
  {
    icon: "mdi:star-outline",
    heading: "Highly Rated",
    paragraph:
      "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.",
  },
  {
    icon: "mdi:clock-time-four-outline",
    heading: "24/7 Support",
    paragraph:
      "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.",
  },
];
function formatToTwoDigits(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
</script>
