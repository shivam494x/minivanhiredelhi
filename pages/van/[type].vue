<template>
  <section>
    <UtilityHeading :title="data.title"     backgroundImage="img/van.webp" />
  </section>
  <div class="side_padding">
    <section class="container">
      <div class="content">
        <div class="desc tracking-tight py-6 px-4 text-gray-800 space-y-3">
          <p v-for="p in data.paragraph">
            {{ p }}
          </p>
        </div>
      </div>
    </section>
    <UDivider
      :label="`our ${data.title.value} collection`"
      class="capitalize text-pri text-xl"
      :ui="{
        label: 'text-pri dark:text-pri text-xl',
      }"
    />
  </div>
  <div class="side_padding flex flex-col lg:flex-row py-8 gap-4">
    <!-- Main Section -->
    <section
      class="w-full lg:w-2/3 mx-auto relative h-max py-5 px-2 sm:px-6 border max-w-3xl shadow-xl"
    >
      <UtilityVanSlider
        :arr="vans"
        :phase="2"
        btn="View details"
        :path="`/van/xyz`"
      />
    </section>

    <!-- Sidebar -->
    <aside class="w-full lg:w-1/3 px-2">
      <OthersBottom :-form_-title="data.title" :nav="van_links" :form="false" />
    </aside>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

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
    img: "https://minivanhiredelhi.com/uploads/8496_vellfire-toyota%20van.jpg",
    desc: "Toyota Vellfire luxury van hire for Local Run, Personal Uses, Business Trip for Corporate clients and Outstation Trip.",
    path: "/van/toyota-vellfire/6-seater-toyota-vellfire",
  },
  {
    name: "7 Seater Toyota Vellfire",
    img: "https://minivanhiredelhi.com/uploads/95275_21.jpg",
    desc: "Rent a Toyota Vellfire luxury Van in Delhi, Gurugram, Noida, Agra, Jaipur Mumbai, Bengaluru and Hyderabad.",
    path: "/van/toyota-vellfire/7-seater-toyota-vellfire",
  },
  {
    name: "Vellfire Toyota Van",
    img: "https://minivanhiredelhi.com/uploads/7061_Toyota%20Vellfire%20On%20Rent.PNG",
    desc: "Toyota Vellfire imported luxury van rental service Delhi, Noida, Gurugram, Agra Jaipur and Major cities in India",
    path: "/van/toyota-vellfire/vellfire-toyota-van",
  },
];

onMounted(() => {
  title.value = route.params.type;
});
</script>
