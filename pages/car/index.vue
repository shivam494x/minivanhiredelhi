<template>
  <section class="container grid gap-10 grid-cols-5">
    <div class="content col-span-3">
      <div>
        <div
          class="heading font-semibold text-5xl capitalize p-4 border-b tracking-tighter"
        >
          <h2 class="">Car</h2>
        </div>
        <div class="desc tracking-tight py-6 px-4 text-gray-800 space-y-4">
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
      <section class="container px-2 py-4">
        <ul class="space-y-10">
          <li v-for="i in 5">
            <CarCard1
              :heading="data.heading"
              :img="data.img"
              :details="data.carDetails"
              :path="data.path"
              :key="data.heading"
            />
          </li>
        </ul>
      </section>
    </div>
    <div class="nav py-8 max-h-96 col-span-2">
      <OthersNav2 :nav="cars" />
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "van",
});
const cars = ref([{}]);
const { data: navData, error } = await useFetch("/api/nav/car");
if (navData) {
  cars.value = navData.value.sub;
} else {
  console.error(error);
}

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
</script>
