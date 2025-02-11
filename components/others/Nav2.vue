<template>
  <nav class="h-full overflow-hidden max-w-sm mx-auto" id="nav2">
    <div class="border overflow-y-scroll">
      <ul>
        <li
          v-for="{ name, path, sub } in nav"
          class="overflow-hidden cursor-pointer h-12 flex w-full group border-b relative"
        >
          <div class="relative w-full flex justify-between h-12">
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
              @click="handleClick"
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
          <div
            v-if="sub"
            class="absolute left-0 w-full top-12 bg-complementary sub"
          >
            <ul>
              <li
                v-for="{ name, path } in sub"
                class="cursor-pointer h-12 flex w-full group border-b text-white"
              >
                <div class="relative w-full h-max">
                  <NuxtLink
                    :to="path"
                    class="w-full h-12 flex justify-end items-center pr-10"
                  >
                    <span>
                      {{ name }}
                    </span>
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
ul > li > div a {
  position: relative;
  display: inline-flex;
  transition: all 150ms var(--ease);
}
.sub .router-link-active {
  color: #f08dff !important;
}
.sub .router-link-active:hover {
  color: #ffffff !important;
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
.overflow-y-scroll::-webkit-scrollbar {
  width: 0px;
}
</style>
<script setup>
const { $gsap: gsap } = useNuxtApp();

const props = defineProps({
  nav: Array,
});
const previous_li = ref({
  isOpen: false,
  li: null,
});
const list_height = 48;
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
};
function openSub(parent_li, lv) {
  const nearestLis = parent_li.querySelectorAll("li");
  let height;

  height = list_height * (nearestLis.length + 1);
  inAnimation.height = height;
  gsap.to(parent_li, inAnimation);
}

function closeSub(parent_li) {
  gsap.to(parent_li, outAnimation);
}

function handleClick(event) {
  const liElement = event.currentTarget.closest("li");
  const x = event.currentTarget.classList.toggle("clicked");
  if (previous_li.value?.isOpen) {
    closeSub(previous_li.value.li);
  }
  if (liElement !== previous_li.value.li) {
    openSub(liElement);
    previous_li.value.isOpen = true;
    previous_li.value.li = liElement;
  } else {
    previous_li.value.isOpen = false;
    previous_li.value.li = null;
  }
}
</script>
