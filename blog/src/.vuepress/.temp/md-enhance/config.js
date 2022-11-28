import { defineClientConfig } from "@vuepress/client";
import "E:/www/MyValue/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import Presentation from "E:/www/MyValue/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  },
});
