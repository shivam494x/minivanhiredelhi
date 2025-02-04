<template>
  <div class="bg-[#1e2a47] text-offWhite">
    <div class="border-b mb-5 pb-4 p-3 border-pri">
      <div
        class="capitalize text-lg font-bold pb-3 border-b text-center text-pri tracking-wide"
      >
        <h4>need help?</h4>
      </div>
      <div class="flex items-start flex-col space-y-4 mt-4">
        <span>Connect with Aspark Holidays with best price and offers.</span>
        <div
          class="text-sm text-gray-400 flex flex-col space-y-2 center w-full"
        >
          <span>+91-9999317846, &nbsp; +91-9810817846</span>
          <span>sales@asparkholidays.com</span>
        </div>
      </div>
    </div>
    <div>
      <div
        class="capitalize mx-3 text-lg font-bold tracking-wide pb-3 text-center border-b text-pri"
      >
        <h4>why travel with us</h4>
      </div>
      <ul class="p-4 space-y-6">
        <li v-for="x in travelBenefits" class="center">
          <div class="space-y-3">
            <div class="flex space-x-2 center">
              <span class="center">
                <Icon :name="x.icon" class="text-pri font-semibold text-xl" />
              </span>
              <h5 class="text-lg font-semibold">{{ x.title }}</h5>
            </div>
            <p class="text-gray-400 text-sm">{{ x.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const travelBenefits = [
  {
    title: "Excellent Support",
    description: "We provide 27x7 support to all our customers",
    icon: "mdi-headset", // Replace image with a support-related icon
  },
  {
    title: "Best Price & Savings",
    description: "Serve with best prices and offers to customers",
    icon: "mdi-currency-usd", // Replace image with a price/currency icon
  },
  {
    title: "Happy Customers",
    description: "Our motto is to give best services for our customers",
    icon: "mdi-emoticon-happy-outline", // Replace image with a happy customer icon
  },
];
</script>
