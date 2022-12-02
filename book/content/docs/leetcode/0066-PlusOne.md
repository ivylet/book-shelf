---
title: 66. 加一
date: 2022-12-02T14:56:26+08:00
---
## 题目
<div class="px-5 pt-4"><div class="_1l1MA"><p>给定一个由 <strong>整数 </strong>组成的<strong> 非空</strong> 数组所表示的非负整数，在该数的基础上加一。</p>

<p>最高位数字存放在数组的首位， 数组中每个元素只存储<strong>单个</strong>数字。</p>

<p>你可以假设除了整数 0 之外，这个整数不会以零开头。</p>

<p>&nbsp;</p>

<p><strong>示例&nbsp;1：</strong></p>

<pre><strong>输入：</strong>digits = [1,2,3]
<strong>输出：</strong>[1,2,4]
<strong>解释：</strong>输入数组表示数字 123。
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre><strong>输入：</strong>digits = [4,3,2,1]
<strong>输出：</strong>[4,3,2,2]
<strong>解释：</strong>输入数组表示数字 4321。
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>digits = [0]
<strong>输出：</strong>[1]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= digits.length &lt;= 100</code></li>
	<li><code>0 &lt;= digits[i] &lt;= 9</code></li>
</ul>
</div></div>
## 分析
## 题解
```c++
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int n = digits.size() - 1;
        while(n >= 0){
            digits[n]++;
            if(digits[n] == 10){
                digits[n] = 0;
            }else{
                return digits;
            }
            n--;
        }
        digits.insert(digits.begin(),1);
        return digits;
    }
};
```