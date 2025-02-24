<template>
  <div
    class="bg-red-50 form-wrapper overflow-hidden mx-auto border-pri border-2"
  >
    <div class="mx-auto w-full bg-white shadow-lg relative pb-3">
      <h1
        class="md:text-xl text-lg text-white bg-pri capitalize space-x-2 center flex-col pb-4 pt-6 px-4 mb-4 items-end border-red-400 border-b-4"
      >
        <div>
          <span class="font-semibold">{{ title }}</span>
        </div>
      </h1>
      <form @submit.prevent="submitForm">
        <div>
          <div
            v-for="field in fields"
            :key="field.name"
            class="relative z-0 w-full mb-5 px-3 text-sm"
          >
            <input
              :type="field.type"
              :name="field.name"
              :id="field.name"
              v-model="form[field.name]"
              placeholder=" "
              required
              class="py-2 block w-full px-0 bg-transparent border-0 border-b-4 appearance-none border-red-400 focus:outline-none focus:ring-0"
            />
            <label
              :for="field.name"
              class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 ml-1"
            >
              {{ field.label }}
            </label>
            <span v-if="errors[field.name]" class="text-xs text-red-600">
              {{ field.errorMessage }}
            </span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 px-3">
          <select
            name="adults"
            v-model="form.adults"
            id="adults"
            aria-label="select no. of adults"
            class="block w-full border-b-4 p-2 border-red-400 bg-white focus:outline-none focus:ring-0"
          >
            <option value="" disabled selected>- Select Adult -</option>
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
          <select
            name="children"
            v-model="form.children"
            id="children"
            aria-label="select no. of children"
            class="block w-full border-b-4 p-2 border-red-400 bg-white focus:outline-none focus:ring-0"
          >
            <option value="" disabled selected>- Select Children -</option>
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>
        <div class="px-3">
          <textarea
            name="requirements"
            v-model="form.requirements"
            id="requirements"
            placeholder="Enter Details of Requirements"
            class="block w-full mt-5 p-2 border-b-4 border-red-400 bg-white focus:outline-none focus:ring-0"
          ></textarea>
        </div>
        <div class="flex items-center mt-5 focus-visible:border-0 px-3">
          <input
            type="number"
            name="captcha"
            v-model="form.captcha"
            id="captcha"
            placeholder="Enter Code"
            class="block w-full p-2 border-b-4 bg-white border-red-400 focus:outline-none focus:ring-0"
          />
          <span class="bg-gray-200 py-1 px-4 ml-2 text-black font-bold">
            {{ captchaCode }}
          </span>
        </div>
        <div
          class="grid grid-cols-2 h-10 justify-start space-x-2 mt-6 font-semibold max-w-80 px-3"
        >
          <button type="submit">
            <div
              class="h-full relative group overflow-hidden flex items-center justify-center px-2 border border-pri hover:bg-pri hover:text-white transition duration-200 ease-in-out"
            >
              <span
                class="duration-300 group-hover:-translate-y-16 uppercase text-sm"
              >
                submit
              </span>
              <span
                class="absolute duration-300 group-hover:translate-y-0 group-hover:translate-x-0 translate-y-16 -translate-x-16 center"
              >
                <Icon name="i-fa:send" />
              </span>
            </div>
          </button>
          <button type="reset" class="border" @click="resetForm">
            <div
              class="h-full group space-x-3 flex items-center justify-center text-white px-2 border bg-pri border-pri hover:text-black hover:bg-white transition duration-500 ease-in-out"
            >
              <span class="uppercase text-sm">reset</span>
              <Icon
                name="material-symbols:restart-alt"
                class="text-lg group-hover:-rotate-180 duration-300"
              />
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useAll } from "~/stores/api";
import { ref, onMounted, reactive } from "vue";

export default {
  setup() {
    const allStore = useAll();
    const allData = ref(null);

    const getData = async () => {
      await allStore.fetchData();
      allData.value = allStore.data;
      console.log(allData.value);
    };

    const form = reactive({
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
    });

    const captchaCode = ref("");
    const errors = ref({});

    const generateCaptcha = () => {
      captchaCode.value = String(Math.floor(Math.random() * 1000));
    };

    const submitForm = () => {
      errors.value = {};

      fields.forEach((field) => {
        if (!form[field.name]) {
          errors.value[field.name] = field.errorMessage;
        }
      });

      if (!form.captcha || form.captcha !== captchaCode.value) {
        errors.value.captcha = "Invalid code";
      }

      if (Object.keys(errors.value).length === 0) {
        alert("Form submitted successfully!");
      }
    };

    const resetForm = () => {
      Object.keys(form).forEach((key) => {
        form[key] = "";
      });
      errors.value = {};
      generateCaptcha(); // Reset captcha
    };

    const fields = [
      { name: "name", type: "text", label: "Your Name", errorMessage: "Name is required" },
      { name: "phone", type: "text", label: "Phone Number", errorMessage: "Phone number is required" },
      { name: "email", type: "email", label: "Your Email id", errorMessage: "Email is required" },
      { name: "city", type: "text", label: "Country/City", errorMessage: "City is required" },
      { name: "travelDate", type: "date", label: "Travel Date (DD/MM/YYYY)", errorMessage: "Travel date is required" },
      { name: "duration", type: "text", label: "Travel Duration", errorMessage: "Duration is required" },
    ];

    onMounted(() => {
      generateCaptcha();
      getData();
    });

    return {
      form,
      captchaCode,
      errors,
      fields,
      submitForm,
      resetForm,
    };
  },
  props: {
    title: String,
  },
};
</script>


<style scoped>
.form-wrapper .bg span {
  position: absolute;
  width: 20rem;
  height: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  background-color: white;
  top: 2%;
}

.form-wrapper .bg span:first-child {
  left: 5%;
  transform: translate(-50%, -50%) rotate(-35deg);
}

.form-wrapper .bg span:nth-child(2) {
  right: 5%;
  transform: translate(50%, -50%) rotate(35deg);
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
