import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as d,c as s,a as l,b as t,d as u,f as a}from"./app-8cc557db.js";const v={},o={href:"https://codeforces.com/contest/1762/problem/D",target:"_blank",rel:"noopener noreferrer"},c=l("li",null,[l("p",null,"给一个长度为n的permutation，每次一个询问，得到结果为gcd（i，j），请在2*n次之内找到那个是0（或者哪两个之中之一是0）")],-1),r=l("li",null,[l("p",null,[t("思路"),l("br"),t(" 三个指针i，j，k（i<j<k）")])],-1),b=a(`<p>令x=gcd(a[i],a[j]),y=gcd(a[i],a[k]);</p><ol><li>如果x==y，显然a[i]&gt;0</li><li>如果x&lt;y，可以证明a[j]&gt;0</li><li>如果x&gt;y，可以证明a[k]&gt;0</li></ol><ul><li>这样就可以写出一个答案了</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
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
// #define int long long
using namespace std;

typedef long long LL;
typedef unsigned long long ULL;
typedef pair&lt;int,int&gt; PII;
typedef pair&lt;LL,LL&gt; PLL;

//#pragma GCC optimize(3,&quot;Ofast&quot;,&quot;inline&quot;)
//#pragma GCC optimize(2)

const int N = 2e5+10,mod = 998244353;
bool st[N];

int ask(int a, int b) {
    cout &lt;&lt; &quot;? &quot; &lt;&lt; a &lt;&lt; &quot; &quot; &lt;&lt; b &lt;&lt; endl;
    int ans = 0;
    cin &gt;&gt; ans;
    return ans;
}

void solve() 
{
    memset(st,0,sizeof st);
    int n;cin &gt;&gt; n;

    int a[3] = {1,2,3};
    for(;;)
    {
        sort(a,a+3);
        if(a[2] &gt; n)break;
        int x = ask(a[0],a[1]),y = ask(a[0],a[2]);
        if(x == y)
        {
            st[a[0]] = 1;
            a[0] = a[2] + 1;
        }else if(x &lt; y)
        {
            st[a[1]] = 1;
            a[1] = a[2] + 1;
        }else{
            st[a[2]] = 1;
            a[2] = a[2] + 1;
        }
    }

    cout &lt;&lt; &quot;! &quot; &lt;&lt; a[0] &lt;&lt; &quot; &quot; &lt;&lt; a[1] &lt;&lt; endl;
    int t;cin &gt;&gt; t;
}

signed main()
{
    /*
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    */
    int T = 1;cin &gt;&gt; T;
    while(T--){
        solve();
    }
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(q,g){const n=e("ExternalLinkIcon");return d(),s("div",null,[l("ul",null,[l("li",null,[l("p",null,[l("a",o,[t("https://codeforces.com/contest/1762/problem/D"),u(n)])])]),c,r]),b])}const _=i(v,[["render",m],["__file","gcd.html.vue"]]);export{_ as default};
