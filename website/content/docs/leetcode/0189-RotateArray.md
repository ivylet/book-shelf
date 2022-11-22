---
title: 189. 轮转数组
date: 2022-11-22T15:18:59+08:00
---
## 题目
<div class="px-5 pt-4"><div class="_1l1MA"><p>给你一个数组，将数组中的元素向右轮转 <code>k</code><em>&nbsp;</em>个位置，其中&nbsp;<code>k</code><em>&nbsp;</em>是非负数。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre><strong>输入:</strong> nums = [1,2,3,4,5,6,7], k = 3
<strong>输出:</strong> <code>[5,6,7,1,2,3,4]</code>
<strong>解释:</strong>
向右轮转 1 步: <code>[7,1,2,3,4,5,6]</code>
向右轮转 2 步: <code>[6,7,1,2,3,4,5]
</code>向右轮转 3 步: <code>[5,6,7,1,2,3,4]</code>
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre><strong>输入：</strong>nums = [-1,-100,3,99], k = 2
<strong>输出：</strong>[3,99,-1,-100]
<strong>解释:</strong> 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>

<p><strong>进阶：</strong></p>

<ul>
	<li>尽可能想出更多的解决方案，至少有 <strong>三种</strong> 不同的方法可以解决这个问题。</li>
	<li>你可以使用空间复杂度为&nbsp;<code>O(1)</code> 的&nbsp;<strong>原地&nbsp;</strong>算法解决这个问题吗？</li>
</ul>

<ul>
</ul>

<ul>
</ul>
</div></div>

## 分析
题目是意思是数组向右轮转，即整体往右边移动，最右边数组末尾自动补齐到最左边数组开头。首次提交使用的最暴力的方法，没有考虑到k>len的情况，然后可以使用 `k = k % len;`来解决。
## 题解
### 我的题解
首先是暴力解，直接创建一个新数组，然后根据原数组进行赋值，最后将原数组复制给新数组得到结果。这种当时是最差的罢。
```c++
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        vector<int> array;
        int len = nums.size();
        array.resize(len);
        if(k == 0)return;
        k = k % len;
        for(int i=0;i<len;i++){
            if(i<k){
                array[i] = nums[len-k+i];
            }else{
                array[i] = nums[i-k];
            }
        }
        for(int i=0;i<len;++i){
            nums[i] = array[i];
        }
        return;
    }
};
```
