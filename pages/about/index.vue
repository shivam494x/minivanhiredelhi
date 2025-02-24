<template>
  <section class="w-full side_padding py-20 relative">
    <div class="container m-auto flex z-10 relative">
      <div class="w-3/5 h-max m-auto">
        <h2 class="text-sm uppercase font-medium text-pri">
          {{ allData?.title.en }}
        </h2>
        <h5
          class="text-4xl font-semibold capitalize my-4 text-complementary tracking-tight"
        >
          {{ allData?.top_title.en }}
        </h5>
        <p class="text-gray-700 py-4">
          {{ allData?.top_description.en }}
        </p>
      </div>
      <div
        class="w-max relative m-auto rounded-full border-dashed border-black center h-auto p-4"
        style="aspect-ratio: 1"
      >
        <div class="absolute take_screen -z-10">
          <svg
            class="w-full h-full"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_114_3)">
              <line
                x1="-38.3536"
                y1="99.8834"
                x2="99.8834"
                y2="-38.3536"
                stroke="#EC3323"
              />
              <line
                x1="-29.1612"
                y1="109.076"
                x2="109.076"
                y2="-29.1612"
                stroke="#EC3323"
              />
              <line
                x1="-19.9688"
                y1="118.268"
                x2="118.268"
                y2="-19.9688"
                stroke="#EC3323"
              />
              <line
                x1="-10.7764"
                y1="127.461"
                x2="127.461"
                y2="-10.7764"
                stroke="#EC3323"
              />
              <line
                x1="-1.58401"
                y1="136.653"
                x2="136.653"
                y2="-1.584"
                stroke="#EC3323"
              />
              <line
                x1="7.60839"
                y1="145.845"
                x2="145.845"
                y2="7.60838"
                stroke="#EC3323"
              />
              <line
                x1="16.8008"
                y1="155.038"
                x2="155.038"
                y2="16.8008"
                stroke="#EC3323"
              />
              <line
                x1="25.9932"
                y1="164.23"
                x2="164.23"
                y2="25.9932"
                stroke="#EC3323"
              />
              <line
                x1="35.1856"
                y1="173.422"
                x2="173.422"
                y2="35.1855"
                stroke="#EC3323"
              />
              <line
                x1="44.3779"
                y1="182.615"
                x2="182.615"
                y2="44.3779"
                stroke="#EC3323"
              />
              <line
                x1="53.5703"
                y1="191.807"
                x2="191.807"
                y2="53.5703"
                stroke="#EC3323"
              />
              <line
                x1="62.7627"
                y1="201"
                x2="201"
                y2="62.7627"
                stroke="#EC3323"
              />
              <line
                x1="71.9551"
                y1="210.192"
                x2="210.192"
                y2="71.9551"
                stroke="#EC3323"
              />
              <line
                x1="81.1475"
                y1="219.384"
                x2="219.384"
                y2="81.1475"
                stroke="#EC3323"
              />
              <line
                x1="90.3399"
                y1="228.577"
                x2="228.577"
                y2="90.3399"
                stroke="#EC3323"
              />
              <line
                x1="99.5323"
                y1="237.769"
                x2="237.769"
                y2="99.5323"
                stroke="#EC3323"
              />
              <line
                x1="108.725"
                y1="246.962"
                x2="246.962"
                y2="108.725"
                stroke="#EC3323"
              />
              <line
                x1="117.917"
                y1="256.154"
                x2="256.154"
                y2="117.917"
                stroke="#EC3323"
              />
              <line
                x1="127.109"
                y1="265.346"
                x2="265.346"
                y2="127.109"
                stroke="#EC3323"
              />
              <line
                x1="136.302"
                y1="274.539"
                x2="274.539"
                y2="136.302"
                stroke="#EC3323"
              />
              <line
                x1="145.494"
                y1="283.731"
                x2="283.731"
                y2="145.494"
                stroke="#EC3323"
              />
            </g>
            <defs>
              <clipPath id="clip0_114_3">
                <rect width="200" height="200" rx="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          class="absolute take_screen -z-20 bg-complementary rounded-full translate-x-12 translate-y-6"
        ></div>
        <NuxtImg
          class="h-4 md:h-8 lg:h-12 xl:h-16"
          src="/img/logo.png"
          alt="Logo"
          loading="lazy"
          format="webp"
        />
      </div>
    </div>
  </section>
  <section class="w-full grid grid-cols-2 bg-complementary text-offWhite my-10">
    <div class="h-full max-h-72">
      <NuxtImg
        src="img/about/car.png"
        class="h-full object-cover relative bottom-2 w-4/5 m-auto max-w-xl"
      />
    </div>
    <div class="h-max m-auto px-4 bg-transparent">
      <h2
        class="text-2xl capitalize font-medium text-pri px-4 pt-3 tracking-tight"
      >
        {{ allData?.middle_title.en }}
      </h2>
      <p
        class="text-sm lg:text-base leading-relaxed p-4 m-auto h-max tracking-wide"
        style="word-spacing: 3px"
        :class="{ expanded: isExpanded }"
      >
        {{ isExpanded ? main_desc : truncatedText }}
        <button @click="toggleText" class="text-pri underline inline">
          {{ isExpanded ? "Show Less" : "Read More" }}
        </button>
      </p>
    </div>
  </section>
  <section class="side_padding my-10">
    <h3
      class="text-3xl capitalize font-medium text-pri px-4 pt-3 tracking-tight m-auto w-max my-10"
    >
      our customer Services
    </h3>
    <div v-if="allData" class="space-y-12 p-6 bg-gray-50">
      <!-- Travel Services & Tailor-Made Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="bg-white p-6 rounded-2xl shadow-md h-full">
          <h3
            class="capitalize text-2xl text-pri font-semibold text-center mb-4"
          >
            {{ travelServices.heading }}
          </h3>
          <ul class="grid grid-cols-2 gap-3 text-sm lg:text-base text-gray-700">
            <li
              v-for="txt in travelServices.services"
              class="flex items-center space-x-2"
            >
              <span>✔️</span> <span>{{ txt }}</span>
            </li>
          </ul>
        </div>
        <div
          class="p-6 bg-gradient-to-r from-blue-100 to-white rounded-2xl shadow-md h-full"
        >
          <h3
            class="capitalize text-2xl text-pri font-semibold text-center mb-4"
          >
            {{ travelServices.heading2 }}
          </h3>
          <p class="desc text-gray-700 leading-relaxed">
            {{ travelServices.desc }}
          </p>
        </div>
      </div>

      <!-- Customer Services Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          class="order-2 md:order-1 bg-gradient-to-r from-purple-100 to-white p-6 rounded-2xl shadow-md"
        >
          <h3
            class="capitalize text-2xl text-pri font-semibold text-center mb-4"
          >
            {{ customerService.heading2 }}
          </h3>
          <p class="desc text-gray-700 leading-relaxed">
            {{ customerService.desc }}
          </p>
        </div>
        <div
          class="order-1 md:order-2 bg-white p-6 rounded-2xl shadow-md h-full"
        >
          <h3
            class="capitalize text-2xl text-pri font-semibold text-center mb-4"
          >
            {{ customerService.heading }}
          </h3>
          <ul class="text-sm lg:text-base text-gray-700 space-y-2">
            <li
              v-for="txt in customerService.services"
              class="flex items-center space-x-2"
            >
              <span>✅</span> <span>{{ txt }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useAll } from "~/stores/api";

const allStore = useAll();
const allData = ref();

const travelServices = ref({});

const customerService = ref({
  heading: "Customer Services",
  desc: "Customer service is at the heart of our organization. We continuously innovate and improve our services. Our travel consultants are friendly, professional, and experienced in accommodating both seasoned travelers and those new to the world of travel.",
  heading2: "We Care for Our Customers Through:",
  services: [
    "Provision with best services",
    "Well done tour arrangements",
    "Quick response to urgent situations",
    "24X7 available for communication",
  ],
});

const main_desc = ref();

const truncateText = (text, maxLength) => {
  if (!text) return;
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

const maxLength = 350; // Adjust the truncation limit
const truncatedText = ref(truncateText(main_desc.value, maxLength));
const isExpanded = ref(false);
const toggleText = () => {
  isExpanded.value = !isExpanded.value;
};

const getData = async () => {
  await allStore.fetchData();
  if (allStore && allStore.about) {
    const { about } = allStore;
    allData.value = about;

    const {
      bottom1_point,
      bottom1_title,
      bottom2_description,
      bottom2_title,
      bottom3_description,
      bottom3_title,
      bottom4_point,
      bottom4_title,
      middle_description,
    } = about;

    main_desc.value = middle_description.en;

    travelServices.value = {
      heading: bottom1_title.en,
      services: bottom1_point,
      heading2: bottom2_title.en,
      desc: bottom2_description.en,
    };
    customerService.value = {
      heading: bottom4_title.en,
      services: bottom4_point,
      heading2: bottom3_title.en,
      desc: bottom3_description.en,
    };
  }
};

onMounted(() => {
  getData();
});
</script>

<style scoped>
.heading .before::before {
  background: linear-gradient(
    0deg,
    rgba(9, 2, 5, 1) 0%,
    rgba(255, 228, 243, 0) 100%
  );
}
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
