---
title: MyBatis 快速开始
---

## MyBatis简单入门程序

不知道MyBatis是什么，或者不懂怎么运行的，可以先从一个简单的入门程序来了解MyBatis。

### 数据准备
创建在数据库中创建表，并在表中插入两条数据。
```sql
use mybatis;
create table users{
	uid int primary key auto_increment,
	uname varchar(20) not null,
	uage int not null
};
insert into users(uid,uname,uage) values(null,'张三',20),(null,'李四',29)
```
### 创建实体类
实体类，包含每个对象的基本属性。
```java
package com.taytay.pojo;
public class User {
    private int uid;
    private String uname;
    private  int uage;
    public int getUid() {
        return uid;
    }
    public void setUid(int uid) {
        this.uid = uid;
    }
    public String getUname() {
        return uname;
    }
    public void setUname(String uname) {
        this.uname = uname;
    }
    public int getUage() {
        return uage;
    }
    public void setUage(int uage) {
        this.uage = uage;
    }
}
```

### 创建配置文件
MyBatis的配置文件。
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <properties resource="db.properties"> </properties> <!--资源文件存储了mysql相关信息 -->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"> </transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${mysql.driver}"/>
                <property name="url" value="${mysql.url}"/>
                <property name="username" value="${mysql.username}"/>
                <property name="password" value="${mysql.password}"/>
            </dataSource>
        </environment>
    </environments>
    <mappers>
        <mapper resource="mapper/UserMapper.xml"/>
    </mappers>

</configuration>
```

### 创建映射文件
调用操控数据库方法来映射对应的sql语句，用于操控数据库。
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD mapper 3.0//EN"
        "http://mybatis.org/schema/mybatis-3-mapper.dtd">
<!--查询操作-->
<mapper namespace="com.taytay.pojo.User">
    <select id="findById" parameterType="int" resultType="com.taytay.pojo.User">
        select * from users where uid = #{uid}
    </select>
<!--    增加操作-->
    <insert id="addUser" parameterType="com.taytay.pojo.User">
        insert into users(uid,uname,uage)values(#{uid},#{uname},#{uage})
    </insert>
<!--    更改操作-->
    <update id="updateUser" parameterType="com.taytay.pojo.User">
        update users set uname = #{uname},uage = #{uage} where uid = #{uid}
    </update>
<!--    删除操作-->
    <delete id="deleteUser" parameterType="Integer">
        delete from users where uid = #{uid}
    </delete>
    <sql id="userColumns">${alias}.uid,${alias}.uname,${alias}.uage</sql>
</mapper>
```

### 测试类
读取MyBati核心文件，加载映射文件，构造会话工厂，创建会话对象、执行器然后调用方法，操控数据库。
```java
public class Test{
    public static void main(String[] args) {
        String resources = "mybatis-config.xml";
        Reader reader = null;
        try{
            reader = Resources.getResourceAsReader("resources");
        }catch(
                IOException e){
            e.printStackTrace();
        }
        SqlSessionFactory sqlMapper = new SqlSessionFactoryBuilder().build(reader);
        SqlSession session = sqlMapper.openSession();
        User user = session.selectOne("findById",1);
        System.out.println(user.getUname());
        session.close();        
    }

}
```

