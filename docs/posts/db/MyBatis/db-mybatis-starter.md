---
title: MyBatis 快速开始
---

## MyBatis简单入门程序

不知道MyBatis是什么，或者不懂的，可以先从一个简单的入门程序来了解MyBatis。

### 创建实体类

```java
package com.taytay.pojo;
public class Student {
    private int id;
    private String name;
    private  int age;
    private int sex;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public int getSex() {
        return sex;
    }
    public void setSex(int sex) {
        this.sex = sex;
    }
}
```

### 创建配置文件

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

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD mapper 3.0//EN"
        "http://mybatis.org/schema/mybatis-3-mapper.dtd">
<!--查询操作-->
<mapper namespace="com.taytay.pojo.User">
    <select id="findById" parameterType="int" resultType="com.taytay.pojo.User">
        select * from users where uid = #{id}
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

```java
public class Test{
    public static void main(String[] args) {
        String resource = "mybatis-config.xml";
        Reader reader = null;
        try{
            reader = Resources.getResourceAsReader("resource");
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

