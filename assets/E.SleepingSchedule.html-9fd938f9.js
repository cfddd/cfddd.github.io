import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as a,a as e,b as n,d as t,f as s}from"./app-587dee3d.js";const c={},o=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),u={href:"https://codeforces.com/contest/1324/problem/E",target:"_blank",rel:"noopener noreferrer"},v={href:"https://codeforces.com/contest/1324/problem/E%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},h=s('<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li><p>输入 n(≤2000) h L R (0≤L≤R&lt;h≤2000) 和长为 n 的数组 a(1≤a[i]&lt;h)。</p></li><li><p>对于每个 a[i]，你可以把它减一，或者保持不变（换句话说，每个 a[i] 至多 -1 一次）。</p></li><li><p>定义前缀和 s[0]=a[0], s[i]=s[i-1]+a[i]。</p></li><li><p>如果 s[i]%h 落在闭区间 [L,R] 内，则分数加一。</p></li><li><p>最大化分数。</p></li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>',3),m=e("li",null,"定义dfs(i,j)为第i次睡觉的时间为j的最大分数",-1),f=e("li",null,"转移dfs(i,j) = max(dfs(t1,s+1) + (t1 >= l && t1 <= r),dfs(t2,s+1) + (t2 >= l && t2 <= r));",-1),b=e("li",null,"观察每个数字转移的时候，可以减一或者不减一，那么很明显,对于一个中间阶段有太多的重复到达的方式",-1),p={href:"https://codeforces.com/blog/entry/74714",target:"_blank",rel:"noopener noreferrer"},_=s(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const double eps = 1e-6;
const double PI = acos(-1.0);
const int INF = 0x3f3f3f3f;
const int N = 2010;
int a[N];
int f[N][N];//count
int n,h,l,r;

int dfs(int t,int s)
{
    if(s &gt; n)return 0;
    if(f[t][s] != -1)return f[t][s];
    int t1 = (t + a[s]) % h,t2 = (t + a[s] + h - 1) % h;
    return f[t][s] = max(dfs(t1,s+1) + (t1 &gt;= l &amp;&amp; t1 &lt;= r),dfs(t2,s+1) + (t2 &gt;= l &amp;&amp; t2 &lt;= r));
}

void solve() 
{
    cin &gt;&gt; n &gt;&gt; h &gt;&gt; l &gt;&gt; r;
    for(int i = 1;i &lt;= n;i ++)cin &gt;&gt; a[i];

    memset(f,-1,sizeof f);
    cout &lt;&lt; dfs(0,1) &lt;&lt; endl;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(x,E){const i=r("ExternalLinkIcon");return d(),a("div",null,[o,e("ul",null,[e("li",null,[n("["),e("a",u,[n("https://codeforces.com/contest/1324/problem/E"),t(i)]),n("]（"),e("a",v,[n("https://codeforces.com/contest/1324/problem/E）"),t(i)])])]),h,e("ul",null,[m,f,b,e("li",null,[n("所以记忆化搜索很容易写，也可以直接递推["),e("a",p,[n("https://codeforces.com/blog/entry/74714"),t(i)]),n("]（官方题解）")])]),_])}const L=l(c,[["render",g],["__file","E.SleepingSchedule.html.vue"]]);export{L as default};
