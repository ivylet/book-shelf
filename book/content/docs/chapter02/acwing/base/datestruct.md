---
title: 数据结构
---
## 链表与邻接表
### 链表
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
int stk[N],tt;
//入栈
stk[++tt] = elem;
//出栈
stk[tt--];

//队列
```
### 模拟队列
```cpp
queue
```
## KMP