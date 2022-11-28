export const data = JSON.parse("{\"key\":\"v-bd0168da\",\"path\":\"/posts/deploy/\",\"title\":\"部署\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"部署\",\"description\":\"laode\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ivylet.github.io/posts/deploy/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ivy的知识库\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"部署\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"laode\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"laode\",\"slug\":\"laode\",\"link\":\"#laode\",\"children\":[]}],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"posts/deploy/README.md\"}")

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
