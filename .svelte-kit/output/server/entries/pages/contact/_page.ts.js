import { b as buildSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: buildSeo({
      title: "Contact Mk.01 Studio",
      description: "Share your project vision and collaborate with Mk.01 Studio on experiential web design and development.",
      path: "/contact"
    })
  };
};
export {
  load
};
