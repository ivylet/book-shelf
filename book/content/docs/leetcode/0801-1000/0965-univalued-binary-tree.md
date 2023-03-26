
## 题目
难度：Easy
<p>如果二叉树每个节点都具有相同的值，那么该二叉树就是<em>单值</em>二叉树。</p>

<p>只有给定的树是单值二叉树时，才返回&nbsp;<code>true</code>；否则返回 <code>false</code>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/screen-shot-2018-12-25-at-50104-pm.png" style="height: 159px; width: 200px;"></p>

<pre><strong>输入：</strong>[1,1,1,1,1,null,1]
<strong>输出：</strong>true
</pre>

<p><strong>示例 2：</strong></p>

<p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/screen-shot-2018-12-25-at-50050-pm.png" style="height: 158px; width: 200px;"></p>

<pre><strong>输入：</strong>[2,2,2,5,2]
<strong>输出：</strong>false
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ol>
	<li>给定树的节点数范围是&nbsp;<code>[1, 100]</code>。</li>
	<li>每个节点的值都是整数，范围为&nbsp;<code>[0, 99]</code>&nbsp;。</li>
</ol>

## 分析

## 题解
```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isUnivalTree(TreeNode* root) {

    }
};
```