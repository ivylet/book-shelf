---
title: 搜索与图论
---

## 图论
### Floyd算法
主要思想是:
循环邻接矩阵中查找每个点到另外一个点的最短距离，不仅是看直接距离，也还要通过计算中转点。比如计算A到B的距离，要比较A到C的距离与C到B的距离的和、A到B的直接距离的最小值来判断，中转点可以是其他节点，所以代码实现中出现了三重循环。
```cpp
//n为顶点个数
//第一轮循环为 选取中间点的个数
//第二三轮循环为
void floyd(){
    for(int k = 1 ; k <=n ; k++)
        for(int i = 1 ; i <= n ;i ++)
            for(int j = 1 ; j <=n ;j ++)
                dic[i][j] = min(dic[i][j],dic[i][k] + dic[k][j]);
}
```
模板题代码：

```cpp
#include<iostream>

using namespace std;

const int N = 210,INF = 1e9;

int dic[N][N];
int n,m,Q;

void floyd(){
    for(int k = 1 ; k <=n ; k++)
        for(int i = 1 ; i <= n ;i ++)
            for(int j = 1 ; j <=n ;j ++)
                dic[i][j] = min(dic[i][j],dic[i][k] + dic[k][j]);
}

int main(){
    scanf("%d%d%d",&n,&m,&Q);
    
    for(int i = 1 ; i <= n ;i ++)
        for(int j = 1 ; j<=n;j++)
            if(i == j) dic[i][j] = 0;
                else dic[i][j] = INF;
    while(m--)
    {
        int a,b,w;
        scanf("%d%d%d",&a,&b,&w);
        dic[a][b] = min(dic[a][b],w);
    }
    floyd();
    
    while(Q--)
    {
        int a,b;
        scanf("%d%d",&a,&b);
        if(dic[a][b] < INF / 2) printf("%d",dic[a][b]);
        else printf("impossible");
        printf("\n");
    }
    return 0;
                
}
```