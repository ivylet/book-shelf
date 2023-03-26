---
title: 算法竞赛常用STL
---
# 数据结构
## vector[可变数组]
vector是一种**变长数组**，即可以自动改变长度的数组。
头文件
```cpp
#include<vector>
```
初始化
```cpp
#include<iostream>
#include<vector>
using namespace std;
int main () {
	//几种初始化的方法
    vector<int> a;//定义一个vector  未初始化 输出》 0
    vector<int> a(3);//定义一个长度为3的vector  未初始化 输出》0 0 0
    vector<int> a(10, 3); //定义一个长度为10，且每个数赋值为3
	//将向量b中从下标0 1 2（共三个）的元素赋值给a，a的类型为int型
	//它的初始化不和数组一样 
	vector<int>a(b.begin(),b.begin+3);
	//从数组中获得初值
	int b[7]={1,2,3,4,5,6,7};
	vector<int> a(b,b+7）;
    for(auto x : a) {//遍历输出 
        cout << x << " ";
    }
    return 0;
}

```
相关函数
```cpp
a.size();//返回元素个数
a.resize();//改变大小
a.empty();//判断a是否为空，空则返回true，非空则返回false
a.front(); //返回a的第1个元素,当且仅当a存在 
a.back(); //返回vector的最后一个数
a.clear(); //清空a中的元素
a.pop_back(); //删除a向量的最后一个元素 
a.push_back(5); //在a的最后一个向量后插入一个元素，其值为5
a.begin();// vector的第0个数 
a.end();// vector的最后一个的数的后面一个数 
//通常与for循环结合使用
```
⑦倍增的思想  
[C++]系统为某一程序分配空间的所需时间，与空间大小无关，与申请次数有关如申请一个空间为1000 和 空间为1 申请1000次的所需时间差别是很大的，申请次数越多，越耗时间
支持比较运算
比较操作如`==，！=，<，<，<=，>，>=`
```cpp
int main () {
    //支持比较运算
    vector<int> a(4, 3), b(3, 4);
    //a: 3 3 3 3   b:4 4 4 
    //比较原理字典序 (根据最前面那个判断，如果一样就往后比较)
    if (a < b) {
        puts("a < b"); 
    } 
    return 0;
}
```
遍历方法
```cpp
int main () {
    vector<int> a;
    for (int i = 0; i < 10; i ++) {
        a.push_back(i);
    }
    //三种遍历vector的方法
    for (int i = 0; i < a.size(); i ++) {
        cout << a[i] << ' ';
    }
    cout << endl;
    for (auto i = a.begin(); i != a.end(); i ++) {
        cout << *i << ' ';
    }
    cout << endl;
    //C++11的新语法
    for (auto x : a) {
        cout << x << ' ';
    }
    cout << endl;  
    return 0;
}
```
结合算法库中的`erase() reverse()`
```cpp
a.erase(p)//从a中删除迭代器p指定的元素，p必须指向c中的一个真实元素，不能是最后一个元素end()
a.erase(b,e)//从a中删除迭代器对b和e所表示的范围中的元素，返回e

vector<int> a={1,2,3,4,5};
reverse(a.begin(),a.end());//a的值为5，4，3，2，1  倒置
```
## string[字符串]
支持比较运算
比较操作如`==，！=，<，<，<=，>，>=`
头文件
```cpp
#include<string>
```
初始化
```cpp
string a = "abc";
```
## queue[队列]和priority_queue[优先队列，堆]
## stack[栈]
## deque[双向队列]
## set[集合]和multiset
set（集合），是一个**内部自动有序**且**不含重复元素**的容器。
set可以在需要去重复元素的情况大放异彩，节省时间，减少思维量。
要使用set，需要添加头文件：
头文件
```cpp
#include<set>
```
初始化
```cpp
set<int> gather;
```
## map[映射]和multiset
## unordered[哈希表]
## bitset[压位]
# 算法
## Algorithm[常用算法函数]

`