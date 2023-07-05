import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c as r,a as i,b as n,d as l,f as a}from"./app-8cc557db.js";const v={},c=i("h2",{id:"题目",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),u={href:"https://codeforces.com/problemset/problem/219/D",target:"_blank",rel:"noopener noreferrer"},o={href:"https://leetcode.cn/problems/count-number-of-possible-root-nodes/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://leetcode.cn/problems/minimum-height-trees/description/%E3%80%81",target:"_blank",rel:"noopener noreferrer"},b=i("li",null,"树的直径也算类似",-1),h=a(`<h2 id="题意-仅第一题" tabindex="-1"><a class="header-anchor" href="#题意-仅第一题" aria-hidden="true">#</a> 题意（仅第一题）</h2><ul><li>给n-1条<strong>有向边</strong>，构成一棵树</li><li>从一个节点出发，到达所有点，最少要翻转多少次边</li><li>输出这个最小的数字，然后输出所有可能的起点</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>因为是一棵树，不考虑边的方向，那么任意一个点当根节点都可以到达其他所有点</li><li>所以我们可以建一个有权树，一条已有的边（u -&gt; v）权为0，那么反向边（v -&gt; u）边权为1</li><li>剩下的就是换根dp这个套路的 <ul><li>定义f[u]为以u为根的方案数，通过一次普通的搜索就可以算出来</li><li>再次搜索，同时携带根节点的一些信息提供给子节点计算</li><li>具体细节见代码</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const int N = 2e5+10,M = 2*N;

int e[M],ne[M],h[N],w[M],idx;
int f[N];
int ans[N];

void add(int a,int b,int c)
{
	e[idx] = b,w[idx] = c,ne[idx] = h[a],h[a] = idx ++;
}

int dfs1(int u,int fa)
{
	for(int i = h[u];i != -1;i = ne[i])
	{
		int v = e[i];
		if(v == fa)continue;
		f[u] += dfs1(v,u) + w[i];
	}

	return f[u];
}

void dfs2(int u,int fa,int pre)
{
	int sum = f[u];
	ans[u] = pre + sum;
	for(int i = h[u];i != -1;i = ne[i])
	{
		int v = e[i];
		if(v == fa)continue;

		int add = w[i] == 0?1:-1;//通用的变化
		dfs2(v,u,pre + sum - f[v] + add);
	}
}

void solve()
{
	memset(h,-1,sizeof h);
	int n;cin &gt;&gt; n;
	for(int i = 0;i &lt; n-1;i ++)
	{
		int a,b;cin &gt;&gt; a &gt;&gt; b;
		add(a,b,0);
		add(b,a,1);
	}

	dfs1(1,-1);

	dfs2(1,-1,0);

	int mi = *min_element(ans+1,ans+n+1);
	cout &lt;&lt; mi &lt;&lt; endl;
	// for(int i = 1;i &lt;= n;i ++)debug2(i,ans[i]);
	for(int i = 1;i &lt;= n;i ++)if(ans[i] == mi)cout &lt;&lt; i &lt;&lt; &quot; &quot;;
	cout &lt;&lt; endl;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function f(p,_){const e=d("ExternalLinkIcon");return t(),r("div",null,[c,i("ol",null,[i("li",null,[i("a",u,[n("https://codeforces.com/problemset/problem/219/D"),l(e)])]),i("li",null,[i("a",o,[n("https://leetcode.cn/problems/count-number-of-possible-root-nodes/"),l(e)])]),i("li",null,[i("a",m,[n("https://leetcode.cn/problems/minimum-height-trees/description/、"),l(e)])]),b]),h])}const N=s(v,[["render",f],["__file","dpdp.html.vue"]]);export{N as default};
