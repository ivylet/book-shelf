
## 题目
难度：Easy
<p>给定一个数组 <code>nums</code>，编写一个函数将所有 <code>0</code> 移动到数组的末尾，同时保持非零元素的相对顺序。</p>

<p><strong>请注意</strong>&nbsp;，必须在不复制数组的情况下原地对数组进行操作。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入:</strong> nums = <code>[0,1,0,3,12]</code>
<strong>输出:</strong> <code>[1,3,12,0,0]</code>
</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入:</strong> nums = <code>[0]</code>
<strong>输出:</strong> <code>[0]</code></pre>

<p>&nbsp;</p>

<p><strong>提示</strong>:</p>
<meta charset="UTF-8" />

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= nums[i] &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>

<p>&nbsp;</p>

<p><b>进阶：</b>你能尽量减少完成的操作次数吗？</p>

## 分析
## 题解
暴力的方法，参考冒泡排序的思想，这次变成了发现0就往后排，但是会出现两个0的情况，这样就换不了，所以是双层循环，但是显而易见。超时啦！
```c++
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int len = nums.size();
        for(int j = 0;j< len -1;++j){
           for(int i=0;i<len - 1;++i){
                if(nums[i] == 0){
                    swap(nums[i],nums[i+1]);
                }
            }
        }
        return;
    }
};
```
我觉得可以优化一下：

使用双指针，慢指针找需要移动的零，快指针找需要移动的非零，快指针指到最后就结束！
```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int len = nums.size();
        int slow = 0;//找0
        int fast = 1;//找非零
        while(fast < len){
            if(nums[slow] == 0&& nums[fast] != 0){
                swap(nums[slow],nums[fast]);
                slow++;
                fast++;
                continue;
            }
            if(nums[slow] != 0 && nums[fast] != 0){
                slow++;
                fast++;
                continue;
            }
            if(nums[slow] == 0 && nums[fast] ==0 ){
                fast++;
                continue;
            }
            if(nums[slow] != 0 && nums[fast] == 0){
                slow++;
                fast++;
                continue;
            }
    }
    return;
    }
};
```
改良版
```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int len = nums.size();
        int slow = 0;//找
        int fast = 1;//找非零
        while(fast < len){
            if(nums[slow] == 0){
                if(nums[fast] != 0){
                    nums[slow] = nums[fast];
                    nums[fast] = 0;
                    slow++;
                    fast++;
                }else{
                    fast++;
                }
            }else{
                slow++;
                fast++;
            }  
        }
        return;
    }
};
```
其他方法:
```cpp
class Solution { public static void moveZeroes(int[] nums) { int count = 0; for (int i = 0; i < nums.length; i++) { if (nums[i] == 0) {count++;continue;} nums[i - count] = nums[i]; } while (count>0){ nums[nums.length-count]=0; count--; } } }
``````