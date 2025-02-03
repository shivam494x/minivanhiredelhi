<template>
  <BaseLayout>
    <main class="bg-offWhite text-black side_padding">
      <div class="current-location py-4 px-4 border-b border-t">
        <UBreadcrumb :links="breadcrumbLinks" class="text-black" />
      </div>
      
      <slot></slot>
    </main>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/layouts/default.vue";
const route = useRoute();
const breadcrumbLinks = computed(() => {
  const paths = route.path.split("/").filter(Boolean);
  const links = paths.map((path, index) => {
    const linkPath = "/" + paths.slice(0, index + 1).join("/");
    return {
      label: path.charAt(0).toUpperCase() + path.slice(1),
      to: linkPath,
    };
  });

  // Add the home link at the beginning
  return [{ label: "Home", to: "/" }, ...links];
});
</script>
