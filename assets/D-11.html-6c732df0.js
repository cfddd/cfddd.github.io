import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as l,f as e}from"./app-833b555e.js";const t={},d=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
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

/*

如果无视不同的要求，那么答案就是 C(n+1,k)。
什么时候会有重复的呢？
只可能是 a 中那两个相同的数字，恰好选了其中一个导致的。
设 a 中那两个相同数字的下标分别为 p 和 q（下标从 0 开始），
手玩一下可以发现，如果剩余的 k-1 个数是在 p 左边或 q 右边中选的，就会导致重复。
这一共有 m = p + (n-q) 个数���
因此答案为 C(n+1,k) - C(m,k-1)。

计算组合数需要逆元。

逆元组合数，无时无刻都要注意逆元的定义
*/

const int N = 100010,mod = 1e9 + 7;
int fact[N],ifact[N];
int a[N];
int to[N];
LL qmi(int a,int b,int p){                                          //快速幂
    LL res = 1;
    while(b){
        if(b&amp;1)res = (LL)res * a % p;
        b = b &gt;&gt; 1;
        a = (LL)a * a % p;
    }
    return res;
}
LL C(int a,int b)
{
    return (LL)fact[a] * ifact[b] % mod * ifact[a - b] % mod;
}
void solve() 
{
    fact[0] = ifact[0] = 1;
    
    for(int i = 1;i &lt; N;i++){
        fact[i] = (LL)fact[i - 1] * i % mod;                        //阶乘
        ifact[i] = (LL)ifact[i - 1] * qmi(i, mod - 2, mod) % mod;   //阶乘对于mod的乘法逆元
        //cout &lt;&lt; fact[i] &lt;&lt; &quot; &quot; &lt;&lt; ifact[i] &lt;&lt; endl;
    }

    int n;cin &gt;&gt; n;
    for(int i = 1;i &lt;= n+1;i++)cin &gt;&gt; a[i];

    
    for(int i = 1;i &lt;= n+1;i++)
    {
        if(!to[a[i]])to[a[i]] = i;
        else 
        {
            int l,r;
            l = to[a[i]],r=i;
            int m = l-1 + n - r + 1;
            
    
            //(LL)fact[a] * ifact[b] % mod * ifact[a - b] % mod
            for(int i = 1;i &lt;= n+1;i ++)
            {
                if(m &gt;= i-1)cout &lt;&lt; (C(n+1,i) - C(m,i-1) + mod) % mod &lt;&lt; endl;
                else cout &lt;&lt; (C(n+1,i) % mod) &lt;&lt; endl;
            }
            break;
        }
    }

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),s=[d];function v(u,a){return n(),l("div",null,s)}const m=i(t,[["render",v],["__file","D-11.html.vue"]]);export{m as default};
