
## 题目
难度：Medium
<p>给定一个 <em>n&nbsp;</em>×&nbsp;<em>n</em> 的二维矩阵&nbsp;<code>matrix</code> 表示一个图像。请你将图像顺时针旋转 90 度。</p>

<p>你必须在<strong><a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank"> 原地</a></strong> 旋转图像，这意味着你需要直接修改输入的二维矩阵。<strong>请不要 </strong>使用另一个矩阵来旋转图像。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg" style="height: 188px; width: 500px;" />
<pre>
<strong>输入：</strong>matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>输出：</strong>[[7,4,1],[8,5,2],[9,6,3]]
</pre>

<p><strong>示例 2：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg" style="height: 201px; width: 500px;" />
<pre>
<strong>输入：</strong>matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
<strong>输出：</strong>[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>n == matrix.length == matrix[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 20</code></li>
	<li><code>-1000 &lt;= matrix[i][j] &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>

## 分析
旋转矩阵，首先考虑四个角的情况，大概就是转三次，然后可以得到结果。但是当N>2时，除了四个角还有旁边和内部的需要旋转。矩阵的两个对角线上的正方形可以采用四个角旋转这种情况，其他点则根据位置关系来交换。  
或者也可以先进行水平翻转，即第一行翻转到最后一行等，然后再沿着主对角线进行翻转。
## 题解
```cpp
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();//矩阵宽度
        int times = n/2;//
        for(int i = 0;i < times ;i++){
            swap(matrix[i][i],matrix[i][n - i - 1]);
            swap(matrix[i][i],matrix[n - i - 1][i]);
            swap(matrix[n - i - 1][i],matrix[n - i - 1][n - i - 1]);
            for(int j = 0;j < n - 2*(i+1);j++){
            swap(matrix[i][i + j + 1],matrix[i + j + 1][n - i - 1]);
            swap(matrix[i][i + j + 1],matrix[n - i - j - 2][i]);
            swap(matrix[n - i - j - 2][i],matrix[n - i - 1][n - i - j - 2]);
            }
        }
    }
};
// 水平翻转与沿主对角线翻转
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int len = matrix.size();
        for(int i = 0 ; i < len/2 ; i++){
            for(int j = 0 ; j < len ; j++){
                swap(matrix[i][j],matrix[len - i - 1][j]);
            }
        }
        for(int i = 0;i < len;i++){
            for(int j = 0; j < len;j++){
                if(j  >= i)//只转应该转的数
                swap(matrix[i][j],matrix[j][i]);
            }
        }
    }
};
```