import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./pages/**/*.vue", "./layouts/**/*.vue", "./components/**/*.vue"],
  theme: {
    extend: {
      colors: {
        pri: "#CF2317",
        secondary: "#14181c",
        offWhite: "#FAF9F6",
        complementary: "#1e2a47"
      },
    },
  },
};
