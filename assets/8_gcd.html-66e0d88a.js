import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as o,a as t,b as l,d as i,f as u}from"./app-f94c3d64.js";const a={},c={href:"https://codeforces.com/contest/1766/problem/D",target:"_blank",rel:"noopener noreferrer"},v=t("li",null,"题意找到连续的最长gcd(a+k，b+k) == 1(a < b,k = {0,1,2,...})",-1),r=t("li",null,"思路：",-1),b=t("li",null,"gcd(a+k,b+k) == gcd(a+k,b - a)",-1),m=t("li",null,"a - b = 1时特判",-1),q={href:"https://codeforces.com/blog/entry/110066",target:"_blank",rel:"noopener noreferrer"},f=t("li",null,"设两个的结果分别为g和h，显然a+k和b+k都是g的倍数，那么让其中一个大的倍数减掉一个小的倍数，显然还是g的倍数，充分性成立",-1),g=t("li",null,"反证法也同理，a+k和b-a肯定都是h的倍数，一个倍数加上另一个倍数，肯定还是h的倍数，必要性成立",-1),p=u(`<ul><li>接下来只需要找到b-a的质因子判断a+k是否有重复因子</li><li>一个一个加显然超时，我们可以先预处理出每个数字的最大质因子，然后利用传递性，得到关于b-a的所有质因子</li><li>设当前质因子为temp，更新答案的方法就是ans = min(ans,(temp - a%temp) % temp)</li></ul><p>代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
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

const int N = 2e5+10,M = 1e7+10;
int to[M];
void solve() 
{
	int x,y;scanf(&quot;%d%d&quot;,&amp;x,&amp;y);
	if(y == x+1)
	{
		printf(&quot;-1\\n&quot;);
		return ;
	}
	
	int now = y - x;
	int ans = 1e9;
	for(;now != 1;now /= to[now])
		ans = min(ans, (now - x % to[now]) % to[now]);
	
	printf(&quot;%d\\n&quot;,ans);
}

signed main()
{
    /*
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    */

   	to[1] = 1;//每个数字到它最大的质因子
   	for(int i = 2;i &lt; M;i ++)if(!to[i])
	{
		for(int j = i;j &lt; M;j += i)to[j] = i;
	}

    int T = 1;
	scanf(&quot;%d&quot;,&amp;T);
	//cin &gt;&gt; T;
    while(T--){
        solve();
    }
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function _(h,k){const n=d("ExternalLinkIcon");return s(),o("div",null,[t("ul",null,[t("li",null,[t("a",c,[l("https://codeforces.com/contest/1766/problem/D"),i(n)])]),v,r,b]),t("ol",null,[m,t("li",null,[l("可以推出gcd(a+k,b+k) == gcd(a+k,b - a),具体证明见"),t("a",q,[l("https://codeforces.com/blog/entry/110066"),i(n)])]),f,g]),p])}const y=e(a,[["render",_],["__file","8_gcd.html.vue"]]);export{y as default};
