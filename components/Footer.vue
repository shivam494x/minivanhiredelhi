<template>
  <footer class="bg-secondary border-t border-slate-400">
    <div
      class="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div class="flex justify-center text-pri sm:justify-start">
            <NuxtImg class="h-12" src="/img/logo.png" />
          </div>

          <p
            class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
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
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4"
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

      <div class="pt-6 mt-12 border-t border-gray-800">
        <div class="text-center sm:flex sm:justify-between sm:text-left">
          <p class="text-sm text-gray-400 space-x-0.5">
            <span class="block sm:inline">All rights reserved. </span>

            <a
              class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
              href="/"
            >
              Terms & Conditions
            </a>

            <span>&middot;</span>

            <a
              class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
              href="/"
            >
              Privacy Policy
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
const socialLinks = [
  {
    name: "Facebook",
    url: "/",
    icon: "mdi-facebook",
  },
  {
    name: "Instagram",
    url: "/",
    icon: "mdi-instagram",
  },
  {
    name: "Twitter",
    url: "/",
    icon: "mdi-twitter",
  },
  {
    name: "GitHub",
    url: "/",
    icon: "mdi-github",
  },
  {
    name: "Dribbble",
    url: "/",
    icon: "mdi-dribbble",
  },
];
const sections = [
  {
    title: "About Us",
    links: [
      { text: "Company History", url: "/" },
      { text: "Meet the Team", url: "/" },
      { text: "Employee Handbook", url: "/" },
      { text: "Careers", url: "/" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { text: "Web Development", url: "/" },
      { text: "Web Design", url: "/" },
      { text: "Marketing", url: "/" },
      { text: "Google Ads", url: "/" },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      { text: "FAQs", url: "/" },
      { text: "Support", url: "/" },
      {
        text: "Live Chat",
        url: "/",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { text: "Email: example@gmail.com", url: "/" },
      { text: "Phone: 0123456789", url: "/" },
      { text: "somewhere in noida i think", url: "/" },
    ],
  },
];
</script>
