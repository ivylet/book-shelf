
## 题目
难度：Easy
给你一个整数数组 <code>nums</code> 。如果任一值在数组中出现 <strong>至少两次</strong> ，返回 <code>true</code> ；如果数组中每个元素互不相同，返回 <code>false</code> 。
<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,2,3,1]
<strong>输出：</strong>true</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,2,3,4]
<strong>输出：</strong>false</pre>

<p><strong>示例&nbsp;3：</strong></p>

<pre>
<strong>输入：</strong>nums = [1,1,1,3,3,4,3,2,4,2]
<strong>输出：</strong>true</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

## 分析



## 题解
直接冒泡排序，在交换的同时判断有没有相同的两个，有就直接返回，没有就继续，直到排序完成。但是超时了，呜呜。。。
```c++
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        int len = nums.size();
        for(int i = 0;i<len - 1;++i ){
            for(int j = 0;j<len - 1;++j){
                if(nums[j] == nums[j+1])
                    return true;
                else if(nums[j]>nums[j+1])
                    swap(nums[j],nums[j+1]);
            }
        }
        return false;
    }
};
```
然后使用STL内部的排序函数，结果就成了。虽然时空消耗也不是很理想。
```c++
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int len = nums.size();
        for(int i = 0;i<len - 1;++i){
            if(nums[i] == nums[i+1])
                return true;
        }
        return false;
    }
};
```
看了官解，还以为有什么巧妙的解法，发现其实都还是使用数据结构的特性，哈希表，集合等。
使用集合
```c++
class Solution { 
public: 
	bool containsDuplicate(vector<int>& nums) { 
		unordered_set<int> s; for (int x: nums){
			if (s.find(x) != s.end()){
				return true;
			}
			s.insert(x); 
		} 
		return false; 
	   } 
};
```
或使用哈希表
```c++
class Solution { 
public: 
	bool containsDuplicate(vector<int>& nums) {
		unordered_set<int> s;
        for(int i = 0; i < nums.size(); i++){
            if(s.count(nums[i])) return true;
            s.insert(nums[i]);
        }
        return false;
	}
};
```
```