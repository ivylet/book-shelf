### SQL语言

SQL(结构化查询语言)语言的组成: 数据定义语言DDL.数据操控语言DML,数据控制语言DCL,等等.

### 关键字及功能
~~~
select
from
where
~~~


#### SQL聚合函数
聚合函数包括`AVG()` `COUNT` `MIN()` `MAX()` 和 `SUM()`,聚合函数通过计算一组值并返回单个值。因为聚合函数对一组值进行操作,所有它常与 `select` 语句的 `GROUP BY` 子句一起使用。`GROUP BY`  子句将结果集划分为值分组，聚合函数为每个分组返回单个值。
	
	
	
___

#### 视图的创建,更新,删除
##### 创建视图

``` sql
CREATE VIEW <viewName> [(<columnName1>[,(<columnName2>-...)]
AS
	<subquery>
[WITH CHECk OPTION]
```

其中:
- `< viewName >`:新视图名称,必须唯一
- `[(<columnName1>[,(<columnName2>-...)]` :新视图中定义的列名,如果省略则自动取查询出来的列名,但是有些情况下必须指定列名
	- 某个目标列是聚集函数或表达式
	- 多表连接中有相同的列名
	- 这个列名换名字更好辨认
- `AS < subquery >`:子查询不允许含有`ORDER BY`子句和`DISTINCT`子句
- `[WITH CHECk OPTION]`:当对视图进行操作时,必须满足此子句的谓词条件

