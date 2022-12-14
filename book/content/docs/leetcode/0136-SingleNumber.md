---
title: 只出现一次的数字
date: 2022-11-30T17:12:00+08:00
---
## 题目
<div class="px-5 pt-4"><div class="_1l1MA"><p>给你一个 <strong>非空</strong> 整数数组 <code>nums</code> ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。</p>

<p>你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。</p>

<div class="original__bRMd">
<div>
<p>&nbsp;</p>

<p><strong class="example">示例 1 ：</strong></p>

<pre><strong>输入：</strong>nums = [2,2,1]
<strong>输出：</strong>1
</pre>

<p><strong class="example">示例 2 ：</strong></p>

<pre><strong>输入：</strong>nums = [4,1,2,1,2]
<strong>输出：</strong>4
</pre>

<p><strong class="example">示例 3 ：</strong></p>

<pre><strong>输入：</strong>nums = [1]
<strong>输出：</strong>1
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></li>
	<li>除了某个元素只出现一次以外，其余每个元素均出现两次。</li>
</ul>
</div>
</div>
</div></div>
## 分析
除开条件只能使用线性时间复杂度和常数空间复杂度，可以使用集合，哈希表等方法。
提取关键点，数组中只包含出现一次的数字（待求数字）与其他均出现两次的数字。可以联想到使用异或运算来判断出只出现一次的数字，因为异或运算有交换律。

## 题解
使用位运算
```c++
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans = 0;
        for(int i:nums){
            ans = ans^i;
        }
        return ans;
    }
};
```