import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as d,a as i,b as s,d as v,f as u}from"./app-587dee3d.js";const a={},r={href:"https://atcoder.jp/contests/arc120/tasks/arc120_c",target:"_blank",rel:"noopener noreferrer"},c=u(`<p>势能就是i + a[i],很有用的结论<br> 对于能完成交换，从A变成B，势能数组一定相同<br> 找出最小交换次数，贪心的方案是：最近的先交换<br> 找到最近的在可以用数组数组和set实现<br> 具体细节见代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
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

const int N = 2e5+10;
int aa[N];
int lowbit(int x)  // 返回末尾的1
{return x &amp; -x;}

void add(int x,int w){
    for(int i = x;i &lt; N;i += lowbit(i)){
        aa[i] += w;
    }
}

int query(int u){
    int res = 0;
    for(int i = u;i &gt; 0;i -= lowbit(i)){
        res += aa[i];
    }
    return res;
}

int a[N],b[N];
multiset&lt;int&gt; A,B;

void solve() 
{
    int n;cin &gt;&gt; n;
    
    for(int i = 1; i &lt;= n; i++)cin &gt;&gt; a[i],A.insert(a[i] + i);
    for(int i = 1; i &lt;= n; i++)cin &gt;&gt; b[i],B.insert(b[i] + i);

    if(A != B)
    {
        cout &lt;&lt; -1 &lt;&lt; endl;
        return ;
    }

    set&lt;PII&gt; s;
    int ans = 0;
    for(int i = 1; i &lt;= n; i++)s.insert(PII{a[i] + i, i});
    for(int i = 1; i &lt;= n; i++)
    {
        set&lt;PII&gt;::iterator it = s.lower_bound(PII{b[i]+i,0});

        int t = query((*it).second) + (*it).second;
        
        add(1,1);
        assert((*it).second&gt;0);
        add((*it).second,-1);//这里相对位置不用加1，因为这个是相对于a数组原始位置而言的
        ans += t - i;
              
        s.erase(it);
    }

    cout &lt;&lt; ans &lt;&lt; endl;

}

signed main()
{
    
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    

    int T = 1;//cin &gt;&gt; T;
    while(T--){
        solve();
    }
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function o(b,m){const n=t("ExternalLinkIcon");return e(),d("div",null,[i("ul",null,[i("li",null,[i("a",r,[s("https://atcoder.jp/contests/arc120/tasks/arc120_c"),v(n)])])]),c])}const f=l(a,[["render",o],["__file","3_.html.vue"]]);export{f as default};
