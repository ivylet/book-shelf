---
title: SringMVC
date: 2022-09-29
---

# SpringMVC

SpringMVC与Servlet


## SpringMVC简介
### 概述

### 入门程序

快速开始





### 基本类与配置



请求与响应

POST请求中文乱码



结构：

- com.taytay
	- config
	- controller
	- service
	- dao



### `Bean`的加载机制

一般而言，

- SpringMVC相关`Bean`（表现层Bean）
- Spirng控制的`Bean`
	- 业务`Bean`（Service）
	- 功能`Bean`（DataSource等）



扫描`Bean`时，避免Spring扫描到SpringMVC的`Bean`，有两种方法。

- 直接扫描所需要的包名如`@ComponentScan({"com.taytay.service","com.taytay.dao"})`
- 全部扫描，但是指定排除项目
	```java
	@ComponentScan(value="com.taytay",
	               excludeFilters = @ComponentScan.Filter(
	              		type = FilterType.ANNOTATION,
	                   	 classes = Controller.class
	               )
	              )
			//按照注解排除结果
			//扫描全部内容，但是排除以@Controller为注解的类
	```

- 不区分Spring与SpringMVC的`Bean`

	[注解和XML的区别,和优缺点](https://blog.csdn.net/dreamweaver_zhou/article/details/77511745)

`Bean`

## SpringMVC的核心类与注解
SpringMVC的基本组件






### DispatcherServlet(前端控制器)
拦截客户端请求后，根据具体规则分发给其他组件处理，所有请求都需要经过DispatcherServlet处理。
### @RespController
可以同时代表@Controller与@ResponseBody两个注解
### @ResponseBody

### @RequestBody

### @PathVariable

### @RequestMapping

@GetMapping

@PostMapping

@PutMapping

@DeleteMapping

## 数据绑定
[史上最全前端框架库汇总 - 知乎](https://zhuanlan.zhihu.com/p/333347987)

1、同步请求和异步请求的区别
同步请求：客户端向服务器发送请求-->等待服务器响应-->处理完毕返回，客户端浏览器没有做别的事情。
同步连接请求数据时，当数据还未请求成功之前，用户界面做任何操作都是无效的，都是不会响应的。只有当请求数据完毕之后，才会响应用户交互，所以通常会卡死主线程。

异步请求：通过事件触发请求-->服务器处理请求-->处理完毕返回，但是客户端浏览器可以接着做别的事情
当异步请求时，会有单独的子线程去请求数据，而主线程依然响应处理用户交互，所以此时用户交互得到处理，用户流畅操作，用户体验比较好，所以开发过程中最多的还是异步链接

同步——如果使用者在服务运行的过程中阻塞时崩溃了，当它重新启动时，将无法重新连接到正在进行的调用，所以响应丢失了。使用者必须重复调用过程，并且期望这次不会崩溃。
异步——如果使用者在发送了请求之后等待响应时崩溃了，当它重新启动时，可以继续等待响应，所以响应不会丢失。
2、GET请求和POST请求的区别
GET请求，请求直接跟在URL后，以问号开始。因为服务器以及参数都会出现在请求接口中，也就是请求参数也是接口的一部分，而POST请求在接口中只有服务器地址，而参数会作为请求提交给服务器。
因为GET请求会出现在请求接口中，所以信息容易被捕获，安全性低，POST请求参数封装在请求体中，作为二进制流进行传输，不易被捕获，安全性高。
GET在请求时，接口的字节数有限制，支持小数据的提交，而POST请求从理论上来讲没有限制性，虽然理论上对于GET请求与POST请求都可以提交请求，但是GET多用于从服务器请求数据，而POST多用于向服务器提交数据。





### 浏览器请求

GET

POST

PUT

DELETE

### 文本数据数据传参

- #### 普通参数

	```java
	@RequestMapping("/parm")
	@ResponseBody
	public String save(@RequestParam("name")String username, int age){
	    System.out.println("名字是 = >" + username);
	    System.out.println("年龄是 = >" + age);
	    System.out.println("saving ....");
	    return "{'module':'Parm save'}";
	}
	```

	`@RequestParam("name") String username`代表接受的name属性传递给username。如果属性名一样则无需添加，自动传递。

- #### 中文处理

	添加过滤器

	```java
	//在ServletContainersInitConfig中设置
	//乱码过滤
	    @Override
	    protected Filter[] getServletFilters() {
	        CharacterEncodingFilter filter = new CharacterEncodingFilter();
	        filter.setEncoding("UTF-8");
	        return new Filter[]{filter};
	    }
	```

	

- #### 数组参数

- #### 集合参数

- #### 对象参数

- 

```java
@RequestMapping("/pojoParm")
@ResponseBody
public String pojoParam(User user){
    System.out.println("pojo参数传递 user =>" + user);
    return "{'module':'pojo param'}";
}

@RequestMapping("/listParamforJSON")
@ResponseBody
public String listParamforJSON(@RequestBody List<String> list){
    System.out.println("pojo参数传递 user =>" + list);
    return "{'module':'list param'}";
}

@RequestMapping("/listPojoParamforJSON")
@ResponseBody
public String listPojoParamforJSON(List<User> list){
    System.out.println("pojo参数传递 user =>" + list);
    return "{'module':'listPojoParam'}";
}
```

### JSON格式数据传参

将类对象自动转换为JSON数据

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.9.10.8</version>
</dependency>
```



```java
@Controller
@RequestMapping("/user")
public class UserController{
    @RequestMapping("/parM")
    @ResponseBody
    public User save(){
        User user = new User();
        user.setRepo("dsad");
        user.setShop("dsad");
        return user;
    }
}
```

### 类型转换器













## 拦截器

### 概念

Spring MVC 的拦截器（Interceptor）与 Java Servlet 的过滤器（Filter）类似，它主要用于拦截用户的请求并做相应的处理，通常应用在权限验证、记录请求信息的日志、判断用户是否登录等功能上。

### 作用

实现功能时，有时需要进行权限检查和日志记录，这些操作是需要在功能前后执行的。


## RESTful风格

### 风格
风格即风格，建议，自己可以更改的，非规范。

优点：隐藏资源的访问行为，无法通过地址得知对资源是何种操作，书写简化。

RESTful是按照REST风格



@RequestBody

@PathVariable

## 异常处理
