import axios from "axios";
import useUtility from "~/composables/useUtility";


interface NavLink { name: string; path: string; sub?: NavLink[] };

interface Category {
  name: { en: string };
  children: Category[];
}

export default async function () {
  const { sluger } = useUtility();
  const baseUrl = "https://minivan-delhi-new.onrender.com/api";

  try {
    const [customizationRes, categoryRes] = await Promise.all([
      axios.get(`${baseUrl}/setting/store/customization/all`),
      axios.get(`${baseUrl}/category/show`),
    ]);

    let nav_links: NavLink[] = customizationRes.data?.navbar
      ? Object.values(customizationRes.data.navbar)
        .filter((item: any) => item?.en)
        .map((item: any) => ({
          name: item.en,
          path: `/${sluger(item.en)}`,
        }))
      : [{ name: "fetching", path: "/fetching-for-sure" }];

    if (categoryRes.data?.length) {
      const transformCategories = (categories: Category[]): NavLink[] => {
        return categories.map(category => ({
          name: category.name.en,
          path: `/${sluger(category.name.en)}`,
          sub: category.children.map(child => ({
            name: child.name.en,
            path: `/${sluger(category.name.en)}/${sluger(child.name.en)}`,
            sub: child.children ? child.children.map(subChild => ({
              name: subChild.name.en,
              path: `/${sluger(category.name.en)}/${sluger(child.name.en)}/${sluger(subChild.name.en)}`,
            })) : []
          }))
        }));
      };

      const all: Category[] = categoryRes.data[0].children;
      const transformedData: NavLink[] = transformCategories(all);
      nav_links.splice(2, 0, ...transformedData);
    }
    return nav_links;
  } catch (error) {
    console.error("Error fetching navigation data", error);
    return [{ name: "fetching", path: "/fetching-for-sure" }];
  }
}
