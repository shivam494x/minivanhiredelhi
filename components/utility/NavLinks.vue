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
.clicked .show_more > .rotate-icon {
  transform: rotate(-90deg);
}
</style>

<template>
  <ul
    class="wrapper flex text-3xl md:text-base md:h-16 font-normal flex-col md:flex-row items-center h-full md:font-semibold capitalize z-50"
  >
    <li
      v-if="nav_links.length > 0"
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
            v-if="sub && sub.length > 0"
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
            block:
              (sub && sub.length > 0 && activeIndex === index) || isSubOpened,
          }"
          class="absolute top-full md:left-0 right-0 z-50 w-full md:w-max h-64 md:h-auto overflow-scroll md:overflow-visible"
        >
          <ul
            class="md:w-max w-full bg-offWhite text-secondary font-normal text-lg md:text-sm"
          >
            <li
              v-for="({ name, path: subpath, sub: l1sub, id }, subIndex) in sub"
              :key="id"
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
                  v-if="l1sub && l1sub.length > 0"
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
const props = defineProps({ fn: Function });
const activeIndex = ref(null);
const subActiveIndex = ref(null);
const isSubOpened = ref(false);
const preSub = ref(null);
const preSubSub = ref(null);
const isSubSubOpened = ref(false);
const nav_links = ref([{}]);

let menuHideTimer = null;
let subMenuHideTimer = null;
const { data, error } = await useFetch("/api/nav/all");

if (data) {
  nav_links.value = data.value;
} else {
  console.error(error);
}

onMounted(() => {
  // console.log(nav_links.value)
  const list_height = 64;
  const ease = "cubic-bezier(0.84, 0.08, 0.23, 0.68)";
  const lis = document.querySelectorAll(".mobile a");
  lis.forEach((l) => {
    l.addEventListener("click", props.fn);
  });
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
    parent_li.classList.add("clicked");
    const nearestLis = parent_li.querySelectorAll(`div > ul > li.lv${lv}`);
    let height;
    if (nearestLis.length < 5) {
      height = list_height * (nearestLis.length + 1);
    } else {
      height = list_height * 5;
    }
    inAnimation.height = height;
    gsap.to(parent_li, inAnimation);
  }

  function closeSub(parent_li, lv) {
    parent_li.classList.remove("clicked");
    gsap.to(parent_li, outAnimation);
  }

  const subClickHandler = (e) => {
    const parent_li = e.target.closest("li.lv0");
    if (isSubOpened.value) {
      closeSub(preSub.value, 1);
    }
    if (parent_li !== preSub.value) {
      openSub(parent_li, 1);
      isSubOpened.value = true;
      preSub.value = parent_li;
    } else {
      isSubOpened.value = false;
      preSub.value = null;
    }
  };
  const subsubClickHandler = (e) => {
    const parent_li = e.target.closest("li.lv1");
    const superParent_li = e.target.closest("li.lv0");

    if (isSubSubOpened.value) {
      closeSub(preSubSub.value, 2);
    }
    if (parent_li !== preSubSub.value) {
      openSub(parent_li, 2);
      isSubSubOpened.value = true;
      preSubSub.value = parent_li;
      superParent_li.scrollBy({ top: 50, behavior: "smooth" });
    } else {
      isSubSubOpened.value = false;
      preSubSub.value = null;
    }
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
</script>
