
## 题目
难度：Medium
<p>以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> 。请你合并所有重叠的区间，并返回&nbsp;<em>一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间</em>&nbsp;。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>intervals = [[1,3],[2,6],[8,10],[15,18]]
<strong>输出：</strong>[[1,6],[8,10],[15,18]]
<strong>解释：</strong>区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre>
<strong>输入：</strong>intervals = [[1,4],[4,5]]
<strong>输出：</strong>[[1,5]]
<strong>解释：</strong>区间 [1,4] 和 [4,5] 可被视为重叠区间。</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>
	<li><code>intervals[i].length == 2</code></li>
	<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
</ul>

## 分析
这个题关键点是处理前对数组进行排序，然后只用分析当前数组与下一位数组的关系了。  
创建新数组，然后添加第一项，再根据第二项的区间的左端点与右端点的关系来对判断是否添加进数组或修改原数组内容。
## 题解
```cpp
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals){
        vector<vector<int>> ans ;
        int len = intervals.size();
        if(len == 1) return intervals;
        sort(intervals.begin(),intervals.end());
        int index = 0;
        ans.push_back(intervals[0]);
        for(int i = 1 ; i < len;i++){
            if(ans[index][1] < intervals[i][0])
            {ans.push_back({intervals[i][0],intervals[i][1]});
                index ++;}
            else{
                ans[index][1] = max(intervals[i][1],ans[index][1]);
            }
        }        
        return ans;
    }
};