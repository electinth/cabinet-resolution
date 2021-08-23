const web_config = {
  title: "เกือบจะ 2 ปีแล้ว ทำอะไรไปบ้าง?",
  og_image: "./static/og_image.jpg"
};

export default {
  env: {
    web_url: process.env.WEB_URL
  },

  // Target: https://go.nuxtjs.dev/config-target
  // target: "static",

  ssr: false,

  router: {
    base: "/cabinet-resolution"
  },

  generate: {
    dir: "dist/cabinet-resolution"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: web_config.title,
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: web_config.description
      },
      {
        hid: "og:title",
        property: "og:title",
        content: web_config.title
      },
      {
        hid: "og:description",
        property: "og:description",
        content: web_config.description
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: web_config.og_image
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.WEB_URL
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: web_config.title
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: web_config.description
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: web_config.og_image
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: process.env.WEB_URL
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/cabinet-resolution/favicon.png"
      },
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
