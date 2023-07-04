import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as a,a as e,b as i,d as r,f as t}from"./app-85eb831d.js";const c={},v=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),i(" 题目")],-1),o={href:"https://codeforces.com/problemset/problem/1141/F2",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li>忽略；</li><li>给出一个数组，求和相等的，不重叠子串的最大数量，并输出</li><li>（题目有点绕）</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>先求出数组前缀和，然后找出所有数字和的区间数组</li><li>对不同的和进行贪心操作————找最多不重叠区间数量</li><li>一个经典思路，按照右边界排序（左端点升序），遍历直到当前区间左边界大于上一次区间的右边界，更新左边界，然后计数</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
//常数定义
const double eps = 1e-6;
const double PI = acos(-1.0);
const int INF = 0x3f3f3f3f;
const int N = 1510;

int a[N];
void solve() 
{
    int n;cin &gt;&gt; n;
    for(int i = 1;i &lt;= n;i ++)
    {
        cin &gt;&gt; a[i];
        a[i] += a[i-1];
    }

    map&lt;int,vector&lt;PII&gt;&gt; seg;
    for(int i = 1;i &lt;= n;i ++)
    {
        for(int j = 1;j &lt;= i;j ++)
        {
            seg[a[i] - a[j-1]].push_back({j,i});
        }
    }

    vector&lt;PII&gt; ans;
    for(auto &amp;[id,edge]:seg)
    {
        vector&lt;PII&gt; res;
        int r = -INF;
        for(auto x:edge)
        {
            if(x.fi &gt; r)r = x.se,res.push_back(x);
        }
        if(ans.size() &lt; res.size())ans = res;
    }

    cout &lt;&lt; ans.size() &lt;&lt; endl;
    for(auto [l,r]:ans)cout &lt;&lt; l &lt;&lt; &quot; &quot; &lt;&lt; r &lt;&lt; endl;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,h){const n=s("ExternalLinkIcon");return d(),a("div",null,[v,e("ul",null,[e("li",null,[e("a",o,[i("https://codeforces.com/problemset/problem/1141/F2"),r(n)])])]),u])}const p=l(c,[["render",m],["__file","F2.SameSumBlocks.html.vue"]]);export{p as default};
