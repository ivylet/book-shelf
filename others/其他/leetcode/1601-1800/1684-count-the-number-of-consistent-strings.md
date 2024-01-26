
## 题目
难度：Easy
<p>给你一个由不同字符组成的字符串 <code>allowed</code> 和一个字符串数组 <code>words</code> 。如果一个字符串的每一个字符都在 <code>allowed</code> 中，就称这个字符串是 <strong>一致字符串 </strong>。</p>

<p>请你返回 <code>words</code> 数组中 <strong>一致字符串</strong> 的数目。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<b>输入：</b>allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
<b>输出：</b>2
<b>解释：</b>字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<b>输入：</b>allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
<b>输出：</b>7
<b>解释：</b>所有字符串都是一致的。
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<b>输入：</b>allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
<b>输出：</b>4
<b>解释：</b>字符串 "cc"，"acd"，"ac" 和 "d" 是一致字符串。
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 <= words.length <= 10<sup>4</sup></code></li>
	<li><code>1 <= allowed.length <=<sup> </sup>26</code></li>
	<li><code>1 <= words[i].length <= 10</code></li>
	<li><code>allowed</code> 中的字符 <strong>互不相同</strong> 。</li>
	<li><code>words[i]</code> 和 <code>allowed</code> 只包含小写英文字母。</li>
</ul>

## 解题

### 我的解法-暴力解

先来暴力解法，采用了set集合中元素不相同的结构。定义一个set集合allo，将allowed中的元素放入，再遍历words中每一项的字符串中的字符是否在allo中，如果有则不符合条件 。

set插入还是很慢的


```c++
class Solution {
public:
    int countConsistentStrings(string allowed, vector<string>& words) {
        int count = 0;
        set<char> allo;
        int flag = 0;
        for (int i = 0; i < allowed.length(); ++i){allo.insert(allowed.c_str()[i]);}
        for (int i = 0; i < words.size(); ++i)
        {
            for (int j = 0; j < words[i].length(); ++j)
            {
                if (allo.count(words[i].c_str()[j]) == 0)
                {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0){count++;}
            else{flag=0;}
        }
        return count;
    }
};
```

### 官解-位运算

题目条件是`allowed`是只有26位并且全为小写且不重复，可以使用26位二进制数`mask`进行表示哪些字母出现。int类型一般而言为32位。我们可以遍历`words`中每一个字符串，然后对其进行相同的运算，如果运算后的数`mask1`和`mask`相同，那么就可以让结果`count`加1。

```cpp
class Solution {
public:
    int countConsistentStrings(string allowed, vector<string>& words) {
        int mask = 0;
        for (auto c : allowed) {
            mask |= 1 << (c - 'a');//或运算，二进制位有1就为1，两个1就还是1.
        }
        int res = 0;
        for (auto &&word : words) {
            int mask1 = 0;
            for (auto c : word) {
                mask1 |= 1 << (c - 'a');
            }
            if ((mask1 | mask) == mask) {//如果有不同的位置上有1，那么这个就不成立。
                res++;
            }
        }
        return res;
    }
};
```