import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as t,a as n,b as s,d as r,f as c}from"./app-85eb831d.js";const d={},m=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),o={href:"https://codeforces.com/problemset/problem/1054/D",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"题意",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题意","aria-hidden":"true"},"#"),s(" 题意")],-1),v=n("ul",null,[n("li",null,[n("p",null,"输入正整数 n(≤2e5) k(≤30) 和长为 n 的数组 a(0≤a[i]≤pow(2,k)-1)。")]),n("li",null,[n("p",null,"设 mask = (1<<k)-1，每次操作你可以把任意 a[i] 修改为 a[i] XOR mask，你可以操作任意次（包括 0 次）。")]),n("li",null,[n("p",null,"修改后，最多有多少个 a 的非空连续子数组，其异或和不等于 0？")])],-1),p=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),h=n("ul",null,[n("li",null,"找最多的不为 0 ，不方便，转化为找最少的为0"),n("li",null,[s("需要从异或前缀和出发，找一段连续子数组异或和为 0 非常方便，"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",null,"∑"),n("msubsup",null,[n("mi",null,"C"),n("mtext",null,"前缀异或和某数字出现的次数"),n("mn",null,"2")])]),n("annotation",{encoding:"application/x-tex"},"\\sum C_{前缀异或和某数字出现的次数}^2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.0894em","vertical-align":"-0.2753em"}}),n("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-2.4247em","margin-left":"-0.0715em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord cjk_fallback mtight"},"前缀异或和某数字出现的次数")])])]),n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2753em"}},[n("span")])])])])])])])])]),n("li",null,"修改一个数字为 a[i] XOR mask，那么前缀异或i后面都异或mask，所以就变为一段一段奇数为 a[i] 偶数为 a[i] XOR mask的数组"),n("li",null,"再进一步，想要最灵活的修改数组，其实一个一个也可以"),n("li",null,"最后，只要让 a[i] 和 a[i] XOR mask 数量平均就可以实现最小（简单数学）"),n("li",null,"不要忘记在前缀意义上的起点 0 ，初始时 cnt[0] = 1")],-1),b=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const int N = 2e5+10;
int a[N];
void solve()
{
	int n,k;cin &gt;&gt; n &gt;&gt; k;
	for(int i = 1;i &lt;= n;i ++)cin &gt;&gt; a[i],a[i] ^= a[i-1];
	const int mask = (1 &lt;&lt; k) - 1;

	map&lt;int,int&gt; cnt;
	for(int i = 0;i &lt;= n;i ++)
	{
		int flip = a[i] ^ mask;
		if(cnt[a[i]] &lt;= cnt[flip])cnt[a[i]] ++;
		else cnt[flip] ++;
	}

	LL ans = 0;
	for(auto [x,y]:cnt)
	{
		ans += 1LL*y*(y-1)/2;
		// debug2(x,y);
	}

	cout &lt;&lt; 1LL*n*(n+1)/2 - ans &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(_,f){const e=l("ExternalLinkIcon");return a(),t("div",null,[m,n("ul",null,[n("li",null,[n("a",o,[s("https://codeforces.com/problemset/problem/1054/D"),r(e)])])]),u,v,p,h,b])}const y=i(d,[["render",g],["__file","1054D-ChangingArray.html.vue"]]);export{y as default};
