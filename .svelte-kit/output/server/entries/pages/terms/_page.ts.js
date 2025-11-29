import { b as buildSeo } from "../../../chunks/seo.js";
function load() {
  return {
    seo: buildSeo({
      title: "Terms of Service",
      description: "Terms of service for Mk.01 Studio.",
      path: "/terms"
    })
  };
}
export {
  load
};
