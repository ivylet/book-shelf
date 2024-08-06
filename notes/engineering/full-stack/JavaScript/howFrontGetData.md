前端如何获取数据?
# ajax

1. **异步通信**：Ajax 允许浏览器在不影响现有页面显示的情况下，与服务器进行通信。这意味着用户界面可以继续响应用户操作，而不会因为等待服务器响应而冻结。
    
2. **JavaScript 驱动**：Ajax 请求完全由 JavaScript 控制，这使得可以在用户执行特定操作（如点击按钮）时触发。
    
3. **数据交换**：Ajax 可以发送和接收多种格式的数据，虽然名字中有 XML，但它也可以处理 JSON、HTML 以及纯文本格式。
    
4. **局部更新**：通过 Ajax，可以仅更新页面的一部分，而不是重新加载整个页面，这提高了用户体验并减少了服务器负载。
```js
//新建核心对象
var xhr = new XMLHttpRequest();
//`method`：请求类型，如 “GET”, “POST” 等。
//`url`：请求发送的目标 URL。
//`async`：表示请求是否异步，通常为 `true`。
//xhr.open(method,url,async)
xhr.open("GET", "http://localhost:3000/api/data", true);
//设置请求头（可选）
xhr.setRequestHeader("Content-Type", "application/json");
//`readyState` 为 4 表示请求完成，`status` 为 200 表示服务器响应成功。
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 请求完成，处理响应数据
    document.getElementById("data").innerHTML = xhr.responseText;
  }
};
xhr.send(); // 发送请求 GET请求一般不需要send参数
// xhr.send(data); // 发送请求 POST请求需要send参数
```
# axios
  
Axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 node.js 环境。它是一个流行的第三方库，提供了一种更简洁和易于使用的方式来发送 HTTP 请求。以下是 Axios 的一些关键特性和如何使用它的示例。
1. **基于 Promise**：Axios 使用 Promise API，使得异步 HTTP 请求的处理更加方便和简洁。
2. **请求和响应拦截器**：可以在请求或响应被 then 或 catch 处理之前拦截它们。
3. **转换请求和响应数据**：可以转换请求数据和响应数据，使其在发送或接收之前符合特定的格式。
4. **取消请求**：可以取消正在进行的 HTTP 请求。
5. **自动转换 JSON 数据**：默认情况下，Axios 会自动将接收到的 JSON 数据转换为 JavaScript 对象。
6. **客户端支持**：支持浏览器和 node.js 环境。
```bash
npm install axios
```
基本使用实例
```js
const axios = require("axios");
//GET请求
axios
  .get("http://localhost:3000/api/data") //请求data数据
  .then((res) => console.log(res.data)) //请求成功后怎么做
  .catch((err) => console.log(err)); //请求失败后怎么做
//POST请求
axios
  .post("http://localhost:3000/api/data", { name: "张三" }) //发送data数据
  .then((res) => console.log(res.data)) //发送data数据成功后怎么做;
  .catch((err) => console.log(err)); //发送data数据失败后怎么做;
//封装请求数据函数
async function getData() {
  try {
    const res = await axios.get("http://localhost:3000/api/data");
    console.log(res.data);
  } catch (err) {
    if (err.message === "User is not authenticated") {
      // 处理未授权的情况，例如重定向到登录页面
      console.error("Access denied: User is not authenticated");
    }
    console.log(err);
  }
}
//封装发送数据函数
async function postData(postData) {
  try {
    const res = await axios.post("http://localhost:3000/api/data", postData);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}
// 假设有一个函数用于检查用户是否已授权
function isAuthenticated() {
  // 这里应该包含你的认证逻辑，例如检查本地存储、cookie 或状态管理库中的 token
  // 返回 true 如果用户已授权，否则返回 false
  const token = localStorage.getItem("userToken");
  return token && token !== "";
}
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // if (!isAuthenticated()) {
    //   return Promise.reject(new Error("User is not authenticated"));
    // }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```
# fetch
`fetch` 是现代浏览器提供的一个用于与服务器交换数据的 API，它提供了一种更简洁和一致的接口来处理 HTTP 请求。`fetch` API 返回一个 Promise，一旦请求完成，这个 Promise 就会解决，并提供一个 `Response` 对象，它包含了服务器响应的信息。
```js
//GET数据
// fetch("http://localhost:3000/api/data")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//POST数据
// fetch("http://localhost:3000/api/data", {
//   method: "POST",
//   body: JSON.stringify({ name: "John", age: 30 }),
// }).then((res) => res.json());
export async function fetchData() {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  console.log("res", res);
  console.log("data", data);
  document.getElementById("data").innerHTML = data.name;
  return data;
}
export async function postData() {
  fetch("http://localhost:3000/api/data", {
    method: "POST",
    body: JSON.stringify({ name: "John", age: 30 }),
  }).then((res) => res.json());
  console.log("Data posted successfully");
}
```
