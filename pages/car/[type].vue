<template>
  <section class="container grid gap-10 grid-cols-5">
    <div class="content col-span-3">
      <div
        class="heading font-semibold text-5xl capitalize p-4 border-b tracking-tighter"
      >
        <h2 class="">{{ title }}</h2>
      </div>
      <div class="desc tracking-tight py-6 px-4 text-gray-800">
        <p>
          Minivan hire company provides an Imported Luxury VIP van rental
          service in major cities across India. Rent a super luxury traveler van
          that embodies versatility, innovation, and customization. The imported
          VIP van can accommodate 5 to 15 passengers comfortably for
          long-distance travel and tourism.
        </p>
        <p>
          Our fleet includes Toyota Vellfire, Toyota Alphard, Toyota Hiace,
          Toyota Commuter, Mercedes V Class, Hyundai H1, KIA Carnival Limousine,
          and more. Online booking is available for airport transfers, city
          tours, and outstation trips.
        </p>
      </div>
    </div>
    <div class="nav py-8 max-h-80 col-span-2">
      <OthersNav2 :nav="carsNav" />
    </div>
  </section>
  <section class="container grid grid-cols-2 gap-8 w-3/5">
    <div v-for="i in 5">
      <CarCard1
        :name="cardData.heading"
        :img="cardData.img"
        :details="cardData.carDetails"
        :path="cardData.path"
        :key="cardData.heading"
        :grid="true"
      />
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "van",
});

const route = useRoute();
const title = ref();
const carsNav = ref([{}]);
const cardData = ref([{}]);
const { getPath } = useUtility();
const getNav = async () => {
  const { data: navData, error } = await useFetch("/api/nav/car");
  if (navData) {
    carsNav.value = navData.value.sub;
  } else {
    console.error(error);
  }
};
const getCardData = async () => {
  const data = {
    heading: "Luxury Car On Rental",
    img: "https://minivanhiredelhi.com/uploads/27685_Luxury%20Car%20Rental%20Service.jpg",
    carDetails: [
      { label: "Style", value: "Sedan" },
      { label: "Class", value: "Luxury" },
      { label: "Air Condition", value: "Yes" },
      { label: "Transmission", value: "Automatic" },
    ],
    path: "/car/luxury-car",
  };
  cardData.value = data;
};
getCardData();
getNav();
onMounted(() => {
  title.value = route.params.type;
});
</script>
