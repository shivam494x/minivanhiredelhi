<template>
  <div
    class="container side_padding xl:py-20 md:py-14 py-8 bg-secondary text-white"
  >
    <div
      class="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-6 md:grid-rows-2 gap-4 lg:p-2"
    >
      <div class="txt row-span-4 md:row-span-1 m-auto">
        <div class="capitalize md:space-y-4 space-y-2">
          <h4 class="sub-heading md:text-lg text-base tracking-wide">
            what do you know about us
          </h4>
          <h2 class="heading md:text-4xl text-3xl font-semibold tracking-tight">
            who we are
          </h2>
        </div>
        <div
          class="normal-case mb-4 md:mt-8 mt-5 font-light space-y-2 opacity-85 text-sm md:text-base"
        >
          <p>
            Minivan Hire Delhi- is a service provider of imported luxury vans,
            Volvo bus & Mercedes coach, luxury car on rental in all major cities
            of India such as Delhi, Noida, Gurugram, Mumbai, Goa, Pune, Chennai,
            Hyderabad, Kochi, Cochin, Bengaluru, Ahmedabad, Agra, Jaipur,
            Udaipur, Kolkata, Bagdogra, Chandigarh and other adjoining cities.
            Online booking of Bus, Van & Cab on rental services are available on
            all over India for airport pick and drop and other multiple options
            of taking trips within the city as well as opting for outstation
            trips from the airport.
          </p>
          <p>
            Mini Van Hire fleet includes imported luxury van such as Toyota
            Alphard, Toyota Vellfire, Mercedes V Class, KIA Carnival Limousine,
            Toyota Hiace, Mercedes Sprinter, Toyota Commuter, Toyota Coaster,
            Hyundai H1, Futon Van Force Urbania Van and luxury Tempo Traveller.
            You can also book luxury coach such as TATA Bus, SML Coach, Isuzu
            Bus, Bharat Benz Bus, Volvo Bus, Mercedes Coach for medium and large
            group travel in India.
          </p>
        </div>
        <div class="space-x-6 flex">
          <UtilityButton1
            class="capitalize w-max py-2 px-6"
            title="read more"
            :border="false"
          />
          <UtilityButton1
            class="capitalize w-max py-2 px-6"
            title="hire now"
            :border="true"
          />
        </div>
      </div>
      <div class="img md:p-8 xl:p-12 center row-span-4 md:row-span-1">
        <div class="relative w-full">
          <UCarousel
            :items="vehicles"
            :ui="{ vehicle: 'basis-full' }"
            class="rounded-lg overflow-hidden"
            arrows
          >
            <template #default="{ item: vehicle }">
              <img
                :src="vehicle"
                alt="Vehicle"
                class="object-fill"
                draggable="false"
              />
            </template>
          </UCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.txt p {
  word-spacing: 3px;
}
</style>

<script setup>
const vehicles = [
  "/img/about/mercedes-sprinter.png",
  "/img/about/mercedes-v-class.png",
  "/img/about/toyota-hiace.png",
];
</script>
