<template>
    <section
      class="container section_padding lg:grid flex flex-wrap grid-cols-3 lg:gap-8 gap-4"
    >
      <UtilityQueryForm :title="Form_Title" />
      <OthersNav2 :nav="nav" class="w-full"/>
      <UtilityNeedHelp />
    </section>
</template>

<script setup>
const props = defineProps({
  nav: Array,
  Form_Title: String,
});
</script>
