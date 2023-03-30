---
title: 数论
---

## 质数
针对所有大于1的自然数定义的，只包含1和本身两个约数的自然数叫做质数（素数）。
#### 质数的判定
##### 试除法
```cpp
bool is_prime(int n){
	if(n < 2) return false;
	for(int  i = 2; i <= n ; i++){
		if(n % i ==  0) return false;
	}
	return true;
}
```
O(n);
如果i包含其他因子，那么这因子应该是成双成对出现的。比如12的因子有{1,2,3,4,6,12}。
这里只需要遍历成对中的第一个就可以了，
如果n可以被d整除，证明d是n的一个因子，那么另外一个与其对应的因子是n除以`n除以d的商`。所以我只需要遍历到第一个因子就可以了，即d满足大于n除以d的商，d大于根号n就OK。时间复杂度可以降到根号n。
```cpp
bool is_prime(int n){
	if(n < 2) return false;
	for(int  i = 2; i <= n / i ; i++){
		if(n % i ==  0) return false;
	}
	return true;
}
```
O(sqrt(n));
不使用sqrt(i)可以降低时间复杂度，每次循环都会计算一次。如果使用`i * i <= n`，则可能存在 `i * i`溢出风险，变成负值。
#### 分解质因数
什么是质因数？  
一个数的某对因子均为质数。比如6的因子有2和3，这对因子就是质因数。
从小到大枚举所有约数。
##### 试除法
```cpp
void divide(int n){
	for(int i = 2; i <= n; i++)
	{
		if(n % i == 0)
		{
			
		}
	}
}
```