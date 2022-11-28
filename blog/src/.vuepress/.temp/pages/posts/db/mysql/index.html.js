export const data = JSON.parse("{\"key\":\"v-c9fba1ae\",\"path\":\"/posts/db/mysql/\",\"title\":\"SQL\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SQL\",\"description\":\"建表 ```sql create table Course( CNo char(10) NOT NULL , CName varchar(50) NOT NULL , Grade ENUM('1','1.5','2','2.5','3','3.5','4','4.5','5'), Term int check ( Term>0 and Term\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ivylet.github.io/posts/db/mysql/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ivy的知识库\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SQL\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"建表 ```sql create table Course( CNo char(10) NOT NULL , CName varchar(50) NOT NULL , Grade ENUM('1','1.5','2','2.5','3','3.5','4','4.5','5'), Term int check ( Term>0 and Term\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.23,\"words\":70},\"filePathRelative\":\"posts/db/mysql/README.md\"}")

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
