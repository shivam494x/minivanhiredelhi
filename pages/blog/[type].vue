<template>
  <section class="side_padding">
    <div class="flex flex-col items-center justify-center bg-gray-100 p-6">
      <!-- Card Container -->
      <div class="bg-white shadow-lg rounded-2xl max-w-[50rem] text-center">
        <!-- Image -->
        <NuxtImg
          v-if="blog"
          :src="blog.icon"
          alt="img"
          class="w-full rounded-lg mb-4"
        />

        <!-- Heading -->
        <h2 v-if="blog" class="text-2xl font-bold text-gray-800 mb-3 px-4">
          <span>
            {{ blog.name.en }}
          </span>
        </h2>

        <!-- Paragraph -->
        <p class="desc" v-if="blog">
          {{ blog.description }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useBlog } from "~/stores/api";
const BlogStore = useBlog();
const loading = ref(true);

const blog = ref();

const getData = async () => {
  await BlogStore.fetchData();
  blog.value = BlogStore.blog;
  loading.value = false;
};
getData();

</script>
