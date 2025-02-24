<template>
  <div class="bg-complementary text-offWhite max-w-72 mx-auto h-max">
    <div class="border-b mb-2 pb-4 p-2 border-pri">
      <div
        class="capitalize brightness-150 text-base font-bold pb-2 border-b text-center text-pri tracking-wide"
      >
        <h4 class="">need help?</h4>
      </div>
      <div class="flex items-start flex-col space-y-2 mt-2 text-xs">
        <span>Connect with Aspark Holidays with best price and offers.</span>
        <div
          class="text-xs text-gray-400 flex flex-col space-y-2 center w-full"
        >
          <span>+91-9999317846, &nbsp; +91-9810817846</span>
          <span>sales@asparkholidays.com</span>
        </div>
      </div>
    </div>
    <div>
      <div
        class="capitalize mx-3 text-base brightness-150 font-bold tracking-wide pb-1 text-center border-b text-pri"
      >
        <h4>why travel with us</h4>
      </div>
      <ul class="p-3 space-y-3">
        <li v-for="x in travelBenefits" class="flex justify-start">
          <div class="space-y-1">
            <div class="flex space-x-1 justify-start">
              <h5 class="text-base font-medium">{{ x.title }}</h5>
              <span class="center">
                <Icon
                  :name="x.icon"
                  class="text-pri font-semibold text-lg brightness-150"
                />
              </span>
            </div>
            <p class="text-gray-400 text-xs">{{ x.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
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
