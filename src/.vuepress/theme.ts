import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://www.ephone.wiki",
    favicon: "/assets/image/cloud.webp",
    author: {
        name: "LazyDog",
        url: "https://space.bilibili.com/39524955",
    },
    iconAssets: "fontawesome-with-brands",
    logo: "/assets/image/cloud.webp",
    docsDir: "src",
    navbar,
    sidebar,
    footer: "找到最适合你的云手机",
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
                replacer: ({tag}) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: {type: "tip"},
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
            provider: "Artalk",
            server: "https://artalk.lazydog.site/",
            gravatar:{
                mirror:"https://weavatar.com/avatar/",
                params:"sha256=1&d=mp&s=240",
            }
            // provider:"Waline",
            // serverURL:"https://waline.lazydog.site/"
        },
        components: {
            components: ["Badge", "VPCard"],
        },
        docsearch:{
            apiKey:"",
            indexName:"",
            appId:"",
        }
    },
});
