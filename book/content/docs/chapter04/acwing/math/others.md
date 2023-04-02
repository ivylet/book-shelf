---
title: 其他
---
## 秦九韶算法
使用秦九韶算法可以计算多项式的值，或进制转换。
例子：计算多项式的值。`a[i]`表示多项式中的x的i次幂的系数。
```cpp
#include<iostream>
using namespace std;
int n,x,ans,a[21];
int main(){
    cin>>n;
    for(int i=0;i<=n;i++)
        cin>>a[i];
    cin>>x;
    ans=a[n];
    for(int i=1;i<=n;i++)
        ans=ans*x+a[n-i];
    cout<<ans; 
    return 0;
}
```