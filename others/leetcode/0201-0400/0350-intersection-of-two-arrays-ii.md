
## 题目
难度：Easy
<p>给你两个整数数组&nbsp;<code>nums1</code> 和 <code>nums2</code> ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums1 = [1,2,2,1], nums2 = [2,2]
<strong>输出：</strong>[2,2]
</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入：</strong>nums1 = [4,9,5], nums2 = [9,4,9,8,4]
<strong>输出：</strong>[4,9]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>

<p><strong><strong>进阶</strong>：</strong></p>

<ul>
	<li>如果给定的数组已经排好序呢？你将如何优化你的算法？</li>
	<li>如果&nbsp;<code>nums1</code><em>&nbsp;</em>的大小比&nbsp;<code>nums2</code> 小，哪种方法更优？</li>
	<li>如果&nbsp;<code>nums2</code><em>&nbsp;</em>的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？</li>
</ul>

## 分析
首先想到的是暴力解法，直接两个遍历，有数字相同则加入结果数组中，不过要注意细节。
## 题解
直接了当，暴力法。
```c++
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
	    if(nums1.size() > nums2.size())
		    return intersect(nums2,nums1);
        int len1 = nums1.size();
        int len2 = nums2.size();
        vector<int> ans;
		for(int i = 0;i<len1;i++){
			for(int j = 0;j<len2;j++){
				if(nums1[i] == nums2[j]){
					ans.push_back(nums1[i]);
					nums2[j] = -1;
					break;
				}
			}
		}
        return ans;
    }
};
```
或者进行排序，然后使用双指针
```c++
class Solution { 
	public: 
		vector<int> intersect(vector<int>& nums1, vector<int>& nums2){
			vector<int> ans; 
			sort(nums1.begin(),nums1.end()); 
			sort(nums2.begin(),nums2.end()); 
			int len1 = nums1.size(); 
			int len2 = nums2.size(); 
			int p1 = 0; 
			int p2 = 0; 
			while(p1<len1&&p2<len2){
				if(nums1[p1] < nums2[p2]){p1++;} 
				else if(nums1[p1] == nums2[p2]){
					ans.push_back(nums1[p1]);
					p1++; 
					p2++; 
				} 
				else if(nums1[p1]>nums2[p2]){ p2 ++;} 
			}
			return ans;
		} 
};
```
或者使用哈希表
```