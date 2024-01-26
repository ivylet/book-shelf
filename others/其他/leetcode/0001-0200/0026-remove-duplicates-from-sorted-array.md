
## 题目
难度：Easy
<p>给你一个 <strong>升序排列</strong> 的数组 <code>nums</code> ，请你<strong><a href="http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地</a></strong> 删除重复出现的元素，使每个元素 <strong>只出现一次</strong> ，返回删除后数组的新长度。元素的 <strong>相对顺序</strong> 应该保持 <strong>一致</strong> 。</p>

<p>由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 <code>k</code> 个元素，那么&nbsp;<code>nums</code>&nbsp;的前 <code>k</code> 个元素应该保存最终结果。</p>

<p>将最终结果插入&nbsp;<code>nums</code> 的前 <code>k</code> 个位置后返回 <code>k</code> 。</p>

<p>不要使用额外的空间，你必须在 <strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地 </a>修改输入数组 </strong>并在使用 O(1) 额外空间的条件下完成。</p>

<p><strong>判题标准:</strong></p>

<p>系统会用下面的代码来测试你的题解:</p>

<pre>
int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}</pre>

<p>如果所有断言都通过，那么您的题解将被 <strong>通过</strong>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,1,2]
<strong>输出：</strong>2, nums = [1,2,_]
<strong>解释：</strong>函数应该返回新的长度 <strong><code>2</code></strong> ，并且原数组 <em>nums </em>的前两个元素被修改为 <strong><code>1</code></strong>, <strong><code>2 </code></strong><code>。</code>不需要考虑数组中超出新长度后面的元素。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [0,0,1,1,1,2,2,3,3,4]
<strong>输出：</strong>5, nums = [0,1,2,3,4]
<strong>解释：</strong>函数应该返回新的长度 <strong><code>5</code></strong> ， 并且原数组 <em>nums </em>的前五个元素被修改为 <strong><code>0</code></strong>, <strong><code>1</code></strong>, <strong><code>2</code></strong>, <strong><code>3</code></strong>, <strong><code>4</code></strong> 。不需要考虑数组中超出新长度后面的元素。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> 已按 <strong>升序</strong> 排列</li>
</ul>

## 分析
直接的方法就是从头到尾进行遍历，有相同的两项就进行操作，主要是看如何操作。
## 题解
```cpp
class Solution {
public:
  int removeDuplicates(vector<int>& nums) {
        if(nums.size() == 1) return 1;
        int tp1 = nums[0];
        int tp2 = nums[1];
        int len = nums.size();
        int i = 1;
        while(i < len)
        {
            if(tp1 == tp2)
            {
                nums.erase(nums.begin()+i,nums.begin()+i+1);
                len--;
                tp2 = nums[i];
            }
            else
            {
                ++i;
                tp1 = nums[i-1];
                tp2 = nums[i]; }
        }
        return len;
  };
};
//然后看起来挺长的，感觉挺靠谱 但实际上时空上开销相比来说很大。主要原因应该是没有好好利用题目所给的，只要求数组的前` k` 项需要符合题意即可。所以我所使用的`erase`函数很占时间，并且使用了四个变量开辟空间。不太行。
//官解
class Solution {
public:
  int removeDuplicates(vector<int>& nums) {
    int slow = 1;
    for(int fast = 1;fast<nums.size();++fast){
        if(nums[fast] != nums[fast-1]){
            if(fast - slow >= 1)// 优化，避免出现前n个符合情况但是需要一直赋值。
                nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
  };
};
``````