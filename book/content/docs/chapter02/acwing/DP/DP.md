---
title: DP
---
## 背包DP
### 01背包
每件物品最多只用一次。

有 N 件物品和一个容量是 V 的背包。每件物品只能使用一次。
第 i 件物品的体积是 vi，价值是 wi。
求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。  
输出最大价值。
[2. 01背包问题 - AcWing题库](https://www.acwing.com/problem/content/2/)
```cpp
#include<iostream>
using namespace std;
const int N = 1010;
int v[N],w[N];
int m,n;
int f[N][N];
int main(){
    cin >> m >> n;
    for(int i = 1; i <= m;i++ ){
        cin >> v[i] >> w[i];
    }
    for(int i = 1; i <= m;i++){
        for(int j = 0;j<= n;j++)
        {
            f[i][j] = f[i - 1][j];
            if( j >= v[i]) //当可以装下的空间比第i个大才有可能存在装第i个物品的情况。
            f[i][j] = max(f[i][j],f[i - 1][j - v[i]] + w[i]);
        }
    }
    cout << f[m][n];
    return 0;
}
```
优化为二维
```cpp
#include<iostream>
using namespace std;

```
###### 状态表示
f(i,j)
表示从前i个背包中选，选出的总权值小于等于j的集合。
f(i,j)的值为总价值。
- 集合
	- 条件
		- 只从前i中选
		- 选出来的总权值 <j的集合
- 属性：最大值、最小值、数量。
###### 状态计算
表示集合的划分
f(i,j)表示
- 不包含第i个背包的最优解即f(i-1,j)，
- 包含第i个背包的最优解即f(i-1,j-w\[i])+v\[i]。即去掉第i个物品以及总权值减去第i个的权值。
###### 总结：
第i个背包能不能放，能放就是集合划分第二种，不能放就是第一种。从一步开始走，然后逐渐解决全部问题。




### 完全背包
每件物品可以用很多次。

整数划分
```cpp
#include<iostream>
using namespace std;
const int N = 1000010,MOD = 1e9;
int f[N];
int main(){
    int m;
    cin << m;
    f[0] = 1;
    for(int i = 1; i &lt;= m;i *= 2){
        for(int j = i; j &lt;= m ;j++){
            f[j] = (f[j] + f[j - i]) % MOD;
        }
    }
    cout >> f[m];
    return 0;
}
```
### 多重背包
每件物品
### 分组背包
有很多组，每组有多种
## 线性DP
## 区间DP