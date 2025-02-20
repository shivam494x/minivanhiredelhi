import { defineStore } from "pinia";

export const useAll = defineStore("all", {
  state: () => ({
    data: null,
  }),
  actions: {
    async fetchData() {
      if (!this.data) {
        const { $axios: axios } = useNuxtApp();
        try {
          const response = await axios.get("/setting/store/customization/all");
          this.data = response.data;
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
    },
  },
  getters: {
    slider: (state) => state.data?.slider || null,
    footer: (state) => state.data?.footer || null,
    navbar: (state) => state.data?.navbar || null,
    about: (state) => state.data?.about_us || null,
  },
  // persist: true,
});
export const useBlogs = defineStore("blogs", {
  state: () => ({
    data: null,
  }),
  actions: {
    async fetchData() {
      if (!this.data) {
        const { $axios: axios } = useNuxtApp();
        try {
          const response = await axios.get("/blog");
          if (response.data) {
            this.data = response.data.filter((blog) => blog.status === "show");
          } else {
            console.log(response);
          }
        } catch (e) {
          console.error("blog error ", e);
        }
      }
    },
  },
  getters: {
    blogs: (state) => state.data || null,
  },
});

export const useBlog = defineStore("blog", {
  state: () => ({
    data: null,
    id: null, // `id` will be persisted
  }),
  actions: {
    async fetchData() {
      if ((!this.data && this.id) || this.id !== this.data._id) {
        const { $axios: axios } = useNuxtApp();
        try {
          const response = await axios.get(`/blog/${this.id}`);
          if (response.data) {
            this.data = response.data;
          } else {
            console.log(response);
          }
        } catch (e) {
          console.error("blog error ", e);
        }
      }
    },
    setId(id) {
      if (!id) return;
      this.id = id;
    },
    clearId() {
      this.id = null;
    },
  },
  getters: {
    blog: (state) => state.data || null,
    blogId: (state) => state.id || null,
  },
  persist: true,
});
