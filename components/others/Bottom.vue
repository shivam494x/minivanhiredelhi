<template>
  <section
    class="flex flex-wrap lg:gap-4 gap-2 mx-auto"
  >
    <UtilityQueryForm :title="Form_Title" v-if="form" />
    <OthersNav2  :nav="nav" class="w-full" />
    <UtilityNeedHelp />
  </section>
</template>

<script setup>
const props = defineProps({
  nav: Array,
  Form_Title: String,
  form: {
    type: Boolean,
    default: true, 
  },
});
</script>
