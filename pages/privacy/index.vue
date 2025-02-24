<template>
  <div
    class="min-h-screen bg-offWhite flex items-center justify-center text-complementary px-4"
  >
    <div class="container mx-auto px-6 py-12 max-w-screen-lg">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-pri mb-4">
          {{ allData?.title?.en }}
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl text-complementary opacity-75"
        >
          {{ allData?.heading?.en }}
        </p>
      </div>

      <!-- Policy Sections -->
      <section class="mx-auto space-y-6 w-full max-w-4xl center">
        <div v-html="allData?.description?.en"></div>
      </section>

      <!-- Contact Info -->
      <div class="mt-12 text-center">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-pri">
          Contact Us
        </h2>
        <p class="opacity-75 mt-2 max-w-2xl mx-auto px-4 text-sm sm:text-base">
          For any inquiries regarding our policies, please contact our support
          team.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAll } from "~/stores/api";

const allStore = useAll();
const allData = ref();


const getData = async () => {
  await allStore.fetchData();
  if (allStore.privacy_policy) {
    const { privacy_policy } = allStore;
    allData.value = privacy_policy;

    
  }
};
onMounted(() => {
  getData();
});
</script>

<style scoped>
/* Card styles */
.card {
  transition: filter 0.3s ease, transform 0.3s ease;
}

/* Dimming effect on hover */
.card:hover {
  filter: brightness(1.2);
  transform: scale(1.03);
}

/* Dim other cards when one is hovered */
.card-container:hover .card:not(:hover) {
  filter: brightness(0.3);
}

.bg-complementary {
  background-color: #1e2a47;
}
</style>
