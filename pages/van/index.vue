<template>
  <section class="container grid gap-10 grid-cols-5">
    <div class="content col-span-3">
      <div
        class="heading font-semibold text-5xl capitalize p-4 border-b tracking-tighter"
      >
        <h2 class="">van</h2>
      </div>
      <div class="desc tracking-tight py-6 px-4 text-gray-800">
        <p>
          Minivan hire company provides an Imported Luxury VIP van rental
          service in major cities across India. Rent a super luxury traveler van
          that embodies versatility, innovation, and customization. The imported
          VIP van can accommodate 5 to 15 passengers comfortably for
          long-distance travel and tourism.
        </p>
        <p>
          Our fleet includes Toyota Vellfire, Toyota Alphard, Toyota Hiace,
          Toyota Commuter, Mercedes V Class, Hyundai H1, KIA Carnival Limousine,
          and more. Online booking is available for airport transfers, city
          tours, and outstation trips.
        </p>
      </div>
    </div>
    <div class="nav py-8 max-h-80 col-span-2">
      <OthersNav2 :nav="van_links" />
    </div>
  </section>

  <section class="container section_padding relative">
    <UtilityVanSlider :arr="vans" :phase="1" :nav="van_links" />
  </section>
</template>

<script setup>
definePageMeta({
  layout: "van",
});
const van_links = ref([{}]);
const { data: navData, error } = await useFetch("/api/nav/van");
if (navData) {
  van_links.value = navData.value.sub;
} else {
  console.error(error);
}

const vans = [
  {
    name: "Kia Carnival Limousine",
    img: "van/Kia Carnival Limousine.png",
    path: "/van/kia-carnival-limousine",
    details: [
      {
        icon: "mdi:car",
        quality: "2013",
      },
      {
        icon: "mdi:gas-station",
        quality: "Diesel",
      },
      {
        icon: "mdi:car-shift-automatic",
        quality: "Auto",
      },
      {
        icon: "mdi:road",
        quality: "25000",
      },
    ],
  },
  {
    name: "Mercedes V Class",
    img: "van/Mercedes V Class.png",
    path: "/van/mercedes-van",
    details: [
      {
        icon: "mdi:car",
        quality: "2018",
      },
      {
        icon: "mdi:gas-station",
        quality: "Petrol",
      },
      {
        icon: "mdi:car-shift-automatic",
        quality: "Auto",
      },
      {
        icon: "mdi:road",
        quality: "40000",
      },
    ],
  },
  {
    name: "Toyota Hiace",
    img: "van/Toyota Hiace.png",
    path: "/van/toyota-hiace",
    details: [
      {
        icon: "mdi:car",
        quality: "2016",
      },
      {
        icon: "mdi:gas-station",
        quality: "Diesel",
      },
      {
        icon: "mdi:car-shift-manual",
        quality: "Manual",
      },
      {
        icon: "mdi:road",
        quality: "60000",
      },
    ],
  },
  {
    name: "Toyota Vellfire",
    img: "van/Toyota Vellfire.png",
    path: "/van/toyota-vellfire",
    details: [
      {
        icon: "mdi:car",
        quality: "2020",
      },
      {
        icon: "mdi:gas-station",
        quality: "Hybrid",
      },
      {
        icon: "mdi:car-shift-automatic",
        quality: "Auto",
      },
      {
        icon: "mdi:road",
        quality: "15000",
      },
    ],
  },
];
</script>
