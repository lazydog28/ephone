import {defineUserConfig} from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "易丰测评",
    description: "致力于为你找到最适合的云手机！",
    theme,
    head: [
        ["script", {src: "https://hm.baidu.com/hm.js?6cc07fef2131d428f46b8f478855c8c9"}],
        ["script", {
            src: "https://static.cloudflareinsights.com/beacon.min.js",
            "data-cf-beacon": "{\"token\": \"c4f4d1411a27429f9d386827f4984468\"}"
        }],
    ]
});
