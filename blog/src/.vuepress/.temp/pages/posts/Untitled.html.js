export const data = JSON.parse("{\"key\":\"v-50ec3a1f\",\"path\":\"/posts/Untitled.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ivylet.github.io/posts/Untitled.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ivy的知识库\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"posts/Untitled.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
