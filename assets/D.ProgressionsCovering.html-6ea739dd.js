import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as r,a as n,b as i,d as e,f as v}from"./app-8cc557db.js";const a={},u=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),i(" 题目")],-1),c={href:"https://codeforces.com/problemset/problem/1661/D",target:"_blank",rel:"noopener noreferrer"},o=n("h2",{id:"题意",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题意","aria-hidden":"true"},"#"),i(" 题意")],-1),b=n("ul",null,[n("li",null,"给一个长度为 n 的数组 a，和一个正数k，每次在数组 a 中选取连续的k个元素"),n("li",null,"每个元素减去1，2，3……k"),n("li",null,"问至少要多少次操作，才能呢使数组 a 中所有数字小于 0")],-1),m=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),i(" 思路")],-1),q=n("li",null,"从后往前贪心，找到第一个大于 0 的位置，通过一定操作使得这个元素小于 0",-1),f=n("li",null,"可以维护一个差分数组，前k个位置 - 1，最后一个元素 + k，操作就变为区间元素修改",-1),h={href:"https://www.cnblogs.com/cfddfc/p/17065029.html#%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"},g=v(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
#define debug1(a) cout&lt;&lt;#a&lt;&lt;&#39;=&#39;&lt;&lt; a &lt;&lt; endl;
#define debug2(a,b) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;endl;
#define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;endl;
#define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;&quot;  &quot;&lt;&lt;#d&lt;&lt;&quot; = &quot;&lt;&lt;d&lt;&lt;endl;
#define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;&quot;  &quot;&lt;&lt;#d&lt;&lt;&quot; = &quot;&lt;&lt;d&lt;&lt;&quot;  &quot;&lt;&lt;#e&lt;&lt;&quot; = &quot;&lt;&lt;e&lt;&lt;endl;
#define endl &quot;\\n&quot;
#define fi first
#define se second

#define int long long
//#define int __int128
using namespace std;

typedef long long LL;
typedef unsigned long long ULL;
typedef pair&lt;int,int&gt; PII;
typedef pair&lt;LL,LL&gt; PLL;

//#pragma GCC optimize(3,&quot;Ofast&quot;,&quot;inline&quot;)
//#pragma GCC optimize(2)

//常数定义
const double eps = 1e-4;
const double PI = acos(-1.0);
const int INF = 0x3f3f3f3f;
const int N = 3e5+100;
LL a[N],b[N];
LL x[N],neg[N];
LL n,k;

LL lowbit(LL x)  // 返回末尾的1
{
    return x &amp; -x;
}

void add(LL x,LL w){
    if(x == 0)return ;
    for(LL i = x;i &lt;= n+50;i += lowbit(i)){ //同时维护两个树状数组
        a[i] += w;
        b[i] += x*w;
    }
}

LL query(LL u){
    LL res = 0;
    //if(u == 0)return res;
    for(LL i = u;i &gt; 0;i -= lowbit(i)){ //优化的区间查询方案
        res += (u+1) * a[i] - b[i];     //计算公式
    }
    return res;
}

void solve() 
{
    cin &gt;&gt; n &gt;&gt; k;
    for(int i = 2;i &lt;= n+1;i ++)cin &gt;&gt; x[i];
  
    int ans = 0;
    for(int r = n+1;r &gt; k+1;r --)
    {
        int l = r-k+1;
        int now = query(n+2) - query(r-1);
        if(now &lt; x[r])
        {
            int cnt = (x[r] - now) / k + (((x[r] - now) % k) &gt; 0);

            add(r,cnt*k);add(r+1,-1*cnt*k);
            add(l-1,-1*cnt);add(r,cnt);
            ans += cnt;
        }
    }

    int mx = 0;
    for(int r = k+1;r &gt;= 2;r --)
    {
        int l = 1;
        int now = query(n+2) - query(r-1);
        if(now &lt; x[r])
        {
            int cnt = (x[r] - now) / (r-1) + (((x[r] - now) % (r-1)) &gt; 0);
            mx = max(mx,cnt);
        }
    }

    cout &lt;&lt; ans + mx &lt;&lt; endl;
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
7 7
50 17 81 25 42 39 96

*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正解思路" tabindex="-1"><a class="header-anchor" href="#正解思路" aria-hidden="true">#</a> 正解思路</h2><ul><li>在差分数组的基础上再次进行差分，这一段的每次的操作就变为-1，k-1</li><li>暂时</li></ul>`,4);function _(x,L){const l=d("ExternalLinkIcon");return s(),r("div",null,[u,n("ul",null,[n("li",null,[n("a",c,[i("https://codeforces.com/problemset/problem/1661/D"),e(l)])])]),o,b,m,n("ul",null,[q,f,n("li",null,[i("如何找到这个位置？可以用树状数组或者限度按时来实现这个"),n("a",h,[i("经典功能"),e(l)])])]),g])}const w=t(a,[["render",_],["__file","D.ProgressionsCovering.html.vue"]]);export{w as default};
