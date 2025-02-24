<template>
  <section class="grid_bg w-full">
    <div
      class="headinngs capitalize flex gap-5 max-w-7xl w-full mx-auto py-10 px-8"
    >
      <div class="flex flex-col sm:w-1/2 lg:w-3/5 m-auto w-full">
        <div class="space-y-2 border-b border-pri w-max mb-2 pb-2">
          <h6 class="text-base md:text-xl font-semibold tracking-wide text-pri">
            come with us
          </h6>
          <h1
            class="text-2xl md:text-4xl font-bold tracking-tight text-start whitespace-nowrap text-complementary"
          >
            van hire for rent
          </h1>
        </div>
        <div
          class="text-justify text-sm text-gray-600 space-y-2 w-full mx-auto"
        >
          <p class="m-auto">
            Book Online Brand New Luxury Cars, Imported Vans & Buses All Over
            India With Highly Professional & Well Trained Uniform Drivers
          </p>
          <p class="m-auto">
            The journey with Indian Car Rental is more than just a RIDE- it’s an
            EXPERIENCE. That’s why we go above and beyond to deliver exceptional
            service every single time. Experience luxury, convenience and style
            with highest rated Indian Car Rental Chauffeur Driven Services. We
            are a trusted service provider for all transportation needs,
            providing impeccable, unmatched elegance and seamless coordination.
          </p>
          <p class="m-auto">
            Minivan makes available Luxury Car, Imported Van, Volvo, Mercedes,
            Bharat Benz, Isuzu & Tata super luxury bus, rental requirements in
            Delhi, Mumbai, Goa, Pune, Bengaluru, Hyderabad, Kochi, Chennai,
            Ahmedabad and across Pan India with highly professional uniform
            drivers.
          </p>
        </div>
      </div>

      <div class="img justify-center items-center hidden sm:flex w-1/2 lg:w-2/5">
        <NuxtImg
          class="w-full rounded-xl"
          src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Force/Urbania/11849/Force-Urbania-3350WB-10Str/1721025381746/front-left-side-47.jpg?imwidth=420&impolicy=resize"
        />
      </div>
    </div>
  </section>
  <div class="section_padding bg-offWhite text-secondary">
    <div class="container">
      <div class="md:space-y-8 space-y-4">
        <div class="categories uppercase center max-w-72 m-auto">
          <ul
            class="center capitalize text-lg w-full md:w-max flex-col md:flex md:flex-row"
          >
            <li
              v-for="(item, index) in vehicleTypes"
              :key="item.type"
              :class="{ active: item.active }"
              class="w-full md:w-max cursor-pointer px-4 py-2 lg:px-6 relative md:border-b-0 border-r border-b border-pri"
              @click="setActive(index)"
            >
              <NuxtLink class="center" :to="`/${item.type}`">
                <span class="relative">
                  {{ item.type }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="vehicles mx-auto max-w-5xl">
          <ul
            class="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-5 xl:gap-7 justify-center"
          >
            <li
              v-for="{
                img,
                name,
                pricing,
                details: { model, mileage, gear_type },
                details_link,
                type,
              } in filteredVehicles"
              :key="name"
              class="border-2 border-gray-400 max-w-80 mx-auto w-full"
              :data-type="type"
            >
              <div
                class="flex flex-col vehicle-wrapper h-full justify-between gap-2"
              >
                <div class="w-full object-fill center h-max">
                  <NuxtImg
                    :src="`/img/offers/${img}`"
                    class="max-h-full w-full object-contain"
                    alt="img"
                  />
                </div>
                <div class="center flex-col gap-2">
                  <div>
                    <h2 class="lg:text-2xl text-lg tracking-wide capitalize">
                      {{ name }}
                    </h2>
                  </div>
                  <!-- <div class="text-lg tracking-tight">
                    <span class="">{{ pricing }}</span>
                    <span class="text-pri">/Day</span>
                  </div> -->
                  <!-- <div
                    class="center space-x-1 details justify-between text-sm text-slate-600 tracking-wide"
                  >
                    <div>
                      <span>
                        <UIcon name="el:car" class="bg-pri" />
                      </span>
                      <span>{{ model }}</span>
                    </div>
                    <div>
                      <span>
                        <UIcon name="fa:cogs" class="bg-pri" />
                      </span>
                      <span>{{ gear_type }}</span>
                    </div>
                    <div>
                      <span>
                        <UIcon name="mdi:speedometer" class="bg-pri" />
                      </span>
                      <span>{{ mileage }}</span>
                    </div>
                  </div> -->
                  <div class="btns w-full text-sm">
                    <div class="grid grid-cols-2">
                      <NuxtLink to="/#somewhere" class="before"
                        >rent now</NuxtLink
                      >
                      <NuxtLink to="/#somewhere" class="before"
                        >Details</NuxtLink
                      >
                    </div>
                  </div>
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
.categories > ul > li::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 140ms var(--ease);
  z-index: 0;
}
.categories > ul > li.active {
  color: white;
}

.categories > ul > li.active::before,
.categories > ul > li:hover::before {
  transform: scaleY(1);
}
.categories > ul {
  border: 1px solid var(--primary-color);
}
.categories > ul > li:last-child {
  border: none;
}
.vehicles li .details > div span {
  margin: 0 2px;
}

.btns > .grid a {
  text-transform: capitalize;
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--offWhite-color);
  z-index: 1;
}
.btns > .grid a:first-child:before {
  background-color: var(--secondary-color);
}
.btns > .grid a:last-child:before {
  background-color: var(--primary-color);
}
.btns > .grid a:hover:before {
  transform: scaleY(0);
}
.btns > .grid a:hover {
  color: var(--secondary-color);
}
</style>
<script setup>
// Vehicle types
const vehicles_type = {
  car: "car",
  van: "van",
  bus: "bus",
  "Airport Transfer": "Airport Transfer",
};

const vehicles = [
  {
    img: "mercedes-v-class.png",
    name: "mercedes v class",
    pricing: "100rs",
    type: vehicles_type.van,
    details: {
      model: "Model X",
      gear_type: "Automatic",
      mileage: "20kmpl",
    },
    details_link: "/#",
  },
  {
    img: "40 Seater Bus.png",
    name: "40 Seater Bus",
    pricing: "200rs",
    type: vehicles_type.bus,
    details: {
      model: "Model Y",
      gear_type: "Manual",
      mileage: "18kmpl",
    },
    details_link: "/#",
  },
  {
    img: "Jaguar XF Car.png",
    name: "Jaguar XF Car",
    pricing: "150rs",
    type: vehicles_type.car,
    details: {
      model: "Model Z",
      gear_type: "Automatic",
      mileage: "22kmpl",
    },
    details_link: "/#",
  },
  {
    img: "12 Seater Traveler Van.png",
    name: "12 Seater Traveler Van",
    pricing: "150rs",
    type: vehicles_type.van,
    details: {
      model: "Model Z",
      gear_type: "Automatic",
      mileage: "22kmpl",
    },
    details_link: "/#",
  },
  {
    img: "42 Seater Volvo Bus.png",
    name: "42 Seater Volvo Bus",
    pricing: "150rs",
    type: vehicles_type.bus,
    details: {
      model: "Model Z",
      gear_type: "Automatic",
      mileage: "22kmpl",
    },
    details_link: "/#",
  },
  {
    img: "Luxury Van.png",
    name: "Luxury Van",
    pricing: "150rs",
    type: vehicles_type["Airport Transfer"],
    details: {
      model: "Model Z",
      gear_type: "Automatic",
      mileage: "22kmpl",
    },
    details_link: "/#",
  },
];

const vehicleTypes = ref([
  { type: "all vehicles", active: true },
  { type: "car", active: false },
  { type: "van", active: false },
  { type: "bus", active: false },
  { type: "Airport Transfer", active: false },
]);

function setActive(index) {
  vehicleTypes.value.forEach((item, i) => {
    item.active = i === index;
  });
}

const filteredVehicles = computed(() => {
  return vehicles;
  const activeCategory = vehicleTypes.value.find((item) => item.active)?.type;
  if (activeCategory === "all vehicles") {
    return vehicles;
  }

  return vehicles.filter((vehicle) => vehicle.type === activeCategory);
});
</script>