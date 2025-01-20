<template>
  <ul
    class="wrapper flex text-3xl md:text-base md:h-16 font-normal flex-col md:flex-row items-center h-full md:font-semibold capitalize z-50"
  >
    <li
      v-for="({ name, path, sub }, index) in nav_links"
      :key="`${name}/${index}`"
      :id="name"
      class="md:h-full h-16 flex md:items-center w-full group md:w-auto md:justify-center border-b md:border-b-0 border-pri"
      @mouseenter="setActiveIndexWithDelay(index)"
      @mouseleave="resetActiveIndexWithDelay"
    >
      <div class="relative w-full h-max">
        <a
          v-if="isTouch && sub"
          role="button"
          class="relative lv0 justify-end items-center space-x-1 md:px-4 md:py-5 py-2.5 px-3 md:w-max w-full h-16 md:h-full"
        >
          <span>{{ name }}</span>
          <Icon
            v-if="sub"
            class="text-sm rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
            name="ep:close"
          />
        </a>

        <NuxtLink
          :to="path"
          v-else
          class="relative justify-end items-center space-x-1 md:px-4 md:py-5 py-2.5 px-3 md:w-max w-full h-16"
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
          :class="{
            hidden: !(sub && activeIndex === index) && !isSubOpened,
            block: (sub && activeIndex === index) || isSubOpened,
          }"
          class="absolute top-full md:left-0 right-0 z-50 w-full md:w-max h-64 md:h-auto overflow-scroll md:overflow-hidden"
        >
          <ul class="md:w-max w-full bg-offWhite text-secondary font-normal">
            <li
              v-for="({ name, path: subpath, sub: l1sub }, subIndex) in sub"
              :key="`${name}/${subIndex}`"
              class="relative border-b w-full lv1 md:h-full h-16"
              @mouseenter="setSubActiveIndexWithDelay(subIndex)"
              @mouseleave="resetSubActiveIndexWithDelay"
            >
              <div class="relative w-full">
                <NuxtLink
                  :to="`${subpath}`"
                  class="relative justify-end md:justify-start space-x-1 md:px-4 md:py-3 py-2.5 px-3 w-full"
                >
                  <span>{{ name }}</span>
                </NuxtLink>
                <!-- Level 2 Nest -->
                <div
                  :class="{
                    hidden: !(l1sub && subActiveIndex === subIndex),
                    block: l1sub && subActiveIndex === subIndex,
                  }"
                  class="absolute top-0 right-full"
                >
                  <ul class="bg-offWhite w-max">
                    <li
                      v-for="({ name, path: subsubpath }, subSubIndex) in l1sub"
                      :key="`${name}${subSubIndex}`"
                      class="border-b relative lv2 md:h-full h-16"
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
<style scoped>
@media (max-width: 768px) {
  ul.wrapper {
    height: calc(100vh - 4rem);
    overflow: scroll;
  }
  ul.wrapper > li {
    overflow: hidden;
  }
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
</style>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const { $gsap: gsap } = useNuxtApp();

const activeIndex = ref(null);
const subActiveIndex = ref(null);
const isTouch = ref(false);
const isSubOpened = ref(false);

let menuHideTimer = null;
let subMenuHideTimer = null;

const setActiveIndexWithDelay = (index) => {
  if (isTouch.value) return;
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
    ],
  },
  {
    name: "car",
    path: "/car",
  },
  {
    name: "bus",
    path: "/bus",
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

onMounted(() => {
  function updateInputClass(event) {
    if (event.type === "touchstart") {
      isTouch.value = true;
    } else {
      isTouch.value = false;
    }
  }

  let links;
  const list_height = 64;
  const ease = "cubic-bezier(0.84, 0.08, 0.23, 0.68)";
  if (isTouch.value) {
    links = document.querySelectorAll(".mobile .lv0");

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        const parent_li = e.target.parentElement.parentElement;
        isSubOpened.value = !isSubOpened.value;
        const previous_clicked = document.querySelector(".clicked");
        if (!isSubOpened.value || previous_clicked) {
          parent_li.classList.remove("clicked");
          const outAnimation = {
            height: list_height,
            duration: 0.25,
            ease,
          };
          if (previous_clicked) {
            gsap.to(previous_clicked, outAnimation);
          }
          gsap.to(parent_li, outAnimation);
        } else {
          parent_li.classList.add("clicked");
          const lists = parent_li.querySelectorAll("div > ul > li.lv1");
          const height = (lists.length + 1) * list_height;
          const inAnimation = {
            height,
            duration: 0.25,
            ease,
            delay: 0.1,
          };
          gsap.to(parent_li, inAnimation);
        }
      });
    });
  }
  window.addEventListener("touchstart", updateInputClass, { once: true });

  // Cleanup listener on unmount
  onBeforeUnmount(() => {
    window.removeEventListener("touchstart", updateInputClass);
  });
});
</script>
