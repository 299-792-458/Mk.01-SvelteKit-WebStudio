import { b as buildSeo } from "../../../chunks/seo.js";
function load() {
  return {
    seo: buildSeo({
      title: "Privacy Policy",
      description: "Privacy policy for Mk.01 Studio.",
      path: "/privacy"
    })
  };
}
export {
  load
};
