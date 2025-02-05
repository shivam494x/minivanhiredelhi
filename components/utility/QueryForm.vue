<template>
  <div
    class="min-h-screen bg-gray-100 p-4 sm:p-12 form-wrapper overflow-hidden"
  >
    <div class="mx-auto w-full px-6 py-6 bg-white shadow-lg relative">
      <div class="absolute left-0 right-0 top-0 bottom-0 h-full w-full z-10 bg pointer-events-none">
        <div class="relative left-0 right-0 top-0 bottom-0 h-full w-full">
          <span></span>
          <span></span>
        </div>
      </div>
      <h1
        class="text-2xl capitalize space-x-3 font-bold mb-4 flex items-end justify-center border-red-400 border-b text-secondary py-2 mx-3"
      >
        <span> query form </span>
        <div class="text-sm font-normal center w-max space-x-1 pb-1 text-pri">
          <span> Let us help you! </span>
          <Icon name="tabler:headset" class="text-lg" />
        </div>
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
            class="pt-3 pb-2 block w-full px-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-red-300 border-gray-300"
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
            <div
              class="h-12 relative group overflow-hidden flex items-center justify-center uppercase font-semibold px-8 border border-pri hover:bg-pri hover:text-white transition duration-200 ease-in-out"
            >
              <span class="duration-300 group-hover:-translate-y-16"
                >read more</span
              >
              <span
                class="absolute duration-300 group-hover:translate-y-0 translate-y-16 center"
                ><Icon name="i-fa:send"
              /></span>
            </div>
          </button>
          <button type="reset" class="border" @click="resetForm">
            <div
              class="h-12 group space-x-3 flex items-center justify-center uppercase text-white font-semibold px-8 border bg-pri border-pri hover:text-black hover:bg-white transition duration-500 ease-in-out"
            >
              <span>reset</span>
              <Icon name="material-symbols:restart-alt" class="text-xl" />
            </div>
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
.form-wrapper .bg span {
  position: absolute;
  width: 20rem;
  height: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  background-color: var(--primary-color);
  top: 2%;
}

.form-wrapper .bg span:first-child {
  left: 5%;
  transform: translate(-50%, -50%) rotate(-45deg);
}

.form-wrapper .bg span:nth-child(2) {
  right: 5%;

  transform: translate(50%, -50%) rotate(45deg);
}
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
