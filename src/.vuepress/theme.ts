import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://ephone.wiki",

  author: {
    name: "LazyDog",
    url: "https://mister-hope.com",
  },
  iconAssets: "fontawesome-with-brands",
  logo: "https://www.logosc.cn/oss/icons/2022/10/18/icon_634e74e02259f.svg",
  docsDir: "src",
  navbar,
  sidebar,
  footer: "Default footer",
  displayFooter: true,
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },
  metaLocales: {
    editLink: "Edit this page on GitHub",
  },
  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },
  plugins: {
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },
    components: {
      components: ["Badge", "VPCard"],
    },
  },
});
