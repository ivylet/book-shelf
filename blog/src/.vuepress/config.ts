import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
      
    }),
    searchPlugin({
      
    }),
  ],
  base: "/",
  lang: "zh-CN",
  title: "ivy的知识库",
  description: "just a blog",
  

  theme,
  shouldPrefetch:false
});

