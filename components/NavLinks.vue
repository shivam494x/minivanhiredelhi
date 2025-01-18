<template>
  <ul
    class="flex text-3xl md:text-base font-normal flex-col md:flex-row items-center h-full md:font-semibold capitalize"
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
        class="relative center space-x-1 md:px-6 md:py-5 py-2.5 px-3"
      >
        <span>{{ name }}</span>
        <Icon
          v-if="sub"
          class="text-sm rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
          name="ep:close"
        />
      </NuxtLink>

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
            <NuxtLink :to="`${path}/${subpath}`" class="px-4 py-2">{{
              name
            }}</NuxtLink>

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
                    :to="`${path}${subpath}${subsubpath}`"
                    class="px-4 py-2"
                    >{{ name }}</NuxtLink
                  >
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
  display: inline-block;
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
  z-index: -1;
}



ul > li > a:hover::before{
  transform: scaleY(1);
}
ul li a:hover {
  color: white;
}


ul > li ul li > a:hover::before {
  transform: scaleX(1);
}

li.hovered:hover > a {
  filter: brightness(100%) opacity(1);
}

li.hovered:not(:hover) > a {
  filter: brightness(75%) opacity(0.6);
}

ul > li ul li:last-child {
  border-bottom: 0;
}
</style>
<script setup>
const activeIndex = ref(null);
const subActiveIndex = ref(null);

let menuHideTimer = null;
let subMenuHideTimer = null;

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
            path: "/6-seater",
          },
          {
            name: "7 Seater Toyota Vellfire",
            path: "/7-seater",
          },
          {
            name: "Vellfire Toyota Van",
            path: "/vellfire-toyota-van",
          },
        ],
      },
      {
        name: "Mercedes V Class",
        path: "/mercedes-v-class",
        sub: [
          {
            name: "5 Seater Mercedes Viano",
            path: "/5-seater",
          },
          {
            name: "6 Seater Mercedes Van",
            path: "/6-seater",
          },
          { name: "Mercedes V Class", path: "/v-class" },
        ],
      },
      {
        name: "Kia Carnival Limousine",
        path: "/kia-carnival-limousine",
        sub: [
          {
            name: "6 Seater Kia Carnival Car",
            path: "/6-seater",
          },
          {
            name: "7 Seater Kia Carnival Car",
            path: "/7-seater",
          },
          {
            name: "Carnival Kia Luxury Car",
            path: "/carnival-luxury",
          },
        ],
      },
      {
        name: "Toyota Hiace",
        path: "/toyota-hiace",
        sub: [
          {
            name: "5 Seater Toyota Luxury Van",
            path: "/5-seater",
          },
          {
            name: "6 Seater Luxury Toyota Van",
            path: "/6-seater",
          },
          {
            name: "7 Seater Toyota Luxury Van",
            path: "/7-seater",
          },
          {
            name: "8 Seater Toyota Luxury Van",
            path: "/8-seater",
          },
          {
            name: "9 Seater Toyota Luxury Van",
            path: "/9-seater",
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

onMounted(() => {
  function animate_nav_links() {
    const element = document.querySelectorAll(".nav-links > ul > li");
    animateSocialelements(element);
  }
  // animate_nav_links();
});
</script>
