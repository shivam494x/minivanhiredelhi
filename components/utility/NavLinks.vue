<style scoped>
@media (max-width: 768px) {
  ul.wrapper {
    max-height: calc(100vh - 4rem);
    overflow: scroll;
  }
  ul.wrapper > li {
    overflow: hidden;
  }
}
.clicked {
  flex-grow: 1;
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
.clicked.lv0 div > .show_more > .rotate-icon {
  transform: rotate(0deg);
}
</style>

<template>
  <ul
    class="wrapper flex text-3xl md:text-base md:h-16 font-normal flex-col md:flex-row items-center h-full md:font-semibold capitalize z-50"
  >
    <li
      v-for="({ name, path, sub }, index) in nav_links"
      :key="`${name}/${index}`"
      :id="name"
      class="md:h-full h-16 flex md:items-center w-full group md:w-auto md:justify-center border-b md:border-b-0 border-pri lv0"
      @mouseenter="setActiveIndexWithDelay(index)"
      @mouseleave="resetActiveIndexWithDelay"
    >
      <div class="relative w-full h-max flex gap-4">
        <NuxtLink
          :to="path"
          class="relative justify-end items-center space-x-1 md:px-4 md:py-5 py-2.5 px-4 md:w-max w-full h-16 flex-1"
        >
          <span>{{ name }}</span>
          <Icon
            v-if="sub"
            class="text-sm rotate-45 transform transition-transform duration-300 group-hover:rotate-0 md:inline hidden"
            name="ep:close"
          />
        </NuxtLink>
        <!-- show more buttton only for smol devices -->
        <div
          v-if="sub"
          role="button"
          class="border-l border-[#525967] my-4 show_more lv0 center px-4 md:hidden text-base"
        >
          <Icon
            class="text-sm mt-1 rotate-icon w-6 h-6"
            name="material-symbols:arrow-drop-down-rounded"
          />
        </div>
        <!-- Level 1 Nest -->
        <div
          :class="{
            hidden: !(sub && activeIndex === index) && !isSubOpened,
            block: (sub && activeIndex === index) || isSubOpened,
          }"
          class="absolute top-full md:left-0 right-0 z-50 w-full md:w-max h-64 md:h-auto overflow-scroll md:overflow-visible"
        >
          <ul
            class="md:w-max w-full bg-offWhite text-secondary font-normal text-lg md:text-sm"
          >
            <li
              v-for="({ name, path: subpath, sub: l1sub }, subIndex) in sub"
              :key="`${name}/${subIndex}`"
              class="relative border-b w-[95%] md:h-full h-16 mr-auto md:w-full md:m-0 lv1 flex md:items-center overflow-hidden md:overflow-visible items-start group md:justify-center md:border-b-0"
              @mouseenter="setSubActiveIndexWithDelay(subIndex)"
              @mouseleave="resetSubActiveIndexWithDelay"
            >
              <div class="relative w-full flex gap-4 items-center">
                <NuxtLink
                  :to="`${subpath}`"
                  class="relative justify-end md:justify-start space-x-1 md:px-4 md:py-3 py-2.5 px-3 w-full"
                >
                  <span>{{ name }}</span>
                </NuxtLink>
                <!-- show more buttton only for smol devices -->
                <div
                  v-if="l1sub"
                  role="button"
                  class="border-l border-[#525967] my-4 show_more lv1 center px-4 md:hidden text-base"
                >
                  <Icon
                    class="text-sm mt-1 rotate-icon w-6 h-6"
                    name="material-symbols:arrow-drop-down-rounded"
                  />
                </div>
                <!-- Level 2 Nest -->
                <div
                  :class="{
                    hidden:
                      !(l1sub && subActiveIndex === subIndex) &&
                      !isSubSubOpened,
                    block:
                      (l1sub && subActiveIndex === subIndex) || isSubSubOpened,
                  }"
                  class="absolute top-full md:top-0 md:right-full right-0 z-50 w-full md:w-max h-64 md:h-auto overflow-scroll md:overflow-visible"
                >
                  <ul
                    class="bg-offWhite md:w-max w-full md:text-sm text-base text-gray-500 md:text-inherit px-4 md:px-0"
                  >
                    <li
                      v-for="({ name, path: subsubpath }, subSubIndex) in l1sub"
                      :key="`${name}${subSubIndex}`"
                      class="border-b relative lv2 md:h-full center w-full h-16"
                    >
                      <div class="relative w-full">
                        <NuxtLink
                          :to="`${subsubpath}`"
                          class="relative justify-end md:justify space-x-1 md:px-4 md:py-3 py-2.5 px-3 w-full"
                        >
                          <span>{{ name }}</span>
                        </NuxtLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const { $gsap: gsap } = useNuxtApp();

const activeIndex = ref(null);
const subActiveIndex = ref(null);
const isSubOpened = ref(false);
const isSubSubOpened = ref(false);

let menuHideTimer = null;
let subMenuHideTimer = null;

onMounted(() => {
  const list_height = 64;
  const ease = "cubic-bezier(0.84, 0.08, 0.23, 0.68)";
  const outAnimation = {
    height: list_height,
    duration: 0.25,
    ease,
  };
  const inAnimation = {
    duration: 0.25,
    ease,
    delay: 0.1,
    onComplete: () => {
      isSubOpened.value = true;
    },
  };

  function openSub(parent_li, lv) {
    const nearestLis = parent_li.querySelectorAll(`div > ul > li.lv${lv}`);
    let height;
    if (nearestLis.length < 5) {
      height = list_height * nearestLis.length;
    } else {
      height = list_height * 5;
    }
    console.log(height);
    inAnimation.height = height;
    gsap.to(parent_li, inAnimation);
  }

  function closeSub(parent_li, lv) {
    gsap.to(parent_li, outAnimation);
  }

  const subClickHandler = (e) => {
    const parent_li = e.target.closest("li.lv0");

    if (!isSubOpened.value) {
      openSub(parent_li, 1);
    } else {
      closeSub(parent_li, 1);
    }

    isSubOpened.value = !isSubOpened.value;
  };
  const subsubClickHandler = (e) => {
    const parent_li = e.target.closest("li.lv1");
    if (!isSubSubOpened.value) {
      openSub(parent_li, 2);
    } else {
      closeSub(parent_li, 2);
    }
    isSubSubOpened.value = !isSubSubOpened.value;
  };

  const sub_links = document.querySelectorAll(".lv0 .show_more.lv0");
  const subsublinks = document.querySelectorAll(".lv1 .show_more.lv1");

  sub_links.forEach((link) => {
    link.addEventListener("click", subClickHandler);
  });

  subsublinks.forEach((link) => {
    link.addEventListener("click", subsubClickHandler);
  });
});

const setActiveIndexWithDelay = (index) => {
  clearTimeout(menuHideTimer);
  activeIndex.value = index;
};

const resetActiveIndexWithDelay = () => {
  menuHideTimer = setTimeout(() => {
    activeIndex.value = null;
  }, 500);
};

const setSubActiveIndexWithDelay = (index) => {
  clearTimeout(subMenuHideTimer);
  subActiveIndex.value = index;
};

const resetSubActiveIndexWithDelay = () => {
  subMenuHideTimer = setTimeout(() => {
    subActiveIndex.value = null;
  }, 600);
};

const nav_links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "van",
    path: "/van",
    sub: [
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
      },
    ],
  },
  {
    name: "car",
    path: "/car",
    sub: [
      {
        name: "Luxury Car On Rental",
        path: "/luxury-car",
        sub: [
          { name: "Range Rover Vogue", path: "/luxury-car/range-rover-vogue" },
          { name: "Jaguar XF Car", path: "/luxury-car/jaguar-xf-car" },
          { name: "Jaguar XJ L", path: "/luxury-car/jaguar-xj-l" },
          { name: "Mercedes S Class", path: "/luxury-car/mercedes-s-class" },
          { name: "Mercedes E Class", path: "/luxury-car/mercedes-e-class" },
          { name: "Mercedes M Class", path: "/luxury-car/mercedes-m-class" },
          { name: "Mercedes C Class", path: "/luxury-car/mercedes-c-class" },
          { name: "Mercedes GLS", path: "/luxury-car/mercedes-gls" },
          { name: "BMW 7 Series", path: "/luxury-car/bmw-7-series" },
          { name: "Audi A8 L Car", path: "/luxury-car/audi-a8-l-car" },
          { name: "Audi Q7", path: "/luxury-car/audi-q7" },
          { name: "Audi A 6", path: "/luxury-car/audi-a-6" },
          { name: "Audi Q3", path: "/luxury-car/audi-q3" },
          { name: "BMW 5 Series", path: "/luxury-car/bmw-5-series" },
          { name: "Toyota Camry", path: "/luxury-car/toyota-camry" },
        ],
      },
      {
        name: "Mercedes Car Rental",
        path: "/mercedes-car",
        sub: [
          { name: "Mercedes S 500", path: "/mercedes-car/mercedes-s-500" },
          { name: "Mercedes S-350", path: "/mercedes-car/mercedes-s-350" },
          { name: "Mercedes E Class", path: "/mercedes-car/mercedes-e-class" },
          { name: "Mercedes M Class", path: "/mercedes-car/mercedes-m-class" },
          { name: "Mercedes ML 250", path: "/mercedes-car/mercedes-ml-250" },
          { name: "Mercedes C Class", path: "/mercedes-car/mercedes-c-class" },
        ],
      },
      {
        name: "Audi Car Rental Service",
        path: "/audi-car",
        sub: [
          { name: "Audi A6 Car", path: "/audi-car/audi-a6-car" },
          { name: "Audi A8 L Car", path: "/audi-car/audi-a8-l-car" },
          { name: "Audi Q3 Car", path: "/audi-car/audi-q3-car" },
          { name: "Audi Q7", path: "/audi-car/audi-q7" },
        ],
      },
      {
        name: "Toyota Car For Hire",
        path: "/toyota-car",
        sub: [
          {
            name: "Toyota Land Cruiser",
            path: "/toyota-car/toyota-land-cruiser",
          },
          { name: "Toyota Fortuner", path: "/toyota-car/toyota-fortuner" },
          { name: "Toyota Camry", path: "/toyota-car/toyota-camry" },
          {
            name: "Toyota Corolla Altis",
            path: "/toyota-car/toyota-corolla-altis",
          },
          { name: "Toyota Innova", path: "/toyota-car/toyota-innova" },
          { name: "Toyota Crysta", path: "/toyota-car/toyota-crysta" },
          { name: "Toyota Etios", path: "/toyota-car/toyota-etios" },
        ],
      },
      {
        name: "Premium Car For Rent",
        path: "/premium-car",
        sub: [
          { name: "Honda Accord", path: "/premium-car/honda-accord" },
          { name: "Nissan Sunny Car", path: "/premium-car/nissan-sunny-car" },
          { name: "Honda City Car", path: "/premium-car/honda-city-car" },
        ],
      },
      {
        name: "Budget Van For Rent",
        path: "/budget-van",
        sub: [
          {
            name: "6+1 Seater Toyota Van",
            path: "/budget-van/6-seater-toyota-van",
          },
          {
            name: "7 Seater Toyota Van",
            path: "/budget-van/7-seater-toyota-van",
          },
          { name: "6 Seater Van", path: "/budget-van/6-seater-van" },
          { name: "7 Seater Van", path: "/budget-van/7-seater-van" },
          {
            name: "7 Seater Nissan Van",
            path: "/budget-van/7-seater-nissan-van",
          },
          {
            name: "7 Seater Chevrolet Van",
            path: "/budget-van/7-seater-chevrolet-van",
          },
        ],
      },
      {
        name: "Budget Car For Rental",
        path: "/budget-car",
        sub: [
          { name: "Toyota Etios Car", path: "/budget-car/toyota-etios-car" },
          {
            name: "Maruti Swift Dzire",
            path: "/budget-car/maruti-swift-dzire",
          },
          { name: "Hyundai Xcent Car", path: "/budget-car/hyundai-xcent-car" },
          { name: "Honda Amaze Car", path: "/budget-car/honda-amaze-car" },
          { name: "Toyota Crysta", path: "/budget-car/toyota-crysta" },
          { name: "Maruti Ertiga", path: "/budget-car/maruti-ertiga" },
        ],
      },
      {
        name: "Suv Vehicle For Rental",
        path: "/suv-vehicle",
        sub: [
          {
            name: "Mercedes M Class Suv",
            path: "/suv-vehicle/mercedes-m-class-suv",
          },
          {
            name: "Mercedes Benz GLS SUV",
            path: "/suv-vehicle/mercedes-benz-gls",
          },
          { name: "Audi Q3 SUV", path: "/suv-vehicle/audi-q3-suv" },
          { name: "Audi Q7 SUV", path: "/suv-vehicle/audi-q7-suv" },
          {
            name: "Toyota Land Cruiser SUV",
            path: "/suv-vehicle/toyota-land-cruiser",
          },
          { name: "Toyota Fortuner SUV", path: "/suv-vehicle/toyota-fortuner" },
        ],
      },
      {
        name: "Muv Vehicle For Hire",
        path: "/muv-vehicle",
        sub: [
          { name: "Toyota Crysta", path: "/muv-vehicle/toyota-crysta" },
          { name: "Toyota Innova", path: "/muv-vehicle/toyota-innova" },
          { name: "Maruti Ertiga", path: "/muv-vehicle/maruti-ertiga" },
          { name: "Nissan Evalia", path: "/muv-vehicle/nissan-evalia" },
          { name: "Mahindra Marazzo", path: "/muv-vehicle/mahindra-marazzo" },
          { name: "Chevrolet Enjoy", path: "/muv-vehicle/chevrolet-enjoy" },
          { name: "Honda Mobilio Car", path: "/muv-vehicle/honda-mobilio-car" },
          { name: "Renault Lodgy Car", path: "/muv-vehicle/renault-lodgy-car" },
        ],
      },
    ],
  },
  {
    name: "bus",
    path: "/bus",
    sub: [
      {
        name: "Minibus",
        path: "/mini-bus",
        sub: [
          {
            name: "15 Seater Minibus",
            path: "/mini-bus/15-seater-bus",
          },
          {
            name: "18 Seater Minibus",
            path: "/mini-bus/18-seater-bus",
          },
          {
            name: "20 Seater Minibus",
            path: "/mini-bus/20-seater-bus",
          },
          {
            name: "22 Seater Minibus",
            path: "/mini-bus/22-seater-bus",
          },
          {
            name: "25 Seater Minibus",
            path: "/mini-bus/25-seater-bus",
          },
          {
            name: "27 Seater Minibus",
            path: "/mini-bus/27-seater-bus",
          },
        ],
      },
      {
        name: "Luxury Bus",
        path: "/luxury-bus",
        sub: [
          {
            name: "30 Seater Bus",
            path: "/luxury-bus/30-seater-bus",
          },
          {
            name: "32 Seater Bus",
            path: "/luxury-bus/32-seater-bus",
          },
          {
            name: "35 Seater Bus",
            path: "/luxury-bus/35-seater-bus",
          },
          {
            name: "38 Seater Bus",
            path: "/luxury-bus/38-seater-bus",
          },
          {
            name: "40 Seater Bus",
            path: "/luxury-bus/40-seater-bus",
          },
          {
            name: "45 Seater Bus",
            path: "/luxury-bus/45-seater-bus",
          },
        ],
      },
      {
        name: "Volvo Bus",
        path: "/volvo-bus",
        sub: [
          {
            name: "32 Seater Volvo Bus",
            path: "/volvo-bus/32-seater-volvo-bus",
          },
          {
            name: "35 Seater Volvo Bus",
            path: "/volvo-bus/35-seater-volvo-bus",
          },
          {
            name: "38 Seater Volvo Bus",
            path: "/volvo-bus/38-seater-volvo-bus",
          },
          {
            name: "40 Seater Volvo Bus",
            path: "/volvo-bus/40-seater-volvo-bus",
          },
          {
            name: "42 Seater Volvo Bus",
            path: "/volvo-bus/42-seater-volvo-bus",
          },
          {
            name: "45 Seater Volvo Bus",
            path: "/volvo-bus/45-seater-volvo-bus",
          },
          {
            name: "Volvo Bus With Washroom",
            path: "/volvo-bus/volvo-bus-with-washroom",
          },
        ],
      },
      {
        name: "Mercedes Coach",
        path: "/mercedes-coach",
        sub: [
          {
            name: "38 Seater Mercedes Bus",
            path: "/mercedes-coach/38-seater-mercedes-bus",
          },
          {
            name: "40 Seater Mercedes Bus",
            path: "/mercedes-coach/40-seater-mercedes-bus",
          },
          {
            name: "42 Seater Mercedes Bus",
            path: "/mercedes-coach/42-seater-mercedes-bus",
          },
          {
            name: "43 Seater Mercedes Bus",
            path: "/mercedes-coach/43-seater-mercedes-bus",
          },
          {
            name: "45 Seater Mercedes Bus",
            path: "/mercedes-coach/45-seater-mercedes-bus",
          },
          {
            name: "Mercedes Bus With Washroom",
            path: "/mercedes-coach/mercedes-bus-with-washroom",
          },
        ],
      },
      {
        name: "Isuzu Bus",
        path: "/isuzu-bus",
        sub: [
          {
            name: "15 Seater Isuzu Bus",
            path: "/isuzu-bus/15-seater-isuzu-bus",
          },
          {
            name: "18 Seater Isuzu Bus",
            path: "/isuzu-bus/18-seater-isuzu-bus",
          },
          {
            name: "20 Seater Isuzu Bus",
            path: "/isuzu-bus/20-seater-isuzu-bus",
          },
          {
            name: "22 Seater Isuzu Bus",
            path: "/isuzu-bus/22-seater-isuzu-bus",
          },
          {
            name: "25 Seater Isuzu Bus",
            path: "/isuzu-bus/25-seater-isuzu-bus",
          },
          {
            name: "27 Seater Isuzu Bus",
            path: "/isuzu-bus/27-seater-isuzu-bus",
          },
        ],
      },
    ],
  },
  {
    name: "airport transfer",
    path: "/airport-transfer",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
</script>
