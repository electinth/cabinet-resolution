import two_years_data from "./static/data/2years.json";
import covid_data from "./static/data/covid.json";

const all_data = [...two_years_data, ...covid_data];

export default {
  env: {
    web_url: process.env.WEB_URL
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  router: {
    base: "/cabinet-resolution"
  },

  generate: {
    dir: "dist/cabinet-resolution",
    routes: all_data.map(d => {
      return {
        route: "/database/" + d.no,
        payload: d
      };
    })
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "58-cabinet-resolution",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://elect.in.th/assets/typography.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Icons"
      }
    ]
    // script: [
    //   {
    //     async: true,
    //     defer: true,
    //     src: "https://plausible.anyon.ml/js/plausible.js",
    //     "data-domain": "elect.in.th/cabinet-resolution"
    //   }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style/index.scss", "element-ui/lib/theme-chalk/index.css"],

  styleResources: {
    scss: ["~/assets/style/variables.scss"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/element-ui" },
    { src: "~/plugins/elect", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["nuxt-mq"]],

  mq: {
    defaultBreakpoint: "desktop",
    breakpoints: {
      mobile: 768,
      tablet: 1025,
      desktop: 1280,
      desktopWide: 1440,
      desktopUltraWide: Infinity
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
};
