import useNav from "~/composables/useNav";

export default defineEventHandler((event) => {
  const nav_links = useNav();

  const name = getRouterParam(event, "name");
  if (name === "all") return nav_links;

  const links = nav_links.find((link) => link.name === name);

  return links;
});
