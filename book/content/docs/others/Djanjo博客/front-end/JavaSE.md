### 数据类型
#### 基本数据类型和引用数据类型
- 基本数据类型
	- 字节型
		- byte 1个字节
	- 短整型
		- short 2个字节
	- 整型
		- int 4个字节
	- 长整型
		- long 8个字节
	- 字符型
		- char 2个字节
	- 单精度浮点型
		- float 4个字节
	- 双精度浮点型
		- double 8个字节
	- 布尔型
		- boolean 1个字节
- 引用数据类型
	- 类
		- class
	- 接口
		- interface
	- 数组
		- [ ]


### 集合



#### Deque
什么是Deque?  
(double ended queue) 双端队列

### 类的构造
每个类都有自己的构造方法,有参和无参.
如果没有特别写出,默认配备无参构造方法,如果有写有参构造方法,则不会自动配备无参构造方法.



### 继承
子类继承父类所有可继承的属性和方法.需要使用`extends`关键字
```Java
class Father{
	public String userName;
	public void sayMyName(){
		System.out.println(userName);
	}
}

class Child extends Father{
	public void call(){
		System.out.println("Hello sir!");
	}
}

public class Test{
	public static void main(String[] args){
		Child child = new Child();
		child.userName = "Heisenberg";
		child.call();
		child.sayMyName();
	}
}
```
一个子类只能继承一个父类,但是一个父类可以有多个子类.(单继承)
一个子类可以继承一个父类,该父类也可以继承另一个父类.(多层继承)


子类可以继承父类的方法,但也可以重载父类的方法,重载的方法需要拥有和父类方法一样的方法名,参数列表和返回值类型.
```java
  
public class test {  
    public static void main(String[] args) {  
        Child child = new Child();  
        child.shout();  
    }  
  
}  
  
class Father{  
    public String name;  
    private void shout(){  
        System.out.println("This is your father");  
    }  
}  
  
class Child extends Father{  
    String name;  
    public void shout(){  
        System.out.println("Sorry,my lord,the time has passed");  
        super.shout();  
    }  
}
```
重写的方法访问范围只能比父类更宽泛.

#### super关键字
使用`super`可以在子类中调用父类的方法
```Java
super.变量;
super.方法(参数列表);
```
可以在方法重载后继续调用父类原来的方法.

同样可以调用父类的构造方法
```Java
super(参数列表);
```


#### `final`关键词
使用`final`修饰类,变量和方法.
- 修饰的类不能被继承
- 修饰的变量一次赋值后无法改变
- 修饰的方法不能被子类重写


#### 抽象类和接口
抽象类

接口
如果一个抽象类的方法都是抽象方法,那么这个抽象类可以定义为接口`interface`,
```Java
public interface 接口名 [extends 接口1,接口2,.....]{
	[public] [static] [final] 数据类型 常量名 = 常量值;
	[public] [abstract] 返回值 抽象方法名(参数列表);
}
```
接口可以多继承,为了克服子类不能继承多个父类的问题.


### 注解与反射
#### 什么是注解(Annotation)
从`JDK5.0`开始引进的技术.

作用:
- 非程序本身,可以对程序做出解释(这和注释类似).
- 可以被其他程序读取(如编译器等).

格式:
注解是以`@注释名`在程序中存在的,也可以加入一些参数值,例如`@SuppressWarnings(value="unchecked")`.

在哪使用:


#### 内置注解
`@Override`
定义于`java.lang.Override`
一般放在要重写的方法上,如果方法不是重写的,会报错.
用于声明表示将要重写一个超类中的方法,
```java
@Override
public String toString(){
	return super.toString();//所有类都继承于Object类
}
```

`@Deprecated`
定义于`java.lang.Deprecated`
用于声明该方法,属性,类不鼓励使用,因为可能比较危险,或者有更好的替代方法.在新版本`JDK`中已删去
```Java
@Deprecated
public void say(){
	System.out.println("Deprecated");
}
```

`@SuppressWarnings("all")`
定义于`java.lang.SuppressWarnings`
哪里都能放,类,方法,属性上边.
用于抑制编译时产生的警告信息,需要添加参数.
- `@SuppressWarnings("all")`
- `@SuppressWarnings("unchecked")`
- `@SuppressWarnings(value = "unchecked","deprecation")`
- 等等....


#### 元注解
自定义注解使用,负责注解其他注解,
`@Target`表示注解可以用在什么地方
`@Retention`表示注解还在什么地方有效
`@Document`表示是否将注解生成在`JAVAdoc`中
`@Inherited`表示子类可以继承父类的注解



#### 自定义注解
使用`@interface`自定义注解时,自动继承`java.lang.annotation.Annotation`接口


```Java
public class Annotations{  
    @MyAnnotation1(age = 18)//没有设定默认值时,需要在这里声明.
    public void test(){}  
    @MyAnnotation2(value = "0")  
    public void sau(){}  
}  
@Target({ElementType.TYPE,ElementType.METHOD})  
@Retention(RetentionPolicy.RUNTIME)  
@interface MyAnnotation1{  
    //注解的参数: 参数类型 + 参数名();如果赋默认值就加上default 默认值.  
    String name() default "";  
    int age();  
    int id() default -1;  
} 
@Target({ElementType.TYPE,ElementType.METHOD})  
@Retention(RetentionPolicy.RUNTIME)  
@interface MyAnnotation2{  
    String value();  //只有一个参数时可以直接使用value();
}
```

#### 什么是反射(Reflection)
反射可以编写能够动态操控Java代码的程序.
能够分析类能力的程序称为反射.

- 在运行时分析类的能力,
- 在运行时查看对象,
- 实现通用的数组操作代码,
- 利用`Method`对象,

反射主要用于工具构造;

#### `Class`类
程序运行时,Java运行时始终为所有的对象维护一个被称为运行时的类型标识.这个信息跟随者每个对象所属的类.虚拟机利用运行时类型信息选择相应的方法执行.

可以通过专门的`Java`类访问这些信息,这些信息被称为`Class`.`Object`类中的`getClass()`方法会返回一个`Class`类型实例.
```java
Employee e;
Class cl = e.getClass();
```
常用的Class方法为getName,此方法将返回类的名字.
```Java
System.out.println(e.getClass().getName() + " " + e.getName());
```




优点:

缺点:





