<template>
  <header class="z-50 relative text-white">
    <nav class="left-0 w-full navbar py-8 side_padding flex justify-between">
      <div class="logo">
        <div class="">
          <NuxtImg class="h-12" src="/img/logo.png" />
        </div>
      </div>
      <div
        class="hamburger-btn md:hidden h-full w-8 my-auto"
        @click="isOpen = true"
      >
        <div class="h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            fill="white"
            viewBox="0 0 50 50"
          >
            <path
              d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
            ></path>
          </svg>
        </div>
        <USlideover v-model="isOpen">
          <div class="p-4 flex-1 relative">
            <UButton
              color="gray"
              variant="ghost"
              size="sm"
              icon="i-heroicons-x-mark-20-solid"
              class="flex sm:hidden absolute end-5 top-5 z-10"
              square
              padded
              @click="isOpen = false"
            />
            <div class="absolute top-20 w-full left-0">
              <NavLinks />
            </div>
          </div>
        </USlideover>
      </div>
      <div class="nav-links hidden md:block">
        <NavLinks />
      </div>
    </nav>
  </header>
</template>

<script setup>
const isOpen = ref(false);
</script>
