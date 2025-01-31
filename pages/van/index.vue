<template>
    <section class="container grid gap-10 grid-cols-5">
      <div class="content col-span-3 px-4 py-4">
        <div
          class="heading font-semibold text-5xl capitalize py-4 tracking-tighter"
        >
          <h2 class="">van</h2>
        </div>
        <div class="desc tracking-tight">
          <p>
            Minivan hire company provides an Imported Luxury VIP van rental
            service in major cities across India. Rent a super luxury traveler
            van that embodies versatility, innovation, and customization. The
            imported VIP van can accommodate 5 to 15 passengers comfortably for
            long-distance travel and tourism.
          </p>
          <p>
            Our fleet includes Toyota Vellfire, Toyota Alphard, Toyota Hiace,
            Toyota Commuter, Mercedes V Class, Hyundai H1, KIA Carnival
            Limousine, and more. Online booking is available for airport
            transfers, city tours, and outstation trips.
          </p>
        </div>
      </div>
      <div class="nav py-8 max-h-80 col-span-2">
        <nav class="h-full grid grid-cols-2 overflow-hidden">
          <div class="border overflow-y-scroll">
            <ul>
              <li
                v-for="{ name, path, sub } in nav"
                class="md:h-full cursor-pointer h-12 flex md:items-center w-full group md:w-auto md:justify-center border-b"
              >
                <div class="relative w-full h-max flex justify-between">
                  <NuxtLink
                    :to="path"
                    class="relative justify-start items-center space-x-1 md:px-4 md:py-2 py-2.5 px-4 md:w-max w-full h-12 flex-1"
                  >
                    <span>
                      {{ name }}
                    </span>
                  </NuxtLink>
                  <div
                    v-if="sub"
                    @click="setNav(sub)"
                    class="center px-4 relative py-3 btn hover:bg-gray-300 duration-150"
                  >
                    <span
                      class="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 bg-slate-300 w-[1px]"
                    ></span>
                    <div
                      class="w-2 h-2 border-t-2 border-r-2 border-black rotate-45"
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="border overflow-y-scroll">
            <ul>
              <li
                v-for="{ name, path } in subNav"
                class="md:h-full cursor-pointer h-12 flex md:items-center w-full group md:w-auto md:justify-center border-b"
              >
                <div class="relative w-full h-max flex justify-between">
                  <NuxtLink
                    :to="path"
                    class="relative justify-center items-center space-x-1 md:px-4 md:py-2 py-2.5 px-4 md:w-max w-full h-12 flex-1"
                  >
                    <span>
                      {{ name }}
                    </span>
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <section class="container section_padding relative">
      <UtilityVanSlider :arr="vans" :phase="1" />
    </section>
</template>

<style scoped>
.overflow-y-scroll::-webkit-scrollbar {
  width: 0px;
}
.bottom > div:last-child {
  border: unset;
}
.desc {
  word-spacing: 1px;
}

ul > li > div a {
  position: relative;
  display: inline-flex;
  transition: all 150ms var(--ease);
}

ul > li > div > a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 200ms var(--ease);
  z-index: 0;
}
ul > li > div > a > span {
  z-index: 10;
  position: relative;
}
ul > li > div > a:hover::before,
ul > li.clicked {
  transform: scaleY(1);
}
ul li > div a:hover {
  color: white;
}

ul > li > div ul li:last-child {
  border-bottom: 0;
}
nav .btn.clicked > div {
  transition: transform 200ms ease-in-out;
  transform: rotate(135deg);
}
</style>

<script setup>
definePageMeta({
  layout: "van",
});
const vans = [
  {
    name: "Kia Carnival Limousine",
    img: "van/Kia Carnival Limousine.png",
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
const subNav = ref([]);
function setNav(arr) {
  subNav.value = arr;
}


const nav = [
  {
    name: "Toyota Vellfire",
    path: "/van/toyota-vellfire",
    sub: [
      {
        name: "6 Seater Toyota Vellfire",
        path: "/van/toyota-vellfire/6-seater-toyota-vellfire",
      },
      {
        name: "7 Seater Toyota Vellfire",
        path: "/van/toyota-vellfire/7-seater-toyota-vellfire",
      },
      {
        name: "Vellfire Toyota Van",
        path: "/van/toyota-vellfire/vellfire-toyota-van",
      },
    ],
  },
  {
    name: "Mercedes V Class",
    path: "/van/mercedes-van",
    sub: [
      {
        name: "5 Seater Mercedes Viano",
        path: "/van/mercedes-van/5-seater-mercedes-viano",
      },
      {
        name: "6 Seater Mercedes Van",
        path: "/van/mercedes-van/6-seater-mercedes-van",
      },
      {
        name: "Mercedes V Class",
        path: "/van/mercedes-van/mercedes-v-class",
      },
    ],
  },
  {
    name: "Kia Carnival Limousine",
    path: "/van/kia-carnival-limousine",
    sub: [
      {
        name: "6 Seater Kia Carnival Car",
        path: "/van/kia-carnival-limousine/6-seater-kia-carnival-car",
      },
      {
        name: "7 Seater Kia Carnival Car",
        path: "/van/kia-carnival-limousine/7-seater-kia-carnival-car",
      },
      {
        name: "Carnival Kia Luxury Car",
        path: "/van/kia-carnival-limousine/carnival-kia-luxury-car",
      },
    ],
  },
  {
    name: "Toyota Hiace",
    path: "/van/toyota-hiace",
    sub: [
      {
        name: "5 Seater Toyota Luxury Van",
        path: "/van/toyota-hiace/5-seater-toyota-luxury-van",
      },
      {
        name: "6 Seater Luxury Toyota Van",
        path: "/van/toyota-hiace/6-seater-luxury-toyota-van",
      },
      {
        name: "7 Seater Toyota Luxury Van",
        path: "/van/toyota-hiace/7-seater-toyota-luxury-van",
      },
      {
        name: "8 Seater Toyota Luxury Van",
        path: "/van/toyota-hiace/8-seater-toyota-luxury-van",
      },
      {
        name: "9 Seater Toyota Luxury Van",
        path: "/van/toyota-hiace/9-seater-toyota-luxury-van",
      },
    ],
  },
  {
    name: "Toyota Alphard",
    path: "/van/toyota-alphard",
    sub: [
      {
        name: "5 Seater Toyota Alphard Van",
        path: "/van/toyota-alphard/5-seater-toyota-alphard-van",
      },
      {
        name: "6 Seater Toyota Alphard Van",
        path: "/van/toyota-alphard/6-seater-toyota-alphard-van",
      },
      {
        name: "7 Seater Toyota Alphard",
        path: "/van/toyota-alphard/7-seater-toyota-alphard",
      },
    ],
  },
  {
    name: "Mercedes Sprinter",
    path: "/van/mercedes-sprinter",
    sub: [
      {
        name: "8 Seater Mercedes Van",
        path: "/van/mercedes-sprinter/8-seater-mercedes-van",
      },
      {
        name: "9 Seater Mercedes Van",
        path: "/van/mercedes-sprinter/9-seater-mercedes-van",
      },
      {
        name: "10 Seater Mercedes Van",
        path: "/van/mercedes-sprinter/10-seater-mercedes-van",
      },
      {
        name: "11 Seater Sprinter Van",
        path: "/van/mercedes-sprinter/11-seater-sprinter-van",
      },
    ],
  }
];

onMounted(() => {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((b) => {
    b.addEventListener("click", function () {
      const previous_clicked = document.querySelector(".clicked");
      if (previous_clicked) {
        previous_clicked.classList.remove("clicked");
      }
      b.classList.toggle("clicked");
    });
  });
});
</script>
