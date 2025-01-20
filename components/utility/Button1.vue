<template>
  <NuxtLink
    to="#"
    id="custom_btn_1"
    :class="`${border ? 'with_border' : 'without_border'} capitalize relative`"
  >
    <span class="z-10 relative center">
      {{ title }}
    </span>
  </NuxtLink>
</template>

<style scoped>
.without_border {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
#custom_btn_1::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 150ms var(--ease);;
}
a#custom_btn_1.without_border::before {
  background-color: var(--secondary-color);
}
a#custom_btn_1.with_border::before {
  background-color: var(--primary-color);
}
#custom_btn_1:hover::before {
  transform: scaleY(1);
}
.without_border:hover {
  color: white;
}

.with_border {
  border: 1px solid var(--primary-color);
  color: white;
}
</style>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  border: {
    type: Boolean,
    required: true,
  },
});
</script>
