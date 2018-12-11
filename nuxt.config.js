const pkg = require("./package");

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [

      /**
        https://developer.chrome.com/multidevice/android/installtohomescreen#work
        
        https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
       
        * 保存到主屏全屏 
       */
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      /**
       * apple-mobile-web-app-status-bar-style 的 content 的值：
       * black  黑色
       * black-translucent  透明
       * default  白色
       */
      {name:"apple-mobile-web-app-status-bar-style", content :"black-translucent"},

      {name:"mobile-web-app-status-bar-style", content :"black-translucent"},

      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover"
      },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        ref: "stylesheet",
        href: "https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
    "ant-design-vue/dist/antd.less",
    {
      src: "./assets/global.less",
      lang: "less"
    }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/antdesignvue",
    {
      src: "@/plugins/device",
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    /*
    Nuxt.js允许您将dist文件上传到CDN来获得最快渲染性能，只需将publicPath设置为CDN即可。
    https://zh.nuxtjs.org/api/configuration-build/#publicpath
    默认值:
      publicPath: "/_nuxt/",
    */ 

    loaders: {
      less: {
        modifyVars: {
          // 'primary-color': '#1DA57A',
          // 'link-color': '#1DA57A',
          // 'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    },
    extend(config, ctx) {}
  }
};
