import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./pages/**/*.vue", "./layouts/**/*.vue", "./components/**/*.vue"],
  theme: {
    extend: {
      colors: {
        pri: "#FF9000",
        secondary: "#14181c",
      },
    },
  },
};
