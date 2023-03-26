
常用的算法
- [求素数(质数)](#求素数(质数))
- [求最小公倍数](#求最小公倍数)

#### 求素数(质数)
思想：  
判断一个数是否为素数，就是判断这个数是否有1和本身以外的因子。则可以
```cpp
bool isPrime(int k)
{
	for(int i = 2;i < k;i++)
	{
		if(k%i == 0)
		{
			return false;
		}
	}
	return true;
}
```
或者使用开根号法，用2到根号n来判断n是否为质数。
```cpp
bool isPrime(int k)
{
	for(int i = 2;i <=sqrt(k);i++)
	{
		if(k%i == 0)
		{
			return false;
		}
	}
	return true;
}
```