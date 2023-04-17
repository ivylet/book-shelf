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

## 前缀和
给定一个数组，如何快速得到指定范围内的各项和。
```c++
vector<int> preSum(vector<int> arr,int k){
	vector<int> pre(k+1);
	for(int i = 1; i < k+1;i++){
		pre[i] = pre[i - 1] + arr[i];
	}
}
```
### 截断数组
<div class="ui bottom attached tab active martor-preview" data-tab="preview-tab-content">
                        <p>给定一个长度为 <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-1-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>n</mi></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span class="math" id="MathJax-Span-1" role="math" style="width: 0.784em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.628em; height: 0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.565em, 1000.63em, 2.294em, -999.997em); top: -2.133em; left: 0.003em;"><span class="mrow" id="MathJax-Span-2"><span class="mi" id="MathJax-Span-3" style="font-family: MathJax_Math-italic;">n</span></span><span style="display: inline-block; width: 0px; height: 2.138em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.059em; border-left: 0px solid; width: 0px; height: 0.691em;"></span></span></nobr><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi></math></span></span><script type="math/tex" id="MathJax-Element-1">n</script> 的数组 <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-2-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><mo>&amp;#x2026;</mo><mo>,</mo><msub><mi>a</mi><mi>n</mi></msub></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span class="math" id="MathJax-Span-4" role="math" style="width: 6.721em; display: inline-block;"><span style="display: inline-block; position: relative; width: 5.576em; height: 0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.565em, 1005.58em, 2.503em, -999.997em); top: -2.133em; left: 0.003em;"><span class="mrow" id="MathJax-Span-5"><span class="msubsup" id="MathJax-Span-6"><span style="display: inline-block; position: relative; width: 0.94em; height: 0px;"><span style="position: absolute; clip: rect(3.44em, 1000.52em, 4.169em, -999.997em); top: -4.008em; left: 0.003em;"><span class="mi" id="MathJax-Span-7" style="font-family: MathJax_Math-italic;">a</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span><span style="position: absolute; top: -3.852em; left: 0.523em;"><span class="mn" id="MathJax-Span-8" style="font-size: 70.7%; font-family: MathJax_Main;">1</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span></span></span><span class="mo" id="MathJax-Span-9" style="font-family: MathJax_Main;">,</span><span class="msubsup" id="MathJax-Span-10" style="padding-left: 0.159em;"><span style="display: inline-block; position: relative; width: 0.94em; height: 0px;"><span style="position: absolute; clip: rect(3.44em, 1000.52em, 4.169em, -999.997em); top: -4.008em; left: 0.003em;"><span class="mi" id="MathJax-Span-11" style="font-family: MathJax_Math-italic;">a</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span><span style="position: absolute; top: -3.852em; left: 0.523em;"><span class="mn" id="MathJax-Span-12" style="font-size: 70.7%; font-family: MathJax_Main;">2</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span></span></span><span class="mo" id="MathJax-Span-13" style="font-family: MathJax_Main;">,</span><span class="mo" id="MathJax-Span-14" style="font-family: MathJax_Main; padding-left: 0.159em;">…</span><span class="mo" id="MathJax-Span-15" style="font-family: MathJax_Main; padding-left: 0.159em;">,</span><span class="msubsup" id="MathJax-Span-16" style="padding-left: 0.159em;"><span style="display: inline-block; position: relative; width: 1.044em; height: 0px;"><span style="position: absolute; clip: rect(3.44em, 1000.52em, 4.169em, -999.997em); top: -4.008em; left: 0.003em;"><span class="mi" id="MathJax-Span-17" style="font-family: MathJax_Math-italic;">a</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span><span style="position: absolute; top: -3.852em; left: 0.523em;"><span class="mi" id="MathJax-Span-18" style="font-size: 70.7%; font-family: MathJax_Math-italic;">n</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span></span></span></span><span style="display: inline-block; width: 0px; height: 2.138em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.309em; border-left: 0px solid; width: 0px; height: 0.878em;"></span></span></nobr><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>a</mi><mi>n</mi></msub></math></span></span><script type="math/tex" id="MathJax-Element-2">a_1,a_2,…,a_n</script>。</p>
<p>现在，要将该数组从中间截断，得到三个<strong>非空</strong>子数组。</p>
<p>要求，三个子数组内各元素之和都相等。</p>
<p>请问，共有多少种不同的截断方法？</p>
<h4>输入格式</h4>
<p>第一行包含整数 <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-3-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>n</mi></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span class="math" id="MathJax-Span-19" role="math" style="width: 0.784em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.628em; height: 0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.565em, 1000.63em, 2.294em, -999.997em); top: -2.133em; left: 0.003em;"><span class="mrow" id="MathJax-Span-20"><span class="mi" id="MathJax-Span-21" style="font-family: MathJax_Math-italic;">n</span></span><span style="display: inline-block; width: 0px; height: 2.138em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.059em; border-left: 0px solid; width: 0px; height: 0.691em;"></span></span></nobr><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi></math></span></span><script type="math/tex" id="MathJax-Element-3">n</script>。</p>
<p>第二行包含 <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-4-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>n</mi></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span class="math" id="MathJax-Span-22" role="math" style="width: 0.784em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.628em; height: 0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.565em, 1000.63em, 2.294em, -999.997em); top: -2.133em; left: 0.003em;"><span class="mrow" id="MathJax-Span-23"><span class="mi" id="MathJax-Span-24" style="font-family: MathJax_Math-italic;">n</span></span><span style="display: inline-block; width: 0px; height: 2.138em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.059em; border-left: 0px solid; width: 0px; height: 0.691em;"></span></span></nobr><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi></math></span></span><script type="math/tex" id="MathJax-Element-4">n</script> 个整数 <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-5-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><mo>&amp;#x2026;</mo><mo>,</mo><msub><mi>a</mi><mi>n</mi></msub></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span class="math" id="MathJax-Span-25" role="math" style="width: 6.721em; display: inline-block;"><span style="display: inline-block; position: relative; width: 5.576em; height: 0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.565em, 1005.58em, 2.503em, -999.997em); top: -2.133em; left: 0.003em;"><span class="mrow" id="MathJax-Span-26"><span class="msubsup" id="MathJax-Span-27"><span style="display: inline-block; position: relative; width: 0.94em; height: 0px;"><span style="position: absolute; clip: rect(3.44em, 1000.52em, 4.169em, -999.997em); top: -4.008em; left: 0.003em;"><span class="mi" id="MathJax-Span-28" style="font-family: MathJax_Math-italic;">a</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span><span style="position: absolute; top: -3.852em; left: 0.523em;"><span class="mn" id="MathJax-Span-29" style="font-size: 70.7%; font-family: MathJax_Main;">1</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span></span></span><span class="mo" id="MathJax-Span-30" style="font-family: MathJax_Main;">,</span><span class="msubsup" id="MathJax-Span-31" style="padding-left: 0.159em;"><span style="display: inline-block; position: relative; width: 0.94em; height: 0px;"><span style="position: absolute; clip: rect(3.44em, 1000.52em, 4.169em, -999.997em); top: -4.008em; left: 0.003em;"><span class="mi" id="MathJax-Span-32" style="font-family: MathJax_Math-italic;">a</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span><span style="position: absolute; top: -3.852em; left: 0.523em;"><span class="mn" id="MathJax-Span-33" style="font-size: 70.7%; font-family: MathJax_Main;">2</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span></span></span><span class="mo" id="MathJax-Span-34" style="font-family: MathJax_Main;">,</span><span class="mo" id="MathJax-Span-35" style="font-family: MathJax_Main; padding-left: 0.159em;">…</span><span class="mo" id="MathJax-Span-36" style="font-family: MathJax_Main; padding-left: 0.159em;">,</span><span class="msubsup" id="MathJax-Span-37" style="padding-left: 0.159em;"><span style="display: inline-block; position: relative; width: 1.044em; height: 0px;"><span style="position: absolute; clip: rect(3.44em, 1000.52em, 4.169em, -999.997em); top: -4.008em; left: 0.003em;"><span class="mi" id="MathJax-Span-38" style="font-family: MathJax_Math-italic;">a</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span><span style="position: absolute; top: -3.852em; left: 0.523em;"><span class="mi" id="MathJax-Span-39" style="font-size: 70.7%; font-family: MathJax_Math-italic;">n</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span></span></span></span><span style="display: inline-block; width: 0px; height: 2.138em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.309em; border-left: 0px solid; width: 0px; height: 0.878em;"></span></span></nobr><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>a</mi><mi>n</mi></msub></math></span></span><script type="math/tex" id="MathJax-Element-5">a_1,a_2,…,a_n</script>。</p>
<h4>输出格式</h4>
<p>输出一个整数，表示截断方法数量。</p>
<h4>数据范围</h4>
<p>前六个测试点满足 <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-6-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn><mo>&amp;#x2264;</mo><mi>n</mi><mo>&amp;#x2264;</mo><mn>10</mn></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span class="math" id="MathJax-Span-40" role="math" style="width: 5.628em; display: inline-block;"><span style="display: inline-block; position: relative; width: 4.69em; height: 0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.305em, 1004.64em, 2.451em, -999.997em); top: -2.133em; left: 0.003em;"><span class="mrow" id="MathJax-Span-41"><span class="mn" id="MathJax-Span-42" style="font-family: MathJax_Main;">1</span><span class="mo" id="MathJax-Span-43" style="font-family: MathJax_Main; padding-left: 0.263em;">≤</span><span class="mi" id="MathJax-Span-44" style="font-family: MathJax_Math-italic; padding-left: 0.263em;">n</span><span class="mo" id="MathJax-Span-45" style="font-family: MathJax_Main; padding-left: 0.263em;">≤</span><span class="mn" id="MathJax-Span-46" style="font-family: MathJax_Main; padding-left: 0.263em;">10</span></span><span style="display: inline-block; width: 0px; height: 2.138em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.247em; border-left: 0px solid; width: 0px; height: 1.066em;"></span></span></nobr><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>≤</mo><mi>n</mi><mo>≤</mo><mn>10</mn></math></span></span><script type="math/tex" id="MathJax-Element-6">1 \le n \le 10</script>。<br>
所有测试点满足 <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-7-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn><mo>&amp;#x2264;</mo><mi>n</mi><mo>&amp;#x2264;</mo><msup><mn>10</mn><mn>5</mn></msup></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span class="math" id="MathJax-Span-47" role="math" style="width: 6.148em; display: inline-block;"><span style="display: inline-block; position: relative; width: 5.107em; height: 0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.096em, 1005.11em, 2.451em, -999.997em); top: -2.133em; left: 0.003em;"><span class="mrow" id="MathJax-Span-48"><span class="mn" id="MathJax-Span-49" style="font-family: MathJax_Main;">1</span><span class="mo" id="MathJax-Span-50" style="font-family: MathJax_Main; padding-left: 0.263em;">≤</span><span class="mi" id="MathJax-Span-51" style="font-family: MathJax_Math-italic; padding-left: 0.263em;">n</span><span class="mo" id="MathJax-Span-52" style="font-family: MathJax_Main; padding-left: 0.263em;">≤</span><span class="msubsup" id="MathJax-Span-53" style="padding-left: 0.263em;"><span style="display: inline-block; position: relative; width: 1.409em; height: 0px;"><span style="position: absolute; clip: rect(3.18em, 1000.94em, 4.169em, -999.997em); top: -4.008em; left: 0.003em;"><span class="mn" id="MathJax-Span-54" style="font-family: MathJax_Main;">10</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span><span style="position: absolute; top: -4.424em; left: 0.992em;"><span class="mn" id="MathJax-Span-55" style="font-size: 70.7%; font-family: MathJax_Main;">5</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span></span></span></span><span style="display: inline-block; width: 0px; height: 2.138em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.247em; border-left: 0px solid; width: 0px; height: 1.316em;"></span></span></nobr><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>≤</mo><mi>n</mi><mo>≤</mo><msup><mn>10</mn><mn>5</mn></msup></math></span></span><script type="math/tex" id="MathJax-Element-7">1 \le n \le 10^5</script>，<span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax" id="MathJax-Element-8-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo>&amp;#x2212;</mo><mn>10000</mn><mo>&amp;#x2264;</mo><msub><mi>a</mi><mi>i</mi></msub><mo>&amp;#x2264;</mo><mn>10000</mn></math>" role="presentation" style="position: relative;"><nobr aria-hidden="true"><span class="math" id="MathJax-Span-56" role="math" style="width: 11.096em; display: inline-block;"><span style="display: inline-block; position: relative; width: 9.221em; height: 0px; font-size: 120%;"><span style="position: absolute; clip: rect(1.305em, 1009.17em, 2.451em, -999.997em); top: -2.133em; left: 0.003em;"><span class="mrow" id="MathJax-Span-57"><span class="mo" id="MathJax-Span-58" style="font-family: MathJax_Main;">−</span><span class="mn" id="MathJax-Span-59" style="font-family: MathJax_Main;">10000</span><span class="mo" id="MathJax-Span-60" style="font-family: MathJax_Main; padding-left: 0.263em;">≤</span><span class="msubsup" id="MathJax-Span-61" style="padding-left: 0.263em;"><span style="display: inline-block; position: relative; width: 0.836em; height: 0px;"><span style="position: absolute; clip: rect(3.44em, 1000.52em, 4.169em, -999.997em); top: -4.008em; left: 0.003em;"><span class="mi" id="MathJax-Span-62" style="font-family: MathJax_Math-italic;">a</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span><span style="position: absolute; top: -3.852em; left: 0.523em;"><span class="mi" id="MathJax-Span-63" style="font-size: 70.7%; font-family: MathJax_Math-italic;">i</span><span style="display: inline-block; width: 0px; height: 4.013em;"></span></span></span></span><span class="mo" id="MathJax-Span-64" style="font-family: MathJax_Main; padding-left: 0.263em;">≤</span><span class="mn" id="MathJax-Span-65" style="font-family: MathJax_Main; padding-left: 0.263em;">10000</span></span><span style="display: inline-block; width: 0px; height: 2.138em;"></span></span></span><span style="display: inline-block; overflow: hidden; vertical-align: -0.247em; border-left: 0px solid; width: 0px; height: 1.128em;"></span></span></nobr><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo>−</mo><mn>10000</mn><mo>≤</mo><msub><mi>a</mi><mi>i</mi></msub><mo>≤</mo><mn>10000</mn></math></span></span><script type="math/tex" id="MathJax-Element-8">−10000 \le a_i \le 10000</script>。</p>
<h4>输入样例1：</h4>
<pre class="hljs"><code>4
1 2 3 3
</code></pre>

<h4>输出样例1：</h4>
<pre class="hljs"><code>1
</code></pre>

<h4>输入样例2：</h4>
<pre class="hljs"><code>5
1 2 3 4 5
</code></pre>

<h4>输出样例2：</h4>
<pre class="hljs"><code>0
</code></pre>

<h4>输入样例3：</h4>
<pre class="hljs"><code>2
0 0
</code></pre>

<h4>输出样例3：</h4>
<pre class="hljs"><code>0
</code></pre>
                    </div>

```cpp
#include<iostream>
#include<vector>
using namespace std;

const int N = 100010;
typedef long long LL;

int n;
int s[N];
int main(){
    scanf("%d",&n);
    for(int i = 1;i <= n;i++){
        int x;
        scanf("%d",&x);
        s[i] = s[i - 1] + x;
    }
    if(s[n] % 3 )printf("0");
    else{
        LL flgcnt = 0;
        LL cnt =  0;
        for(int i = 2;i < n ;i++){
           if(s[i - 1]== s[n]/3) cnt++;//寻找第一次分割的位置。
           if(s[i] == s[n]/3*2) flgcnt += cnt;//找第二次分割的位置。
        }
        printf("%lld",flgcnt);    
    }
    return 0;
}
```

## 差分
差分数组和前缀和是反过来的
比如:
```cpp
原数组 arr[] = {1, 2, 3, 4, 5, 6, 7}
pre[0] = arr[0]
pre[1] = pre[0] + arr[1]
pre[i] = pre[i - 1] + arr[i]
前缀和 pre[] = {1, 3, 6,10,15,21,28}
cha[0] = arr[0]
cha[1] = arr[1] - arr[0]
cha[i] = arr[i] - arr[i-1]
差分   cha[] = {1, 1, 1, 1, 1, 1, 1}
```
用途:
对数列某区间进行批量修改  
例如对数列i到j都加一
```cpp
void change(int* a,int i,int j,int k){
	a[i] = a[i] + k;
	a[j + 1] = a[j + 1] - k;
}
//第i位加对应值，第j + 1位减去对应值。
```



```
3
6
0 3 0 0 1 3
10
0 0 0 1 0 5 0 0 0 2
3
0 0 0
```
## 合并区间
```cpp
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals){
        vector<vector<int>> ans ;
        int len = intervals.size();
        if(len == 1) return intervals;
        sort(intervals.begin(),intervals.end());
        int index = 0;
        ans.push_back(intervals[0]);
        for(int i = 1 ; i < len;i++){
            if(ans[index][1] < intervals[i][0])
            {ans.push_back({intervals[i][0],intervals[i][1]});
                index ++;}
            else{
                ans[index][1] = max(intervals[i][1],ans[index][1]);
            }
        }
        
        return ans;
    }
};
```

## 数组
[寻找数组的中心索引](寻找数组的中心索引.md)
遍历数组 然后寻找判断条件。
[搜索插入位置](搜索插入位置.md)
二分搜索法
[合并区间](合并区间)
将数组进行排序，然后判断条件。
### 二维数组

```cpp
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals){
        int index;
        int tmp;
        int len = intervals.size();
        index = len;
        for(int i = 0;i<len - 1;i++){
            for(int j = i + 1 ;j< len ;j++){
                if(intervals[i][0] > intervals[j][0]){
                    tmp = intervals[j][0];
                    intervals[j][0] = intervals[i][0];
                    intervals[i][0] = tmp;
                    tmp = intervals[j][1];
                    intervals[j][1] = intervals[i][1];
                    intervals[i][1] = tmp;
                }
            }
        }//排序
        for(int i = 0;i<len - 1;i++){
            for(int j = i + 1;j<len;j++ ){
                if(intervals[i][0] != -1){
                    if(intervals[i][1]>=intervals[j][0]){
                        if(intervals[j][1] > intervals[i][1]){
                            intervals[i][1] = intervals[j][1];
                            intervals[j][0] = -1;
                            intervals[j][1] = -1;
                            index --;
                        }else{
                            intervals[j][0] = -1;
                            intervals[j][1] = -1;
                            index--;
                        }
                    }
                }else{
                    break;
                }
            }
            
        }
         vector<vector<int>> ans(index);
        for(int i = 0;i<index;++i){
             ans[i].resize(2);
        }
        tmp = 0;
        for(int i = 0;tmp < len;){
            if(intervals[tmp][0] < 0){
                tmp++;
                continue;
            }
            ans[i][0] = intervals[tmp][0];
            ans[i][1] = intervals[tmp][1];
            tmp++;
            i++;
        }
        return ans;
    }
};
```