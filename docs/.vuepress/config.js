module.exports = {
  base: "/blog/dist/",
  title: "Xi A",
  description: "嗖嘎朋友们，这是描述.",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/blog/dist/images/logo/web-head-yuan.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/webp",
        sizes: "32x32",
        href: `/blog/dist/images/logo/web-head.webp`
      }
    ],
    ["meta", { name: "application-name", content: "Xi A" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Xi A" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/images/logo/web-head-yuan.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],
  bundler: "@vuepress/vite",
  theme: "gungnir",
  themeConfig: {
    chartjs: true,
    katex: true,
    // repo: "Renovamen/renovamen.github.io",
    docsDir: "docs",
    docsBranch: "master",
    // 一言
    hitokoto: "https://v1.hitokoto.cn?c=i",

    // 个人信息
    personalInfo: {
      name: "A Xi",
      avatar: "/images/tou-xiang2.jpg",
      description: "嗖嘎朋友们，这是描述.",
      sns: {
        github: "axi443",
        linkedin: "",
        facebook: "",
        twitter: "",
        zhihu: "xiao-tian-zi-zi",
        email: "chuyi008ban@163.com",
        rss: ""
      }
    },

    // 首页背景图
    homeHeaderImages: [
      {
        path: "/images/home-bg/home-bg-5.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/images/home-bg/home-bg-4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/images/home-bg/home-bg-3.jpg"
      },
      {
        path: "/images/home-bg/home-bg-2.jpg"
      },
      {
        path: "/images/home-bg/home-bg-1.jpg"
      },
      {
        path: "/images/logo/tou-xiang.webp",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/images/home-bg/home-bg-7.png"
      },
      {
        path: "/images/home-bg/home-bg-6.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },
    ],
    // other pages
    pages: {
      tags: {
        subtitle: "这是tags.",
        bgImage: {
          path: "/images/pages/tags.png",
          mask: "rgba(211, 136, 37, .1)"
        }
      },
      links: {
        subtitle:
          "这是links.",
        bgImage: {
          path: "/images/home-bg/home-bg-4.jpg",
          mask: "rgba(64, 118, 190, .1)"
        }
      }
    },
    themePlugins: {
      // only enable git plugin in production mode
      // git: isProd,
      mdPlus: {
        all: true,  // 全部启用（默认：false）
      },
      katex: true,
      chartjs: true,
      giscus: {
        repo: "axi443/blog",
        repoId: "R_kgDOHMwfFA",
        category: "Announcements",
        categoryId: "DIC_kwDOHMwfFM4COqAV",
        lazyLoad: true,
      },
      mdPlus: {
        all: true
      },
      // 百度统计
      ba: "75381d210789d3eaf855fa16246860cc",
      rss: {
        siteURL: "",
        copyright: "A Xi 2022-2022"
      },
      readingTime: {
        excludes: [],
        // includes : [],
        wordsPerMinuteCN: 300,
        wordsPerMinuteEN: 160,
        excludeCodeBlock: true,
        excludeTexBlock: true
      },
      pwa: false
    },
    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "ri-home-heart-line",
      },
      {
        text: "About",
        link: "/about/",
        icon: "ri-file-list-3-line"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "pr-tags"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-link"
      },
      {
        text: "404",
        link: "/home",
        icon: "oi-rocket"
      }
    ],

    footer: `
      &copy; <a href="https://github.com/axi443" target="_blank">A Xi</a> 2022-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://v2-vuepress-theme-gungnir.vercel.app/docs/basic/intro.html#live-demos" target="_blank">Gungnir</a>
    `
  },
  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  },
  mermaid: true,
  plugins: [
    [
      "@renovamen/vuepress-plugin-mermaid",
      "@renovamen/vuepress-plugin-katex",
      "vuepress-plugin-chart",
      "@renovamen/vuepress-plugin-md-plus"
    ]
  ]
};
