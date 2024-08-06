## 引用和指针
引用为变量的别名，没有空引用，即创建后必须为其赋值。
可以通过修改引用来修改原变量。  
```cpp
int num = 10;
int& i = num;
i++;//num = 11;
const int& j = i;//const int& j = num;同样效果
x j++;//const定义意味着不能修改。
```
引用可以作为传参。  
传入引用，函数中对引用的值进行修改，进而实现对数据的修改。如果没有使用引用，那么函数处理过程中的变量在函数执行后就销毁，对变量无影响。 
指针为指向变量的地址，有空指针。


## 分配空间方式
## 面相对象

```cpp
class Logon
{
	public:
		
	private:
}
```
public 
private


# STL
是容器、算法、迭代器中最重要也是最**核心**的一部分。
## STL容器
## 2.1 顺序性容器

### 序列式容器[](https://oi-wiki.org/lang/csl/container/#%E5%BA%8F%E5%88%97%E5%BC%8F%E5%AE%B9%E5%99%A8 "Permanent link")

- **向量**(`vector`) 后端可高效增加元素的顺序表。
- **数组**(`array`)**C++11**，定长的顺序表，C 风格数组的简单包装。
- **双端队列**(`deque`) 双端都可高效增加元素的顺序表。
- **列表**(`list`) 可以沿双向遍历的链表。
- **单向列表**(`forward_list`) 只能沿一个方向遍历的链表。

### 关联式容器[](https://oi-wiki.org/lang/csl/container/#%E5%85%B3%E8%81%94%E5%BC%8F%E5%AE%B9%E5%99%A8 "Permanent link")

- **集合**(`set`) 用以有序地存储 **互异** 元素的容器。其实现是由节点组成的红黑树，每个节点都包含着一个元素，节点之间以某种比较元素大小的谓词进行排列。
- **多重集合**(`multiset`) 用以有序地存储元素的容器。允许存在相等的元素。
- **映射**(`map`) 由 {键，值} 对组成的集合，以某种比较键大小关系的谓词进行排列。
- **多重映射**(`multimap`) 由 {键，值} 对组成的多重集合，亦即允许键有相等情况的映射。
### 无序（关联式）容器[](https://oi-wiki.org/lang/csl/container/#%E6%97%A0%E5%BA%8F%E5%85%B3%E8%81%94%E5%BC%8F%E5%AE%B9%E5%99%A8 "Permanent link")

- **无序（多重）集合**(`unordered_set`/`unordered_multiset`)**C++11**，与 `set`/`multiset` 的区别在于元素无序，只关心「元素是否存在」，使用哈希实现。
- **无序（多重）映射**(`unordered_map`/`unordered_multimap`)**C++11**，与 `map`/`multimap` 的区别在于键 (key) 无序，只关心 "键与值的对应关系"，使用哈希实现。

### 容器适配器[](https://oi-wiki.org/lang/csl/container/#%E5%AE%B9%E5%99%A8%E9%80%82%E9%85%8D%E5%99%A8 "Permanent link")

容器适配器其实并不是容器。它们不具有容器的某些特点（如：有迭代器、有 `clear()` 函数……）。

> 「适配器是使一种事物的行为类似于另外一种事物行为的一种机制」，适配器对容器进行包装，使其表现出另外一种行为。

- **栈**(`stack`) 后进先出 (LIFO) 的容器，默认是对双端队列（`deque`）的包装。
- **队列**(`queue`) 先进先出 (FIFO) 的容器，默认是对双端队列（`deque`）的包装。
- **优先队列**(`priority_queue`) 元素的次序是由作用于所存储的值对上的某种谓词决定的的一种队列，默认是对向量（`vector`）的包装。




### 2.1.1 什么是顺序性容器？

> 顺序性容器就是将一组具有相同类型的元素以严格的线性形式组织起来

### 2.1.2 有哪些顺序性容器？

> 这里给大家整理成了一个表格的形式，如下表所示

|容器|简介说明|
|---|---|
|vector|可变大小数组。相当于数组，可动态构建，支持随机访问，无头插和尾插，仅支持inset插入，除尾部外的元素删除比较麻烦。但使用最为广泛|
|deque|双端队列。支持头插、删，尾插、删，随机访问较vector容器来说慢,但对于首尾的数据操作比较方便|
|list|双向循环链表。使用起来很高效，对于任意位置的插入和删除都很快，在操作过后，以后指针、迭代器、引用都不会失效|
|forward_list|单向链表。只支持单向访问，在链表的任何位置进行插入/删除操作都非常快|
|array|固定数组。vector的底层即为array数组，它保存了一个以严格顺序排列的特定数量的元素|

## 2.2 关联式容器

### 2.2.1 什么是关联式容器？

关联式容器每一个元素都有一个键值（key），对于二元关联容器，还拥有实值（value）容器中的元素顺序不能由程序员来决定，有set（集合）和map（映射）这两大类，它们均是以RB-Tree（red-black tree，红黑树）为底层架构。
### 2.2.2 有哪些关联式容器？
同样，以表格的形式呈现，如下表所示

| 容器           | 简介说明                                                                                               |
| ------------ | -------------------------------------------------------------------------------------------------- |
| set/mutliset | 集合/多重集合。对于set，在使用insert插入元素时，已插入过的元素不可重复插入，这正好符合了集合的互异性，在插入完成显示后，会默认按照升序进行排序，对于multiset，可插入多个重复的元素 |
| map/mutlimap | 映射/多重映射。二者均为二元关联容器（在构造时需要写两个参数类型，前者对key值，后者对应value值），因为有两个参数，因此在插入元素的时候需要配合对组pair进行插入，具体见深入详解      |

### 2.2.3 关联式容器在什么场合使用？

如果只负责查找内容，具体到某个单位，使用场景比如对手机游戏的个人的计分的存储，可以使用set或mutliset

如果需要同时放入容器的数据不止一个，并且是不同类型，比如一个为整型int,一个为string字符串型，就可以考虑使用map或mutlimap

## 2.3 容器适配器

### 2.3.1 什么是容器适配器？

容器适配器是一个封装了序列容器的一个类模板=，它在一般的序列容器的基础上提供了一些不同的功能。之所以称为容器适配器，是因为它是适配容器来提供其它不一样的功能。通过对应的容器和成员函数来实现我们需要的功能

### 2.3.2 有哪些容器适配器？

不必多说，看表

|容器|简介说明|
|---|---|
|stack|堆栈。其原理是先进后出（FILO），其底层容器可以是任何标准的容器适配器，默认为deque双端队列|
|queue|队列。其原理是先进先出（FIFO），只有队头和队尾可以被访问，故不可有遍历行为，默认也为deque双端队列|
|pirority_queue|优先队列。它的第一个元素总是它所包含的元素中优先级最高的，就像数据结构里的堆，会默认形成大堆，还可以使用仿函数来控制生成大根堆还是生成小根堆，若没定义，默认使用vector容器|

### 2.3.3 容器适配器在什么场合使用？

- 对于 stack 堆栈，在我们日常生活中类似于坐地铁、电梯；
- 对于 deque 队列，在我们日常生活中类似于排队打饭；
- 对于 pirority_queue，因为其本质是堆，可以考虑解决一些贪心问题；
## 三、具体容器的深入剖析与详解

### 3.1.顺序性容器

**3.1.1 vector（向量）**

1）基本概念和介绍

对于vector容器，它的数据结构与数组非常类似，但是他们之间的不同之处是数组是静态空间，一旦配置了就不能更改，vector却可以进行动态分配，随着元素的插入和删除，内部的空间也会灵活变动，就和C语言中的malloc和C++中的new是一个道理，不用害怕空间不足而一开始就定义一个很大的数组，节省了内存空间

** 2）头文件**

```text
#include <vector>
```

3）内部结构

![](https://pic2.zhimg.com/80/v2-b5573d13519584d0a9068b13a4d03f4d_1440w.webp)

4）常用API操作

先说一下什么是API，API就是应用程序编程接口（Application Programming Interface），说得更加通俗易懂一些，别人编译好的程序，提供给你使用，就叫做API。你使用了别人代码（或者程序）中的某个函数、类、对象，就叫做使用了某个API。

有些函数，要传入的不仅是普通的参数，你还要传入对应的: 迭代器，所谓迭代器，就是一种泛化的指针，因为指针本身就是一种迭代器,像下面讲解的insert()函数中要传入的v.begin()就是一种迭代器，以及在PrintVector打印输出中，也需要使用到迭代器，此处不做过多详解；

```text
void PrintVector(vector<int>& v)
{
	for (auto x : v)
	{
		cout << x << " ";
	}
	cout << endl;
}
```

接下来回归正题 :

**①** 构造函数  
常见的构造方式有四种，一般我们会前两种就可以

```text
	vector<int> v1;	//1.默认构造，无参构造

	for (int i = 0; i < 10; ++i)
	{
		v1.push_back(i);
	}
	PrintVector(v1);

	//2.利用区间方式构造
	vector<int> v2(v1.begin(), v1.end());
	PrintVector(v2);

	//3.n个element方式构造
	vector<int> v3(10, 100);	//10个100
	PrintVector(v3);

	//4.拷贝构造
	vector<int> v4(v3);	
	PrintVector(v4);
```

**②**赋值操作

赋值的话可以使用assign()函数，也可以使用其他方式

```text
	//直接赋值
	vector<int> v2;
	v2 = v1;

	//assign赋值
	vector<int> v3;
	v3.assign(v1.begin(), v1.end());

	//n个element赋值
	vector<int> v4;
	v4.assign(10, 100);
```

**③**插入和删除

插入主要是使用push_back()，也可使用insert()；删除操作主要是pop_back()，也可使用erase()

```cpp
	vector<int> v;
	//尾插
	v.push_back(10);
	v.push_back(20);
	v.push_back(30);
	v.push_back(40);
	v.push_back(50);

	PrintVector(v);

	//尾删
	v.pop_back();
	PrintVector(v);

	//插入 - 提供迭代器
	v.insert(v.begin(), 100);
	PrintVector(v);

	//重载
	v.insert(v.begin(), 2, 100);
	PrintVector(v);

	//删除 - 提供迭代器
	v.erase(v.begin());
	PrintVector(v);

	//重载
	v.erase(v.begin(), v.end());		//相当于清空操作
	PrintVector(v);

	v.clear();		//清空容器中所有元素
	PrintVector(v);
```

**④**容量和大小

对于容量用的是capacity()，对于大小是size()，当然你也可以用resize()来改变其大小，不够在此之前都需用empty()这个函数来判断一下容器是否为空；

```text
	vector<int> v;

	for (int i = 0; i < 10; ++i)
	{
		v.push_back(i);
	}
	PrintVector(v);

	if (v.empty())
	{
		cout << "vector容器为空" << endl;
	}
	else
	{
		cout << "vector容器不为空" << endl;
		cout << "vector容器的容量为：" << v.capacity() << endl;
		cout << "vector容器的大小为：" << v.size()<< endl;
	}

	//重新指定大小 - 变大
//	v.resize(15);
	v.resize(15,10);		//重载
	PrintVector(v);

	//重新指定大小 - 变小
	v.resize(5);
	PrintVector(v);		//超过部分将会删除
```

除此之外还有很多函数，例如at()返回元素，front()返回首元素，back()返回尾元素，clear()清空容器等等，这里列举比较常用的，想深入了解的小伙伴可以参考这个网站[cplusplus](https://link.zhihu.com/?target=https%3A//cplusplus.com/)

**3.1.2 deque（双端队列）**

1）基本概念和介绍

deque容器为双端队列，可以对其两段的数据进行操作，因为它没有capacity属性，因此不会像vector那样”旧空间不足而重新配置一块更大空间，然后复制元素，再释放旧空间”，因此，deque没有必须要提供所谓的空间保留(reserve)功能。

2）头文件

```text
	#include <deque>
```

3）内部结构

![](https://pic2.zhimg.com/80/v2-4b0bef4aeb1a0483c28c7584e8f98395_1440w.webp)

**4）常用API操作**

**①**构造函数

deque的构造函数与vector类似，也是四种常见的方式

```text
	deque<int> d1;

	for (int i = 0; i < 10; ++i)
	{
		d1.push_back(i);
	}
	deque<int> d2(d1);
	
	deque<int> d3(10, 100);
	
	deque<int> d4;
	d4 = d3;
```

**②**赋值操作

```text
deque<int> d1;

	for (int i = 0; i < 10; ++i)
	{
		d1.push_back(i);
	}

	deque<int> d2;
	d2 = d1;

	deque<int> d3;
	d3.assign(d1.begin(), d1.end());//将[beg, end)区间中的数据拷贝赋值给本身

	deque<int> d4;
	d4.assign(10, 100);
```

**③**大小和容量

上文提到，deque容器无capacity()函数

```text
	if (d1.empty())
	{
		cout << "deque容器为空" << endl;
	}
	else
	{
		cout << "deque容器不为空" << endl;
		cout << "deque容器的大小为：" << d1.size() << endl;
		//deque容器无capacity - 容量
	}

	//改变大小
	//d1.resize(15);
	d1.resize(15,1);
	print(d1);

	d1.resize(5);
	print(d1);
```

**③**插入和删除

对于双端队列来说，插入和删除时一个亮眼的地方，因为首尾均可操作，有头插push_front()，头删pop_front()，尾插push_back()，尾删pop_back()，以及inset()插入和erase()删除

```text
//首尾操作
	deque<int> d;

	d.push_back(10);
	d.push_back(20);		//尾插

	d.push_front(100);
	d.push_front(200);		//头插

	print(d);	//200 100 10 20

	d.pop_back();	//尾删
	d.pop_front();	//头删
	print(d);	//100 10
```

运行结果：

![](https://pic4.zhimg.com/80/v2-f1870dfe3db2b11ed34626059389e57b_1440w.webp)

```text
//插入操作
deque<int> d;

	d.push_back(10);
	d.push_back(20);		//尾插

	d.push_front(100);
	d.push_front(200);		//头插

	print(d);	//200 100 10 20

	d.insert(d.begin(), 100);
	//100 200 100 10 20
	print(d);

	d.insert(d.begin(), 2, 900);
	//900 900 100 200 100 10 20
	print(d);
```

运行结果：

![](https://pic2.zhimg.com/80/v2-45508959717ad4ca6b02de84916efbdd_1440w.webp)

```text
//删除操作
	deque<int> d;

	d.push_back(10);
	d.push_back(20);		//尾插

	d.push_front(100);
	d.push_front(200);		//头插

	print(d);	//200 100 10 20

	deque<int>::iterator it = d.begin();
	it++;		//迭代器往后偏移一个位置
	d.erase(it);
	print(d);		//200 10 20

	d.erase(d.begin(), d.end());
	print(d);

	d.clear();
	print(d);
```

运行结果：

![](https://pic1.zhimg.com/80/v2-3af8c3cf01cc074806137cff0a676da0_1440w.webp)

**④** 数据存取

> 这里主要是区别[]方式和at()函数的访问情况

```text
	deque<int> d;

	d.push_back(10);
	d.push_back(20);
	d.push_back(30);
	d.push_front(100);
	d.push_front(200);
	d.push_front(300);


	//通过[]方式访问
	for (int i = 0; i < d.size(); ++i)
	{
		cout << d[i] << " ";
	}
	cout << endl;

	//通过at访问
	for (int i = 0; i < d.size(); ++i)
	{
		cout << d.at(i)<< " ";
	}
	cout << endl;
	cout << "第一个元素为：" << d.front() << endl;
	cout << "最后一个元素为：" << d.back() << endl;
```

**3.1.3 list（列表[双向[循环链表](https://link.zhihu.com/?target=https%3A//so.csdn.net/so/search%3Fq%3D%25E5%25BE%25AA%25E7%258E%25AF%25E9%2593%25BE%25E8%25A1%25A8%26spm%3D1001.2101.3001.7020)]）**

1）头文件

```text
#include <list>
```

2）内部结构

![](https://pic2.zhimg.com/80/v2-5221ebbe7de761d9c3d012c9cd190f79_1440w.webp)

3）常用API操作

这里的一些常规操作与前文类似，因此不做过多展示，只普通地做一些用法讲解

① 构造函数

```text
list(beg,end);//构造函数将[beg, end)区间中的元素拷贝给本身。
list(n,elem);//构造函数将n个elem拷贝给本身。
```

② 赋值操作

```text
assign(beg, end);//将[beg, end)区间中的数据拷贝赋值给本身。
assign(n, elem);//将n个elem拷贝赋值给本身。
swap(lst);//使用之后实现将lst与本身的元素互换。
```

③ 插入和删除操作

```text
push_back(elem);//在容器尾部加入一个元素
pop_back();//删除容器中最后一个元素
push_front(elem);//在容器开头插入一个元素
pop_front();//从容器开头移除第一个元素
insert(pos,elem);//在pos位置插elem元素的拷贝，返回新数据的位置。
insert(pos,n,elem);//在pos位置插入n个elem数据，无返回值。
insert(pos,beg,end);//在pos位置插入[beg,end)区间的数据，无返回值。
clear();//移除容器的所有数据
erase(beg,end);//删除[beg,end)区间的数据，返回下一个数据的位置。
erase(pos);//删除pos位置的数据，返回下一个数据的位置。
remove(elem);//删除容器中所有与elem值匹配的元素。
```

**3.1.4 forword_list（单向链表）**

1）基本概念和介绍

对于forword_list单向链表，虽然它具有和 list 容器相同的特性，擅长在序列的任何位置进行插入元素或删除元素的操作，但对于访问存储的元素，没有其它容器（如 array、vector）的效率高，以及由于单链表没有双向链表那样灵活，因此相比 list 容器，单链表只能从前向后遍历，而不支持反向遍历

2）头文件

```text
#include <forward_list>
```

3）常用API操作

```text
begin()		//返回一个前向迭代器，其指向容器中第一个元素的位置。	
end()		//返回一个前向迭代器，其指向容器中最后一个元素之后的位置。
assign()	//用新元素替换容器中原有内容。
push_front()	//在容器头部插入一个元素。
pop_front()		//删除容器头部的一个元素。
swap()			//交换两个容器中的元素，必须保证这两个容器中存储的元素类型是相同的。
remove(val)		//删除容器中所有等于 val 的元素
sort()			//通过更改容器中元素的位置，将它们进行排序。
```

这样对比两个链表容器，可以看出，如果是功能单一，不需要很复杂操作的，应该优先使用单链表，因为单链表耗用的内存空间更少，空间效率更高；但如果是需要向前或向后查找，则应该优先使用高效一些的双向循环链表

**3.1.5 array（数组）**

1）基本概念和介绍

array是C++11中新增的容器，它与其他容器不同的是，它的大小是固定的，无法动态扩展或收缩，只允许访问或者替换存储的元素。

2）头文件

```text
	#include <array>
```

3）案例讲解

下面讲解一个简单的案例

从这里可以看出，array的形参列表是需要两个参数，第一个是所要创建的元素的数据类型，第二个就是数组的元素个数，这和直接创建一个a数组其实很类似，比方a[5]={1,2,3,4,5}，也是同样的原理，这里的auto i是一个变量，循环时每次获得一次容器a中的变量，相当于省去int i直接循环全部内容,也就相当于for (array<int, 5>::iterator it = a.begin(); it != a.end(); ++it)

```text
#include <array>
#include <iostream>
using namespace std;

int main()
{
	array<int,5> a = {1,2,3,4,5};
	for(auto i:a)
	{
		std::cout << "value is " << i << std::endl;
	}
	return 0;
}
```

这里是array的其他API操作和迭代器，感兴趣的小伙伴可以了解一下

![](https://pic2.zhimg.com/80/v2-b863fc7b6e72f3555272718d351a69d9_1440w.webp)

### 3.2 关联式容器

**3.2.1 set/multiset（集合/多重集合）**

1）基本概念和介绍

有关set容器，它在用insert()函数插入之后会自行被排序，默认是升序，但不可重复插入，即不能有重复的key(键值)，对于multiset，就可以实施多个键值的插入操作，这两个容器和map不一样，它们是简单关联容器，其参数类型只有一个，所以它的元素既是键值(value)又是实值(value)。

2）头文件

```text
	#include <set>
```

注：set/multiset一样，都是使用此头文件

3）常用API操作

对于构造和赋值、大小和交换、插入和删除操作，均与上述容器类似，不做展开

① 查找和统计操作

我们可以看到，在set容器中，你可以通过相关的迭代器去访问容器中相应的元素，利用find()函数，也可以用count()函数去统计相关元素在容器中出现了几次；

这是它们的相关语法:

find：

![](https://pic1.zhimg.com/80/v2-e04ba89a48e0c3d4b678e1dc5283b9c4_1440w.webp)

count

![](https://pic1.zhimg.com/80/v2-fcb3a330cd5bf912dd4bfc8c613a6268_1440w.webp)

```text
	set<int> s1;

	s1.insert(10);
	s1.insert(60);
	s1.insert(30);
	s1.insert(20);
	s1.insert(90);
	s1.insert(70);

	print(s1);

	//查找
	set<int>::iterator pos = s1.find(300);
	if (pos != s1.end())
	{
		cout << "找到了，为：" << *pos << endl;
	}
	else
	{
		cout << "没找到" << endl;
	}


	//统计
	set<int> s2;

	s2.insert(10);
	s2.insert(60);
	s2.insert(30);
	s2.insert(60);
	s2.insert(90);
	s2.insert(10);

	print(s2);

	int num1 = s1.count(30);
	cout << "num1=" << num1 << endl;

	int num2 = s2.count(10);		
	//即使插入了两个元素10，因为集合元素的互异性，count统计之后依旧只有一个
	cout << "num2=" << num2 << endl;
```

运行结果：

![](https://pic4.zhimg.com/80/v2-59c0537c65db2c4262d55aec15066c87_1440w.webp)

接下来讲讲pair对组的概念

1.定义

一般我们这里使用第一个就可以了

```text
   pair<int, double> p1;  //使用默认构造函数
   pair<int, double> p2(1, 2.4);  //用给定值初始化
   pair<int, double> p3(p2);  //拷贝构造函数
```

2.访问

访问两个元素（通过first和second）：

```text
 pair<int, double> p1;  //使用默认构造函数
 p1.first = 1;
 p1.second = 2.5;
 cout << p1.first << ' ' << p1.second << endl;
```

3.赋值

1）利用make_pair

```text
 pair<int, double> p1;
 p1 = make_pair(1, 1.2);
```

2）变量间赋值：

```text
pair<int, double> p1(1, 1.2);
 pair<int, double> p2 = p1;
```

4.应用

像这里就可以利用first和second来访问对组中的两个元素

```text
pair<string, int> p("Tom", 20);
cout << "姓名：" << p.first << "\t年龄：" << p.second << endl;

pair<string, int> p2 = make_pair("Jerry", 25);
cout << "姓名：" << p2.first << "\t年龄：" << p2.second << endl;
```

不仅如此，对组还可以放入queue（队列）然后配合BFS（广度优先搜索）来解题，感兴趣的小伙伴可以去了解一下；

例：

这里是拿pair充当结构体保存坐标（x,y）的值

```text
queue<pair<int,int> >q;
q.push(make_pair(x,y));
```

然后这里再说一下仿函数的用法和实例

仿函数，又叫做函数对象或者智能函数，他相当于一个类一样，你需要重载operator()运算符，因为调用仿函数，实际上就是通过类对象调用重载后的 operator() 运算符.

仿函数一般有两种使用方法：

（1）一个办法就是先将该“操作”设计为一个函数，再将函数指针当做算法的一个参数。上面的实例就是该做法；

（2）将该“操作”设计为一个仿函数（就语言层面而言是个 class），再以该仿函数产生一个对象，并以此对象作为算法的一个参数。

可以看出第二种方法会更高效可靠一些，第一种方法的扩展性较差，这里给出一个简洁的例子：

```text
#include <iostream>
#include <set>
#include "print.h"
using namespace std;

class MyCompare{

public:
	//仿函数
	bool operator()(int v1, int v2) const
	{
		return v1 > v2;		//降序排列
	}
};
int main()
{
	set<int> s1;

	s1.insert(10);
	s1.insert(60);
	s1.insert(30);
	s1.insert(20);
	s1.insert(90);
	s1.insert(70);

	print(s1);		//默认升序

	//降序显示

	set<int, MyCompare> s2;
	s2.insert(10);
	s2.insert(20);
	s2.insert(90);
	s2.insert(70);
	for (set<int, MyCompare>::iterator it = s2.begin(); it != s2.end(); ++it)
	{
		cout << *it << " ";
	}
	cout << endl;
}
```

运行结果：

![](https://pic4.zhimg.com/80/v2-c65b0c05a0e40e5a41e3c362da7df12f_1440w.webp)

从运行结果我们可以看出，对于s1容器的打印，虽然插入的数字的乱序的，但是在显示的时候就会自动进行升序排列。这里我写了一个仿函数，它实际上就相当于一个类，v1 > v2就相当于前一个数比后一个数字大，也就是降序排列

上述例子是一个内置数据类型，其实仿函数也可以写成自定义数据类型，比如定义一个Person类，有年龄和身高两个属性，通过仿函数传入对应的类对象，也可以进行升序或降序的排列,大概类似于这样，这里的const一定要加，否则会报错的，因为设置成常成员函数，数据成员就不会被修改：

```text
class MyCompare {

public:
	bool operator()(const Person &p1,const Person &p2) const
	{
		return p1.m_age > p2.m_age;
	}
};
```

对于仿函数，其实它和回调函数挺像的，回调函数是通过函数指针来进行传参，然后实现的一系列操作，有兴趣的小伙伴可以深入了解一下：[回调函数与仿函数](https://link.zhihu.com/?target=https%3A//so.csdn.net/so/search%3Fspm%3D1000.2115.3001.4498%26q%3D%25E5%259B%259E%25E8%25B0%2583%25E5%2587%25BD%25E6%2595%25B0%25E4%25B8%258E%25E4%25BB%25BF%25E5%2587%25BD%25E6%2595%25B0%26t%3D%26u%3D)

**3.2.2 map/multimap（映射/多重映射）**

1）基本概念和介绍

map的所有元素是pair对组，同时拥有键值（key）和实值（value），所有元素都会根据键值来自动排序，当对它的容器元素进行新增操作或者删除操作时，操作之前的所有迭代器，在操作完成之后依然有效，map的使用率还是挺高的，仅此于vector和list

2）头文件

```text
	#include <map>
```

注：同理，map/multimap一样，都是使用此头文件

3）常用API操作

**① **构造和赋值

可以看出，对于map容器，使用其insert()进行插入就需要使用pair对组来实现，不然是插入不进去了，要分别传入它的键值和实值，这里我不是按照键值的顺序插入，但是看运行结果，最后显示出来的还是会按照顺序排列

```text
	map<int, int> m;		//键值对

	//第一个：key（键值）	第二个：value（实值）
	m.insert(pair<int, int>(1, 10));		
	m.insert(pair<int, int>(3, 30));
	m.insert(pair<int, int>(2, 20));		//依旧会按照顺序排列
	m.insert(pair<int, int>(4, 40));
	m.insert(pair<int, int>(5, 30));

	print(m);

	//拷贝构造
	map<int, int> m2(m);
	print(m2);

	//赋值
	map<int, int> m3;
	m3 = m2;
	print(m3);
```

运行结果：

![](https://pic4.zhimg.com/80/v2-00eff18122cb384c737a7ab043f49557_1440w.webp)

**②**大小和交换

从运行结果可以看出，即使我插入了相同键值对应的实值，但是由于键值的重复，因此80这个数字是放不进容器的

```text
//大小
	map<int, int> m;

	//第一个：key（键值）	第二个：value（实值）
	m.insert(pair<int, int>(1, 10));
	m.insert(pair<int, int>(3, 30));
	m.insert(pair<int, int>(2, 20));		//依旧会按照顺序排列
	m.insert(pair<int, int>(4, 40));
	m.insert(pair<int, int>(4, 80));		//无效

	print(m);

	if (m.empty())
	{
		cout << "map容器为空" << endl;
	}
	else
	{
		cout << "map容器不为空" << endl;
		cout << "map容器的大小为：" << m.size() << endl;
	}
```

运行结果：

![](https://pic3.zhimg.com/80/v2-ac897be98836b5b0721b01dee9f512aa_1440w.webp)

这里是使用到了swap()函数，对两个map容器中的值进行交换

```text
//交换
	map<int, int> m1;

	//第一个：key（键值）	第二个：value（实值）
	m1.insert(pair<int, int>(1, 10));
	m1.insert(pair<int, int>(2, 20));
	m1.insert(pair<int, int>(3, 30));

	map<int, int> m2;

	//第一个：key（键值）	第二个：value（实值）
	m2.insert(pair<int, int>(4, 100));
	m2.insert(pair<int, int>(5, 200));
	m2.insert(pair<int, int>(6, 300));

	cout << "交换前" << endl;
	print(m1);
	print(m2);

	m1.swap(m2);
	cout << "交换后" << endl;
	cout << "---------------------------" << endl;
	print(m1);
	print(m2);
```

运行结果：

![](https://pic1.zhimg.com/80/v2-a5a00d651c7306c0d0d0107eea5c1a14_1440w.webp)

③查找和统计

对于find()查找函数，在map中可以利用键值来查找相应的实值，比如这里find(3),显示的便是对应的实值30；而对于count统计也是同理，count(3)的意思是统计键值为3的数有多少个，但是对于map容器，一定是0或者1。因为对于重复的键值是插不进去的，可对于mutilmap，利用count()函数去统计的话就可能是>1的数量

```text
map<int, int> m;

	m.insert(make_pair(1, 10));
	m.insert(make_pair(2, 20));
	m.insert(make_pair(3, 30));
	m.insert(make_pair(3, 40));

	print(m);

	map<int, int>::iterator pos = m.find(3);
	if (pos!=m.end())
	{
		cout << "找到到元素了，key=" << pos->first << " value=" << pos->second << endl;
	}
	else
	{
		cout << "没有找到改元素" << endl;
	}

	int num = m.count(3);
	cout << "num=" << num << endl;
	//map不允许插入重复元素，对于count统计而言，要么为0，要么为1
	//mutilmap的count统计可能>1
```

运行结果：

![](https://pic1.zhimg.com/80/v2-393ff09addde73127a44c26c11b20a20_1440w.webp)

④插入和删除

对于插入insert()，有着四种方式可以选择，一般我们记住前两种就可以了，第三种需要用迭代器来访问，第四种的话不太建议，因为如果按照这样方式插入，编译器会按照你之前没有的那个数创建一个新的对组出来，就像运行结果一样，我没有插入键值key为5的实值，但是默认显示的是0，这里要注意，一般这种方法可以通过key来访问value，这是可以的，也比较方便。

对于删除erase()，也是可以通过它的key值来删除对应的value值，这在实际的开发中还是会起到一定的作用，不需要一个个去查找

```text
	map<int, int> m;		

	//插入

	//①
	m.insert(pair<int, int>(1, 10));

	//②
	m.insert(make_pair(2, 20));

	//③
	m.insert(map<int,int>::value_type(3,30));

	//④
	m[4] = 40;
	//[]不建议插入，可以用key来访问value
	cout << m[5] << endl;
	print(m);

	//删除
	m.erase(m.begin());
	print(m);

	m.erase(3);		//根据键值key来删除
	print(m);

	m.erase(m.begin(), m.end());
	print(m);

	m.clear();
	print(m);
```

运行结果：

![](https://pic4.zhimg.com/80/v2-c7529c454823b55e82620bd13dce931f_1440w.webp)

## 3.3 容器适配器

### 3.3.1 stack（堆栈）

**1）基本概念和介绍**

> stack为堆栈，上文提到过，其内部元素都是需要先进后出（FILO）的，也就是说只有栈顶的元素top才可以被访问到

**2）头文件**

```text
#include <stack>
```

**3）内部结构**

![](https://pic3.zhimg.com/80/v2-778f957d4f631fcccad0c52afe239ed6_1440w.webp)

3）常用API操作

对于堆栈，它的API操作还是比较少的，基本上就是push()[入栈]，pop()[出栈]，这里不叫插入和删除，对于堆栈有专门的叫法，然后就是empty()判别容器是否为空，如果不为空则返回size()[栈的大小]，和top()[栈顶元素]；当栈中的全部元素都出栈后，栈的大小为空即size=0;

```text
stack<int> s;

	s.push(10);
	s.push(20);
	s.push(30);
	s.push(40);		//入栈

	cout<<"栈的大小\t栈顶元素" << endl;
	while (!s.empty())
	{
		cout <<  s.size() <<"\t\t" << s.top() << endl;

		s.pop();	//出栈
	}

	cout << "出栈后的大小为：" << s.size() << endl;
}
```

运行结果：

![](https://pic3.zhimg.com/80/v2-5e9be24a75eb7b7c3feb9d4e971f70be_1440w.webp)

**3.3.2 queue（队列）**

1）基本概念和介绍

queue为队列，它和stack堆栈的正好相反，栈是先进后出，而队列则是先进先出(FIFO)。看到这里是不是想起了我们前面学过的一个顺序性容器deque（双端队列），下面来区分一下他们之间的不同之处：

1、queue可以访问两端但是只能修改队头，而deque可以访问两端并且可以在队首和队尾删除和插入元素

2、deque可以从两端入队，但是queue只能从队尾入队，

3、对于弹出队内元素，deque拥有pop_front(删除队头元素)以及pop_back(删除队尾元素)

2）头文件

```text
	#include <queue>
```

3）内部结构

![](https://pic2.zhimg.com/80/v2-179efac7476f0e2f09bd41789a074e9d_1440w.webp)

3）常用API操作

对于队列的API操作，也是和堆栈一样，并不是很多，这里我们举一个例子来说明一下几个常用函数

这里的

push()就是入队

pop()便是出队，

empty()判断容器是否为空，

size(）是返回其大小，

front()是返回队首元素

back()是返回队尾元素

```text
#include <iostream>
#include <queue>
#include <string>
using namespace std;

class Person {

public:
	Person(string name, int age)
	{
		this->m_name = name;
		this->m_age = age;
	}

	string m_name;
	int m_age;
};
void test()
{
	queue<Person> q;

	//构建数据
	Person p1("唐僧", 100);
	Person p2("孙悟空", 200);
	Person p3("猪八戒", 300);
	Person p4("沙僧", 400);

	//入队
	q.push(p1);
	q.push(p2);
	q.push(p3);
	q.push(p4);

	//访问队列元素
	cout << "队列大小\t队头元素\t\t队尾元素" << endl;
	while (!q.empty())
	{
		cout << q.size()<<"\t\t";
		cout << q.front().m_name<<"\t";
		cout<< q.front().m_age << "\t\t";
		cout << q.back().m_name << "\t";
		cout << q.back().m_age << endl;

		//出队
		q.pop();
	}
	cout << "均出队后的队列元素个数为：" << q.size();
}
int main(void) {
	test();
	return 0;
}
```

运行结果：

![](https://pic1.zhimg.com/80/v2-620f01c4591dac41abd586cc1fad1fa8_1440w.webp)

讲解：

本例中，首先是定义了一个Person类，里面存有姓名和年龄两个属性，接着是定义了四个对象进行入队，然后对队内的元素进行判断，如果不为空则一一出队。首先我们来看第一行，因为还未执行到q.pop()这一行，因此队内的元素是4，因为唐僧是第一个插入的，因此它为队首元素，而沙僧则是最后插入的，因而它为队尾元素。看到第二行，因为此时执行了出队操作，所以队首元素则是第二个插入的孙悟空，队尾依旧为沙僧，知道最后一行队列里只剩下沙僧一个元素，出队之后变为0;

**3.3.3 pirority_queue（优先队列）**

1）基本概念和介绍

所谓优先队列，就是我们可以自定义中数据的优先级, 让优先级高的排在队列前面,优先出队

2）头文件

```text
	#include <queue>
```

注：对于优先队列，它的头文件和队列是一样的

3）参数定义及简单介绍

```text
priority_queue<Type, Container, Functional>
```

Type 就是数据类型;

Container 就是容器类型;

Functional 就是比较的方式;

这里是两种优先队列的方式：

对于最后的functional,这也是一个模板头文件，这里的greater是大的，也就是呈上升，less是少的，也就是呈下降，自然对应的就是升序队列和降序队列

```text
//升序队列（小顶堆）- 优先输出最小的
priority_queue <int,vector<int>,greater<int> > q;
//降序队列（大顶堆）- 优先输出最大的[默认]
priority_queue <int,vector<int>,less<int> >q;
```

我们来看一下具体实例：

```text
#include <iostream>
#include <queue>
using namespace std;

int main(void)
{
	priority_queue<int> q;

	q.push(9);
	q.push(2);
	q.push(7);
	q.push(3);
	q.push(-8);
	q.push(1);

	while (!q.empty())
	{
		cout << q.top() << " ";
		q.pop();
	}
	cout<<endl;
	return 0;
}
```

运行结果：

![](https://pic2.zhimg.com/80/v2-47a7a2b3669507405b20f89e53ded071_1440w.webp)

可以看出，默认就是大顶堆，优先输出最大的元素

然后我们改一下它的内部参数

```text
	priority_queue<int,vector<int>,greater<int>> q;

	q.push(9);
	q.push(2);
	q.push(7);
	q.push(3);
	q.push(-8);
	q.push(1);
```

运行结果：

![](https://pic1.zhimg.com/80/v2-36bbfe190f416ed33b1681a1031885c8_1440w.webp)

从这里可以看出修改内部参数之后呈现出的就是一个小顶堆，也就是优先输出最小的元素

**小结**

可以看出优先队列，它的功能还是很强大的，在实现算法的时候，你可以替代快排[快速排序sort() ],因为快排虽然很快，但是稳定性不是很好，时间复杂度也是会到达O(nlogn),但这里的复杂度只有O(n),当然具体案例具体分析；

## 四、利用容器实现的具体案例

看到这里，相信您对STL 中的容器已经有了一个完整的概念，但光是了解并不够，我们还要将其放到具体的问题中，从中看看容器起到哪些关键性的作用

**4.1 评委打分**

1、案例描述

有五名选手ABCDE，10位评委分别对他们进行一一打分，在去除最高分与最低分后，计算出每一位选手的平均得分

2、案例分析与思路罗列

本题主要是运用了vector容器和deque容器

①首先可以创建一个Person类，将五名选手存放到一个vector容器中；

②接着就是评委的打分，因为我们要取出最高分和最低分，所以可以将评委的分数存放到deque容器中，利用pop_front()和pop_back()来去掉最高分和最低分；

③在取出最高最低分前需要对每位选手的十个分数进行排序

④累加和求平均分并输出

2、具体代码实现与讲解

下面来分开讲解三个重要的主体函数

①选手的创建

```text
class Person
{
public:
	Person(string name, int score)
	{
		this->m_name = name;
		this->m_score = score;
	}
	string m_name;
	int m_score;
};
```

  

```text
void CreaePlayer(vector<Person> &v)
{
	string nameSeed = "ABCDE";
	int score = 0;
	for (int i = 0; i < 5; ++i)
	{
		string name = "选手";
		name+=nameSeed[i];		//字符串拼接

		Person p(name, score);

		v.push_back(p);
	}
}
```

  

```text
	//创建五个选手
	vector<Person> player;		//存放选手容器
	CreaePlayer(player);
```

详细讲解：

首先的话是需要创建一个Person类，里面有姓名和得分两个数据成员。接着就是通过vector来创建存放选手的容器，这里对于选手的编号是采用了一个string类的字符串拼接的操作，它也是属于STL中的一种，大家可以去看看string类,接着通过Person的构造函数初始化后，就可以用push_bakc()放入容器中，然后我们来进行一个测试，这里可以看出五名选手此时已经全都被初始化好了

运行结果：

![](https://pic3.zhimg.com/80/v2-f20b81a602c8fc46bfd01131b91e90ba_1440w.webp)

**②**评委的打分

```text
void SetScore(vector<Person>& v)
{
	int avg = 0;
	srand((unsigned int)time(NULL));		//随机化种子
	for (vector<Person>::iterator it = v.begin(); it != v.end(); ++it)	//每位选手的外层遍历（5）
	{
		//将评委的打分放入deque容器
		deque<int> d;
		for (int i = 0; i < 10; ++i)
		{
			int score = rand() % 41 + 60;		//评委随机打分40~60
			d.push_back(score);
		}

		//观察评委打分情况
		cout<< it->m_name << "的十位评委打分为：" << endl;
		for (deque<int>::iterator dit = d.begin(); dit != d.end(); ++dit)	//每位评委的内层遍历（10）
		{
			cout << *dit << " ";
		}
		cout << endl;
		//排序
		sort(d.begin(), d.end());

		//去除最高分和最低分
		d.pop_back();
		d.pop_front();

		//取平均数
		int sum = 0;	//放入循环内部，累加完一个玩家的十位评委的总分置零重新记数
		for (deque<int>::iterator dit = d.begin(); dit != d.end(); ++dit)	//每位评委的内层遍历（10）
		{
			sum += *dit;	//累加每位玩家十位评委的打分
			
		}
		cout << "总分为：" << sum << " ";
		cout << endl<<endl;
		avg = sum / d.size();	//计算每一位玩家的平均分

		it->m_score = avg;
	}
}
```

详细讲解：

对于十位评委的打分，是将其放入deque容器中，这里为了方便，直接通过rand()随机数来生成，不过这个函数大家记得包含"ctime"的头文件，在C语言中直接写"time"即可，以及srand()这个函数是一个随机化种子，可以保证每次产生的随机数都不同，然后中途我是通过迭代器的访问来观察每位选手的十位评委打分情况；

接着就是通过sort()快速排序来实现十位评委的打分排序，以此来去除最高分和最低分，这里大家记得要包含算法头文件"algorithm",因为它是里面的一种算法，之后也会出关于STL算法的讲解，记得随时关注哦，然后就是计算每一位选手的总分以及平均分，大家看代码即可；

这里是运行结果：

![](https://pic2.zhimg.com/80/v2-9715036a5c0a2af43547afcc21b3424d_1440w.webp)

**③**平均分的显示

```text
void ShowScore(vector<Person>& v)
{
	for (vector<Person>::iterator it = v.begin(); it != v.end(); ++it)
	{
		cout << "姓名：" << it->m_name << "   得分成绩： " << it->m_score;
		cout << endl;
	}
	cout << endl;
}
```

**详细讲解**：

这里的平均分输出其实就是利用vector容器的迭代器去遍历每一个容器中的元素，因为[STL迭代器](https://link.zhihu.com/?target=https%3A//so.csdn.net/so/search%3Fq%3DSTL%25E8%25BF%25AD%25E4%25BB%25A3%25E5%2599%25A8%26t%3D%26u%3D%26urw%3D)本身是一个泛型指针，因为它所指向的便是选手的信息，大家对迭代器不太了解可以再去看看;  
运行结果：

![](https://pic1.zhimg.com/80/v2-e661eff8d089e89b62da9634e0e0ac34_1440w.webp)

**整体代码展示**

```text
#include <iostream>
#include <string>
#include <vector>
#include <deque>
#include <algorithm>
#include <ctime>
using namespace std;


class Person
{
public:
	Person(string name, int score)
	{
		this->m_name = name;
		this->m_score = score;
	}
	string m_name;
	int m_score;
};

void CreaePlayer(vector<Person> &v)
{
	string nameSeed = "ABCDE";
	int score = 0;
	for (int i = 0; i < 5; ++i)
	{
		string name = "选手";
		name+=nameSeed[i];		//字符串拼接

		Person p(name, score);

		v.push_back(p);
	}
}

void SetScore(vector<Person>& v)
{
	int avg = 0;
	srand((unsigned int)time(NULL));		//随机化种子
	for (vector<Person>::iterator it = v.begin(); it != v.end(); ++it)	//每位选手的外层遍历（5）
	{
		//将评委的打分放入deque容器
		deque<int> d;
		for (int i = 0; i < 10; ++i)
		{
			int score = rand() % 41 + 60;		//评委随机打分40~60
			d.push_back(score);
		}

		//观察评委打分情况
		cout<< it->m_name << "的十位评委打分为：" << endl;
		for (deque<int>::iterator dit = d.begin(); dit != d.end(); ++dit)	//每位评委的内层遍历（10）
		{
			cout << *dit << " ";
		}
		cout << endl;
		//排序
		sort(d.begin(), d.end());

		//去除最高分和最低分
		d.pop_back();
		d.pop_front();

		//取平均数
		int sum = 0;	//放入循环内部，累加完一个玩家的十位评委的总分置零重新记数
		for (deque<int>::iterator dit = d.begin(); dit != d.end(); ++dit)	//每位评委的内层遍历（10）
		{
			sum += *dit;	//累加每位玩家十位评委的打分
			
		}
		cout << "总分为：" << sum << " ";
		cout << endl << endl;
		avg = sum / d.size();	//计算每一位玩家的平均分

		it->m_score = avg;
	}
}

void ShowScore(vector<Person>& v)
{
	for (vector<Person>::iterator it = v.begin(); it != v.end(); ++it)
	{
		cout << "姓名：" << it->m_name << "   得分成绩： " << it->m_score;
		cout << endl;
	}
	cout << endl;
}
void test1()
{
	//创建五个选手
	vector<Person> player;		//存放选手容器
	CreaePlayer(player);

	//初始化测试
	/*for (vector<Person>::iterator it = player.begin(); it != player.end(); ++it)
	{
		cout << "姓名：" << it->m_name << "   成绩为： " << it->m_score;
		cout << endl;
	}*/
	cout << endl;
	//给五个选手打分
	SetScore(player);

	//显示五位选手的平均分
	ShowScore(player);
}
int main(void)
{
	test1();
	return 0;
}
```

运行结果就是上述的拼接，就不展示，主要是太大了

### 4.2 员工分组

1、案例描述

公司今天招聘了10个员工（ABCDEFGHIJ），在进入公司后，要随机给他们分配部门和工资（背景设定，不符合现实），员工的信息有姓名，工资，和所属部门，部门有三个种类，分别是策划部、美术部和研发部，现在要求分部门显示员工的所有信息。

2、案例分析与思路罗列

本题主要是运用了vector容器和multimap容器

①首先依旧创建一个Person类，将十个员工存放到一个vector容器中；

②遍历vector容器，取出每个员工，对他们进行随机分组；

③分组之后，将部门编号作为key(键值)，将员工的部门工作作为value(实值)，放到multimap容器中；

④分部门显示员工信息；

2、具体代码实现与讲解

依旧是分开讲解三个重要的主体函数

①员工的创建

```text
class Person {
public:
	string m_name;
	int m_salary;
};
```

  

```text
void CreateWorker(vector<Person>& v)
{
	string NameSeed = "ABCDEFGHIJ";
	for (int i = 0; i < 10; ++i)
	{
		//编号
		Person p;
		p.m_name = "员工";
		p.m_name += NameSeed[i];
		
		//薪水
		p.m_salary = rand() % 10000 + 10000;	//10000~19999

		v.push_back(p);
	}
}
```

  

```text
vector<Person> vWorker;

//创建10个员工
CreateWorker(vWorker);
```

详细讲解：

这里没有使用构造函数初始化员工信息是因为在后面会产生歧义，之后就是后案例一一样的操作，进行一个string类的字符串连接，这里的薪水也是用rand()随机数产生，%10000取余操作产生的是0~9999的数，+10000便是10000-19999的范围，这里给出它的测试结果：

![](https://pic3.zhimg.com/80/v2-0e2a368f00b6e94ecac5dfd73eafdcf6_1440w.webp)

**②**员工的分组

```text
void SetGroup(vector<Person>& v, multimap<int, Person>& m)
{
	for (vector<Person>::iterator it = v.begin(); it != v.end(); ++it)
	{
		//随机化三个部门
		int dep = rand() % 3;	//0~2

		//key：部门		value：员工
		m.insert(pair<int, Person>(dep, *it));		//将十个员工放入三个部门
	}
}
```

  

```text
	//员工分组
	multimap<int,Person> mWorker;
	SetGroup(vWorker, mWorker);
```

详细讲解：

  

这里是用到了multimap是存放员工的信息，key值为部门种类，value值为员工。在函数中，通过外层循环的遍历首先找到十个员工，接着，也是通过rand()函数为每个员工随机化分配部门%3会产生0~2之间的数字，最后使用multimap容器来实现员工信息的插入，这里的*it便是解引用之后的每一位员工，此部分没有运行结果；

②员工信息的显示

由于类似，这里先只给出策划部的代码，另两个部门见下方整体代码展示

```text
#define CH 0	//策划部
#define MS 1	//美术部
#define YF 2	//研发部
```

  

```text
void ShowGroup(multimap<int, Person>& m)
{
	//策划部（0） A B C
	int count1 = m.count(CH);		// 统计策划部的人数
	multimap<int,Person>::iterator pos=m.find(CH);		//查找

	cout << "策划部" << endl;
	for (int index = 0; pos != m.end() && index < count1; ++pos,index++)
	{
		cout << "编号：" << pos->second.m_name<< "\t薪水：" << pos->second.m_salary << endl;
	}
	cout << "---------------------------------" << endl;
}
```

详细讲解：

讲一下这里为什么要用multimap而不用map呢，因为每个员工的部门是随机产生的，所以A~J有可能就在一个部门里，这就需要用到multimap中运行多键值插入的操作。来看函数体，这里是用到了count()操作去统计这个部门有多少人数，然后用find()去查找属于这个部门的有哪些人，find()它的返回结果是一个迭代器，所以用一个专属的迭代器去接受它的值，最后是通过一层for循环来，遍历统计并且输出每个员工的信息。

这里的pos->second.m_name便是这个位置上的员工通过multimap容器中的第二个属性参数信息也就是second，这样就完全找到了这个员工.m_name可以访问其姓名，.m_salary便可以访问其工资

运行结果:

![](https://pic1.zhimg.com/80/v2-c6ac176db1f5e158b395bdbcd825ee30_1440w.webp)

**整体代码展示**

```text
#include <iostream>
#include <vector>
#include <map>
#include <ctime>
#include <iterator>
#include <string>
using namespace std;

#define CH 0	//策划部
#define MS 1	//美术部
#define YF 2	//研发部

class Person {

public:
	string m_name;
	int m_salary;
};

void CreateWorker(vector<Person>& v)
{
	string NameSeed = "ABCDEFGHIJ";
	for (int i = 0; i < 10; ++i)
	{
		//编号
		Person p;
		p.m_name = "员工";
		p.m_name += NameSeed[i];
		
		//薪水
		p.m_salary = rand() % 10000 + 10000;	//10000~19999

		v.push_back(p);
	}
}

void SetGroup(vector<Person>& v, multimap<int, Person>& m)
{
	for (vector<Person>::iterator it = v.begin(); it != v.end(); ++it)
	{
		//随机化三个部门
		int dep = rand() % 3;	//0~2

		//key：部门		value：员工
		m.insert(pair<int, Person>(dep, *it));		//将十个员工放入三个部门
	}
}

void ShowGroup(multimap<int, Person>& m)
{


	//策划部（0） A B C
	int count1 = m.count(CH);		// 统计策划部的人数
	multimap<int,Person>::iterator pos=m.find(CH);		//查找

	cout << "策划部" << endl;
	for (int index = 0; pos != m.end() && index < count1; ++pos,index++)
	{
		cout << "编号：" << pos->second.m_name<< "\t薪水：" << pos->second.m_salary << endl;
	}
	cout << "---------------------------------" << endl;

	//美术部（1） D E F
	int count2 = m.count(MS);		// 统计美术部的人数
	pos = m.find(MS);		//查找

	cout << "美术部" << endl;
	for (int index = 0; pos != m.end() && index < count2; ++pos,index++)
	{
		cout << "编号：" << pos->second.m_name << "\t薪水：" << pos->second.m_salary << endl;
	}
	cout << "---------------------------------" << endl;

	//研发部（2） G H I J
	int count3 = m.count(YF);		// 统计美术部的人数
	pos = m.find(YF);		//查找

	cout << "研发部" << endl;
	for (int index = 0; pos != m.end() && index < count3; ++pos,index++)
	{
		cout << "编号：" << pos->second.m_name << "\t薪水：" << pos->second.m_salary << endl;
	}
	cout << "---------------------------------" << endl;

}
void test()
{
	srand((unsigned int)time(NULL));
	vector<Person> vWorker;

	//创建10个员工
	CreateWorker(vWorker);

	//初始化测试
	/*for (vector<Person>::iterator it = vWorker.begin(); it != vWorker.end(); ++it)
	{
		cout << "编号：" << it->m_name << "\t薪水：" << it->m_salary << endl;
	}
	cout << "---------------------------------" << endl;*/

	//员工分组
	multimap<int,Person> mWorker;
	SetGroup(vWorker, mWorker);

	//显示员工分组
	ShowGroup(mWorker);
}
int main(void)
{
	test();
	return 0;
}
```

## 五、总结

通过学习这篇文章，您对C++中STL容器中的常见容器以及其基本操作，有没有一个大致的了解呢，如果看到后面前面的内容有些模糊不清，可以抽时间再看几遍，这些常见容器中用的最多的还是像vector(向量)、list(双向循环链表)、以及map(映射)，其他的见得不多，但在某些特殊场合还是可以派得上用场。对于其中的某些容器，具体很深入我也不是很了解，只能讲讲其大体的结构和基本操作，如果有读者对某个容器感兴趣，可以去另外深入了解一下。当然除了STL中除了这些常见容器，还有一些不怎么常见的，比如说像unordered_set、unordered_map这些，它们的底层都是通过哈希函数来实现。

STL就像是C++中很优秀的一个作品，有了它的陪伴，许多底层的数据结构和算法都不需要自己重新安装轮子，站在前人的肩膀上面，快速发展。但是如果你想实现一些STL中没有但又能派的上用场的功能，可以尝试自己去造轮子。