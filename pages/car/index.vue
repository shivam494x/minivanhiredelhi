<template>
  <section>
    <div
      class="heading font-semibold text-8xl relative capitalize h-56 tracking-wide text-end px-8"
    >
      <div
        :style="{ backgroundImage: `url('/img/car.png')` }"
        class="absolute left-0 top-0 z-10 h-full w-full"
      ></div>
      <div class="z-20 relative h-full flex flex-col justify-end items-center">
        <h2 class="text-white uppercase font-bold">Cars</h2>
      </div>
    </div>
  </section>
  <UDivider
    label="Introduction"
    class="uppercase w-4/5 m-auto mt-12 mb-4"
    :ui="{
      label: 'text-pri dark:text-pri',
    }"
  />
  <section class="container grid gap-10 side_padding">
    <div class="content px-4">
      <div>
        <div class="desc tracking-tight py-6 px-4 space-y-4">
          <p>
            Car Hire Delhi- is a service provider of premium and luxury car on
            rental in all the major cities of India such as Delhi, Mumbai, Goa,
            Pune, Chennai, Hyderabad, Kochi, Bengaluru, Ahmedabad, Jaipur,
            Kolkata, Bagdogra and other adjoining cities. Rent a luxury car to
            enjoy easy and hassle-free trip, our fleet of services are audited
            for cleanliness, safety and comfort. Cars on hire can move groups of
            01 to 06 passengers comfortably across long distances and allow
            people to explore new places through tourism. Reservation of
            luxurious cars can be done for Leisure Trips, VIP Meetings &
            Conventions, Business & Corporate Travel and Ground Transport
            Service. Mini Van Hire fleet of car includes Sedan Cars such as
            Swift Dzire, Etios; Premium Cars such as Jaguar, Mercedes S Class &
            E Class, Audi A8 & A6, BMW 7 Series; Luxury Cars such as Toyota
            Camry, Honda Accord, SUV’s Cars such as Toyota Crysta, Ford
            Endeavour, Audi Q7, Mercedes GL, Toyota Land Cruiser and many more.
          </p>
          <p>
            Online Booking of Car is available for Airport Pick Up and Drop
            Service, Local Run, City Tour and Outstation Trips such as Agra
            Jaipur Tour, Shimla Manali Tour, Haridwar Rishikesh Tours, Char Dham
            Yatra, Kerala Tour, Goa Tour, Varanasi Khajuraho Trip, South India
            Tour, Himachal Tour, Uttarakhand Tour, North India Tour, Rajasthan
            Tour, Gujarat Tour, Mumbai Tour, Odisha Tour and many more.
          </p>
        </div>
      </div>
      <UDivider
        label="Our cars"
        class="uppercase w-4/6 mr-auto my-12"
        :ui="{
          label: 'text-pri dark:text-pri',
        }"
      />
      <section class="container px-2 py-4 grid grid-cols-3 gap-5">
        <ul class="space-y-10 col-span-2">
          <li v-for="{ heading, img, carDetails } in carData">
            <CarCard1
              class="shadow-lg"
              :name="heading"
              :img="img"
              :details="carDetails"
              :path="getPath(carsNav, heading)"
              :key="heading"
            />
          </li>
        </ul>
        <div class="info">
          <!-- <UtilityQueryForm /> -->
          <UtilityNeedHelp />
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped>
.heading > div:first-child {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.heading > div:first-child::before {
  content: "";
  height: 100%;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
  position: absolute;
  background: linear-gradient(0deg, rgba(2,1,13,1) 0%, rgba(87,227,255,0) 100%);
}
.heading .uppercase {
  color: transparent;
  background: linear-gradient(0deg, #1e2a47 0%, rgba(255, 255, 255, 0.9) 190%);
  background-clip: text;
}
</style>
<script setup>
definePageMeta({
  layout: "van",
});
const { getPath } = useUtility();
const carsNav = ref([{}]);
const { data: navData, error } = await useFetch("/api/nav/car");
if (navData) {
  carsNav.value = navData.value.sub;
} else {
  console.error(error);
}

const carData = [
  {
    heading: "Luxury Car On Rental",
    img: "https://minivanhiredelhi.com/uploads/27685_Luxury%20Car%20Rental%20Service.jpg",
    carDetails: [
      { label: "Style", value: "Sedan", icon: "mdi-car" },
      { label: "Class", value: "Luxury", icon: "mdi-crown" }, // Updated icon
      { label: "Air Condition", value: "Yes", icon: "mdi-air-conditioner" },
      { label: "Transmission", value: "Automatic", icon: "mdi-car-cog" },
    ],
    path: "/car/luxury-car",
  },
  {
    heading: "Audi Car Rental Service",
    img: "https://minivanhiredelhi.com/uploads/72565_luxury-car-on rent.JPG",
    carDetails: [
      { label: "Style", value: "Sedan", icon: "mdi-car" },
      { label: "Class", value: "Luxury", icon: "mdi-crown" }, // Updated icon
      { label: "Air Condition", value: "Yes", icon: "mdi-air-conditioner" },
      { label: "Transmission", value: "Automatic", icon: "mdi-car-cog" },
    ],
    path: "/car/audi-car",
  },
  {
    heading: "Mercedes Car Rental",
    img: "https://minivanhiredelhi.com/uploads/51769_Car Rental Service 5.jpg",
    carDetails: [
      { label: "Style", value: "Sedan", icon: "mdi-car" },
      { label: "Class", value: "Luxury", icon: "mdi-crown" }, // Updated icon
      { label: "Air Condition", value: "Yes", icon: "mdi-air-conditioner" },
      { label: "Transmission", value: "Automatic", icon: "mdi-car-cog" },
    ],
    path: "/car/mercedes-car",
  },
];
</script>
