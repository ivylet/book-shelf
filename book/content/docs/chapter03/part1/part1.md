---
title: 第一章
---
线性表
```c
#include<stdio.h>
#define ElementType int
#define MAXSIZE 10
typedef struct SqList{
    ElementType data[MAXSIZE];
    int length;
}SqList;

void InitSqueList(SqList sq){
    sq.length = 0;
}

void InsertSqueList(SqList* sq, int x){
    (*sq).data[0] = x;
}

int main()
{
    SqList sq;
    InitSqueList(sq);
    InsertSqueList(&sq,1);
    printf("%d\n",sq.length);
    printf("%d",sq.data[0]);
    return 0;
}
```
线性存储
链式存储
