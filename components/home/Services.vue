<template>
  <div class="side_padding section_padding bg-white text-secondary">
    <div class="container m-auto">
      <div class="xl:space-y-15 md:space-y-11 space-y-6">
        <div class="headinngs uppercase center flex-col md:space-y-2">
          <h6
            class="text-base md:text-xl font-semibold tracking-wide center text-pri"
          >
            services
          </h6>
          <h2
            class="text-2xl md:text-3xl font-semibold tracking-tight capitalize text-center"
          >
            providing amazing services to our clients
          </h2>
        </div>
        <div class="services lg:px-16 md:px-12 px-8  mx-auto">
          <ul
            class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-2 gap-y-10"
          >
            <li class="max-w-60" v-for="(service, index) in services">
              <div class="flex flex-col">
                <div class="icon">
                  <div
                    class="border relative border-dashed rounded-full p-5 m-auto w-max center border-pink-900"
                  >
                    <span
                      class="absolute top-0 right-0 w-6 h-6 text-sm rounded-full bg-pri text-offWhite center translate-x-1 -translate-y-1"
                      >{{ formatToTwoDigits(index + 1) }}</span
                    >
                    <UIcon :name="service.icon" class="w-5 h-5" />
                  </div>
                </div>
                <div class="heading center text-center mb-4 font-semibold">
                  <h3 class="py-2 before relative">{{ service.heading }}</h3>
                </div>
                <div class="txt center text-center text-sm text-gray-500">
                  <p>
                    {{ service.paragraph }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.before::before {
  height: 1px;
  width: 3rem;
  transform: translate(-50%, 0%);
  left: 50%;
  background-color: var(--primary-color);
  bottom: 0;
  z-index: 0;
}
</style>
<script setup>
const { $axios: axios } = useNuxtApp();
const services = ref([]);
function formatToTwoDigits(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

onBeforeMount(() => {
  const getData = async () => {
    const { data } = await axios.get(`/service`);
    if (data) {
      const refiendedData = data.map((d) => {
        return {
          icon: d.icon,
          heading: d.name.en,
          paragraph: d.description,
        };
      });
      
      services.value.push(...refiendedData);
    }
  };
  getData();
});
</script>
