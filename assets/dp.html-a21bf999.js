import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as v,a as i,b as n,d as r,f as a}from"./app-f94c3d64.js";const c={},u=i("h2",{id:"题目",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),t={href:"https://codeforces.com/problemset/problem/1811/E",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li>找出第n个，数位中不含‘4’的数字</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>数位dp + 二分</li><li>唯一要注意的就是纯dfs搜索会卡常（hh，就是复杂度太高了），用上一点记忆化</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const int N = 14;
int dp[N][N];
int a[N];
int len;
 
void ini()
{
    for (int i = 0; i &lt;= 9; i++)
        dp[0][i] = 1;
    dp[0][4] = 0;
 
    for (int i = 1; i &lt; N; i++) // 从低位到高位
    {
        for (int j = 0; j &lt;= 9; j++)
        {
            if (j == 4)
                continue;
            for (int k = 0; k &lt;= 9; k++)
            {
                if (k == 4)
                    continue;
                dp[i][j] += dp[i - 1][k];
            }
        }
    }
}
 
int cal(int x)
{
 
    if (!x)
        return 1;
    len = 0;
    while (x)
        a[len++] = x % 10, x /= 10;
 
    int last = -1;
    int res = 0;
    for (int i = len - 1; i &gt;= 0; i--)
    {
        for (int j = 0; j &lt; a[i]; j++)
        {
            if (j == 4)
                continue;
            res += dp[i][j];
        }
 
        if (a[i] == 4)
            return res;
        last = a[i];
        if (!i)
            res++; // 最后一位的那个数字
    }
 
    return res;
}
 
void solve()
{
    int k;
    cin &gt;&gt; k;
    int l = 0, r = 4e12;
    while(l &lt; r)
    {
        int mid = l + r + 1 &gt;&gt; 1;
        if(cal(mid) &lt;= k)
            l = mid;
        else
            r = mid - 1;
    }
    cout &lt;&lt; l + 1 &lt;&lt; endl;
}
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(o,h){const e=d("ExternalLinkIcon");return s(),v("div",null,[u,i("p",null,[i("a",t,[n("1811E - Living Sequence"),r(e)])]),m])}const _=l(c,[["render",b],["__file","dp.html.vue"]]);export{_ as default};
