<template>
  <section>
    <UtilityHeading :title="title" backgroundImage="/img/car2.png" />
  </section>
  <UDivider
    label="Introduction"
    class="uppercase w-4/5 m-auto mt-12 mb-4"
    :ui="{
      label: 'text-pri dark:text-pri text-xl',
    }"
  />
  <section class="grid gap-10 side_padding">
    <div class="content px-4">
      <div>
        <div
          class="container desc tracking-tight lg:py-6 py-3 md:px-4 space-y-4 text-sm md:text-base"
        >
          <p>
            Jaguar, Mercedes, BMW, Audi, Toyota luxury car is usually regarded
            as one of the top producers of finest luxury cars in the world. The
            luxury car is comfortable, stylish, durable and most certainly ahead
            of its time. All luxury car models include fully synchronized manual
            and automatic transmissions as standard features. Minivan hire
            delhi- is a service provider of Jaguar, Range Rover Vogue, Mercedes,
            BMW, Audi, Toyota luxury cars rental service in metro cities of
            Delhi, Mumbai, Chennai, Hyderabad, Kochi, Bengaluru and adjoining
            cities. Book a super luxury car that embodies the versatility,
            innovation and customization that has become a hallmark in the past
            decade. The luxury car on rent can move of 2 to 6 passengers
            comfortably across long distances and allow people to explore new
            places through tourism. Reservation of luxurious car can be done for
            Leisure Trips, VIP Meetings & Conventions, Business Trip & Corporate
            Travel. Online Booking of luxury car is available for Airport Pick
            Up and Drop Service, Local Run, City Tour and Outstation Trips such
            as Agra Jaipur Tour, Shimla Manali Tour, Haridwar Rishikesh Tours,
            Char Dham Yatra, Kerala Tour, Goa Tour, Varanasi Khajuraho Trip,
            South India Tour, Himachal Tour, Uttarakhand Tour, North India Tour,
            Rajasthan Tour, Gujarat Tour and many more.
          </p>
        </div>
      </div>
      <UDivider
        :label="`our ${title} collection`"
        class="uppercase w-full mr-auto lg:my-12 my-6"
      />
      <section class="px-2 py-4">
        <div class="w-full space-y-10">
          <ul
            class="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 h-max w-full"
          >
            <li v-for="{ heading, img, description } in cardData">
              <UtilityCard1
                class="shadow-lg"
                :name="heading"
                :img="img"
                :description="description"
                :key="heading"
                :grid="true"
                :btn="'view details'"
              />
            </li>
          </ul>
        </div>
      </section>
      <!-- <OthersBottom :-form_-title="title" :nav="carsNav" /> -->
    </div>
  </section>
</template>
<style scoped>

nav span.iconify:where(.i-heroicons\:chevron-right-20-solid) {
  background-color: white !important;
}
</style>
<script setup>
const route = useRoute();
const title = ref();
const carsNav = ref([{}]);
const cardData = ref([{}]);
const getNav = async () => {
  const { data: navData, error } = await useFetch("/api/nav/car");
  if (navData) {
    carsNav.value = navData.value.sub;
    console.log(carsNav.value);
  } else {
    console.error(error);
  }
};
const getCardData = async () => {
  const data = [
    {
      heading: "Range Rover Vogue",
      img: "https://minivanhiredelhi.com/uploads/72057_Land-Range Rover Vogue.jpeg",
      carDetails: [
        { label: "Style", value: "SUV", icon: "mdi-car-sports" },
        { label: "Class", value: "Luxury", icon: "mdi-crown" },
        { label: "Air Condition", value: "Yes", icon: "mdi-air-conditioner" },
        { label: "Transmission", value: "Automatic", icon: "mdi-car-cog" },
      ],
      description:
        "5 Seater the latest 2023 model Range Rover Vogue Luxury car on rent is available in Delhi, Noida, Gurugram.",
      path: "/luxury-car/range-rover-vogue",
    },
    {
      heading: "Jaguar XF Car",
      img: "https://minivanhiredelhi.com/uploads/34893_Jaguar_XF-exterior-to-edit.jpg",
      carDetails: [
        { label: "Style", value: "Sedan", icon: "mdi-car" },
        { label: "Class", value: "Luxury", icon: "mdi-crown" },
        { label: "Air Condition", value: "Yes", icon: "mdi-air-conditioner" },
        { label: "Transmission", value: "Automatic", icon: "mdi-car-cog" },
      ],
      description:
        "Jaguar XF luxury car rental service in metro cities of Delhi, Mumbai, Chennai, Hyderabad, Kochi, Bengaluru and adjoining cities.",
      path: "/luxury-car/jaguar-xf-car",
    },
    {
      heading: "Jaguar XJ L",
      img: "https://minivanhiredelhi.com/uploads/63371_Jaguar-XJ-img-2.jpg",
      description:
        "Booking of luxurious Jaguar car can be done for Leisure Trips, VIP Meetings & Conventions, Business Trip & Corporate Travel.",
      path: "/luxury-car/jaguar-xj-l",
    },
    {
      heading: "Mercedes S Class",
      img: "https://minivanhiredelhi.com/uploads/60329_mercedes-s-500car%20on%20rent.jpg",
      carDetails: [
        { label: "Style", value: "Sedan", icon: "mdi-car" },
        { label: "Class", value: "Luxury", icon: "mdi-crown" },
        { label: "Air Condition", value: "Yes", icon: "mdi-air-conditioner" },
        { label: "Transmission", value: "Automatic", icon: "mdi-car-cog" },
      ],
      description:
        "Rent a super luxury imported Mercedes S-500 and S-350 car that embodies the versatility, innovation and customization that",
      path: "/luxury-car//mercedes-s-class",
    },
  ];

  cardData.value = data;
};
getCardData();
getNav();
onMounted(() => {
  title.value = route.params.type;
});
</script>
