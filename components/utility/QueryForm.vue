<template>
  <div class="min-h-screen bg-gray-100 p-4 sm:p-12">
    <div class="mx-auto w-full px-6 py-6 bg-white shadow-lg">
      <h1
        class="text-xl font-bold pb-6 mb-4 text-center border-b text-secondary p-2"
      >
        Enquiry Form
      </h1>
      <form @submit.prevent="submitForm">
        <div
          v-for="field in fields"
          :key="field.name"
          class="relative z-0 w-full mb-5 px-3"
        >
          <input
            :type="field.type"
            :name="field.name"
            v-model="form[field.name]"
            placeholder=" "
            required
            class="pt-3 pb-2 block w-full px-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-300"
          />
          <label
            :for="field.name"
            class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            {{ field.label }}
          </label>
          <span v-if="errors[field.name]" class="text-sm text-red-600">
            {{ field.errorMessage }}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <select
            name="adults"
            v-model="form.adults"
            class="block w-full border-b-2 p-2 border-gray-300 bg-white"
          >
            <option value="" disabled selected>- Select Adult -</option>
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
          <select
            name="children"
            v-model="form.children"
            class="block w-full border-b-2 p-2 border-gray-300 bg-white"
          >
            <option value="" disabled selected>- Select Children -</option>
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>

        <textarea
          name="requirements"
          v-model="form.requirements"
          placeholder="Enter Details of Requirements"
          class="block w-full mt-5 p-2 border-b-2 border-gray-300 bg-white"
        ></textarea>

        <div class="flex items-center mt-5">
          <input
            type="number"
            name="captcha"
            v-model="form.captcha"
            placeholder="Enter Code"
            class="block w-full p-2 border-b-2 border-gray-300 bg-white"
          />
          <span class="bg-gray-200 py-2 px-8 ml-2 text-black font-bold">{{
            captchaCode
          }}</span>
        </div>

        <div class="flex justify-start space-x-5 mt-6">
          <button type="submit" class="">
            <span
              class="h-12 flex items-center justify-center uppercase font-semibold px-12 border border-secondary hover:bg-secondary hover:text-white transition duration-500 ease-in-out"
              >submit</span
            >
          </button>
          <button type="reset" class="border" @click="resetForm">
            <span
              class="h-12 flex items-center justify-center uppercase text-white font-semibold px-12 border bg-secondary border-secondary hover:text-black hover:bg-white transition duration-500 ease-in-out"
              >Reset</span
            >
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const captchaCode = Math.floor(Math.random() * 1000);
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        city: "",
        travelDate: "",
        duration: "",
        adults: "",
        children: "",
        requirements: "",
        captcha: "",
      },
      captchaCode,
      errors: {},
      fields: [
        {
          name: "name",
          type: "text",
          label: "Your Name",
          errorMessage: "Name is required",
        },
        {
          name: "phone",
          type: "text",
          label: "Phone Number",
          errorMessage: "Phone number is required",
        },
        {
          name: "email",
          type: "email",
          label: "Your Email id",
          errorMessage: "Email is required",
        },
        {
          name: "city",
          type: "text",
          label: "Country/City",
          errorMessage: "City is required",
        },
        {
          name: "travelDate",
          type: "date",
          label: "Travel Date (DD/MM/YYYY)",
          errorMessage: "Travel date is required",
        },
        {
          name: "duration",
          type: "text",
          label: "Travel Duration",
          errorMessage: "Duration is required",
        },
      ],
    };
  },
  methods: {
    submitForm() {
      this.errors = {};
      this.fields.forEach((field) => {
        if (!this.form[field.name]) {
          this.errors[field.name] = true;
        }
      });
      if (!this.form.captcha || this.form.captcha !== this.captchaCode) {
        this.errors.captcha = "Invalid code";
      }
      if (Object.keys(this.errors).length === 0) {
        alert("Form submitted successfully!");
      }
    },
    resetForm() {
      Object.keys(this.form).forEach((key) => {
        this.form[key] = "";
      });
      this.errors = {};
    },
  },
};
</script>

<style scoped>
.origin-0 {
  transform-origin: 0%;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
  transform: scale(0.75) translateY(-1.5rem);
}
</style>
