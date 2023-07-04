import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as s,a as e,b as n,d,f as r}from"./app-833b555e.js";const c={},o=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),m={href:"https://codeforces.com/problemset/problem/1554/C",target:"_blank",rel:"noopener noreferrer"},v=r(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li>输入 t(≤3e4) 表示 t 组数据，每组数据输入两个整数 n 和 m，均在 [0,1e9] 范围内。</li><li>定义数组 a = [n xor 0, n xor 1, n xor 2, ..., n xor m]。</li><li>输出mex(a)</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>答案存在0 ~ m+1之间</li><li>设答案为 x ，那么必然存在一个y在0 ~ m之间，使得 n ^ y == x</li><li>因为n ^ y == x &lt;=&gt; n ^ x == y，得到结论n ^ x &lt;= m</li><li>构造出能够使n ^ x &lt;= m成立的最大x</li><li>从高位往低位，只有n为0，m为1的位置才可以让x为1（同时n &lt; m才有解）</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
void solve() 
{
	int n,m;cin &gt;&gt; n &gt;&gt; m;
	if(n &gt; m)
	{
		cout &lt;&lt; 0 &lt;&lt; endl;
		return ;
	}
	int ans = 0;
	m ++;
	for(int i = 30;i &gt;= 0 &amp;&amp; n &lt; m;i --)
	{
		if((n &gt;&gt; i &amp; 1) &lt; (m &gt;&gt; i &amp; 1))
		{
			ans |= 1 &lt;&lt; i;
			n |= 1 &lt;&lt; i;
		}
	}
	cout &lt;&lt; ans &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function u(b,h){const i=l("ExternalLinkIcon");return a(),s("div",null,[o,e("ul",null,[e("li",null,[e("a",m,[n("https://codeforces.com/problemset/problem/1554/C"),d(i)])])]),v])}const f=t(c,[["render",u],["__file","C.Mikasa.html.vue"]]);export{f as default};
