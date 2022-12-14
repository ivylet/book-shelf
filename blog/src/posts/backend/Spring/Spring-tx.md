---
title: Spring事务管理
---

## 概述

Spring的事务管理方式简化了传统事务管理的流程，在一定程度上简化了开发人员的工作量。

::: tip 什么是事务

事务是一系列的动作，一旦其中有一个动作出现错误，必须全部回滚，系统将事务中对数据库的所有已完成的操作全部撤消，滚回到事务开始的状态，避免出现由于数据不一致而导致的接下来一系列的错误。事务的出现是为了确保数据的完整性和一致性，在目前企业级应用开发中，事务管理是必不可少的。

::: 

与事务相关的理论知识
众所周知，事务有四大特性（ACID）

1.原子性（Atomicity）事务是一个原子操作，由一系列动作组成。事务的原子性确保动作要么全部完成，要么完全不起作用。

2.一致性（Consistency）事务在完成时，必须是所有的数据都保持一致状态。

3.隔离性（Isolation）并发事务执行之间无影响，在一个事务内部的操作对其他事务是不产生影响，这需要事务隔离级别来指定隔离性。

4.持久性（Durability）一旦事务完成，数据库的改变必须是持久化的。

在企业级应用中，多用户访问数据库是常见的场景，这就是所谓的事务的并发。事务并发所可能存在的问题：
1.读脏数据：一个事务读到另一个事务未提交的更新数据。
2.不可重复读：一个事务两次读同一行数据，可是这两次读到的数据不一样。
3.幻读：一个事务执行两次查询，但第二次查询比第一次查询多出了一些数据行。
4.丢失更新：撤消一个事务时，把其它事务已提交的更新的数据覆盖了。



## 事务管理的核心接口

Spring包含了一个名称为`spring-tx`的包，该JAR包是Spring提供的用于事务管理的依赖包。其中提供了三个接口实现事务管理。这三个接口如下：

- `PlatformTransactionManager`
- `TransactionDefine`
- `TransactionStatus`

### PlatformTransactionManager

该接口主要用于管理事务，其中提供了三个管理事务的方法

- `TransactionStatus getTransaction(TransactionDefinition definiton)` 
	用于获取事务的状态信息

- `void commit(TransactionStatus status)`
	用于提交事物
- `void rollback(TransactionStatus status)`
	用于回滚事务

### TransactionDefinition

### TransactionStatus

## 编程式事务管理
编程式事务管理是通过编写代码实现的事务管理，包括定义事务的开始、正常执行后的事务提交和异常时的事务回滚。

## 声明式事务管理
声明式事务管理是通过 AOP 技术实现的事务管理，其主要思想是将事务管理作为一个“切面”代码单独编写，然后通过 AOP 技术将事务管理的“切面”代码植入到业务目标类中。

