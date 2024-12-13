import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "易丰测评",
  description: "致力于为你找到最适合的云手机！",
  theme,
});
