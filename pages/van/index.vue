<template>
  <div class="side_padding">
    <section class="container">
      <div class="content">
        <div
          class="heading font-semibold capitalize p-4 border-b border-red-300 tracking-tighter center"
        >
          <h2 class="lg:text-5xl text-3xl">van</h2>
        </div>
        <div class="desc tracking-tight py-6 px-4 text-gray-800">
          <p>
            Minivan hire company provide a Imported Luxury VIP vans rental
            service in Delhi, Mumbai, Goa, Pune, Chennai, Hyderabad, Kochi,
            Bengaluru and adjoining cities in India. Rent a super luxury
            traveler van that embodies the versatility, innovation and
            customization that has become a hallmark in the past decade. The
            imported VIP van on hire can move groups of 5 to 15 passengers
            comfortably across long distances and allow people to explore new
            places through tourism. Reservation of luxurious vans can be done
            for Leisure Trips, VIP Meetings & Conventions, Business & Corporate
            Travel. Mini Van Hire fleet of imported luxury van includes Toyota
            Vellfire. Toyota Alphard, Toyota Hiace, Toyota Commuter, Toyota
            Coaster, Force Urbania Minivan, Mercedes V Class, Mercedes Sprinter
            Van, Hyundai H1, Foton Van, KIA Carnival Limousine and Force Tempo
            Traveller. Online Booking of Van is available for Airport Pick Up
            and Drop Service, Local Run, City Tour and Outstation Tripsips.
          </p>
        </div>
      </div>
    </section>
    <UDivider
      label="our van collection"
      class="uppercase"
      :ui="{
        label: '',
      }"
    />

    <section class="container section_padding relative">
      <UtilityVanSlider :arr="vans" :phase="1" btn="read more" :path="`/van/xyz`" />
    </section>
    <UDivider
      label="more services"
      class="uppercase lg:hidden mt-8"
      :ui="{
        label: 'text-sm lg:text-lg',
      }"
    />
  <OthersBottom :-form_-title="`van`" :nav="van_links"/>
  </div>
</template>

<script setup>
const van_links = ref([{}]);
const { data: navData, error } = await useFetch("/api/nav/van");
if (navData) {
  console.log(navData.value)
  van_links.value = navData.value?.sub;
} else {
  console.error(error);
}

const vans = [
  {
    name: "Kia Carnival Limousine",
    img: "img/van/Kia Carnival Limousine.png",
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
        icon: "fa6-solid:a",
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
    img: "img/van/Mercedes V Class.png",
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
        icon: "fa6-solid:a",
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
    img: "img/van/Toyota Hiace.png",
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
        icon: "fa6-solid:m",
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
    img: "img/van/Toyota Vellfire.png",
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
        icon: "fa6-solid:a",
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
