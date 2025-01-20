<template>
  <ul
    class="flex text-3xl md:text-base font-normal flex-col md:flex-row items-center h-full md:font-semibold capitalize z-50"
  >
    <li
      v-for="({ name, path, sub }, index) in nav_links"
      :key="`${name}/${index}`"
      class="relative md:h-full flex md:items-center items-end w-full group md:w-auto justify-end md:justify-center border-b md:border-b-0 border-pri"
      @mouseenter="setActiveIndexWithDelay(index)"
      @mouseleave="resetActiveIndexWithDelay"
    >
      <NuxtLink
        :to="path"
        v-if="!isTouch"
        class="relative justify-end items-center space-x-1 md:px-4 md:py-5 py-2.5 px-3 md:w-max w-full"
      >
        <span>{{ name }}</span>
        <Icon
          v-if="sub"
          class="text-sm rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
          name="ep:close"
        />
      </NuxtLink>

      <a
        v-else
        role="button"
        class="relative justify-end items-center space-x-1 md:px-4 md:py-5 py-2.5 px-3 md:w-max w-full"
      >
        <span>{{ name }}</span>
        <Icon
          v-if="sub"
          class="text-sm rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
          name="ep:close"
        />
      </a>
      <!-- Level 1 Nest -->

      <div
        v-if="sub && activeIndex === index"
        class="absolute top-[100%] left-0"
      >
        <ul class="w-max bg-offWhite text-secondary font-normal">
          <li
            v-for="({ name, path: subpath, sub: l1sub }, subIndex) in sub"
            :key="`${name}/${subIndex}`"
            class="relative border-b w-full"
            @mouseenter="setSubActiveIndexWithDelay(subIndex)"
            @mouseleave="resetSubActiveIndexWithDelay"
          >
            <NuxtLink
              :to="`${subpath}`"
              class="relative justify-end md:justify-start space-x-1 md:px-4 md:py-3 py-2.5 px-3 w-full"
            >
              <span>
                {{ name }}
              </span>
            </NuxtLink>

            <!-- Level 2 Nest -->
            <div
              v-if="l1sub && subActiveIndex == subIndex"
              class="absolute top-0 right-full"
            >
              <ul class="bg-offWhite w-max">
                <li
                  v-for="({ name, path: subsubpath }, subSubIndex) in l1sub"
                  :key="`${name}${subSubIndex}`"
                  class="border-b relative"
                >
                  <NuxtLink
                    :to="`${subsubpath}`"
                    class="relative justify-end md:justify space-x-1 md:px-4 md:py-3 py-2.5 px-3 w-full"
                  >
                    <span>
                      {{ name }}
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<style scoped>
ul > li a {
  position: relative;
  display: inline-flex;
  transition: all 150ms var(--ease);
}

ul > li > a::before {
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
ul > li > a > span {
  z-index: 10;
  position: relative;
}
ul > li > a:hover::before {
  transform: scaleY(1);
}
ul li a:hover {
  color: white;
}

ul > li ul li:last-child {
  border-bottom: 0;
}
</style>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const activeIndex = ref(null);
const subActiveIndex = ref(null);
const isTouch = ref(null);
const isSubOpened = ref(false);

let menuHideTimer = null;
let subMenuHideTimer = null;

const handleLinkClick = () => {
  setActiveIndexWithDelay();
};
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
        path: "/toyota-vellfire",
        sub: [
          {
            name: "6 Seater Toyota Vellfire",
            path: "/toyota-vellfire/6-seater",
          },
          {
            name: "7 Seater Toyota Vellfire",
            path: "/toyota-vellfire/7-seater",
          },
          {
            name: "Vellfire Toyota Van",
            path: "/toyota-vellfire/vellfire-toyota-van",
          },
        ],
      },
      {
        name: "Mercedes V Class",
        path: "/mercedes-v-class",
        sub: [
          {
            name: "5 Seater Mercedes Viano",
            path: "/mercedes-v-class/5-seater",
          },
          { name: "6 Seater Mercedes Van", path: "/mercedes-v-class/6-seater" },
          { name: "Mercedes V Class", path: "/mercedes-v-class/v-class" },
        ],
      },
      {
        name: "Kia Carnival Limousine",
        path: "/kia-carnival-limousine",
        sub: [
          {
            name: "6 Seater Kia Carnival Car",
            path: "/kia-carnival-limousine/6-seater",
          },
          {
            name: "7 Seater Kia Carnival Car",
            path: "/kia-carnival-limousine/7-seater",
          },
          {
            name: "Carnival Kia Luxury Car",
            path: "/kia-carnival-limousine/carnival-luxury",
          },
        ],
      },
      {
        name: "Toyota Hiace",
        path: "/toyota-hiace",
        sub: [
          {
            name: "5 Seater Toyota Luxury Van",
            path: "/toyota-hiace/5-seater",
          },
          {
            name: "6 Seater Luxury Toyota Van",
            path: "/toyota-hiace/6-seater",
          },
          {
            name: "7 Seater Toyota Luxury Van",
            path: "/toyota-hiace/7-seater",
          },
          {
            name: "8 Seater Toyota Luxury Van",
            path: "/toyota-hiace/8-seater",
          },
          {
            name: "9 Seater Toyota Luxury Van",
            path: "/toyota-hiace/9-seater",
          },
        ],
      },
    ],
  },
  {
    name: "car",
    path: "/car",
  },
  {
    name: "bus",
    path: "/bus",
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

// Detect touch or mouse input
onMounted(() => {
  function updateInputClass(event) {
    if (event.type === "touchstart") {
      isTouch.value = true;
    } else if (event.type === "mousemove") {
      isTouch.value = false;
    }
  }

  // Add event listeners
  window.addEventListener("touchstart", updateInputClass, { once: true });
  // Cleanup listener on unmount
  onBeforeUnmount(() => {
    window.removeEventListener("touchstart", updateInputClass);
  });
});
</script>
