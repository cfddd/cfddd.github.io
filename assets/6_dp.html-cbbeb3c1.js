import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as d,a as i,b as s,d as a,f as u}from"./app-8cc557db.js";const v={},c={href:"https://atcoder.jp/contests/abc259/tasks/abc259_f",target:"_blank",rel:"noopener noreferrer"},r=i("li",null,"树形dp（最简单的那种类型，但是题目的方法还是很巧妙的）",-1),o=i("li",null,"易知：负权边可以忽略",-1),b=u(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><ul><li>定义f[i][0]表示以i为根的子树尽量用到d[i]-1条边的最大可能（留一条边给父节点联通用）</li><li>f[i][1]表示以i为根的子树尽量用到d[i]条边的最大可能</li></ul><h3 id="转移" tabindex="-1"><a class="header-anchor" href="#转移" aria-hidden="true">#</a> 转移</h3><ul><li>就是那个最简单的树形dp，不能相邻放的</li><li>f[i][0] = f[j][1],f[j][0] + w[idx]（j为前d[i]-1条最大的子路）</li><li>f[i][1] = f[i][0] + (接着最大的一条边)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
#define debug1(a) cout&lt;&lt;#a&lt;&lt;&#39;=&#39;&lt;&lt; a &lt;&lt; endl;
#define debug2(a,b) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;endl;
#define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;endl;
#define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;&quot;  &quot;&lt;&lt;#d&lt;&lt;&quot; = &quot;&lt;&lt;d&lt;&lt;endl;
#define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;&quot;  &quot;&lt;&lt;#d&lt;&lt;&quot; = &quot;&lt;&lt;d&lt;&lt;&quot;  &quot;&lt;&lt;#e&lt;&lt;&quot; = &quot;&lt;&lt;e&lt;&lt;endl;
#define debug0(x) cout &lt;&lt; &quot;debug0: &quot; &lt;&lt; x &lt;&lt; endl
#define fr(t, i, n)for (long long i = t; i &lt; n; i++)
#define YES cout&lt;&lt;&quot;Yes&quot;&lt;&lt;endl
#define nO cout&lt;&lt;&quot;no&quot;&lt;&lt;endl
#define fi first
#define se second
#define int long long
using namespace std;

typedef long long LL;
typedef unsigned long long ULL;
typedef pair&lt;int,int&gt; PII;
typedef pair&lt;LL,LL&gt; PLL;

//#pragma GCC optimize(3,&quot;Ofast&quot;,&quot;inline&quot;)
//#pragma GCC optimize(2)

const int N = 3e5+10,M = N*2;
int h[N], e[M], ne[M], w[M], idx;
int d[N];
int f[N][2];
bool st[N];
void add(int a, int b,int c)  // 添加一条边a-&gt;b
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;
}

void solve() 
{
    for(int i=0; i&lt;N; i++)h[i] = -1;

    int n;cin &gt;&gt; n;
    for(int i = 1;i &lt;= n;i ++)cin &gt;&gt; d[i];
    for(int i = 0; i &lt; n-1; i++)
    {
        int a,b,c;cin &gt;&gt; a &gt;&gt; b &gt;&gt; c;
        if(c &lt; 0)continue;
        add(a,b,c);
        add(b,a,c);
    }

    function&lt;void(int,int)&gt; dfs = [&amp;](int u,int p)
    {
        st[u] = 1;
        
        vector&lt;int&gt; extra;
        int inist = 0;
        for(int i = h[u];i != -1;i = ne[i])
        {
            int j = e[i];
            if(j == p)continue;
            dfs(j,u);
            inist += f[j][1];
            if(d[j] &amp;&amp; f[j][0] + w[i] - f[j][1] &gt; 0)extra.push_back(f[j][0] + w[i] - f[j][1]);
        }
        sort(extra.begin(),extra.end(),greater&lt;int&gt;());
        
        f[u][0] = f[u][1] = inist;
        for(int i = 0;i &lt; min(d[u],(int)extra.size());i ++)
        {
            f[u][0] = f[u][1];
            f[u][1] += extra[i];
        }
        if(d[u] &gt; (int)extra.size())f[u][0] = f[u][1];
        
    };

    int ans = 0;
    for(int i = 1;i &lt;= n;i ++)
        if(!st[i]){
            
            dfs(i,-1);
            //debug3(i,f[i][1],f[i][0]);
            ans += max(f[i][0],f[i][1]);
        }

    cout &lt;&lt; ans &lt;&lt; endl;
}

signed main()
{
    /*
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    */
    int T = 1;//cin &gt;&gt; T;
	
    while(T--){
        solve();
    }
    return 0;
}
/*

*/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(f,q){const n=e("ExternalLinkIcon");return t(),d("div",null,[i("ul",null,[i("li",null,[i("a",c,[s("https://atcoder.jp/contests/abc259/tasks/abc259_f"),a(n)])]),r,o]),b])}const p=l(v,[["render",m],["__file","6_dp.html.vue"]]);export{p as default};
