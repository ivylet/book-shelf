
## 题目
难度：Easy
<p>请实现一个函数，把字符串 <code>s</code> 中的每个空格替换成&quot;%20&quot;。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>s = &quot;We are happy.&quot;
<strong>输出：</strong>&quot;We%20are%20happy.&quot;</pre>

<p>&nbsp;</p>

<p><strong>限制：</strong></p>

<p><code>0 &lt;= s 的长度 &lt;= 10000</code></p>

## 分析
题意是查找空格并替换，可以遍历这个字符串然后找到空格，然后替换。可以采用原地替换，不过要扩充长度。
也可以定义一个新字符串，长度为三倍的输入字符串长度，因为最坏情况为全是空格，也可以遍历字符串查询有多少个空格然后再根据数量判断字符串长度。
## 题解

```cpp
class Solution {
public:
    string replaceSpace(string s) {
        string ans;
        for(int i = 0;i<s.length();i++){
            if(s[i] == 32)
            {
                ans.push_back('%');
                ans.push_back('2');
                ans.push_back('0');
             }
            else
            {
                ans.push_back(s[i]);
            }
        }
        return ans;
    }
};

// 原地修改
class Solution { 
public: 
	string replaceSpace(string s) { 
		int count = 0, len = s.size(); // 统计空格数量 
		for (char c : s) { 
			if (c == ' ') 
				count++; 
			} // 修改 s 长度 
			s.resize(len + 2 * count); // 倒序遍历修改 
			for(int i = len - 1, j = s.size() - 1; i < j; i--, j--) {
				 if (s[i] != ' ') 
					 s[j] = s[i]; 
				 else { 
				 s[j - 2] = '%'; 
				 s[j - 1] = '2'; 
				 s[j] = '0'; 
				 j -= 2; 
				 } 
			 } 
			 return s; 
		 } 
	}; 
```