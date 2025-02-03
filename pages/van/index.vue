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
    <UtilityVanSlider :arr="vans" :phase="1" :links="nav" />
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

// const nav = [
//   {
//     name: "Toyota Vellfire",
//     path: "/van/toyota-vellfire",
//     sub: [
//       {
//         name: "6 Seater Toyota Vellfire",
//         path: "/van/toyota-vellfire/6-seater-toyota-vellfire",
//       },
//       {
//         name: "7 Seater Toyota Vellfire",
//         path: "/van/toyota-vellfire/7-seater-toyota-vellfire",
//       },
//       {
//         name: "Vellfire Toyota Van",
//         path: "/van/toyota-vellfire/vellfire-toyota-van",
//       },
//     ],
//   },
//   {
//     name: "Mercedes V Class",
//     path: "/van/mercedes-van",
//     sub: [
//       {
//         name: "5 Seater Mercedes Viano",
//         path: "/van/mercedes-van/5-seater-mercedes-viano",
//       },
//       {
//         name: "6 Seater Mercedes Van",
//         path: "/van/mercedes-van/6-seater-mercedes-van",
//       },
//       {
//         name: "Mercedes V Class",
//         path: "/van/mercedes-van/mercedes-v-class",
//       },
//     ],
//   },
//   {
//     name: "Kia Carnival Limousine",
//     path: "/van/kia-carnival-limousine",
//     sub: [
//       {
//         name: "6 Seater Kia Carnival Car",
//         path: "/van/kia-carnival-limousine/6-seater-kia-carnival-car",
//       },
//       {
//         name: "7 Seater Kia Carnival Car",
//         path: "/van/kia-carnival-limousine/7-seater-kia-carnival-car",
//       },
//       {
//         name: "Carnival Kia Luxury Car",
//         path: "/van/kia-carnival-limousine/carnival-kia-luxury-car",
//       },
//     ],
//   },
//   {
//     name: "Toyota Hiace",
//     path: "/van/toyota-hiace",
//     sub: [
//       {
//         name: "5 Seater Toyota Luxury Van",
//         path: "/van/toyota-hiace/5-seater-toyota-luxury-van",
//       },
//       {
//         name: "6 Seater Luxury Toyota Van",
//         path: "/van/toyota-hiace/6-seater-luxury-toyota-van",
//       },
//       {
//         name: "7 Seater Toyota Luxury Van",
//         path: "/van/toyota-hiace/7-seater-toyota-luxury-van",
//       },
//       {
//         name: "8 Seater Toyota Luxury Van",
//         path: "/van/toyota-hiace/8-seater-toyota-luxury-van",
//       },
//       {
//         name: "9 Seater Toyota Luxury Van",
//         path: "/van/toyota-hiace/9-seater-toyota-luxury-van",
//       },
//     ],
//   },
//   {
//     name: "Toyota Alphard",
//     path: "/van/toyota-alphard",
//     sub: [
//       {
//         name: "5 Seater Toyota Alphard Van",
//         path: "/van/toyota-alphard/5-seater-toyota-alphard-van",
//       },
//       {
//         name: "6 Seater Toyota Alphard Van",
//         path: "/van/toyota-alphard/6-seater-toyota-alphard-van",
//       },
//       {
//         name: "7 Seater Toyota Alphard",
//         path: "/van/toyota-alphard/7-seater-toyota-alphard",
//       },
//     ],
//   },
//   {
//     name: "Mercedes Sprinter",
//     path: "/van/mercedes-sprinter",
//     sub: [
//       {
//         name: "8 Seater Mercedes Van",
//         path: "/van/mercedes-sprinter/8-seater-mercedes-van",
//       },
//       {
//         name: "9 Seater Mercedes Van",
//         path: "/van/mercedes-sprinter/9-seater-mercedes-van",
//       },
//       {
//         name: "10 Seater Mercedes Van",
//         path: "/van/mercedes-sprinter/10-seater-mercedes-van",
//       },
//       {
//         name: "11 Seater Sprinter Van",
//         path: "/van/mercedes-sprinter/11-seater-sprinter-van",
//       },
//     ],
//   },
// ];
</script>
