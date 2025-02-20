import useNav from "~/composables/useNav";

export default defineEventHandler(async (event) => {
  const nav_links = await useNav();
  const name =  getRouterParam(event, "name");
  if (name === "all") return nav_links;
  const links = nav_links.find((link) => link.name.toLocaleLowerCase() === name);
  
  return links;
});
