<template>
  <section class="side_padding">
    <div class="flex flex-col-reverse xl:flex-row bg-gray-100 p-6 gap-10">
      <!-- Blog Navigation Sidebar (Moves to Bottom on Mobile) -->
      <aside class="w-full xl:w-1/3 mt-6 lg:mt-0">
        <div class="bg-white shadow-lg rounded-2xl p-4">
          <h3 class="text-xl font-bold text-gray-800 mb-4">More Blogs</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <NuxtLink
              @click="ClickHandler(blog._id)"
              v-for="blog in blogs"
              :key="blog._id"
              :to="`/blog/${sluger(blog.name.en)}`"
              class="flex items-center space-x-4 p-3 bg-gray-50 hover:bg-gray-100 hover:translate-x-2 rounded-lg transition cursor-pointer"
            >
              <NuxtImg
                class="w-16 h-16 object-cover rounded-lg"
                :src="blog.icon"
                alt="Blog Image"
                format="webp"
                quality="80"
                loading="lazy"
                sizes="64px"
              />

              <div>
                <h4 class="text-lg font-semibold">{{ blog.name.en }}</h4>
              </div>
            </NuxtLink>
          </div>
        </div>
      </aside>
      <!-- Main Blog Content -->
      <div
        class="bg-white shadow-lg rounded-2xl max-w-[40rem] m-auto text-start p-6"
      >
        <!-- Image -->
        <NuxtImg
          v-if="blog"
          :src="blog.icon"
          alt="Blog Image"
          class="w-full rounded-lg mb-4"
        />

        <!-- Heading -->
        <h2 v-if="blog" class="text-3xl font-bold text-gray-800 px-4">
          {{ blog.name.en }}
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
import { useBlog, useBlogs } from "~/stores/api";
import useUtility from "~/composables/useUtility";
const { sluger } = useUtility();

const BlogStore = useBlog();
const allBlogStore = useBlogs();
const loading = ref(true);

const blog = ref();
const blogs = ref();

const getData = async () => {
  await BlogStore.fetchData();
  await allBlogStore.fetchData();

  blogs.value = allBlogStore.blogs;
  blog.value = BlogStore.blog;
  loading.value = false;
};

getData();
</script>
