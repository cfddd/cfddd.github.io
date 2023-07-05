import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as d,a as l,b as s,d as u,f as v}from"./app-587dee3d.js";const a={},c={href:"https://atcoder.jp/contests/arc116/tasks/arc116_d",target:"_blank",rel:"noopener noreferrer"},o=v(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
#define debug1(a) cout&lt;&lt;#a&lt;&lt;&#39;=&#39;&lt;&lt; a &lt;&lt; endl;
#define debug2(a,b) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;endl;
#define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;endl;
#define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;&quot;  &quot;&lt;&lt;#d&lt;&lt;&quot; = &quot;&lt;&lt;d&lt;&lt;endl;
#define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;&quot;  &quot;&lt;&lt;#d&lt;&lt;&quot; = &quot;&lt;&lt;d&lt;&lt;&quot;  &quot;&lt;&lt;#e&lt;&lt;&quot; = &quot;&lt;&lt;e&lt;&lt;endl;
#define debug0(x) cout &lt;&lt; &quot;debug0: &quot; &lt;&lt; x &lt;&lt; endl
#define fr(t, i, n)for (long long i = t; i &lt; n; i++)
#define YES cout&lt;&lt;&quot;Yes&quot;&lt;&lt;endl
#define NO cout&lt;&lt;&quot;No&quot;&lt;&lt;endl
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

const int N = 5e3+10,mod = 998244353;
int C[N][N];
int f[N];
/*
求异或和为0，那么必然按位来看
按位dp
f[i]表示和为i且异或和为0时，方案数量
从低位开始，枚举当前最低位的1的数量（必须是偶数个1，显然奇数个对答案不成立）

左边除了最低位得那些位
f[i] += f[(i-j)/2]*C[n][j]


*/
void solve() 
{
    int n,m;cin &gt;&gt; n &gt;&gt; m;
    C[1][0] = C[1][1] = 1;
    for(int i = 2;i &lt;= n;i ++)
    {
        for(int j = 0;j &lt;= i;j ++)
        {
            if(j)C[i][j] = (C[i-1][j] + C[i-1][j-1]) % mod;
            else C[i][j] = 1;
        }
    }
    f[0] = 1;
    for(int i = 2;i &lt;= m;i += 2)//数字范围
    {
        for(int j = 0;j &lt;= n &amp;&amp; j &lt;= i;j += 2)//位数范围
        {
            f[i] = (f[i] + f[(i-j)/2]*C[n][j]) % mod;
        }
    }
    cout &lt;&lt; f[m] &lt;&lt; endl;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(m,b){const n=t("ExternalLinkIcon");return e(),d("div",null,[l("p",null,[l("a",c,[s("https://atcoder.jp/contests/arc116/tasks/arc116_d"),u(n)])]),o])}const g=i(a,[["render",r],["__file","D-IWannaWinTheGame.html.vue"]]);export{g as default};
