---
title: 数据结构
---
## 链表
拿数组模拟链表,其实也就是静态链表.
静态链表的优点是快,但是缺点是必须要提前分配足够空间,并且可能会出现假满状态,即`idx`到最后但是前边还有很多未使用的节点,
#### 单链表
```cpp
#include<iostream>

using namespace std;

const int N = 100010;

int e[N];
int ne[N];
int idx,head;

void init(){
    head = -1;
    idx = 0;
}

void add_to_head(int x){
    e[idx] = x;
    ne[idx] = head;
    head = idx++;
}

//插入到下标为k的后面
void add(int k,int x){
    e[idx] = x;
    ne[idx] = ne[k];
    ne[k] = idx ++;
}

void del(int k){
    if(k == -1) head = ne[head];
    else ne[k] = ne[ne[k]];
}
int main(){
    int m;
    cin >> m;
    init();
    while(m--){
        char opt;
        cin >> opt;
        if(opt == 'H'){
            int x;
            cin >> x;
            add_to_head(x);
        }else if(opt == 'D'){
            int k;
            cin >> k;
            del(k-1);
        }else{
            int k,x;
            cin >> k >>x;
            add(k - 1,x);
        }
    }
    int index = head;
    while(index != -1){
        cout << e[index] << " ";
        index = ne[index];
    }
    return 0;
}
```
#### 双链表
所谓双链表就是每个节点含有前结点位置进而后节点位置.
```cpp
#include<iostream>

using namespace std;

const int N = 100010;

int pre[N],ne[N],e[N];
int idx;
// 定义0号位为头结点
// 定义1号位为尾结点
void init(){
    ne[0] = 1;
    pre[0] = -1;
    ne[1] = -1;
    pre[1] = 0;
    idx = 2;
}

void add_head(int x){
    e[idx] = x;
    ne[idx] = ne[0];
    pre[idx] = 0;
    pre[ne[0]] = idx;
    ne[0] = idx;
    idx ++;
}

void add_tail(int x){
    e[idx] = x;
    ne[idx] = 1;
    pre[idx] = pre[1];
    ne[pre[1]] = idx;
    pre[1] = idx;
    idx++;
}

void del(int k){
    ne[pre[k]] = ne[k];
    pre[ne[k]] =  pre[k];
}

void add_left(int k,int x){
    e[idx] = x;
    ne[idx] = k;
    pre[idx] = pre[k];
    ne[pre[k]] = idx;
    pre[k] = idx;
    idx ++;
}

void add_right(int k,int x){
    e[idx] = x;
    ne[idx] = ne[k];
    pre[idx] = k;
    pre[ne[k]] = idx;
    ne[k] = idx;
    idx++;
}

int main(){
    int m;
    cin >> m;
    init();
    while(m --){
        string opt;
        int k,x;
        cin >> opt;
        if(opt == "L"){
            cin >> x;
            add_head(x);
        }if(opt == "R"){
            cin >> x;
            add_tail(x);
        }if(opt == "D"){
            cin >> k;
            del(k + 1);
        }if(opt == "IL"){
            cin >> k >> x;
            add_left(k + 1,x);
        }if(opt == "IR"){
            cin >> k >> x;
            add_right(k + 1,x);
        }
    }
    int j = 0;
    for(int i = ne[0]; ne[i] != -1; i = ne[i]){
        cout<< e[i] << " ";
    }
    return 0;
}
```
## 栈和队列
使用数组实现基本的栈与队列
### 模拟栈
```cpp
const int N = 1010;
//栈
int stk[N],tt = -1;
//入栈
stk[++tt] = elem;
//出栈
stk[tt--];
//栈是否为空
if tt < 0  stack is empty
else stack is not empty
```
完整操作代码
```cpp
const int N = 100010;
int stk[N],idx;
//初始化
void init(){
    idx = -1;
}
//插入元素
void push(int x){
    stk[++idx] = x;
}
//取出栈顶元素
int pop(){
   int res = stk[idx--];
   return res;
}
//判断是否为空
bool isEmpty(){
    if(idx < 0) return true;
    else return false;
}
//获取栈顶元素
int pull(){
    return stk[idx];
}
```
### 模拟队列
```cpp
const int N = 1010;
//栈
int queue[N],tt,hh;
//入队
queue[tail++] = elem;
//出队
queue[top++];
```
完整操作
```cpp
const int N = 100010;
int queue[N],top,tail;
//初始化
void init(){
    top = -1;
    tail = -1;
}
//插入元素到队尾
void push(int x){
    queue[++tail] = x;
}
//弹出队列队首元素
int pop(){
   int res = queue[++top];
   return res;
}
//队列是否空
bool isEmpty(){
    if(top >= tail) 
        return true;
    else 
        return false;
}
//返回队列队首元素
int pull(){
    return queue[top + 1];
}
```
## 单调栈与单调队列
### 单调栈
##### 定义
什么是单调栈?
栈中的数据具有单调性.现在有一组数`10,3,7,4,12`从左到右依次入栈，则如果**栈为空**或**入栈元素值小于栈顶元素值**，则入栈；否则，如果入栈则会破坏栈的单调性，则需要把比入栈元素小的元素全部出栈。单调递减的栈反之。
##### 应用场景
给定一个序列,求每个元素左边(或右边)最近的比它小(或大)的元素.其实就是找逆序对,最近的两个构成逆序就输出,未找到就返回-1.  
如下图所示,
4找3,满足,则返回3;
2往前找4,不满足,找3,也不满足,则返回-1;
7往前找2(如果2满足,则无需考虑2之前的数据),满足则返回2.
5往前找7,不满足,则去找2,满足,则返回2.
![4062adb643c4035eaf9b0c866d3d19e.jpg](https://cdn.staticaly.com/gh/ivylet/blog_picg-@master/img/202304061705690.jpg)

如果满足逆序则保留,不满足则不保留
(因为如果保留,则当前点不满足,上一个点也不满足,需要多遍历,
例如序列`5 4 3 1 2`, 考虑`3`时,`5 4`是非逆序,那么`4`不满足,`5`同样不满足)
这种情况使用栈最好,因为考虑的数据是按照后进先出的顺序读取.
##### 主要代码
```cpp
#include<iostream>
using namespace std;
const int N = 10010;
int stk[N].idx = 0;
int main(){
    int n;
    cin >> n;
    for(int i = 0 ; i < n ; i++){
        int x;
        cin >> x;
        while(idx && stk[idx] >= x) idx--;
        if(idx) cout << stk[idx] << " ";
        else cout << "-1" << " ";
        stk[++idx] = x;
    }
    return 0;
}
```
### 单调队列
##### 定义
什么是单调队列?
有单调性的队列!
```cpp
//单调队列
```

## KMP