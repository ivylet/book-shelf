
## 题目
难度：Medium
<p>给你一个 32 位的有符号整数 <code>x</code> ，返回将 <code>x</code> 中的数字部分反转后的结果。</p>

<p>如果反转后整数超过 32 位的有符号整数的范围 <code>[−2<sup>31</sup>,  2<sup>31 </sup>− 1]</code> ，就返回 0。</p>
<strong>假设环境不允许存储 64 位整数（有符号或无符号）。</strong>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>x = 123
<strong>输出：</strong>321
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>x = -123
<strong>输出：</strong>-321
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>x = 120
<strong>输出：</strong>21
</pre>

<p><strong>示例 4：</strong></p>

<pre>
<strong>输入：</strong>x = 0
<strong>输出：</strong>0
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code></li>
</ul>

## 分析

比如 123 反转为 321. 历程是3 32 321 3*10 + 2 32*10 +1 另外需要注意的是题设中要求只计算32位数字即int所能存储的最大数。这里需要添加判断条件：当数很大的时候或者很小，注意细节。

## 题解
```cpp
class Solution {
	public:
	int reverse(int x) {
		int ans = 0;
		int tmp;
		while(x != 0){
			tmp = x % 10;
			x = x/10;
			if(ans >= 0){
				if(ans < 214748364){
					ans = ans * 10 + tmp;
				}
				else{
					if(ans == 214748364 && x <= 7)
						ans = ans * 10 + tmp;
					else
						return 0;
					}
			}
			else{
				if(ans> - 214748364){
					ans = ans * 10 + tmp;
				}
				else{
					if(ans == -214748364 && x >= -8 )
						ans = ans * 10 + tmp;
					else
						return 0;
					}
				}
			}
		return ans;
	}
};
```

