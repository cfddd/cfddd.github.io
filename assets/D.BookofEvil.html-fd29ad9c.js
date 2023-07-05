import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as l,f as e}from"./app-f94c3d64.js";const t={},d=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;bits/stdc++.h&gt;
#define debug1(a) cout &lt;&lt; #a &lt;&lt; &#39;=&#39; &lt;&lt; a &lt;&lt; endl;
#define debug2(a, b) cout &lt;&lt; #a &lt;&lt; &quot; = &quot; &lt;&lt; a &lt;&lt; &quot;  &quot; &lt;&lt; #b &lt;&lt; &quot; = &quot; &lt;&lt; b &lt;&lt; endl;
#define debug3(a, b, c) cout &lt;&lt; #a &lt;&lt; &quot; = &quot; &lt;&lt; a &lt;&lt; &quot;  &quot; &lt;&lt; #b &lt;&lt; &quot; = &quot; &lt;&lt; b &lt;&lt; &quot;  &quot; &lt;&lt; #c &lt;&lt; &quot; = &quot; &lt;&lt; c &lt;&lt; endl;
#define debug4(a, b, c, d) cout &lt;&lt; #a &lt;&lt; &quot; = &quot; &lt;&lt; a &lt;&lt; &quot;  &quot; &lt;&lt; #b &lt;&lt; &quot; = &quot; &lt;&lt; b &lt;&lt; &quot;  &quot; &lt;&lt; #c &lt;&lt; &quot; = &quot; &lt;&lt; c &lt;&lt; &quot;  &quot; &lt;&lt; #d &lt;&lt; &quot; = &quot; &lt;&lt; d &lt;&lt; endl;
#define debug5(a, b, c, d, e) cout &lt;&lt; #a &lt;&lt; &quot; = &quot; &lt;&lt; a &lt;&lt; &quot;  &quot; &lt;&lt; #b &lt;&lt; &quot; = &quot; &lt;&lt; b &lt;&lt; &quot;  &quot; &lt;&lt; #c &lt;&lt; &quot; = &quot; &lt;&lt; c &lt;&lt; &quot;  &quot; &lt;&lt; #d &lt;&lt; &quot; = &quot; &lt;&lt; d &lt;&lt; &quot;  &quot; &lt;&lt; #e &lt;&lt; &quot; = &quot; &lt;&lt; e &lt;&lt; endl;
#define endl &quot;\\n&quot;
#define fi first
#define se second
#define caseT \\
	int T;    \\
	cin &gt;&gt; T; \\
	while (T--)
// #define int long long
// #define int __int128
using namespace std;

typedef long long LL;
typedef unsigned long long ULL;
typedef pair&lt;int, int&gt; PII;
typedef pair&lt;LL, LL&gt; PLL;

// #pragma GCC optimize(3,&quot;Ofast&quot;,&quot;inline&quot;)
// #pragma GCC optimize(2)

inline int rd()
{
	int f = 1, x = 0;
	char c = getchar();
	while (c &lt; &#39;0&#39; || &#39;9&#39; &lt; c)
	{
		if (c == &#39;-&#39;)
			f = -1;
		c = getchar();
	}
	while (&#39;0&#39; &lt;= c &amp;&amp; c &lt;= &#39;9&#39;)
		x = (x &lt;&lt; 3) + (x &lt;&lt; 1) + (c ^ 48), c = getchar();
	return f * x;
}

// 常数定义
const double eps = 1e-6;
const double PI = acos(-1.0);
const int INF = 0x3f3f3f3f;
const int N = 1e5 + 10, M = 2 * N;
int h[N], e[M], ne[M], idx;
bool affected[N];
int dist1[N], dist2[N];

int n, m, d;
int ans;

void add(int a, int b)
{
	e[idx] = b, ne[idx] = h[a], h[a] = idx++;
}

void dfs1(int u, int father)
{
	if(affected[u])dist1[u] = 0;

	int &amp;d1 = dist1[u], &amp;d2 = dist2[u];

	for (int i = h[u]; i != -1; i = ne[i])
	{
		int v = e[i];
		if (v == father)
			continue;
			
		dfs1(v, u);
		int d = dist1[v] + 1;
		// debug1(d);
		if(dist1[v] == -1)continue;



		if (d &gt;= d1)
			d2 = d1, d1 = d;
		else if (d &gt; d2)
			d2 = d;
	}

	// return dist;
}

void dfs2(int u, int fa,int preLen)
{
	if(max(dist1[u],preLen) &lt;= d)ans ++;
	// debug2(u,max(dist1[u],preLen));
	for (int i = h[u]; i != -1; i = ne[i])
	{
		int v = e[i];
		if (v == fa)
			continue;
		
		int Len = preLen;
		if(dist1[v] &gt;= 0)Len = (dist1[v] == dist1[u]-1)?max(Len,dist2[u])+1:max(Len,dist1[u])+1;
		else Len = max(Len,dist1[u]) + 1;
		
		dfs2(v, u, Len);

	}
}

void solve()
{
	memset(h, -1, sizeof h);
	memset(dist1,-0x3f,sizeof dist1);
	memset(dist2,-0x3f,sizeof dist2);
	
	// memset(f, -1, sizeof f);

	cin &gt;&gt; n &gt;&gt; m &gt;&gt; d;
	for (int i = 0; i &lt; m; i++)
	{
		int t;
		cin &gt;&gt; t;
		affected[t] = 1;
	}

	for (int i = 0; i &lt; n - 1; i++)
	{
		int x, y;
		cin &gt;&gt; x &gt;&gt; y;
		add(x, y);
		add(y, x);
	}

	dfs1(1, -1);

	dfs2(1, -1, -1044266559);
	// for(int i = 1;i &lt;= n;i ++)debug3(i,dist1[i],dist2[i]);
	cout &lt;&lt; ans &lt;&lt; endl;
}

signed main()
{

	ios::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);

	// caseT
	solve();

	return 0;
}
/*

*/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),s=[d];function v(u,a){return n(),l("div",null,s)}const m=i(t,[["render",v],["__file","D.BookofEvil.html.vue"]]);export{m as default};
