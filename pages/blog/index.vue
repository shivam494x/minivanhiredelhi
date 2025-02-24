<template>
  <section class="side_padding">
    <div class="px-4 py-8">
      <h1 class="h-12 center text-3xl font-semibold">Blogs</h1>
    </div>
    <div class="container mx-auto p-10">
      <template v-if="loading === true">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="i in 6"
            :key="i"
            :to="i"
            class="relative bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300 cursor-pointer group hover:scale-105"
          >
            <USkeleton class="img mb-4 w-full h-40 object-cover rounded-lg">
            </USkeleton>

            <div class="content space-y-5">
              <USkeleton
                class="text-xl font-semibold mb-2 w-4/5 mr-auto h-10"
              ></USkeleton>
              <div class="space-y-2">
                <USkeleton
                  class="text-gray-600 text-sm w-4/5 h-4 rounded-lg"
                ></USkeleton>
                <USkeleton
                  class="text-gray-600 text-sm w-3/5 h-4 rounded-lg"
                ></USkeleton>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            @click="ClickHandler(blog._id)"
            v-for="blog in blogs"
            :key="blog._id"
            :to="`/blog/${sluger(blog.name.en)}`"
            class="relative bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300 cursor-pointer group hover:scale-105"
          >
            <div class="img mb-4">
              <NuxtImg
                class="w-full h-40 object-cover rounded-lg"
                :src="blog.icon"
                alt="Blog Image"
              />
            </div>
            <div class="content">
              <h2 class="text-xl font-semibold mb-2">{{ blog.name.en }}</h2>
              <p class="desc">{{ blog.description }}</p>
            </div>
            <span
              class="absolute bottom-1/2 mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white px-2 py-1 rounded opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            >
              Click to read more
            </span>
          </NuxtLink>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
//
import { useBlogs, useBlog } from "~/stores/api";
import useUtility from "~/composables/useUtility";
const { sluger } = useUtility();
const blogStore = useBlogs();
const SingleBlogStore = useBlog();
const blogs = ref();
const loading = ref(true);

const ClickHandler = (id) => {
  SingleBlogStore.setId(id);
};

onMounted(() => {
  const getData = async () => {
    await blogStore.fetchData();
    blogs.value = blogStore.data;
    loading.value = false;
  };

  getData();
});
</script>
