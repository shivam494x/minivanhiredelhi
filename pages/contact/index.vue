<template>
  <section style="max-width: 60rem;" class="side_padding container py-10">
    <div class="md:grid flex flex-col grid-cols-2 grid-rows-3">
      <div
        class="query md:w-full sm:w-4/5 w-full mx-auto h-full row-span-3 order-2 my-10 md:order-1 md:my-0"
      >
        <UtilityQueryForm :title="'Contact Us'" class="my-auto" />
      </div>
      <div
        class="row-span-2 text-complementary grid_bg lg:text-base text-sm order-1 md:order-2"
      >
        <div
          class="mx-auto w-max my-8 py-4 px-8 text-2xl capitalize font-bold rounded-l-3xl text-pri"
        >
          <h3>say hello!</h3>
        </div>
        <div class="w-max max-w-full mx-auto">
          <div
            v-for="(item, index) in contact"
            :key="index"
            class="h-12 my-2 py-4 px-6 capitalize rounded-r-3xl flex items-center gap-3"
          >
            <Icon :name="item.icon" class="text-3xl font-semibold text-pri" />
            <span v-if="item.name !== 'Website'"
              >{{ item.name }}: {{ item.data }}</span
            >
            <NuxtLink v-else :to="item.data" class="">
              {{ item.name }}:
              <span class="text-pri underline"> minivanhiredelhi </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="map h-full order-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0019542975856!2d77.2278280752855!3d28.53966097571551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce22f40b22ff5%3A0x1d67e19b90c3ef62!2s561-a%2C%20Chirag%20Dilli%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1740034011537!5m2!1sen!2sin"
          style="border: 0"
          class="h-full w-full"
          :allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
const contact = ref([
  {
    icon: "i-heroicons-phone",
    name: "Phone No",
    data: "+91 9899681760, 9810817846",
  },
  {
    icon: "i-heroicons-device-phone-mobile",
    name: "Telephone",
    data: "011- 29252451, 40704077",
  },
  {
    icon: "i-heroicons-map-pin",
    name: "Address",
    data: "561A, 1st Floor Chirag Delhi New Delhi- 110017",
  },
  {
    icon: "i-heroicons-map",
    name: "Landmark",
    data: "Near Metro Station Gate No-5",
  },
  {
    icon: "i-heroicons-envelope",
    name: "Email",
    data: "sales@asparkholidays.com, booking@asparkholidays.com",
  },
  {
    icon: "i-heroicons-globe-alt",
    name: "Website",
    data: "https://www.minivanhiredelhi.com",
  },
]);
</script>
