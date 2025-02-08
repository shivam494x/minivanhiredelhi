<template>
  <div class="h-full w-full">
    <div class="flex h-full w-full overflow-x-hidden relative">
      <div class="w-full h-full">
        <div
          class="bg pointer-events-none absolute left-0 right-0 top-0 bottom-0 h-full w-full"
        >
          <NuxtImg
            v-for="({ img }, i) in content"
            :key="i"
            
            :src="`/img/hero/${img}`"
            alt="img"
            class="h-full pointer-events-none w-full brightness-50 absolute left-0 top-0 object-cover"
            :id="`hero-img-${i}`"
          />
        </div>
        <div
          class="overlay absolute pointer-events-none bottom-0 left-0 w-full h-full bg-gradient-to-r from-zinc-900/80 to-zinc-900/5"
        ></div>
        <!-- may add controls in future -->

        <!-- <div class="bg-control absolute z-10 bottom-0 left-0 right-0 top-0">
          <div class="relative w-full h-full">
            <div
              class="absolute md:left-4 left-2 top-1/2 -translate-y-1/2 h-10 aspect-square opacity-70 brightness-90"
            >
              <NuxtImg
                src="/svg/utility/arrow.svg"
                class="w-full border rounded-full p-2 brightness-75"
              />
            </div>
            <div
              class="rotate-180 absolute right-4 top-1/2 -translate-y-1/2 h-10 aspect-square"
            >
              <NuxtImg
                src="/svg/utility/arrow.svg"
                class="w-full border rounded-full p-2 brightness-75"
              />
            </div>
          </div>
        </div> -->
        <div
          class="content w-full md:w-[70vw] lg:w-[50vw] z-20 relative top-1/2 lg:[45%] -translate-y-1/2 left-1/2 sm:pl-2 md:left-24 lg:left-28 xl:left-36 -translate-x-1/2 md:-translate-x-0"
        >
          <div class="h-full center flex-col md:items-start">
            <div
              class="center flex-col text-center md:text-start md:items-start md:justify-start"
            >
              <div
                class="heading text-4xl md:text-5xl xl:text-6xl font-semibold mb-4 overflow-x-hidden overflow-hidden py-3 tracking-tight"
              >
                <h1>
                  {{ content[content.length - 1].title }}
                </h1>
              </div>
              <div
                class="sub md:text-lg brightness-[90%] mb-8 overflow-x-hidden overflow-hidden w-3/5 tracking-normal"
              >
                <h5>
                  {{ content[content.length - 1].sub }}
                </h5>
              </div>
              <UtilityButton1
                class="capitalize w-max py-2 px-6"
                title="read more"
                :border="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { $gsap: gsap } = useNuxtApp();

const content = [
  {
    title: "Luxury Car Rental",
    sub: "Book a Luxury Car & Make your trip amazing with us",
    img: "luxury-car.png",
    link: "/luxury-car",
  },
  {
    title: "Luxury Van Hire",
    sub: "Luxury & Imported Van Service Provider in India",
    img: "van.png",
    link: "/van",
  },
  {
    title: "Tempo Traveller Passenger Minivan",
    sub: "Hire Luxury Tempo Traveller Van for Memorable Tour",
    img: "tempo.png",
    link: "/tempo-traveller",
  },
  {
    title: "Online Luxury Bus Booking Service",
    sub: "We Provide Luxury Volvo Mercedes Bus for all India Destinations",
    img: "bus.png",
    link: "/bus",
  },
  {
    title: "Budget Van Rental Service",
    sub: "Online Budget Van Booking for India Trip",
    img: "budget-van.png",
    link: "/budget-van",
  },
];

onMounted(() => {
  const bgWrapper = document.querySelector("section#hero .bg");
  const contentWrapper = document.querySelector("section#hero .content");
  const contentObj = {
    heading: contentWrapper.querySelector("h1"),
    sub: contentWrapper.querySelector("h5"),
  };
  let contentIndex = content.length - 1;

  const changeBg = () => {
    const lastChild = bgWrapper.lastElementChild;
    if (lastChild) {
      gsap.fromTo(
        lastChild,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.6,
          onComplete: () => {
            bgWrapper.prepend(lastChild);
            gsap.set(lastChild, { opacity: 1 });
          },
        }
      );
    }
  };

  const changeTxt = () => {
    contentIndex--;
    const { heading, sub } = contentObj;
    const currentObj = content[contentIndex];
    heading.innerText = currentObj.title;
    sub.innerText = currentObj.sub;
    if (contentIndex === 0) {
      contentIndex = content.length;
    }
    gsap.to([heading, sub], {
      x: "0%",
      opacity: 1,
      stagger: 0.1,
      duration: 0.6,
    });
  };

  const animateTxt = () => {
    const { heading, sub } = contentObj;
    gsap.to([heading, sub], {
      x: "-100%",
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      onComplete: changeTxt,
    });
  };

  const animateHeroBg = () => {
    setInterval(() => {
      changeBg();
      animateTxt();
    }, 6000);
  };

  animateHeroBg();
});
</script>
