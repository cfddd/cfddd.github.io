import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as d,c as s,a as l,b as i,d as u,f as a}from"./app-62dd404b.js";const v={},c={id:"https-atcoder-jp-contests-arc132-tasks-arc132-c",tabindex:"-1"},o=l("a",{class:"header-anchor",href:"#https-atcoder-jp-contests-arc132-tasks-arc132-c","aria-hidden":"true"},"#",-1),r={href:"https://atcoder.jp/contests/arc132/tasks/arc132_c",target:"_blank",rel:"noopener noreferrer"},m=a(`<ul><li>很难想到的动态规划，优化空间的思路非常巧妙</li><li>用相对位置来转移</li><li>f[i][j]表示i之前，放置数字的压缩情况为j，的所有方案数</li><li>** f[i+1][(j | (1 &lt;&lt; k)) &gt;&gt; 1] += f[i][j] **</li><li>k表示i放的数字的相对位置</li><li>具体转移还是看代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
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
//#define int long long
using namespace std;

typedef long long LL;
typedef unsigned long long ULL;
typedef pair&lt;int,int&gt; PII;
typedef pair&lt;LL,LL&gt; PLL;

//#pragma GCC optimize(3,&quot;Ofast&quot;,&quot;inline&quot;)
//#pragma GCC optimize(2)

const int N = 510,mod = 998244353;
int f[N][1&lt;&lt;15];                                //表示i之前的所有数字的使用情况，压缩为j
int a[N];                                       //通过相对位置来转移
                                                //因为像个的太远肯定彼此之间不会用到
void solve() 
{
    f[0][0] = 1;                    
    int n,d;cin &gt;&gt; n &gt;&gt; d;
    for(int i = 0;i &lt; n;i ++)
    {
        cin &gt;&gt; a[i];
        a[i] --;
    }

    for(int i = 0;i &lt; n;i ++)                   //位置
    {
        for(int j = 0;j &lt; 1&lt;&lt;(2*d + 1);j ++)    //状态
        {

            if(a[i] &gt;= 0)                       //a[i]大于0的情况
            {
                int temp = a[i] - i + d;        //已经放的数字对应的相对位置
                if(~j&gt;&gt;temp&amp;1)(f[i+1][(j | (1&lt;&lt;temp)) &gt;&gt; 1] += f[i][j]) %= mod;
                continue;
            }

            for(int k = 0;k &lt; 2*d+1;k ++)       //a[i]是-1的情况
            {
                int newi = k - d + i;
                if(newi &lt; 0 || newi &gt;= n)continue;
                if(j&gt;&gt;k&amp;1)continue;             
                (f[i+1][(j|(1&lt;&lt;k)) &gt;&gt; 1] += f[i][j]) %= mod;
            }
        }
    }
    // for(int i = 0;i &lt;= n;i ++)                   //位置
    // {
    //     debug2(i,f[i][(1&lt;&lt;d) - 1]);
    // }
    cout &lt;&lt; f[n][((1&lt;&lt;d) - 1)] &lt;&lt; endl;             //((1&lt;&lt;d) - 1)d个1的二进制，正好是n之前所有的
    
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(q,f){const t=e("ExternalLinkIcon");return d(),s("div",null,[l("h1",c,[o,i(),l("a",r,[i("https://atcoder.jp/contests/arc132/tasks/arc132_c"),u(t)])]),m])}const _=n(v,[["render",b],["__file","C-AlmostSorted.html.vue"]]);export{_ as default};
