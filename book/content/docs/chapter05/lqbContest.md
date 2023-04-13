---
title: 14届蓝桥杯
---
## 飞机降落

dfs 暴力搜索
```cpp

#include<iostream>
#include<cstring>

using namespace std;

const int N = 15;

struct Plane{
    int t;
    int d;
    int l;
}p[N];
int n;
bool st[N];

bool dfs(int u, int last){
    if(u == n) return true;

    for(int i = 0 ; i < n ; i ++){
        int t = p[i].t,d = p[i].d, l = p[i].l;
        //当前点 没选过 并且 飞机能够降落的最后时间 比上一架飞机的降落时间 靠后
        //满足这种情况 可以降落
        if(!st[i] && t + d >= last){
            st[i] = true;
            if(dfs(u + 1, max(last,t) + l)) 
                return true;
            st[i] = false;
        }
    }
    return false;
}

```
```cpp
int main(){
    int T;
    cin >> T;
    while(T --){
        cin >> n;
        for(int i = 0 ; i < n ;  i ++){
            cin >> p[i].t >> p[i].d >> p[i].l;    
        }
        //每次结束后 都要 重新初始化st数组，避免上组数据 影响下一组
        memset(st,0,sizeof st);
        if(dfs(0,0)) cout << "YES" << endl;
        else cout << "NO" << endl;
    }
    return 0;
}
```

$O(N!)$

状态压缩DP

$O(2^n /times nT)$
```cpp
#include<iostream>
#include<cstring>

using namespace std;

const int N = 10,M = 1 << N, INF = 0x3f3f3f3f;

struct Plane
{
    int t,d,l;
}p[N];
int n;
int f[M];

int main(){
    int T;
    cin >> T;
    while(T --){
        cin >> n;
        for(int i = 0 ; i < n ;  i ++){
            int t,d,l;
            cin >> t >> d >> l;
            p[i] = {t,d,l};
        }
        memset(f,0x3f,sizeof f);
        f[0] = 0;
        for (int i = 1 ; i < 1 << n; i ++)
            for (int j = 0 ; j < n; j++)
            {
                int t = p[j].t;
                int d = p[j].d;
                int l = p[j].l;
                if(i >> j & 1)
                {
                    int last = f[i - (1 << j)];
                    if (t + d >= last)
                        f[i] = min(f[i],max(last,t) + l);
                }
            }
        if(f[(1 << n) - 1] < INF) cout << "YES" << endl;
        else cout << "NO" <<endl;
    }
    return 0;
}
```


## 接龙数列

#### 朴素DP
```cpp
#include<iostream>

using namespace std;

const int N = 1e5 + 10;

int num[N];
int f[N];
int n;

int get_high(int x){
    while(x/10){
        x = x/10;
    }
    return x;
}

int get_low(int x){
    return x % 10;
}


int main(){
    scanf("%d",&n);
    for(int i = 0 ; i < n ; i ++){
        scanf("%d",&num[i]);
    }
    
    for(int i = 0 ; i < n ; i++)
    {
        f[i] = 1;
        for(int j = 0 ; j < i; j  ++)
        {
            if(get_high(num[i]) == get_low(num[j]))
            {
                f[i] = max(f[i],f[j] + 1);
            }
        }
    }
    
    int res = 0;
    
    for(int i = 0 ; i < n ; i ++){
        res = max(res,f[i]);
    }
    
    printf("%d",n - res);
    return 0;   
}
```

#### 神奇做法

考虑到每个数列只有9种情况，即以1-9结尾。那么可以定义状态数组dp[10] 存储每个以i结尾的数组的长度。考虑到第i个数，是以a开头，b结尾的数。那么dp[b]有两种情况，一种是不加这个数，另外一种是加上这个数 然后就变成了dp[a] + 1，即以a结尾的数加上这个数 然后变成以b结尾的数，所以是dp[a] + 1;然后找到最大的状态就OK

处理数字可以使用string 导入然后首位就是string[0] - '0',末尾位就是string.back()- '0'
```cpp
#include<iostream>
using namespace std;
const int N = 10;
int dp[N];
int n,ans;
int main(){
    scanf("%d",&n);
    for(int i = 0 ; i < n ; i ++){
        string num;
        cin >> num;
        // 这个数以 a 开头 b 结尾
        int a = num[0] - '0';
        int b = num.back() - '0';
        // 以b结尾的可能 只有
        // 这个数加上去 然后变成 以a结尾的 数加一，
        // 或者是 这个不加
        dp[b] = max(dp[b],dp[a] + 1);
        ans = max(ans,dp[b]);
    }
    cout << n  - ans ;
    return 0;   
}
```