<template>
  <section class="side_padding">
    <div class="px-4 py-8">
      <h1 class="h-12 center text-3xl font-semibold">Award</h1>
    </div>
    <div class="container mx-auto p-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="award in awards"
          :key="award._id"
          class="relative bg-white shadow-lg rounded-xl p-4"
        >
          <div class="img m-auto w-80 mb-4">
            <NuxtImg
              class="h-96 w-full object-cover rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiD3hMabbhrCQ3o7nI73P6GtpNnOKGPrzM2yHZlRAJz_Xt0nYFPwnj8Tf1GFQrkEoV8M&usqp=CAU"
              alt="award Image"
            />
          </div>
          <div class="content center">
            <h2 class="text-xl font-semibold mb-2 px-3">{{ award.name.en }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $axios: axios } = useNuxtApp();
const loading = ref(true);
const awards = ref();


onMounted(() => {
  const getData = async () => {
    try {
      const response = await axios.get("/award");
      if (response.data) {
        awards.value = response.data.filter((blog) => blog.status === "show");
      } else {
        console.error(response);
      }
    } catch (e) {
      console.error("blog error ", e);
    } finally {
      loading.value = false;
    }
  };
  getData();
});
</script>
