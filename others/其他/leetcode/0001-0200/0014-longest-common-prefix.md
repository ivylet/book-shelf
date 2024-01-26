
## 题目
难度：Easy
<p>编写一个函数来查找字符串数组中的最长公共前缀。</p>

<p>如果不存在公共前缀，返回空字符串&nbsp;<code>""</code>。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>strs = ["flower","flow","flight"]
<strong>输出：</strong>"fl"
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>strs = ["dog","racecar","car"]
<strong>输出：</strong>""
<strong>解释：</strong>输入不存在公共前缀。</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> 仅由小写英文字母组成</li>
</ul>

## 分析
求最长公共前缀，用直接法，就是先比较前两个公共前缀，得出后再将公共前缀与下一个进行对比，最后得到的结果就是最长公共前缀。也可以采用纵向切割的方法，就是先看每个字符串第一位是否相同，相同则查看第二位、第三位，通过这样来找到最长公共前缀。分治法，分为左边和右边两部分，找最长公共前缀，找到再进行对比，每一小部分也可以使用分治法进行解决。也可以将字符串数组进行排序，排序得到的字符串数组直接对比首位和末尾位两个字符串即可。

## 题解
```cpp
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        int num = strs.size();
        if(num == 1) return strs[0];
        string ans = strs[0];
        for(int i = 1;i < num;i++){
            ans = FindCommonPrefix(ans,strs[i]);
            if(ans == "")
                return "";
        }
        return ans;
    }
    string FindCommonPrefix(string& str1,string& str2){
        int m = min(str1.size(),str2.size());
        string prefix = "";
        for(int i = 0;i < m;i++){
            if(str1[i] == str2[i]) prefix = prefix + str1[i];
            else break;
        }
        return prefix;
    }
};
//字符串排序
class Solution {
public:
    string longestCommonPrefix(vector<string>& str) {
        sort(str.begin(), str.end());
        string &s1 = str.front();
        string &s2 = str.back();
        int i=0;
        while(i < s1.size() && i < s2.size() && s1[i] == s2[i]){
            ++i;
        }
        return string(s1.begin(), s1.begin()+i); 
    }
};
```