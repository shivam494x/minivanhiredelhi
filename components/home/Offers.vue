<template>
  <div class="side_padding section_padding bg-offWhite text-secondary">
    <div class="container">
      <div class="xl:space-y-12 md:space-y-10 space-y-4">
        <div class="headinngs capitalize center flex-col md:space-y-2">
          <h5 class="text-base md:text-lg tracking-wide center text-pri">
            come with us
          </h5>
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight">
            hot offers
          </h2>
        </div>
        <div class="categories uppercase center">
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
              <div class="center">
                <span class="relative">
                  {{ item.type }}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="vehicles">
          <ul class="w-full flex flex-wrap gap-8 justify-center">
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
              class="border-2 border-[#c5c7ce96] max-w-96"
              :data-type="type"
            >
              <div
                class="grid h-full vehicle-wrapper md:px-8 md:py-4 py-2 px-4"
              >
                <div class="w-full object-fill center px-4">
                  <NuxtImg :src="`/img/about/${img}`" class="max-h-full" />
                </div>
                <div class="center flex-col gap-2 space-y-2">
                  <div>
                    <h2 class="text-2xl tracking-wide capitalize font-medium">
                      {{ name }}
                    </h2>
                  </div>
                  <div class="text-lg tracking-tight">
                    <span class="">{{ pricing }}</span>
                    <span class="text-pri">/Day</span>
                  </div>
                  <div
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
                  </div>
                  <div class="btns w-full">
                    <div class="grid grid-cols-2 border">
                      <NuxtLink class="before">rent now</NuxtLink>
                      <NuxtLink class="before">Details</NuxtLink>
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
.vehicle-wrapper {
  height: 25rem;
  grid-template-rows: 1fr 1.4fr;
}
.btns > .grid a {
  text-transform: capitalize;
  height: 2.5rem;
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
  tempo: "tempo",
};

const vehicles = [
  {
    img: "mercedes-sprinter.png",
    name: "Mercedes Sprinter",
    pricing: "100rs",
    type: vehicles_type.car,
    details: {
      model: "Model X",
      gear_type: "Automatic",
      mileage: "20kmpl",
    },
    details_link: "/#",
  },
  {
    img: "mercedes-sprinter.png",
    name: "Mercedes V-Class",
    pricing: "200rs",
    type: vehicles_type.tempo,
    details: {
      model: "Model Y",
      gear_type: "Manual",
      mileage: "18kmpl",
    },
    details_link: "/#",
  },
  {
    img: "mercedes-sprinter.png",
    name: "Toyota HiAce",
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
    img: "mercedes-sprinter.png",
    name: "Toyota HiAce",
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
    img: "mercedes-sprinter.png",
    name: "Toyota HiAce",
    pricing: "150rs",
    type: vehicles_type.car,
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
  { type: "tempo", active: false },
]);

function setActive(index) {
  vehicleTypes.value.forEach((item, i) => {
    item.active = i === index;
  });
}

const filteredVehicles = computed(() => {
  const activeCategory = vehicleTypes.value.find((item) => item.active)?.type;

  if (activeCategory === "all vehicles") {
    return vehicles;
  }

  return vehicles.filter((vehicle) => vehicle.type === activeCategory);
});
</script>
