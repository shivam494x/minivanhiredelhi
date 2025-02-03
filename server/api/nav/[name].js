export default defineEventHandler((event) => {
  const nav_links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "van",
      path: "/van",
      sub: [
        {
          name: "Toyota Vellfire",
          path: "/van/toyota-vellfire",
          sub: [
            {
              name: "6 Seater Toyota Vellfire",
              path: "/van/toyota-vellfire/6-seater-toyota-vellfire",
            },
            {
              name: "7 Seater Toyota Vellfire",
              path: "/van/toyota-vellfire/7-seater-toyota-vellfire",
            },
            {
              name: "Vellfire Toyota Van",
              path: "/van/toyota-vellfire/vellfire-toyota-van",
            },
          ],
        },
        {
          name: "Mercedes V Class",
          path: "/van/mercedes-van",
          sub: [
            {
              name: "5 Seater Mercedes Viano",
              path: "/van/mercedes-van/5-seater-mercedes-viano",
            },
            {
              name: "6 Seater Mercedes Van",
              path: "/van/mercedes-van/6-seater-mercedes-van",
            },
            {
              name: "Mercedes V Class",
              path: "/van/mercedes-van/mercedes-v-class",
            },
          ],
        },
        {
          name: "Kia Carnival Limousine",
          path: "/van/kia-carnival-limousine",
          sub: [
            {
              name: "6 Seater Kia Carnival Car",
              path: "/van/kia-carnival-limousine/6-seater-kia-carnival-car",
            },
            {
              name: "7 Seater Kia Carnival Car",
              path: "/van/kia-carnival-limousine/7-seater-kia-carnival-car",
            },
            {
              name: "Carnival Kia Luxury Car",
              path: "/van/kia-carnival-limousine/carnival-kia-luxury-car",
            },
          ],
        },
        {
          name: "Toyota Hiace",
          path: "/van/toyota-hiace",
          sub: [
            {
              name: "5 Seater Toyota Luxury Van",
              path: "/van/toyota-hiace/5-seater-toyota-luxury-van",
            },
            {
              name: "6 Seater Luxury Toyota Van",
              path: "/van/toyota-hiace/6-seater-luxury-toyota-van",
            },
            {
              name: "7 Seater Toyota Luxury Van",
              path: "/van/toyota-hiace/7-seater-toyota-luxury-van",
            },
            {
              name: "8 Seater Toyota Luxury Van",
              path: "/van/toyota-hiace/8-seater-toyota-luxury-van",
            },
            {
              name: "9 Seater Toyota Luxury Van",
              path: "/van/toyota-hiace/9-seater-toyota-luxury-van",
            },
          ],
        },
        {
          name: "Toyota Alphard",
          path: "/van/toyota-alphard",
          sub: [
            {
              name: "5 Seater Toyota Alphard Van",
              path: "/van/toyota-alphard/5-seater-toyota-alphard-van",
            },
            {
              name: "6 Seater Toyota Alphard Van",
              path: "/van/toyota-alphard/6-seater-toyota-alphard-van",
            },
            {
              name: "7 Seater Toyota Alphard",
              path: "/van/toyota-alphard/7-seater-toyota-alphard",
            },
          ],
        },
        {
          name: "Mercedes Sprinter",
          path: "/van/mercedes-sprinter",
          sub: [
            {
              name: "8 Seater Mercedes Van",
              path: "/van/mercedes-sprinter/8-seater-mercedes-van",
            },
            {
              name: "9 Seater Mercedes Van",
              path: "/van/mercedes-sprinter/9-seater-mercedes-van",
            },
            {
              name: "10 Seater Mercedes Van",
              path: "/van/mercedes-sprinter/10-seater-mercedes-van",
            },
            {
              name: "11 Seater Sprinter Van",
              path: "/van/mercedes-sprinter/11-seater-sprinter-van",
            },
          ],
        },
      ],
    },
    {
      name: "car",
      path: "/car",
      sub: [
        {
          name: "Luxury Car On Rental",
          path: "/car/luxury-car",
          sub: [
            {
              name: "Range Rover Vogue",
              path: "/car/luxury-car/range-rover-vogue",
            },
            { name: "Jaguar XF Car", path: "/car/luxury-car/jaguar-xf-car" },
            { name: "Jaguar XJ L", path: "/car/luxury-car/jaguar-xj-l" },
            {
              name: "Mercedes S Class",
              path: "/car/luxury-car/mercedes-s-class",
            },
            {
              name: "Mercedes E Class",
              path: "/car/luxury-car/mercedes-e-class",
            },
            {
              name: "Mercedes M Class",
              path: "/car/luxury-car/mercedes-m-class",
            },
            {
              name: "Mercedes C Class",
              path: "/car/luxury-car/mercedes-c-class",
            },
            { name: "Mercedes GLS", path: "/car/luxury-car/mercedes-gls" },
            { name: "BMW 7 Series", path: "/car/luxury-car/bmw-7-series" },
            { name: "Audi A8 L Car", path: "/car/luxury-car/audi-a8-l-car" },
            { name: "Audi Q7", path: "/car/luxury-car/audi-q7" },
            { name: "Audi A 6", path: "/car/luxury-car/audi-a-6" },
            { name: "Audi Q3", path: "/car/luxury-car/audi-q3" },
            { name: "BMW 5 Series", path: "/car/luxury-car/bmw-5-series" },
            { name: "Toyota Camry", path: "/car/luxury-car/toyota-camry" },
          ],
        },
        {
          name: "Mercedes Car Rental",
          path: "/car/mercedes-car",
          sub: [
            {
              name: "Mercedes S 500",
              path: "/car/mercedes-car/mercedes-s-500",
            },
            {
              name: "Mercedes S-350",
              path: "/car/mercedes-car/mercedes-s-350",
            },
            {
              name: "Mercedes E Class",
              path: "/car/mercedes-car/mercedes-e-class",
            },
            {
              name: "Mercedes M Class",
              path: "/car/mercedes-car/mercedes-m-class",
            },
            {
              name: "Mercedes ML 250",
              path: "/car/mercedes-car/mercedes-ml-250",
            },
            {
              name: "Mercedes C Class",
              path: "/car/mercedes-car/mercedes-c-class",
            },
          ],
        },
        {
          name: "Audi Car Rental Service",
          path: "/car/audi-car",
          sub: [
            { name: "Audi A6 Car", path: "/car/audi-car/audi-a6-car" },
            { name: "Audi A8 L Car", path: "/car/audi-car/audi-a8-l-car" },
            { name: "Audi Q3 Car", path: "/car/audi-car/audi-q3-car" },
            { name: "Audi Q7", path: "/car/audi-car/audi-q7" },
          ],
        },
        {
          name: "Toyota Car For Hire",
          path: "/car/toyota-car",
          sub: [
            {
              name: "Toyota Land Cruiser",
              path: "/car/toyota-car/toyota-land-cruiser",
            },
            {
              name: "Toyota Fortuner",
              path: "/car/toyota-car/toyota-fortuner",
            },
            { name: "Toyota Camry", path: "/car/toyota-car/toyota-camry" },
            {
              name: "Toyota Corolla Altis",
              path: "/car/toyota-car/toyota-corolla-altis",
            },
            { name: "Toyota Innova", path: "/car/toyota-car/toyota-innova" },
            { name: "Toyota Crysta", path: "/car/toyota-car/toyota-crysta" },
            { name: "Toyota Etios", path: "/car/toyota-car/toyota-etios" },
          ],
        },
        {
          name: "Premium Car For Rent",
          path: "/car/premium-car",
          sub: [
            { name: "Honda Accord", path: "/car/premium-car/honda-accord" },
            {
              name: "Nissan Sunny Car",
              path: "/car/premium-car/nissan-sunny-car",
            },
            { name: "Honda City Car", path: "/car/premium-car/honda-city-car" },
          ],
        },
        {
          name: "Budget Van For Rent",
          path: "/car/budget-van",
          sub: [
            {
              name: "6+1 Seater Toyota Van",
              path: "/car/budget-van/6-seater-toyota-van",
            },
            {
              name: "7 Seater Toyota Van",
              path: "/car/budget-van/7-seater-toyota-van",
            },
            { name: "6 Seater Van", path: "/car/budget-van/6-seater-van" },
            { name: "7 Seater Van", path: "/car/budget-van/7-seater-van" },
            {
              name: "7 Seater Nissan Van",
              path: "/car/budget-van/7-seater-nissan-van",
            },
            {
              name: "7 Seater Chevrolet Van",
              path: "/car/budget-van/7-seater-chevrolet-van",
            },
          ],
        },
        {
          name: "Budget Car For Rental",
          path: "/car/budget-car",
          sub: [
            {
              name: "Toyota Etios Car",
              path: "/car/budget-car/toyota-etios-car",
            },
            {
              name: "Maruti Swift Dzire",
              path: "/car/budget-car/maruti-swift-dzire",
            },
            {
              name: "Hyundai Xcent Car",
              path: "/car/budget-car/hyundai-xcent-car",
            },
            {
              name: "Honda Amaze Car",
              path: "/car/budget-car/honda-amaze-car",
            },
            { name: "Toyota Crysta", path: "/car/budget-car/toyota-crysta" },
            { name: "Maruti Ertiga", path: "/car/budget-car/maruti-ertiga" },
          ],
        },
        {
          name: "Suv Vehicle For Rental",
          path: "/car/suv-vehicle",
          sub: [
            {
              name: "Mercedes M Class Suv",
              path: "/car/suv-vehicle/mercedes-m-class-suv",
            },
            {
              name: "Mercedes Benz GLS SUV",
              path: "/car/suv-vehicle/mercedes-benz-gls",
            },
            { name: "Audi Q3 SUV", path: "/car/suv-vehicle/audi-q3-suv" },
            { name: "Audi Q7 SUV", path: "/car/suv-vehicle/audi-q7-suv" },
            {
              name: "Toyota Land Cruiser SUV",
              path: "/car/suv-vehicle/toyota-land-cruiser",
            },
            {
              name: "Toyota Fortuner SUV",
              path: "/car/suv-vehicle/toyota-fortuner",
            },
          ],
        },
        {
          name: "Muv Vehicle For Hire",
          path: "/car/muv-vehicle",
          sub: [
            { name: "Toyota Crysta", path: "/car/muv-vehicle/toyota-crysta" },
            { name: "Toyota Innova", path: "/car/muv-vehicle/toyota-innova" },
            { name: "Maruti Ertiga", path: "/car/muv-vehicle/maruti-ertiga" },
            { name: "Nissan Evalia", path: "/car/muv-vehicle/nissan-evalia" },
            {
              name: "Mahindra Marazzo",
              path: "/car/muv-vehicle/mahindra-marazzo",
            },
            {
              name: "Chevrolet Enjoy",
              path: "/car/muv-vehicle/chevrolet-enjoy",
            },
            {
              name: "Honda Mobilio Car",
              path: "/car/muv-vehicle/honda-mobilio-car",
            },
            {
              name: "Renault Lodgy Car",
              path: "/car/muv-vehicle/renault-lodgy-car",
            },
          ],
        },
      ],
    },
    {
      name: "bus",
      path: "/bus",
      sub: [
        {
          name: "Minibus",
          path: "/mini-bus",
          sub: [
            {
              name: "15 Seater Minibus",
              path: "/mini-bus/15-seater-bus",
            },
            {
              name: "18 Seater Minibus",
              path: "/mini-bus/18-seater-bus",
            },
            {
              name: "20 Seater Minibus",
              path: "/mini-bus/20-seater-bus",
            },
            {
              name: "22 Seater Minibus",
              path: "/mini-bus/22-seater-bus",
            },
            {
              name: "25 Seater Minibus",
              path: "/mini-bus/25-seater-bus",
            },
            {
              name: "27 Seater Minibus",
              path: "/mini-bus/27-seater-bus",
            },
          ],
        },
        {
          name: "Luxury Bus",
          path: "/luxury-bus",
          sub: [
            {
              name: "30 Seater Bus",
              path: "/luxury-bus/30-seater-bus",
            },
            {
              name: "32 Seater Bus",
              path: "/luxury-bus/32-seater-bus",
            },
            {
              name: "35 Seater Bus",
              path: "/luxury-bus/35-seater-bus",
            },
            {
              name: "38 Seater Bus",
              path: "/luxury-bus/38-seater-bus",
            },
            {
              name: "40 Seater Bus",
              path: "/luxury-bus/40-seater-bus",
            },
            {
              name: "45 Seater Bus",
              path: "/luxury-bus/45-seater-bus",
            },
          ],
        },
        {
          name: "Volvo Bus",
          path: "/volvo-bus",
          sub: [
            {
              name: "32 Seater Volvo Bus",
              path: "/volvo-bus/32-seater-volvo-bus",
            },
            {
              name: "35 Seater Volvo Bus",
              path: "/volvo-bus/35-seater-volvo-bus",
            },
            {
              name: "38 Seater Volvo Bus",
              path: "/volvo-bus/38-seater-volvo-bus",
            },
            {
              name: "40 Seater Volvo Bus",
              path: "/volvo-bus/40-seater-volvo-bus",
            },
            {
              name: "42 Seater Volvo Bus",
              path: "/volvo-bus/42-seater-volvo-bus",
            },
            {
              name: "45 Seater Volvo Bus",
              path: "/volvo-bus/45-seater-volvo-bus",
            },
            {
              name: "Volvo Bus With Washroom",
              path: "/volvo-bus/volvo-bus-with-washroom",
            },
          ],
        },
        {
          name: "Mercedes Coach",
          path: "/mercedes-coach",
          sub: [
            {
              name: "38 Seater Mercedes Bus",
              path: "/mercedes-coach/38-seater-mercedes-bus",
            },
            {
              name: "40 Seater Mercedes Bus",
              path: "/mercedes-coach/40-seater-mercedes-bus",
            },
            {
              name: "42 Seater Mercedes Bus",
              path: "/mercedes-coach/42-seater-mercedes-bus",
            },
            {
              name: "43 Seater Mercedes Bus",
              path: "/mercedes-coach/43-seater-mercedes-bus",
            },
            {
              name: "45 Seater Mercedes Bus",
              path: "/mercedes-coach/45-seater-mercedes-bus",
            },
            {
              name: "Mercedes Bus With Washroom",
              path: "/mercedes-coach/mercedes-bus-with-washroom",
            },
          ],
        },
        {
          name: "Isuzu Bus",
          path: "/isuzu-bus",
          sub: [
            {
              name: "15 Seater Isuzu Bus",
              path: "/isuzu-bus/15-seater-isuzu-bus",
            },
            {
              name: "18 Seater Isuzu Bus",
              path: "/isuzu-bus/18-seater-isuzu-bus",
            },
            {
              name: "20 Seater Isuzu Bus",
              path: "/isuzu-bus/20-seater-isuzu-bus",
            },
            {
              name: "22 Seater Isuzu Bus",
              path: "/isuzu-bus/22-seater-isuzu-bus",
            },
            {
              name: "25 Seater Isuzu Bus",
              path: "/isuzu-bus/25-seater-isuzu-bus",
            },
            {
              name: "27 Seater Isuzu Bus",
              path: "/isuzu-bus/27-seater-isuzu-bus",
            },
          ],
        },
      ],
    },
    {
      name: "airport transfer",
      path: "/airport-transfer",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  const name = getRouterParam(event, "name");
  if (name === "all") return nav_links;

  const links = nav_links.find((link) => link.name === name);

  return links;
});
