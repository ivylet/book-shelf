
## 题目
难度：Medium
<p>给你一个有序数组 <code>nums</code> ，请你<strong><a href="http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地</a></strong> 删除重复出现的元素，使得出现次数超过两次的元素<strong>只出现两次</strong> ，返回删除后数组的新长度。</p>

<p>不要使用额外的数组空间，你必须在 <strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地 </a>修改输入数组 </strong>并在使用 O(1) 额外空间的条件下完成。</p>

<p>&nbsp;</p>

<p><strong>说明：</strong></p>

<p>为什么返回数值是整数，但输出的答案是数组呢？</p>

<p>请注意，输入数组是以<strong>「引用」</strong>方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p>

<p>你可以想象内部操作如下:</p>

<pre>
// <strong>nums</strong> 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中<strong> 该长度范围内</strong> 的所有元素。
for (int i = 0; i &lt; len; i++) {
&nbsp; &nbsp; print(nums[i]);
}
</pre>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,1,1,2,2,3]
<strong>输出：</strong>5, nums = [1,1,2,2,3]
<strong>解释：</strong>函数应返回新长度 length = <strong><code>5</code></strong>, 并且原数组的前五个元素被修改为 <strong><code>1, 1, 2, 2,</code></strong> <strong>3 </strong>。 不需要考虑数组中超出新长度后面的元素。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [0,0,1,1,1,1,2,3,3]
<strong>输出：</strong>7, nums = [0,0,1,1,2,3,3]
<strong>解释：</strong>函数应返回新长度 length = <strong><code>7</code></strong>, 并且原数组的前五个元素被修改为&nbsp;<strong><code>0</code></strong>, <strong>0</strong>, <strong>1</strong>, <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, <strong>3 。</strong> 不需要考虑数组中超出新长度后面的元素。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> 已按升序排列</li>
</ul>

## 分析

根据第26题，重复的只筛选出一个的题解，可以在那一题的基础上增加标志位，进行解题。

## 题解

### 我的题解

```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int slow = 1;
        int idx = 1; 
        for(int fast = 1;fast<nums.size();++fast){
            if(nums[fast] != nums[fast - 1]){
                // if(fast != slow){
                    nums[slow] = nums[fast];
                    idx = 1;
                // }
                slow++;
            }else{
                idx++;
                if(idx <= 2){
                    nums[slow] = nums[fast];
                    slow++;
                }
            }
        }
        return slow;
    }
};
```

我这里应该是采用了通解的方法，如果更改可以重复元素的个数，这个题解还可以使用。但是有更好的方法，就只针对该题而言。

### 官方解法

这种方法掌握了双指针的精髓吧，在数组中，慢指针用于定位要改变的位置，快指针用于确定要改变的值。

```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int n = nums.size();
        if(n<=2)return n;
        int fast = 2;
        int slow = 2;
        for(;fast<n;fast++){
            if(nums[fast] != nums[slow-2]){
                nums[slow] = nums[fast];
                slow++;
            }
            
        }
        return slow;
    }
};

```

### 其他解法

```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int k = 0;
        for(int x: nums)
            if(k < 2 || (nums[k - 1] != x || nums[k - 2] != x))
                nums[k ++ ] = x;
        return k;
        
    }
};
```


```