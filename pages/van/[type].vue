<template>
  <section class="container grid gap-10 grid-cols-5">
    <div class="content col-span-3">
      <div
        class="heading font-semibold text-5xl capitalize p-4 border-b tracking-tighter"
      >
        <h2 class="">
          {{ data.title }}
        </h2>
      </div>
      <div class="desc tracking-tight py-6 px-4 text-gray-800">
        <p v-for="p in data.paragraph">
          {{ p }}
        </p>
      </div>
    </div>
    <div class="nav py-8 min-h-80 max-h-96 col-span-2">
      <OthersNav2 :nav="van_links" />
    </div>
  </section>

  <section class="container section_padding relative">
    <UtilityVanSlider :arr="vans" :phase="2" :nav="van_links" />
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
definePageMeta({
  layout: "van",
});

const route = useRoute();
const title = ref();
const van_links = ref([{}]);

const { data: navData, error } = await useFetch("/api/nav/van");
if (navData) {
  van_links.value = navData.value.sub;
} else {
  console.error(error);
}

const data = computed(() => ({
  title,
  paragraph: [
    "If you are looking for 100% Comfort, VIP Style, and Luxurious Feel, then Toyota Vellfire imported van is the best choice. With multiple design modes and thoughtful design, choose this classic model for your sophisticated journey. We assure to provide contactless delivery and pick-up of the luxury van with 100% sanitization, safety and hygiene practices. Moreover, you are free to take away the luxury VIP van with no limits and zero hidden charges.",
    "We offer Toyota Vellfire imported luxury van on hire in Delhi, Gurugram, Noida, Agra, and Jaipur at the best price. You can rent a Toyota Vellfire VIP luxury van for local personal use, business trips for corporate clients, and outstation trips in India. Rent a 6 & 7-seater Toyota Vellfire imported luxurious VIP Van for leisure trips like VIP meetings & conventions, business travel, weddings, corporate meetings, video shoots, celebrity travel, and outstation trips. Get the best deals on Toyota Vellfire imported van rental services. Online booking is available for airport pickup and drop-off service, local runs, city tours, and outstation trips such as Agra Jaipur Tour, Shimla Manali Tour, Haridwar Rishikesh Tours, Himachal Tour, Uttarakhand Tour, North India Tour, Rajasthan Tour, and many more.",
  ],
}));

const vans = [
  {
    name: "6 Seater Toyota Vellfire",
    img: "van/Kia Carnival Limousine.png",
    desc: "Toyota Vellfire luxury van hire for Local Run, Personal Uses, Business Trip for Corporate clients and Outstation Trip.",
    path: "/van/toyota-vellfire/6-seater-toyota-vellfire",
  },
  {
    name: "7 Seater Toyota Vellfire",
    img: "van/Mercedes V Class.png",
    desc: "Rent a Toyota Vellfire luxury Van in Delhi, Gurugram, Noida, Agra, Jaipur Mumbai, Bengaluru and Hyderabad.",
    path: "/van/toyota-vellfire/7-seater-toyota-vellfire",
  },
  {
    name: "Vellfire Toyota Van",
    img: "van/Toyota Hiace.png",
    desc: "Toyota Vellfire imported luxury van rental service Delhi, Noida, Gurugram, Agra Jaipur and Major cities in India",
    path: "/van/toyota-vellfire/vellfire-toyota-van",
  },
];

onMounted(() => {
  title.value = route.params.type;
});
</script>
