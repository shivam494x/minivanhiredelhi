<template>
  <footer class="bg-secondary border-t border-slate-400">
    <div
      class="max-w-screen-xl px-4 pt-8 pb-6 mx-auto sm:px-6 lg:px-8"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div class="flex justify-center text-pri sm:justify-start">
            <NuxtImg
              class="h-12"
              src="/img/logo.png"
              alt="logo"
              width="auto"
              height="48"
              loading="lazy"
              quality="75"
              formats="webp, avif"
              sizes="(max-width: 600px) 100vw, 50vw"
              srcset="/img/logo.png 1x"
            />
          </div>

          <p
            class="lg:max-w-md mx-auto mt-6 w-full text-gray-400 sm:mx-0 leading-snug text-justify"
          >
            Minivan Hire Delhi- is a service provider of imported luxury vans,
            Volvo bus & Mercedes coach, luxury car on rental in all major cities
            of India such as Delhi, Noida, Gurugram, Mumbai, Goa, Pune, Chennai,
            Hyderabad, Kochi, Cochin, Bengaluru, Ahmedabad, Agra, Jaipur,
            Udaipur, Kolkata, Bagdogra, Chandigarh and other adjoining cities.
          </p>

          <ul class="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
            <li v-for="social in socialLinks" :key="social.name">
              <a
                :href="social.url"
                rel="noopener noreferrer"
                target="_blank"
                class="text-pri transition hover:text-pri/75"
              >
                <span class="sr-only">{{ social.name }}</span>
                <UIcon :name="social.icon" class="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4"
        >
          <div
            v-for="section in sections"
            :key="section.title"
            class="text-center sm:text-left"
          >
            <p class="text-lg font-medium text-pri">{{ section.title }}</p>

            <nav class="mt-8">
              <ul class="space-y-4 text-sm">
                <li v-for="link in section.links" :key="link.text">
                  <a
                    :href="link.url"
                    class="text-white transition hover:text-white/75"
                  >
                    {{ link.text }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="pt-6 mt-4 border-t border-gray-800">
        <div class="text-center sm:flex sm:justify-between sm:text-left">
          <p class="text-sm text-gray-400 space-x-0.5">
            <span class="block sm:inline">Designed and developed by </span>

            <a
              class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
              href="/"
            >
              Kanak Drishti Infotech Pvt. Ltd.
            </a>
          </p>

          <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; 2024 Mini Van Hire Delhi
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useAll } from "~/stores/api";

const allStore = useAll();
const footer = ref({});

// const socialLinks = ref([]);
// const sections = ref([]);
const socialLinks = [
  {
    name: "Facebook",
    url: "/",
    icon: "mdi-facebook",
  },
  {
    name: "google-plus",
    url: "/",
    icon: "mdi:google-plus",
  },
  {
    name: "You tube",
    url: "/",
    icon: "mdi:youtube",
  },
  {
    name: "Linked-in",
    url: "/",
    icon: "mdi-linkedin",
  },
  {
    name: "Blog",
    url: "/blog",
    icon: "mdi:pencil",
  },
];
const sections = [
  {
    title: "About Us",
    links: [
      { text: "About Us", url: "/" },
      { text: "Why Travel With Us", url: "/" },
      { text: "our awards", url: "/award" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { text: "Monuments & Entry Fee", url: "/" },
      { text: "Complimentary Guide", url: "/" },
      { text: "About Indian Drivers & Chauffeur", url: "/" },
      { text: "Vehicle Breakdown Services", url: "/" },
      { text: "Van Operator in India", url: "/" },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      { text: "Terms & Conditions", url: "/" },
      { text: "Privacy Policy", url: "/" },
      { text: "Travel Tips", url: "/" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { text: "Email: sales@asparkholidays.com", url: "/" },
      { text: "Phone: +91 9999317846", url: "/" },
      { text: "Phone: +91 9810817846", url: "/" },
      {
        text: " 561A 1st Floor Chirag Delhi (Near Oriental Bank of Commerce) New Delhi (India) 110017",
        url: "/",
      },
    ],
  },
];
// onBeforeMount(async () => {
//   await allStore.fetchData();
//   footer.value = allStore.footer;

//   if (footer.value.social_links_status) {
//     socialLinks.value = Object.entries(footer.value)
//       .filter(([key, value]) => key.startsWith("social_") && value)
//       .map(([key, value]) => ({
//         name: key.replace("social_", "").replace("_", " ").toUpperCase(),
//         url: value,
//         icon: `mdi-${key.replace("social_", "")}`,
//       }));
//   }

//   sections.value = Object.keys(footer.value)
//     .filter(
//       (key) =>
//         key.startsWith("block") && key.endsWith("_status") && footer.value[key]
//     )
//     .map((key) => {
//       const blockNum = key.match(/block(\d+)_status/)[1];
//       return {
//         title:
//           footer.value[`block${blockNum}_title`]?.en || `Section ${blockNum}`,
//         links: Object.keys(footer.value)
//           .filter(
//             (subKey) =>
//               subKey.startsWith(`block${blockNum}_sub_link`) &&
//               footer.value[subKey]
//           )
//           .map((subKey) => {
//             const subNum = subKey.match(/block\d+_sub_link(\d+)/)[1];
//             return {
//               text:
//                 footer.value[`block${blockNum}_sub_title${subNum}`]?.en ||
//                 `Link ${subNum}`,
//               url: footer.value[subKey],
//             };
//           }),
//       };
//     });
// });
</script>
