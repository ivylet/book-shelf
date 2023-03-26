
## 题目
难度：Medium
<p>给你一个整数数组 <code>prices</code> ，其中&nbsp;<code>prices[i]</code> 表示某支股票第 <code>i</code> 天的价格。</p>

<p>在每一天，你可以决定是否购买和/或出售股票。你在任何时候&nbsp;<strong>最多</strong>&nbsp;只能持有 <strong>一股</strong> 股票。你也可以先购买，然后在 <strong>同一天</strong> 出售。</p>

<p>返回 <em>你能获得的 <strong>最大</strong> 利润</em>&nbsp;。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>prices = [7,1,5,3,6,4]
<strong>输出：</strong>7
<strong>解释：</strong>在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
&nbsp;    随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
     总利润为 4 + 3 = 7 。</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>prices = [1,2,3,4,5]
<strong>输出：</strong>4
<strong>解释：</strong>在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
&nbsp;    总利润为 4 。</pre>

<p><strong>示例&nbsp;3：</strong></p>

<pre>
<strong>输入：</strong>prices = [7,6,4,3,1]
<strong>输出：</strong>0
<strong>解释：</strong>在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0 。</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= prices.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
</ul>
## 分析
题目中关键词"你可以先购买，然后在同一天售出"，题目的意思是交易不受限制，所以如果今天买明天卖不亏的话我就可以直接买，这样不影响明天之后的操作，所以我就从今天开始就选择最优解，然后一直按照这种情况，那么直到最后一天我就可以得到结果。题目主要的关键词是今天的操作与明天之后的操作没有关联。
## 题解

### 我的题解

```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        int fast = 1;
        int tmp = 0;
        while(fast <n){
            if(prices[fast] >= prices[fast-1]){
                tmp += prices[fast] - prices[fast-1];
            }
            ++fast;
        }
        return tmp;
    }
};
```

### 官方题解

#### 动态规划

```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int len = prices.size();
        int dp[len][2];
        dp[0][0] = 0;
        dp[0][1] = -prices[0];
        for(int i = 1;i<len;++i)
        {
            dp[i][0] = dp[i - 1][1] + prices[i] > dp[i - 1][0]?dp[i - 1][1] + prices[i]:dp[i - 1][0];
            dp[i][1] = dp[i - 1][1] > dp[i - 1][0] - prices[i]?dp[i - 1][1]:dp[i - 1][0] - prices[i];
        }
        return dp[len - 1][0];
    }
};
```

每天的情况其实只和昨天有关，然后每天的情况其实就是手上有没有股票。然后可以建立dp[i]\[0]与dp[i]\[1]来表示第i天手上有没有股票，然后第二天根据今天的股票情况来计算手上有股票的最大值和手上没股票的最大值，最后一直推到最后一天手上没股票的最大值，就是最终结果。
```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int len = prices.size();
        int dp[2][2];
        dp[0][0] = 0;
        dp[0][1] = -prices[0];
        for(int i = 1;i<len;++i)
        {
            dp[i%2][0] = dp[(i - 1)%2][1] + prices[i] > dp[(i - 1)%2][0]?dp[(i - 1)%2][1] + prices[i]:dp[(i - 1)%2][0];
            dp[i%2][1] = dp[(i - 1)%2][1] > dp[(i - 1)%2][0] - prices[i]?dp[(i - 1)%2][1]:dp[(i - 1)%2][0] - prices[i];
        }
        return dp[(len - 1)%2][0];
    }
};
```
然后再优化，其实最后的结果只和前一天有关，前一天只和前前一天有关，所以只需要存储两天的数值就可以搞定。

#### 贪心

```c++
class Soluion{
	public:
	  int maxProfit(vector<int>& prices) {
		  int len = prices.size();
		  int ans = 0;
		  for(int i = 1;i < len;++i)
		  {
			  ans += max(prices[i-1]-prices[i],0);
		  }
		  return ans;
	  }
}
```
贪心算法的核心是每次选择解决问题的最优解，加在一起就是总问题的最优解了。因为今天股票可以在今天同时买入和卖出，所以今天的决策不影响明天的。所以我们每次的最优解就是，如果今天买明天卖不亏钱就可以选择，如果亏了就选择今天不买。

