
## 题目
难度：Medium
<p>给定一个整数数组 <code>nums</code>，将数组中的元素向右轮转 <code>k</code><em>&nbsp;</em>个位置，其中&nbsp;<code>k</code><em>&nbsp;</em>是非负数。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> nums = [1,2,3,4,5,6,7], k = 3
<strong>输出:</strong> <code>[5,6,7,1,2,3,4]</code>
<strong>解释:</strong>
向右轮转 1 步: <code>[7,1,2,3,4,5,6]</code>
向右轮转 2 步: <code>[6,7,1,2,3,4,5]
</code>向右轮转 3 步: <code>[5,6,7,1,2,3,4]</code>
</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre>
<strong>输入：</strong>nums = [-1,-100,3,99], k = 2
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
然后是进行数组翻转，由于我们已经知道轮转后的数组是什么样，可以根据结果与原数组进行比较。
[1,2,3,4,5,6,7] -> [5,6,7,1,2,3,4] 可以看做为两部分 一部分是由于后边的数组轮转而导致的位置后移，另一部分是在数组末端而因为轮转后移到前端。这两部分可以通过先进行全部翻转，再对这两部分进行分别翻转而得到结果。
```c++
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        reverse(nums.begin(),nums.end());
        int len = nums.size();
        k = k % nums.size();
        reverse(nums.begin(),nums.begin()+k);
        reverse(nums.begin()+k,nums.end());
    }
};
```
### 其他方法
该方法是根据第一种方法优化得到的。将第一位置上的数与第k个位置上的数替换，就相当于nums[0]移动到了nums[k]，但是为了防止直接替换后原nums[k]丢失，则将nums[k]换到nums[0]。然后考虑下一位置，即原nums[k]移动后的位置，再重复操作进行替换。直到最后应该换到数组首位的数完成替换，这是进行了第一轮。
举例 k = 2，gcd(len,k) = 4
[1,2,3,4,5,6] -> [3,2,1,4,5,6] -> [5,2,1,4,3,6]
1 与 3 替换，3 与 5 替换
[5,2,1,4,3,6] -> [5,4,1,2,3,6] -> [5,6,1,2,3,4]
2 与 4 替换，4 与 6 替换
```c++
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int len = nums.size();
        k = k % len;
        int count = gcd(len,k);
        for(int start = 0;start < count;++start){
            int current = start;
            do{
                int next = (current + k)%len;
                swap(nums[next],nums[start]);
                current = next;
            }while(current != start);
        }
    }    
};
```