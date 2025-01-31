<template>
  <section class="container grid gap-10 grid-cols-5">
    <div class="content col-span-3 px-4 py-4">
      <div
        class="heading font-semibold text-5xl capitalize py-4 tracking-tighter"
      >
        <h2 class="">{{ data.title }}</h2>
      </div>
      <div class="desc tracking-tight">
        <p v-for="p in data.paragraph">
          {{ p }}
        </p>
      </div>
    </div>
    <div class="nav py-8 min-h-80 max-h-96 col-span-2">
      <nav class="h-full grid grid-cols-2 overflow-hidden">
        <div class="border overflow-y-scroll">
          <ul>
            <li
              v-for="{ name, path, sub } in data.nav"
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
                  class="center btn px-4 relative py-3 hover:bg-gray-300 duration-150"
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
    <UtilityVanSlider :arr="vans" :phase="2" />
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
import { computed } from "vue";
import { useRoute } from "vue-router";
definePageMeta({
  layout: "van",
});
const route = useRoute();
const title = route.params.type.replace(/-/g, " ");
const data = computed(() => ({
  title: title,
  paragraph: [
    "If you are looking for 100% Comfort, VIP Style, and Luxurious Feel, then Toyota Vellfire imported van is the best choice. With multiple design modes and thoughtful design, choose this classic model for your sophisticated journey. We assure to provide contactless delivery and pick-up of the luxury van with 100% sanitization, safety and hygiene practices. Moreover, you are free to take away the luxury VIP van with no limits and zero hidden charges.",
    "We offer Toyota Vellfire imported luxury van on hire in Delhi, Gurugram, Noida, Agra, and Jaipur at the best price. You can rent a Toyota Vellfire VIP luxury van for local personal use, business trips for corporate clients, and outstation trips in India. Rent a 6 & 7-seater Toyota Vellfire imported luxurious VIP Van for leisure trips like VIP meetings & conventions, business travel, weddings, corporate meetings, video shoots, celebrity travel, and outstation trips. Get the best deals on Toyota Vellfire imported van rental services. Online booking is available for airport pickup and drop-off service, local runs, city tours, and outstation trips such as Agra Jaipur Tour, Shimla Manali Tour, Haridwar Rishikesh Tours, Himachal Tour, Uttarakhand Tour, North India Tour, Rajasthan Tour, and many more.",
  ],
  nav: [
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
]
}));
const subNav = ref([]);
function setNav(arr) {
  subNav.value = arr;
}
const vans = [
  {
    name: "6 Seater Toyota Vellfire",
    img: "van/Kia Carnival Limousine.png",
    desc: "Toyota Vellfire luxury van hire for Local Run, Personal Uses, Business Trip for Corporate clients and Outstation Trip.",
  },
  {
    name: "7 Seater Toyota Vellfire",
    img: "van/Mercedes V Class.png",
    desc: "Rent a Toyota Vellfire luxury Van in Delhi, Gurugram, Noida, Agra, Jaipur Mumbai, Bengaluru and Hyderabad.",
  },
  {
    name: "Vellfire Toyota Van",
    img: "van/Toyota Hiace.png",
    desc: "Toyota Vellfire imported luxury van rental service Delhi, Noida, Gurugram, Agra Jaipur and Major cities in India",
  },
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
