---
title: MyBatis介绍
date: 2022-10-01
---


# MyBatis
::: tip

什么是持久层？

:::

MyBatis是为了解决JDBC无法运用与于大型项目，所以来先介绍一下JDBC。

什么是JDBC?

## JDBC概述

JDBC（Java DataBase Connectivity，java数据库连接）是一种用于执行SQL语句的Java API，可以为多种关系数据库提供统一访问，它由一组用Java语言编写的类和接口组成。JDBC提供了一种基准，据此可以构建更高级的工具和接口，使数据库开发人员能够编写数据库应用程序。以下是`JDBC`常用的接口。

- `Driver`

- `DriverManager`
- `Connection`
- `Statement`
- `PreparedStatement`
- `ResultSet`

### JDBC运行的流程

注册驱动，建立连接，创建传输器，运行SQL语句，处理运行结果，释放资源。

举一个简单的JDBC程序例子。

```java
public class JDBCTest {

	//加载的mysql的驱动
	public static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	//连接数据库的url
	public static final String JDBC_URL = "jdbc:mysql://localhost:3306/test";
	//连接数据库用户名
	public static final String JDBC_USERNAME = "root";
	//数据库密码
	public static final String JDBC_PASSWORD = "123456";
	//测试数据库删除，修改和插入
	@Test
	public void testUpdate() {
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		try {
			// 加载Driver类，注册数据库驱动
			Class.forName(JDBC_DRIVER);
			// 通过DriverManager,使用url，用户名和密码建立连接(Connection)
			connection = DriverManager.getConnection(JDBC_URL, JDBC_USERNAME, JDBC_PASSWORD);
			// 通过Connection，使用sql语句打开Statement对象；
			preparedStatement = connection.prepareStatement("UPDATE student SET age=20 WHERE name=?");
			// 传入参数，防止sql注入
			preparedStatement.setString(1, "xiaoming");
			// 执行语句，将结果返回resultSet
			int count = preparedStatement.executeUpdate();
			// 对结果进行处理
			System.out.println(count);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			// 倒序释放资源
			try {
				if (preparedStatement != null && !preparedStatement.isClosed()) {
					preparedStatement.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				if (connection != null && connection.isClosed()) {
					connection.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}


```

## MyBatis概述

MyBatis框架支持普通SQL查询、存储及高级映射的持久层框架，几乎消除了JDBC的冗余代码，可以使Java开发人员使用面向对象的编程思想来操作数据库。

MyBatis是一个`ORM`框架

> 什么是ORM？

> 对象关系映射(Object Relational Mapping)是一种为了解决面向对象和关系型数据库存在的互不匹配的现象的技术。

## 差别

#### JDBC工作

  我们平时使用jdbc进行编程，大致需要下面几个步骤：

1. 使用jdbc编程需要连接数据库，注册驱动和数据库信息
2. 操作Connection，打开Statement对象
3. 通过Statement对象执行SQL，返回结果到ResultSet对象
4. 使用ResultSet读取数据，然后通过代码转化为具体的POJO对象
5. 关闭数据库相关的资源

#### jdbc的缺点

1. 需要频繁的创建数据库连接
2. 涉及到的增删改查等功能需要在各个java文件中编写大量代码
3. 对于底层事务、数据类型转换等都需要手动处理，又是各种代码

#### mybatis优点

1. 封装了jdbc对数据库的各种操作，减少代码
2. 增加了连接池、一、二级缓存
3. 可以自动生成sql语句





