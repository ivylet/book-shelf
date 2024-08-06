---
title: MyBatis核心配置
---

## MyBatis的基本配置

### 基本对象

- `SqlSessionFactoryBuilder()`
	通过使用`build()`函数构建`SqlSessionFactory()`，`SqlSessionFactory()`为MyBatis的非常重要的对象。

- `SqlSessionFactory()`
	MyBatis中很重要的对象，它的实例类是线程安全的，一般一个数据库只创建一个`SqlSessionFactory()`。它主要用于创建`SqlSession()`，含有多个重载的创建`SqlSession()`的`openSession()`函数。

- `SqlSession()`

	主要是应用程序与持久层之间执行交互操作的对象，主要是用于执行持久化操作，封装了执行SQL语句的方法。它的实例类是线程不安全的，使用后要及时关闭，常放在`try finally`语句中的finally语句中进行关闭操作。

要使用`SqlSessionFactoryBuilder()` 创建 `SqlSessionFactory()`，`SqlSessionFactory()`然后 创建 `SqlSession()`

### 基本配置文件

基本配置文件是由`<configuration>`标签包裹的xml文件，`<configuration>`元素是整个 XML 配置文件的根节点，其角色就相当于是 MyBatis 的总管，MyBatis 所有的配置信息都会存放在它里面。

- `<properties>`
	用于读取外部配置文件的信息，比如获取数据库的连接信息。
- `<settings>`
	主要用于改变MyBatis运行时的行为，比如开启二级缓存、延迟加载等。主要是定义配置参数，根据设计需求进行开启与关闭。
- `<typeAliases>`
	改标签的中文意思是类型别名，在确定操作对象时通常需要输入全限定名，而全限定名一般都很长。所以MyBatis提供了类型别名标签，可以用于一个别名来代替全限定名。不仅仅是代替类名，也包含了对Java类型的别名代替。
- `<environments>`
	用于指定配套多套运行环境，比如测试环境，开发环境，生产环境，但是必须指定一个默认环境。运行环境主要包括不同的数据源`<dataSource>`与事务管理`<TransactionManager>`。
	数据源提供了三种`UNPOOLED`、`POOLED`与`JNDI`。事务管理器主要有`JDBC`与`MANGED`，一般Spring也有事务管理器。
- `<mappers>`
	用于指定MyBatis的映射文件，映射文件中包含了POJO对象与数据表之间的映射信息。找到映射文件后解析其中的映射信息。

根据MyBatis的基本配置文件可以发现，其实需要开发的主要是映射文件。

### 映射文件配置

- `<select>`
- `<insert>`
- `<update>`
- `<delete>`
- `<sql>`
用于定义可以复用的sql片段，减少代码量。
- `<resultMap>`
用于进行变量名的映射，比如查询`name`时，sql中写的是`name`，但对应的数据库中的列名为`uname`，则可以使用resultMap避免出现不对应的情况。


## 动态SQL

MyBatis通过采用功能强大的基于对象导航图语言的表达式来完成动态SQL，开发人员可以通过动态SQL灵活组装SQL语句，一定程度上避免了单一SQL语句的反复堆砌，提高了SQL语句的复用性。

### 基本元素

| 元素                           | 说明                         |
| ------------------------------ | ---------------------------- |
| `<if>`                         | 判断语句，用于单条件判断     |
| `<choose>(<when>,<otherwise>)` | 判断语句，用于多条件判断     |
| `<where>`                      | 简化SQL语句中where的条件判断 |
| `<trim>`                       |                              |
| `<set>`                        |                              |
| `<foreach>`                    |                              |

### 条件查询

### 更新操作

















### 复杂查询操作
## MyBatis的关联映射与缓存
### 关联映射
#### 一对一查询
#### 一对多查询
#### 多对多查询
### 缓存机制
#### 一级缓存
#### 二级缓存
## 注解开发