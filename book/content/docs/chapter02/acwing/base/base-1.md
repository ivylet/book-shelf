---
title: 基础算法一
---
## 快速排序
##### 主要思想: 
在数组中选择一个值，然后遍历数组，比这个值大的放到这个值后边，比这个值小的放到这个值的前边。
##### 代码实现
```cpp
void quick_sort(int q[], int l, int r){
	if(l >= r) return;
	int x = q[(l + r) >> 1], i = l - 1, j = r + 1;
	while(i < j)
	{
		do i ++ ; while(q[i] < x);
		do j -- ; while(q[j] > x);
		if(i < j) swap(q[i],q[j]);
	} 
	quick_sort(q,l, j);
	quick_sort(q,j+1,r);
}
```
为什么最后是j与j+1呢?  
因为范围确保的是左边是小于等于x，右边大于等于x。而循环判断结束的限制是i<j,则可能出现的情况是`i=j`或`i = j + 1`。如果是`i=j+1`那么左边为l到i不满足左边都小于等于x，因为`q[i]>x`。那为什么不是l到i-1呢？如果是l到i-1那么可能出现只有两个数的情况，然后划分的时候右边化为空集，左边为两个数的数组，此时陷入无尽循环。
## 归并排序
##### 主要思想: 
将数组拆分为两部分，前半部分和后半部分，然后这两部分分别进行排序。排序完成后从这两个数组开头开始比较，较小的数先插入到数组头位置，以此类推。
##### 代码实现
```cpp
void merged_sort(int a[],int l,int r){
    if(l >= r) return;
    int mid = (l + r)>>1;
    merged_sort(a,l,mid);
    merged_sort(a,mid+1,r);
    int k = l,i = l,j = mid + 1;
    while(i <= mid&&j <= r){
        if(a[i] < a[j]) tmp[k++] = a[i++];
        else tmp[k++] = a[j++];
    }
    while(i <= mid)   tmp[k++] = a[i++];
    while(j <= r) tmp[k++] = a[j++];
    for(int i = l; i <= r ;i++) a[i] = tmp[i];
}
```
## 二分
##### 主要思想
假设目标值在闭区间`[l, r]`中， 每次将区间长度缩小一半，当l = r时，我们就找到了目标值。
有单调性可以二分，使用二分不一定有单调性。
### 整数二分
选择不同版本主要是看check函数，如果答案在`[l, mid]`和`[mid + 1, r]`与`[l, mid - 1]`和`[mid, r]`这两种情况中的一种，则需要判断是否在计算mid时多加一
###### 版本1
当我们将区间`[l, r]`划分成`[l, mid]`和`[mid + 1, r]`时，其更新操作是`r = mid`或者`l = mid + 1`;，计算mid时不需要加1。

C++ 代码模板：
```cpp
int bsearch_1(int l, int r)
{
    while (l < r)
    {
        int mid = l + r >> 1;
        if (check(mid)) r = mid;
        else l = mid + 1;
    }
    return l;
}
```
###### 版本1
当我们将区间`[l, r]`划分成`[l, mid - 1]`和`[mid, r]`时，其更新操作是`r = mid - 1`或者`l = mid`;，此时为了防止死循环，计算mid时需要加1。

C++ 代码模板：
```cpp
int bsearch_2(int l, int r)
{
    while (l < r)
    {
        int mid = l + r + 1 >> 1;
        if (check(mid)) l = mid;
        else r = mid - 1;
    }
    return l;
}
```
`check(mid)`函数一般表示数组的mid位是否大于等于要找的值，包含等于的情况则后边修改边界时是l或r等于mid。
两组差别是当更新边界时有`l = mid;r = mid - 1;`时，在计算mid时需要多加一来向上取整。
### 实数二分
比如求某个数开根号的结果，可以使用二分。
举个例子，求实数n开三次方的结果，保留6位小数。
```cpp
double q(double a){return a*a*a;}//求三次方
double sancigen(double n){
	double l = -n;
	double r =  n;
	double mid = 0;
	while(l - r > 1e-7){//当左右边界很接近的时候 就已经满足了答案。
		if(q(mid) > n)
			r = mid;
		else
			l = mid;
		mid = (l + r) / 2;
	}
	return l;
}
```
## 高精度
##### 应用场景
如果一个数据很大，大于`int`与`long long`的数据表示范围，即\[-$2^{31}$,$2^{31} - 1$\]和\[-$2^{63}$,$2^{63} - 1$\]无法表示.那么则需要进行高精度计算.c++中进行长数据运算会出现溢出为负的情况，而java、python没有这种问题（因为一般会自动转换为更大变量）。
一般情况为四种情况，大整数的加减乘除。  
### 计算前预处理
一般情况下，大数据int甚至`long long`存不下，我们可以使用数组存。一般使用大端模式，即高位存高位，低位存低位，便于高位进位，否则进位时需要把数组整体后移。 用vector存比较方便，因为有size()函数返回长度。
数据12345，在数组中存储的顺序是54321。
### 加法
计算过程就是类似模拟加减法运算。  
```cpp
vector<int> addBigInteger(vector<int> &A,vector<int> &B)
{
    vector<int> C;
	
    int t = 0;
    for(int i = 0; i < A.size()|| i < B.size();i++)
    {
        if(i < A.size()) t += A[i];
        if(i < B.size()) t += B[i];
        C.push_back(t%10);
        t /= 10;//大于10则有进位。
    }
    if(t)//最高位有进位，则再加一。
        C.push_back(1);
    return C;
}
```
### 减法
减法先考虑两个正数相减，其他情况可以转换为绝对值相加减，如两个负数相减可以转换为绝对值相加然后取反，正数负数相减可以转换为绝对值相减然后根据情况添加正负号。
可以先判断两个数哪个更大，用大的减去小的，再根据情况添加正负号。如果出现两个相同的数相减，需要处理前导0。
```cpp
bool cmp(vector<int> &A,vector<int> &B){
	if(A.size() != B.size()) return A.size() > B.size();
	for(int i = A.size() - 1; i >= 0;i--){
		if(A[i] != B[i]) return A[i] > B[i];
	}
	return true;
}
vector<int> subBigInteger(vector<int> &A,vector<int> &B)
{
	vector<int> C;
	int t = 0;
	for(int i = 0;i < A.size();i++)//默认A.size()>=B.size()
	{
		t = A[i] + t;
		if(i < B.size()) t -= B[i];
		C.push_back((t+10)%10);
		if(t >= 0) t = 0;
		else t = -1; 
		//if(t >= 0) C.push_back(t);
		//else {C.push_back(t + 10);t = -1;}
	}
	while(C.size()>1&&C.back() == 0) C.pop_back();//处理前导0
	return C;
}
```
### 乘法
乘法一般考虑大数据与小数据相乘，直接模拟计算乘法的过程。
```cpp
vector<int> multBigInteger(vector<int> &A,int B)
{
	vector<int> C;
	for(int i = 0,t =0;i < A.size() || t != 0;i++)//t != 0确保最高位进位 
	{
		if(i < A.size())
			t = t + A[i] * B;
		C.push_back(t%10);
		t = t/10;
	}
	while(C.size() > 1 && C.back() == 0)C.pop_back();//出现一个乘数为0的情况。
	return C;
}
```
### 除法
除法也是模拟的方法。不过细节稍微有点不同。
```cpp
vector<int> divBigInteger(vector<int> A,int B,int &d)
{
    vector<int> C;
    d = 0;
    for(int i = A.size() - 1; i >=0;i--)//除法是从最高位开始除的，所以这里从最高位开始。
    {
        d = A[i] + d*10;//列式除法最下方那个数字
        C.push_back(d / B);//列式除法最上方那一行的数字入C；
        d = d % B;//算完后的余数，留给下一位计算。
    }
    reverse(C.begin(),C.end());//由于C是正向加入，所以这里翻转。
    while(C.size() > 1 && C.back() == 0) C.pop_back();//除去前导0
    return C;
}
```
## 前缀和
前缀和是指用一个数组来存前i个数据的和，这样方便计算区间和的值。
### 一维前缀和
```cpp
const int N = 100010;
int s[N];
int a[N];
for(int i = 1; i <= n ;i++)
{
	s[i] = s[i - 1] + a[i];
}
```
当要计算区间l到r的和时。
```cpp
printf("%d",s[r] - s[l - 1]);
```
### 二维前缀和
计算前缀和数组
```cpp
const int N = 1010;
int a[N][N];
int s[N][N];
for(int i = 1;i <= n ;i++){
	for(int j = 1;j <= m ;j++){
		s[i][j] = a[i][j] + s[i][j - 1] + s[i-1][j] - s[i-1][j-1];
	}   
}
```
求区间(i,j)到(k,l)内矩形内的和
```cpp
printf("%d\n",s[k][l] - s[k][j - 1] - s[i - 1][l] + s[i - 1][j - 1]);
```
## 差分
差分是指用一个数组来存相邻数的差，这样方便处理对区间内的数都加上某个数的操作。
### 一维差分
定义插入函数
```cpp
const int N = 100010;
int arr[N];
int b[N];
void insert(int l,int r,int c)
{
    b[l] += c;
    b[r + 1] -= c;
}
```
区间内减去C
```cpp
b[l] = b[l] + c;
b[r + 1] = b[r + 1] - c;
        ```
求原数组，输出结果
```cpp
for(int i = 1;i <= n ;i++)
{
	b[i] += b[i-1];
}

for(int i = 1;i <= n ;i++)
{
	printf("%d ",b[i]);
}
```
### 二维差分
定义插入函数
```cpp
const int N = 1010;
int n,m,q;
int arr[N][N];
int b[N][N];
void insert(int x1,int y1,int x2,int y2,int c){
	b[x1][y1] += c;
	b[x2 + 1][y1] -= c;
	b[x1][y2 + 1] -= c;
	b[x2 + 1][y2 + 1] += c;
}
```
计算差分数组。
```cpp
while(q--){
	int x1,x2,y1,y2,c;
	scanf("%d%d%d%d%d",&x1,&y1,&x2,&y2,&c);
	insert(x1,y1,x2,y2,c);
}
```
逆运算求原数组并输出。
```cpp
    for(int i = 1; i<=n;i++)
        for(int j = 1;j<=m;j++){
            b[i][j] += b[i-1][j] + b[i][j-1] - b[i-1][j-1];
        }
    for(int i = 1;i <= n;i++){
        for(int j = 1; j<=m;j++){
            printf("%d ",b[i][j]);
        }
        printf("\n");
    }
```
## 双指针算法
一般用i,j两个指针来遍历数组。快速排序也使用了双指针的思想。
核心思想：  
将下面的朴素算法$O(n^2)$优化到$O(n)$  
```cpp
for(int i = 0;i<n;i++)
{
	for(int j = 0; j < n ;j ++){
		//具体逻辑
		check(i,j);
	}
}
```
基本模板：
```cpp
for(int i = 0,j=0;i<n;i++)
{
	while(i < j&&check(i,j))j++;
	//具体逻辑
}
```
#### 求最长不重复子列长度
数组不含重复数字的最长子列的长度。
朴素做法是遍历所有i，j。但是根据分析后发现，如果区间内无重复子列，i往后移动出现了重复子列，那么j只有往后移动才可能消去这个子列。往左则不满足i移动前的条件，即当前是最长无重复子列。
```cpp
int a[N];
int s[N];//用于确定区间内是否有重复数组，这也可以使用哈希表来判断。
for(int i = 0,j = 0;i < n;i++){
        s[a[i]] ++ ;
        while(s[a[i]] > 1){
        //如果存在重复数，则j往前移动
        //为什么不往后移动？因为当前j已经是满足上一个i的最右距离，只能往左了。
            s[a[j]] --;
            j ++;
        }
        res = max(res,i - j + 1);
}
```
## 位运算
### 常用操作
求n的二进制数的第k位，和第一个1的位置。
```cpp
int res = n>>k & 1;//将第k位右移到个位，然后与000001进行和运算。个位为1输出1否则输出0。
int lowbit(int n){
	return n&(-n);
	//return n&(~x + 1);
}
int num = lowbit(n);
```
用例
判断一个数的二进制数有多少个1。
```cpp
int num = 0;
while(x > 0){
	x -= lowbit(x);
	num ++;
}
printf("%d ",num);
```
## 离散化
##### 主要思想
在一个长区间，是很长很长的区间中，存在零散的数据。这种情况下找区间内的值，如果一个个遍历会很费时（因为区间很长），所以有了离散化的想法。  
一般是将数据依照顺序来与自然数一一对应.如果有区间那么也添加到其中.   
以一个题目为例:
[802. 区间和 - AcWing题库](https://www.acwing.com/problem/content/804/)
##### 全部代码
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

typedef pair<int, int> PII;

const int N = 300010;

int n, m;
int a[N], s[N];//定义离散化后的数组,与前缀和数组.

vector<int> alls;//存储需要离散化的值,并将其与自然数映射.
vector<PII> add, query;//存储添加数据对,与查询数据范围.

int find(int x)//根据离散化的数查询自然数对应的位置.
{
    int l = 0, r = alls.size() - 1;
    while (l < r)
    {
        int mid = l + r >> 1;
        if (alls[mid] >= x) r = mid;
        else l = mid + 1;
    }
    return r + 1;//因为要使用前缀和,所以一般数组以1开头,所以这里加一.
}

int main()
{
    cin >> n >> m;
    for (int i = 0; i < n; i ++ )
    {
        int x, c;
        cin >> x >> c;
        add.push_back({x, c});

        alls.push_back(x);//
    }

    for (int i = 0; i < m; i ++ )
    {
        int l, r;
        cin >> l >> r;
        query.push_back({l, r});

        alls.push_back(l);
        alls.push_back(r);
    }

    // 去重
    sort(alls.begin(), alls.end());
    alls.erase(unique(alls.begin(), alls.end()), alls.end());
	//担心一个点加两次数却被去重?
	//这里只存储位置,加数在后边遍历添加数据对中,
	//如果一个点多加两次,那么add中也有两条对应的.
	
    // 处理插入
    for (auto item : add)
    {
        int x = find(item.first);
        a[x] += item.second;
    }

    // 预处理前缀和
    for (int i = 1; i <= alls.size(); i ++ ) s[i] = s[i - 1] + a[i];

    // 处理询问
    for (auto item : query)
    {
        int l = find(item.first), r = find(item.second);
        cout << s[r] - s[l - 1] << endl;
    }

    return 0;
}
```
## 区间合并
##### 问题提出
给出`n`个区间范围,如果区间有公共范围,则合并.求最终剩下几个区间.
##### 主要思路
可以按照左端点大小进行排序,然后检查右端点与下一个区间的左端点的关系,如果包含则并入,否则不处理,划分到下一个区间,
##### 主要代码
```cpp
#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

const int N = 100010;
typedef pair<int,int> PAIR;

vector<PAIR> seg;


void merged(vector<PAIR>& seg){
    vector<PAIR> res;
    int st, ed;
    st = -2e9;
    ed = -2e9;
    sort(seg.begin(),seg.end());
    for(auto item:seg){
        if(ed < item.first){
            if(ed != -2e9){
                res.push_back({st,ed});    
            }
            st = item.first;
            ed = item.second;
        }else ed = max(ed,item.second);
    }
    if(st != -2e9) res.push_back({st,ed});   
    seg = res;
}
int main(){
    int n;
    cin >> n;
    for(int i = 0 ; i < n ;i ++){
        int l , r;
        cin >> l >> r;
        seg.push_back({l,r});
    }
    merged(seg);
    cout << seg.size();
    return 0;
}
```
大概就是这样了