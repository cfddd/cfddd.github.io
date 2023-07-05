import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as d,a as i,b as n,d as a,f as r}from"./app-587dee3d.js";const c={},v=i("h2",{id:"题目",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),m={href:"https://codeforces.com/contest/1804/problem/D",target:"_blank",rel:"noopener noreferrer"},o=r(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li>给 n 个长度为 m 的 01 字符串，m mod 4 = 0</li><li>把字符串切割成 m/2 个单个字符和 m/4 个连续的两个字符</li><li>切割后的字符串中存在 1 ，价值 +1</li><li>问最大切割价值和最小切割价值</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><h3 id="最小" tabindex="-1"><a class="header-anchor" href="#最小" aria-hidden="true">#</a> 最小</h3><ul><li>找出尽可能多的 11 ，放在一起</li><li>如果数量大于等于 m/4 ，那么之后不会有节约掉一个 1 的机会</li><li>如果数量小于 m/4 ，节约掉了一个 1</li></ul><h3 id="最大" tabindex="-1"><a class="header-anchor" href="#最大" aria-hidden="true">#</a> 最大</h3><ul><li>找出尽可能多的 非11，帮这些放在一起</li><li>如果数量大于等于 m/4 ，说明每个 1 都可以开成一个房间</li><li>如果数量小于 m/4 ，就要牺牲 11 来协调</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void solve()
{
	int n,m;cin &gt;&gt; n &gt;&gt; m;
	int ans1 = 0,ans2 = 0;
	vector&lt;string&gt; s(n);
	vector&lt;int&gt; cnt1(n,0);
	for(int i = 0;i &lt; n;i ++)
	{
		cin &gt;&gt; s[i];
		for(int j = 0;j &lt; m;j ++)
			if(s[i][j] == &#39;1&#39;)cnt1[i] ++;
	}

	
	for(int i = 0;i &lt; n;i ++)
	{
		int res1 = 0;
		for(int j = 0;j &lt; m-1;j ++)
		{
			if(s[i][j] == s[i][j+1] &amp;&amp; s[i][j] == &#39;1&#39;)res1 ++,j ++;
			if(res1 &gt;= m/4)
				break;
		}
		ans1 += cnt1[i] - res1*2 + res1;
	}

	for(int i = 0;i &lt; n;i ++)
	{
		int res1 = 0;
		for(int j = 0;j &lt; m-1;j ++)
		{
			if(s[i][j] != &#39;1&#39; || s[i][j+1] != &#39;1&#39;)
			{
				res1 ++,j ++;
			}
		}
		if(res1 &gt;= m/4)ans2 += cnt1[i];
		else{
			ans2 += cnt1[i] - (m/4 - res1);
		}
	}
	cout &lt;&lt; ans1 &lt;&lt; &quot; &quot; &lt;&lt; ans2 &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function u(b,h){const e=l("ExternalLinkIcon");return s(),d("div",null,[v,i("ul",null,[i("li",null,[i("a",m,[n("https://codeforces.com/contest/1804/problem/D"),a(e)])])]),o])}const j=t(c,[["render",u],["__file","D.Accommodation.html.vue"]]);export{j as default};
