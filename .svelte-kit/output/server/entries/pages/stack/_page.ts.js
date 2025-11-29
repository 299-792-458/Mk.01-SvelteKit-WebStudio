import { b as buildSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: buildSeo({
      title: "Mk.01 Studio Stack",
      description: "The technology stack Mk.01 Studio uses to deliver high-performance, cinematic web experiences.",
      path: "/stack"
    })
  };
};
export {
  load
};
