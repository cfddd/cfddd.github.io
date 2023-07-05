import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as a,a as n,b as i,d as v,f as r}from"./app-8cc557db.js";const c={},t=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),i(" 题目")],-1),u={href:"https://codeforces.com/problemset/problem/1811/D",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li>给一个整数n（1 &lt;= n &amp;&amp; n &lt;= 44）</li><li>再给衣柜坐标x，y，从1开始，表示在一个长为f(n+1)，宽为f(n)的长方形里的某一个1*1的小正方形</li><li>长为f(n+1)，宽为f(n)的长方形，由两个1*1的正方形拼成，然后由2 ~ n边长的正方形拼成</li><li>f(n)表示斐波那契数列，f[0] = f[1] = 1</li><li>把x，y这个小正方形染色，问这个正方形能不能是最小正方形之一</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>用上下左右四个边界把这个长方形固定在坐标轴里</li><li>从n开始模拟，每次剪掉一个n*n的正方形，更新正方形的划定位置，可以发现每次只有两种方法</li><li>判断这个x，y能不能在留下来的长方形里面，直到n = 1，如果能，那么这个答案就是对的</li><li>如果中途失败，可以肯定不能</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int n, x, y;
const int N = 50;
int f[N];
void solve()
{
    cin &gt;&gt; n &gt;&gt; x &gt;&gt; y;
    int up = 1, down = f[n];
    int l = 1, r = f[n+1];
    while(n &gt; 1)
    {
        // debug4(up, down, l, r);
        if (down - up + 1 &gt; r - l + 1)
        {
            if (down - f[n] &gt;= x &amp;&amp; x &gt;= up)
            {
                down -= f[n];
            }
            else if (up + f[n] &lt;= x &amp;&amp; x &lt;= down)
            {
                up += f[n];
            }
            else
            {
                cout &lt;&lt; &quot;NO&quot; &lt;&lt; endl;
                return;
            }
        }
        else
        {

            if (r - f[n] &gt;= y &amp;&amp; y &gt;= l)
            {
                r -= f[n];
            }
            else if (l + f[n] &lt;= y &amp;&amp; y &lt;= r)
            {
                l += f[n];
            }
            else
            {
                cout &lt;&lt; &quot;NO&quot; &lt;&lt; endl;
                return;
            }
        }
        n--;
    }
    
    cout &lt;&lt; &quot;YES&quot; &lt;&lt; endl;
}

signed main()
{

    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    f[0] = f[1] = 1;
    for (int i = 2; i &lt;= 45;i ++)
        f[i] = f[i - 1] + f[i - 2];

    caseT
    solve();

    return 0;
}
/*

*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(o,f){const e=d("ExternalLinkIcon");return s(),a("div",null,[t,n("p",null,[n("a",u,[i(" D - Umka and a Long Flight"),v(e)])]),m])}const g=l(c,[["render",b],["__file","D-UmkaandaLongFlight.html.vue"]]);export{g as default};
