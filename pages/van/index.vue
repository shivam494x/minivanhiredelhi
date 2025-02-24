<template>
  <UtilityHeading
    title="Van"
    backgroundImage="img/van.webp"
  />
  <div class="side_padding">
    <section class="container">
      <div class="content">
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
      class="uppercase px-2 w-full mx-auto"
      :ui="{
        label: '',
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
        :phase="1"
        btn="read more"
        :path="`/van/xyz`"
      />
    </section>

    <!-- Sidebar -->
    <aside class="w-full lg:w-1/3 px-2">
      <OthersBottom :-form_-title="`van`" :nav="van_links" :form="false" />
    </aside>
  </div>
</template>

<script setup>
const van_links = ref([{}]);
const { data: navData, error } = await useFetch("/api/nav/van");
if (navData) {
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
  {
    name: "Mercedes Sprinter",
    img: "img/van/Mercedes Sprinter.png",
    path: "/van/Mercedes-Sprinter",
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
  {
    name: "Toyota Commuter",
    img: "img/van/Toyota Commuter.png",
    path: "/van/Toyota-Commuter",
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
