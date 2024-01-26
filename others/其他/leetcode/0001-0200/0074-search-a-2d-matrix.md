
## 题目
难度：Medium
<p>编写一个高效的算法来判断 <code>m x n</code> 矩阵中，是否存在一个目标值。该矩阵具有如下特性：</p>

<ul>
	<li>每行中的整数从左到右按升序排列。</li>
	<li>每行的第一个整数大于前一行的最后一个整数。</li>
</ul>

<p> </p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>输入：</strong>matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
<strong>输出：</strong>true
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/11/25/mat2.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>输入：</strong>matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
<strong>输出：</strong>false
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 <= m, n <= 100</code></li>
	<li><code>-10<sup>4</sup> <= matrix[i][j], target <= 10<sup>4</sup></code></li>
</ul>

## 分析
遍历全体数组,记录下为0的行与列i，j信息。然后再根据i，j将对应的行与列置为零。
## 题解
```cpp
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        vector<int> row;
        vector<int> col;
        for(int i = 0;i < m;i++){
            for(int j = 0;j < n;j++)
                if(matrix[i][j] == 0){
                    row.push_back(i);
                    col.push_back(j);
                }
            }
        }
        for(int i = 0;i < row.size();i++){
            for(int j = 0;j < n;j++){
                matrix[row[i]][j] = 0;
              }
              for(int j = 0;j <m ;j++){
                matrix[j][col[i]] = 0;
              }
        }
    }
};
//优化方案 优化内存使用
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        int row_sign = false,col_sign = false;
        for(int i = 0;i< m;i++){
            if(matrix[i][0] == 0){
                row_sign = true;
                break;
            }
        }
        for(int j = 0;j < n;j++){
            if(matrix[0][j] == 0){
                col_sign = true;
                break;
            }
        }
        for(int i = 1;i< m;i++){
            for(int j = 1;j<n;j++){
                if(matrix[i][j] == 0){
                    matrix[i][0] = matrix[0][j] = 0;
                }
            }
        }
        for(int i = 1;i< m;i++){
            for(int j = 1;j<n;j++){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0;
                }
            }
        }
        if(row_sign == true){
            for(int i = 0;i<m;i++){
                matrix[i][0] = 0;
            }
        }
        if(col_sign == true){
            for(int j = 0;j<n;j++){
                matrix[0][j] = 0;
            }
        }
        }

};
```