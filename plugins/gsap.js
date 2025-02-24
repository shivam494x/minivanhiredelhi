import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import CSSPlugin from "gsap/CSSPlugin";
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, CSSPlugin);
  }

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
    },
  };
});
