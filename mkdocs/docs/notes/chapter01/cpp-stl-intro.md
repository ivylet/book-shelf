---
title: C++ STL
date: 2022-11-10T11:18:29+08:00
weight: 2
---

## 什么是C++标准模板库（STL）？

**标准模板库 STL**（Standard Template Library），是 C++ 标准库的一部分，不需要单独安装，只需要#include 头文件。

C++ 对模板（Template）支持得很好，STL 就是借助模板把常用的数据结构及其算法都实现了一遍，并且做到了**数据结构和算法的分离**。

C++ 语言的核心优势之一就是便于软件的复用。

C++ 语言有两个方面体现了复用：

- 面向对象的继承和多态机制
- 通过模板的概念实现了对泛型程序设计的支持

C++中的模板，就好比英语作文的模板，**只换主题，不换句式和结构**。对应到C++模板，就是**只换类型，不换方法**。

## STL有什么优势？

STL封装了很多实用的容器，省时省力，能够让你将更多心思放到解决问题的步骤上，而非费力去实现数据结构诸多细节上，**像极了用python时候的酣畅淋漓**。

## STL到底有什么？

六大部件:

- 容器
- 分配器
- 算法
- 迭代器
- 适配器
- 仿函数

## 自定义

### vector 矢量



#### 定义

使用前需添加头文件

```c++
#include<vector>
using namespace std;
```

像定义变量一样定义vector变量：

```cpp
vector<类型名> 变量名;
```

类型名可以是int、double、char、struct，也可以是STL容器：vector、set、queue。

```cpp
vector<int> name;
vector<double> name;
vector<char> name;
vector<struct node> name;
vector<vector<int>> name;
```

vector数组就是一个一维数组,如果定义成vector数组的数组，那就是二维数组**。**

```cpp
vector<int> array[SZIE]; //二维变长数组
```

在此，我送你一句话非常受用的话：**低维是高维的地址。**

**二维数组中，它的一维形式就是地址。例如：**

```cpp
#include <iostream>
using namespace std;

int main(){
    int arr[3][2];//定义一个3行2列的地址
    cout<<arr[0]<<endl; //输出arr第1行的地址
    cout<<arr[1]<<endl; //输出arr第2行的地址
    cout<<arr[2]<<endl; //输出arr第3行的地址
    return 0;
}
```

输出：

```cpp
0x61fe00 //arr第1行的地址
0x61fe08 //arr第2行的地址
0x61fe10 //arr第3行的地址
```

所以，vector容器也可以这样理解。

#### 常用函数

##### 1.构造函数

- vector():创建一个空vector
- vector(int nSize):创建一个vector,元素个数为nSize
- vector(int nSize,const t& t):创建一个vector，元素个数为nSize,且值均为t
- vector(const vector&):复制构造函数
- vector(begin,end):复制[begin,end)区间内另一个数组的元素到vector中

##### 2.增加函数

- void push_back(const T& x):向量尾部增加一个元素X
- iterator insert(iterator it,const T& x):向量中迭代器指向元素前增加一个元素x
- iterator insert(iterator it,int n,const T& x):向量中迭代器指向元素前增加n个相同的元素x
- iterator insert(iterator it,const_iterator first,const_iterator last):向量中迭代器指向元素前插入另一个相同类型向量的\[first,last)间的数据

##### 3.删除函数

- iterator erase(iterator it):删除向量中迭代器指向元素
- iterator erase(iterator first,iterator last):删除向量中\[first,last)中元素
- void pop_back():删除向量中最后一个元素
- void clear():清空向量中所有元素

##### 4.遍历函数

- reference at(int pos):返回pos位置元素的引用
- reference front():返回首元素的引用
- reference back():返回尾元素的引用
- iterator begin():返回向量头指针，指向第一个元素
- iterator end():返回向量尾指针，指向向量最后一个元素的下一个位置
- reverse_iterator rbegin():反向迭代器，指向最后一个元素
- reverse_iterator rend():反向迭代器，指向第一个元素之前的位置

##### 5.判断函数

- bool empty() const:判断向量是否为空，若为空，则向量中无元素

##### 6.大小函数

- int size() const:返回向量中元素的个数
- int capacity() const:返回当前向量所能容纳的最大元素值
- int max_size() const:返回最大可允许的vector元素数量值

##### 7.其他函数

- void swap(vector&):交换两个同类型向量的数据
- void assign(int n,const T& x):设置向量中前n个元素的值为x
- void assign(const_iterator first,const_iterator last):向量中\[first,last)中元素设置成当前向量元素

#### 访问容器内元素

vector一般有两种访问方式：

**（1）通过下标访问**

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> vi;
    vi.push_back(1);
    cout<<vi[0]<<endl;
    return 0;
}
```

输出：

```cpp
1
```

**（2）通过迭代器访问**

迭代器（iterator）可以理解为指针：

```cpp
vector<类型名>::iterator 变量名;
```

例如：

```cpp
vector<int>::iterator it;
vector<double>::iterator it;
```

举个例子：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    for (int i = 0; i < 5; i++)
    {
        v.push_back(i);
    }
    //v.begin()返回v的首元素地址
    vector<int>::iterator it=v.begin();
    for (int i = 0; i < v.size(); i++)
    {
       cout<<it[i]<<" ";
    }
    return 0;
}
```

输出：

```cpp
0 1 2 3 4
```

for循环迭代部分也可以写成：

```cpp
    vector<int>::iterator it=v.begin();
    for (int i = 0; i < v.size(); i++)
    {
       cout<<*(it+i)<<" ";
    }
```

也即是

```cpp
it[i] = *(it+i) //这两个写法等价
```

这是简单的常识，以后不再提及。

与此同时，迭代器与for循环还有一种优雅的写法。

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    for (int i = 0; i < 5; i++)
    {
        v.push_back(i);
    }
    //vector的迭代器不支持it<v.end()的写法，因此循环条件只能it!=v.end()
    for (vector<int>::iterator it=v.begin(); it!=v.end();it++)
    {
        cout<<*it<<" ";
    }
    return 0;
}
```

此种写法与**遍历字符串**有**异曲同工之妙**：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    string str;
    str="Hello World";
    for (int i = 0; str[i]!='\0'; i++)
    {
        cout<<str[i]<<" ";
    }
    return 0;
}
```

输出：

```cpp
H e l l o   W o r l d
```

#### vector常用函数实例解析

- push_back()
- pop_back()
- size()
- clear()
- insert()
- erase()

**（1）push_back()**

```cpp
void std::vector<int>::push_back(const int &__x)
```

见名知意，push_back(item)就是在vector后面添加一个元素item。

用例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    for (int i = 0; i < 5; i++)
    {
        v.push_back(i);
    }
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    return 0;
}
```

以前还要为定长数组内存分配而苦恼时，现在只需要无脑push_back()就好了。

**（2）pop_back()**

```cpp
void std::vector<int>::pop_back()
```

push和pop时一对反义词，学过数据结构的人都知道，栈元素的压入和弹出就是push和pop。

须知，pop_back()一次弹出一个元素，vector容器就会减少一个预算。

之所以叫容器，就是能往里面装一个一个的元素。

用例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    for (int i = 0; i < 5; i++)
    {
        v.push_back(i);
    }
    cout<<"pop_back前:"<<endl;
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    cout<<endl;
    v.pop_back();
    cout<<"pop_back后:"<<endl;

    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    return 0;
}
```

输出：

```cpp
pop_back前:
0 1 2 3 4
pop_back后:
0 1 2 3
```

**（3）size()**

```cpp
std::size_t std::vector<int>::size()
```

szie()返回vector中所含元素的个数，时间复杂度为O(1)。

用例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    for (int i = 0; i < 5; i++)
    {
        v.push_back(i);
    }
    cout<<v.size()<<endl;
    return 0;
}
```

输出：

```cpp
5
```

**（4）clear()**

```cpp
void std::vector<int>::clear()
```

clear()用于**一键清空vector中的所有元素**，**时间复杂度为O(N)**，其中N为vector中原属和元素的个数。

用例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    for (int i = 0; i < 5; i++)
    {
        v.push_back(i);
    }
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    v.clear();
    cout<<endl;
    cout<<"size = "<<v.size()<<endl;
    return 0;
}
```

输出：

```cpp
0 1 2 3 4 
size = 0
```

**（5）insert()**

```cpp
insert(__position,__x);
insert(要插入的地址，要插入的元素);

参数：
__position：– A const_iterator into the %vector.
__x:– Data to be inserted.
```

与push_back()无脑在尾部添加元素不同的是，insert()是根据指定位置在vector中插入元素。

用例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    for (int i = 0; i < 5; i++)
    {
        v.push_back(i);
    }
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    v.insert(v.begin()+2,-1); //将-1插入v[2]的位置
    cout<<endl;
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    return 0;
}
```

输出：

```cpp
0 1 2 3 4 
0 1 -1 2 3 4
```

**（6）erase()**

```cpp
erase(__position);
```

同样，与clear()简单粗暴清空vector不同的是erase()，删除指定位置的元素。

erase()有两种用法：

- 删除一个元素
- 删除一个区间内的元素

**1.删除一个元素**

```cpp
erase(__position);
```

用例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    for (int i = 0; i < 5; i++)
    {
        v.push_back(i);
    }
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    //删除v[3]
    v.erase(v.begin()+3);
    cout<<endl;
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    return 0;
}
```

输出：

```cpp
0 1 2 3 4 
0 1 2 4
```

**2.删除一个区间内的元素**

```cpp
erase(__positionBegin,__positionEnd);
```

即是删除`[__positionBegin, __positionEnd)`区间内的元素，注意：是左闭右开！

用例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){
    vector<int> v;
    for (int i = 0; i < 5; i++)
    {
        v.push_back(i);
    }
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    //删除v[1]到v[4]的元素
    v.erase(v.begin()+1,v.begin()+4);
    cout<<endl;
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    return 0;
}
```

输出：

```cpp
0 1 2 3 4 
0 4
```

#### vector常见用途

**（1）储存数据**

vector本身可以作为数组使用，而且在一些元素个数不确定的场合可以很好地节省空间。

**（2）用邻接表存储图**

使用vector实现邻接表，更为简单。

### set

set（集合），是一个**内部自动有序**且**不含重复元素**的容器。

set可以在需要去重复元素的情况大放异彩，节省时间，减少思维量。

要使用set，需要添加头文件：

```cpp
#include <set>
using namespace std;
```

#### 定义

像定义变量一样定义set变量：

```cpp
set<类型名> 变量名;
```

类型名可以是int、double、char、struct，也可以是STL容器：vector、set、queue。

用例：

```cpp
set<int> name;
set<double> name;
set<char> name;
set<struct node> name;
set<set<int>> name;
```

set数组的定义和vector相同：

```cpp
set<类型名> array[SIZE];
```

例如：

```cpp
set<int> arr[10];
```

#### 访问set容器内的元素

**set只能通过迭代器(iterator)访问**：

```cpp
set<int>::iterator it;
set<char>::iterator it;
```

这样，就得到了迭代器it，并且可以通过***it**来访问set里的元素。

注意：

除了vector和string之外的STL容器都不支持*(it+i)的访问方式，因此只能按照如下方式枚举：

```cpp
#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<int> st;
    st.insert(5);
    st.insert(2);
    st.insert(6);
    for (set<int>::iterator it = st.begin(); it != st.end(); it++)
    {
        cout << *it << endl;
    }
    return 0;
}
```

输出：

```cpp
2
5
6
```

我们可以看到，原本无序的元素，被插入set集合后，**set内部的元素自动递增排序，并且自动去除了重复元素**。

#### set常用函数实例解析

**（1）insert()**

插入元素十分简单。

```cpp
#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<char> st;
    st.insert('C');
    st.insert('B');
    st.insert('A');
    for (set<char>::iterator it = st.begin(); it != st.end(); it++)
    {
        cout << *it << endl;
    }
    return 0;
}
```

**（2）find()**

**find(value)返回的是set中value所对应的迭代器，也就是value的指针（地址）**。

```cpp
#include <iostream>
#include <set>
using namespace std;
int main()
{
    set<int> st;
    for (int i = 1; i <= 3; i++)
    {
        st.insert(i);
    }

    set<int>::iterator it = st.find(2); //在set中查找2，返回其迭代器
    cout << *it << endl;

    // 以上可以直接x携程
    cout << *(st.find(2)) << endl;
    return 0;
}
```

输出：

```cpp
2
2
```

**（3）erase()**

erase()有两种用法：删除单个元素、删除一个区间内的所有元素。

**1.删除单个元素**

删除单个元素有两种方法：

- st.erase(it)，其中it为所需要删除元素的迭代器。时间复杂度为O(1)。可以结合find()函数来使用。

```cpp
#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<int> st;
    st.insert(100);
    st.insert(200);
    st.insert(100);
    st.insert(300);
    // 删除单个元素
    st.erase(st.find(100)); //利用find()函数找到100,然后用erase删除它
    st.erase(st.find(200));
    for (set<int>::iterator it = st.begin(); it != st.end(); it++)
    {
        cout << *it << endl;
    }
    return 0;
}
```

输出：

```cpp
300
```

- st.erase(value)，value为所需要删除元素的值。其时间复杂度为O(logN)，N为set内的元素个数。

```cpp
#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<int> st;
    st.insert(100);
    st.insert(200);
    st.insert(100);
    st.insert(300);
    // 删除单个元素
    st.erase(100);
    for (set<int>::iterator it = st.begin(); it != st.end(); it++)
    {
        cout << *it << endl;
    }
    return 0;
}
```

输出：

```cpp
200
300
```

**2.删除一个区间内的所有元素**

**st.erase(iteratorBegin , iteratorEnd)可以删除一个区间内的所有元素。**

其中**iteratorBegin**为所需要删除区间的起始迭代器

**iteratorEnd**为所需要删除区间的结束迭代器的下一个地址

也即是**[iteratorBegin,iteratorEnd)**

```cpp
#include <iostream>
#include <set>
using namespace std;

//2.删除一个区间内的所有元素

int main()
{
    set<int> st;
    st.insert(100);
    st.insert(200);
    st.insert(100);
    st.insert(300);
    set<int>::iterator it = st.find(200);
    st.erase(it, st.end());
    for (it = st.begin(); it != st.end(); it++)
    {
        cout << *it << endl;
    }
    return 0;
}
```

输出：

```cpp
100
```

**（4）size()**

不难理解，szie()用来实时获得set内元素的个数，时间复杂度为O(1)。

```cpp
#include <iostream>
#include <set>
using namespace std;
int main()
{
    set<int> st;
    st.insert(2);
    st.insert(5);
    st.insert(4);
    cout << st.size() << endl;
    return 0;
}
```

输出：

```cpp
3
```

### string

### map
#### 定义
#### map
```c++
map<int,int> maps;
```
##### 相关函数
- maps.insert() 插入
- maps[key] = value;数组方式插入
- maps.find(num) 查找一个元素
- maps.clear()清空
- maps.szie()长度
- maps.begin()返回指向map头部的迭代器
- maps.end()返回指向map末尾的迭代器
- maps.erase(num)删除一个元素。
#### unordered_map
与map容器仅有一点不同的是，unordered_map是无序的。其底层采用的是哈希表存储，不会自动对存储的键值对进行排序。

### queue

### priority

### stack

### pair

### algorithm
