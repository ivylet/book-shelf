
## 题目
难度：Medium
<p>给你一个大小为 <code>m x n</code> 的矩阵 <code>mat</code> ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg" style="width: 334px; height: 334px;" />
<pre>
<strong>输入：</strong>mat = [[1,2,3],[4,5,6],[7,8,9]]
<strong>输出：</strong>[1,2,4,7,5,3,6,8,9]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>mat = [[1,2],[3,4]]
<strong>输出：</strong>[1,2,3,4]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>m == mat.length</code></li>
	<li><code>n == mat[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>5</sup> &lt;= mat[i][j] &lt;= 10<sup>5</sup></code></li>
</ul>

## 分析
直接法，第一条线是在00上，第二条线是01 10，第三条线是02 11 20。每条线的i，j之和是相同的。所以可以通过设置两个和为定值的变量进行控制每条线上数组的内容，此外还要注意方向，每转一次都要改变方向，这个可以使用s的奇偶来判断。
## 题解
```cpp
class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
        int m = mat.size();
        int n = mat[0].size();
        vector<int> ans;
        for(int s = 0;s < m + n - 1 ;s++){
            for(int i = 0 ; s-i>=0 ;i++){
                    if(s%2 == 1){
                        if(s - i < n && i < m )
                            ans.push_back(mat[i][s-i]);
                   }
                    else{
                        if(s - i < m && i < n)
                            ans.push_back(mat[s-i][i]);
                    }
            }
        }
        return ans;
    }
};

//优化版
class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat){
        int m = mat.size();
        int n = mat[0].size();
        vector<int> ans;
        for(int s = 0;s < m + n - 1 ;s++){
            if(!(s%2)){
                int row =(s < m)?s:m-1;
                int col =s - row;
                while(col < n && row >= 0){
                    ans.push_back(mat[row--][col++]);
                }
            }else{
                int col =  (s < n)?s:n - 1;
                int row =  s - col;
                while(col >= 0 && row < m){
                    ans.push_back(mat[row++][col--]);
                }
            }
        }
        return ans;
    }
};
```