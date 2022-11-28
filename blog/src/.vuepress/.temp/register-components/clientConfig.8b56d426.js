import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Book", defineAsyncComponent(() => import("E:/www/MyValue/blog/src/.vuepress/components/Book.vue")))
  },
}
