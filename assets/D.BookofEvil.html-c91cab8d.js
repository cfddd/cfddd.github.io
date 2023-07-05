const t=JSON.parse(`{"key":"v-55971842","path":"/Algorithm/contents/D.BookofEvil.html","title":"D. Book of Evil（树的直径+换根dp）","lang":"zh-CN","frontmatter":{"title":"D. Book of Evil（树的直径+换根dp）","icon":"calculator","description":"#include &lt;bits/stdc++.h&gt; #define debug1(a) cout &lt;&lt; #a &lt;&lt; '=' &lt;&lt; a &lt;&lt; endl; #define debug2(a, b) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\" \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; endl; #define debug3(a, b, c) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\" \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; \\" \\" &lt;&lt; #c &lt;&lt; \\" = \\" &lt;&lt; c &lt;&lt; endl; #define debug4(a, b, c, d) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\" \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; \\" \\" &lt;&lt; #c &lt;&lt; \\" = \\" &lt;&lt; c &lt;&lt; \\" \\" &lt;&lt; #d &lt;&lt; \\" = \\" &lt;&lt; d &lt;&lt; endl; #define debug5(a, b, c, d, e) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\" \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; \\" \\" &lt;&lt; #c &lt;&lt; \\" = \\" &lt;&lt; c &lt;&lt; \\" \\" &lt;&lt; #d &lt;&lt; \\" = \\" &lt;&lt; d &lt;&lt; \\" \\" &lt;&lt; #e &lt;&lt; \\" = \\" &lt;&lt; e &lt;&lt; endl; #define endl \\"\\\\n\\" #define fi first #define se second #define caseT \\\\ \\tint T; \\\\ \\tcin &gt;&gt; T; \\\\ \\twhile (T--) // #define int long long // #define int __int128 using namespace std; typedef long long LL; typedef unsigned long long ULL; typedef pair&lt;int, int&gt; PII; typedef pair&lt;LL, LL&gt; PLL; // #pragma GCC optimize(3,\\"Ofast\\",\\"inline\\") // #pragma GCC optimize(2) inline int rd() { \\tint f = 1, x = 0; \\tchar c = getchar(); \\twhile (c &lt; '0' || '9' &lt; c) \\t{ \\t\\tif (c == '-') \\t\\t\\tf = -1; \\t\\tc = getchar(); \\t} \\twhile ('0' &lt;= c &amp;&amp; c &lt;= '9') \\t\\tx = (x &lt;&lt; 3) + (x &lt;&lt; 1) + (c ^ 48), c = getchar(); \\treturn f * x; } // 常数定义 const double eps = 1e-6; const double PI = acos(-1.0); const int INF = 0x3f3f3f3f; const int N = 1e5 + 10, M = 2 * N; int h[N], e[M], ne[M], idx; bool affected[N]; int dist1[N], dist2[N]; int n, m, d; int ans; void add(int a, int b) { \\te[idx] = b, ne[idx] = h[a], h[a] = idx++; } void dfs1(int u, int father) { \\tif(affected[u])dist1[u] = 0; \\tint &amp;d1 = dist1[u], &amp;d2 = dist2[u]; \\tfor (int i = h[u]; i != -1; i = ne[i]) \\t{ \\t\\tint v = e[i]; \\t\\tif (v == father) \\t\\t\\tcontinue; \\t\\t\\t \\t\\tdfs1(v, u); \\t\\tint d = dist1[v] + 1; \\t\\t// debug1(d); \\t\\tif(dist1[v] == -1)continue; \\t\\tif (d &gt;= d1) \\t\\t\\td2 = d1, d1 = d; \\t\\telse if (d &gt; d2) \\t\\t\\td2 = d; \\t} \\t// return dist; } void dfs2(int u, int fa,int preLen) { \\tif(max(dist1[u],preLen) &lt;= d)ans ++; \\t// debug2(u,max(dist1[u],preLen)); \\tfor (int i = h[u]; i != -1; i = ne[i]) \\t{ \\t\\tint v = e[i]; \\t\\tif (v == fa) \\t\\t\\tcontinue; \\t\\t \\t\\tint Len = preLen; \\t\\tif(dist1[v] &gt;= 0)Len = (dist1[v] == dist1[u]-1)?max(Len,dist2[u])+1:max(Len,dist1[u])+1; \\t\\telse Len = max(Len,dist1[u]) + 1; \\t\\t \\t\\tdfs2(v, u, Len); \\t} } void solve() { \\tmemset(h, -1, sizeof h); \\tmemset(dist1,-0x3f,sizeof dist1); \\tmemset(dist2,-0x3f,sizeof dist2); \\t \\t// memset(f, -1, sizeof f); \\tcin &gt;&gt; n &gt;&gt; m &gt;&gt; d; \\tfor (int i = 0; i &lt; m; i++) \\t{ \\t\\tint t; \\t\\tcin &gt;&gt; t; \\t\\taffected[t] = 1; \\t} \\tfor (int i = 0; i &lt; n - 1; i++) \\t{ \\t\\tint x, y; \\t\\tcin &gt;&gt; x &gt;&gt; y; \\t\\tadd(x, y); \\t\\tadd(y, x); \\t} \\tdfs1(1, -1); \\tdfs2(1, -1, -1044266559); \\t// for(int i = 1;i &lt;= n;i ++)debug3(i,dist1[i],dist2[i]); \\tcout &lt;&lt; ans &lt;&lt; endl; } signed main() { \\tios::sync_with_stdio(false); \\tcin.tie(0); \\tcout.tie(0); \\t// caseT \\tsolve(); \\treturn 0; } /* */","head":[["meta",{"property":"og:url","content":"https://cfddd.github.io/Algorithm/contents/D.BookofEvil.html"}],["meta",{"property":"og:site_name","content":"俄罗斯刺沙蓬"}],["meta",{"property":"og:title","content":"D. Book of Evil（树的直径+换根dp）"}],["meta",{"property":"og:description","content":"#include &lt;bits/stdc++.h&gt; #define debug1(a) cout &lt;&lt; #a &lt;&lt; '=' &lt;&lt; a &lt;&lt; endl; #define debug2(a, b) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\" \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; endl; #define debug3(a, b, c) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\" \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; \\" \\" &lt;&lt; #c &lt;&lt; \\" = \\" &lt;&lt; c &lt;&lt; endl; #define debug4(a, b, c, d) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\" \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; \\" \\" &lt;&lt; #c &lt;&lt; \\" = \\" &lt;&lt; c &lt;&lt; \\" \\" &lt;&lt; #d &lt;&lt; \\" = \\" &lt;&lt; d &lt;&lt; endl; #define debug5(a, b, c, d, e) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\" \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; \\" \\" &lt;&lt; #c &lt;&lt; \\" = \\" &lt;&lt; c &lt;&lt; \\" \\" &lt;&lt; #d &lt;&lt; \\" = \\" &lt;&lt; d &lt;&lt; \\" \\" &lt;&lt; #e &lt;&lt; \\" = \\" &lt;&lt; e &lt;&lt; endl; #define endl \\"\\\\n\\" #define fi first #define se second #define caseT \\\\ \\tint T; \\\\ \\tcin &gt;&gt; T; \\\\ \\twhile (T--) // #define int long long // #define int __int128 using namespace std; typedef long long LL; typedef unsigned long long ULL; typedef pair&lt;int, int&gt; PII; typedef pair&lt;LL, LL&gt; PLL; // #pragma GCC optimize(3,\\"Ofast\\",\\"inline\\") // #pragma GCC optimize(2) inline int rd() { \\tint f = 1, x = 0; \\tchar c = getchar(); \\twhile (c &lt; '0' || '9' &lt; c) \\t{ \\t\\tif (c == '-') \\t\\t\\tf = -1; \\t\\tc = getchar(); \\t} \\twhile ('0' &lt;= c &amp;&amp; c &lt;= '9') \\t\\tx = (x &lt;&lt; 3) + (x &lt;&lt; 1) + (c ^ 48), c = getchar(); \\treturn f * x; } // 常数定义 const double eps = 1e-6; const double PI = acos(-1.0); const int INF = 0x3f3f3f3f; const int N = 1e5 + 10, M = 2 * N; int h[N], e[M], ne[M], idx; bool affected[N]; int dist1[N], dist2[N]; int n, m, d; int ans; void add(int a, int b) { \\te[idx] = b, ne[idx] = h[a], h[a] = idx++; } void dfs1(int u, int father) { \\tif(affected[u])dist1[u] = 0; \\tint &amp;d1 = dist1[u], &amp;d2 = dist2[u]; \\tfor (int i = h[u]; i != -1; i = ne[i]) \\t{ \\t\\tint v = e[i]; \\t\\tif (v == father) \\t\\t\\tcontinue; \\t\\t\\t \\t\\tdfs1(v, u); \\t\\tint d = dist1[v] + 1; \\t\\t// debug1(d); \\t\\tif(dist1[v] == -1)continue; \\t\\tif (d &gt;= d1) \\t\\t\\td2 = d1, d1 = d; \\t\\telse if (d &gt; d2) \\t\\t\\td2 = d; \\t} \\t// return dist; } void dfs2(int u, int fa,int preLen) { \\tif(max(dist1[u],preLen) &lt;= d)ans ++; \\t// debug2(u,max(dist1[u],preLen)); \\tfor (int i = h[u]; i != -1; i = ne[i]) \\t{ \\t\\tint v = e[i]; \\t\\tif (v == fa) \\t\\t\\tcontinue; \\t\\t \\t\\tint Len = preLen; \\t\\tif(dist1[v] &gt;= 0)Len = (dist1[v] == dist1[u]-1)?max(Len,dist2[u])+1:max(Len,dist1[u])+1; \\t\\telse Len = max(Len,dist1[u]) + 1; \\t\\t \\t\\tdfs2(v, u, Len); \\t} } void solve() { \\tmemset(h, -1, sizeof h); \\tmemset(dist1,-0x3f,sizeof dist1); \\tmemset(dist2,-0x3f,sizeof dist2); \\t \\t// memset(f, -1, sizeof f); \\tcin &gt;&gt; n &gt;&gt; m &gt;&gt; d; \\tfor (int i = 0; i &lt; m; i++) \\t{ \\t\\tint t; \\t\\tcin &gt;&gt; t; \\t\\taffected[t] = 1; \\t} \\tfor (int i = 0; i &lt; n - 1; i++) \\t{ \\t\\tint x, y; \\t\\tcin &gt;&gt; x &gt;&gt; y; \\t\\tadd(x, y); \\t\\tadd(y, x); \\t} \\tdfs1(1, -1); \\tdfs2(1, -1, -1044266559); \\t// for(int i = 1;i &lt;= n;i ++)debug3(i,dist1[i],dist2[i]); \\tcout &lt;&lt; ans &lt;&lt; endl; } signed main() { \\tios::sync_with_stdio(false); \\tcin.tie(0); \\tcout.tie(0); \\t// caseT \\tsolve(); \\treturn 0; } /* */"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-05T07:04:01.000Z"}],["meta",{"property":"article:author","content":"俄罗斯刺沙蓬"}],["meta",{"property":"article:modified_time","content":"2023-07-05T07:04:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"D. Book of Evil（树的直径+换根dp）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-05T07:04:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俄罗斯刺沙蓬\\",\\"url\\":\\"https://cfddd.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1688540641000,"updatedTime":1688540641000,"contributors":[{"name":"cfd","email":"2909047212@qq.com","commits":1}]},"readingTime":{"minutes":1.65,"words":494},"filePathRelative":"Algorithm/contents/D.BookofEvil.md","localizedDate":"2023年7月5日","excerpt":"<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>#include &lt;bits/stdc++.h&gt;\\n#define debug1(a) cout &lt;&lt; #a &lt;&lt; '=' &lt;&lt; a &lt;&lt; endl;\\n#define debug2(a, b) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\"  \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; endl;\\n#define debug3(a, b, c) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\"  \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; \\"  \\" &lt;&lt; #c &lt;&lt; \\" = \\" &lt;&lt; c &lt;&lt; endl;\\n#define debug4(a, b, c, d) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\"  \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; \\"  \\" &lt;&lt; #c &lt;&lt; \\" = \\" &lt;&lt; c &lt;&lt; \\"  \\" &lt;&lt; #d &lt;&lt; \\" = \\" &lt;&lt; d &lt;&lt; endl;\\n#define debug5(a, b, c, d, e) cout &lt;&lt; #a &lt;&lt; \\" = \\" &lt;&lt; a &lt;&lt; \\"  \\" &lt;&lt; #b &lt;&lt; \\" = \\" &lt;&lt; b &lt;&lt; \\"  \\" &lt;&lt; #c &lt;&lt; \\" = \\" &lt;&lt; c &lt;&lt; \\"  \\" &lt;&lt; #d &lt;&lt; \\" = \\" &lt;&lt; d &lt;&lt; \\"  \\" &lt;&lt; #e &lt;&lt; \\" = \\" &lt;&lt; e &lt;&lt; endl;\\n#define endl \\"\\\\n\\"\\n#define fi first\\n#define se second\\n#define caseT \\\\\\n\\tint T;    \\\\\\n\\tcin &gt;&gt; T; \\\\\\n\\twhile (T--)\\n// #define int long long\\n// #define int __int128\\nusing namespace std;\\n\\ntypedef long long LL;\\ntypedef unsigned long long ULL;\\ntypedef pair&lt;int, int&gt; PII;\\ntypedef pair&lt;LL, LL&gt; PLL;\\n\\n// #pragma GCC optimize(3,\\"Ofast\\",\\"inline\\")\\n// #pragma GCC optimize(2)\\n\\ninline int rd()\\n{\\n\\tint f = 1, x = 0;\\n\\tchar c = getchar();\\n\\twhile (c &lt; '0' || '9' &lt; c)\\n\\t{\\n\\t\\tif (c == '-')\\n\\t\\t\\tf = -1;\\n\\t\\tc = getchar();\\n\\t}\\n\\twhile ('0' &lt;= c &amp;&amp; c &lt;= '9')\\n\\t\\tx = (x &lt;&lt; 3) + (x &lt;&lt; 1) + (c ^ 48), c = getchar();\\n\\treturn f * x;\\n}\\n\\n// 常数定义\\nconst double eps = 1e-6;\\nconst double PI = acos(-1.0);\\nconst int INF = 0x3f3f3f3f;\\nconst int N = 1e5 + 10, M = 2 * N;\\nint h[N], e[M], ne[M], idx;\\nbool affected[N];\\nint dist1[N], dist2[N];\\n\\nint n, m, d;\\nint ans;\\n\\nvoid add(int a, int b)\\n{\\n\\te[idx] = b, ne[idx] = h[a], h[a] = idx++;\\n}\\n\\nvoid dfs1(int u, int father)\\n{\\n\\tif(affected[u])dist1[u] = 0;\\n\\n\\tint &amp;d1 = dist1[u], &amp;d2 = dist2[u];\\n\\n\\tfor (int i = h[u]; i != -1; i = ne[i])\\n\\t{\\n\\t\\tint v = e[i];\\n\\t\\tif (v == father)\\n\\t\\t\\tcontinue;\\n\\t\\t\\t\\n\\t\\tdfs1(v, u);\\n\\t\\tint d = dist1[v] + 1;\\n\\t\\t// debug1(d);\\n\\t\\tif(dist1[v] == -1)continue;\\n\\n\\n\\n\\t\\tif (d &gt;= d1)\\n\\t\\t\\td2 = d1, d1 = d;\\n\\t\\telse if (d &gt; d2)\\n\\t\\t\\td2 = d;\\n\\t}\\n\\n\\t// return dist;\\n}\\n\\nvoid dfs2(int u, int fa,int preLen)\\n{\\n\\tif(max(dist1[u],preLen) &lt;= d)ans ++;\\n\\t// debug2(u,max(dist1[u],preLen));\\n\\tfor (int i = h[u]; i != -1; i = ne[i])\\n\\t{\\n\\t\\tint v = e[i];\\n\\t\\tif (v == fa)\\n\\t\\t\\tcontinue;\\n\\t\\t\\n\\t\\tint Len = preLen;\\n\\t\\tif(dist1[v] &gt;= 0)Len = (dist1[v] == dist1[u]-1)?max(Len,dist2[u])+1:max(Len,dist1[u])+1;\\n\\t\\telse Len = max(Len,dist1[u]) + 1;\\n\\t\\t\\n\\t\\tdfs2(v, u, Len);\\n\\n\\t}\\n}\\n\\nvoid solve()\\n{\\n\\tmemset(h, -1, sizeof h);\\n\\tmemset(dist1,-0x3f,sizeof dist1);\\n\\tmemset(dist2,-0x3f,sizeof dist2);\\n\\t\\n\\t// memset(f, -1, sizeof f);\\n\\n\\tcin &gt;&gt; n &gt;&gt; m &gt;&gt; d;\\n\\tfor (int i = 0; i &lt; m; i++)\\n\\t{\\n\\t\\tint t;\\n\\t\\tcin &gt;&gt; t;\\n\\t\\taffected[t] = 1;\\n\\t}\\n\\n\\tfor (int i = 0; i &lt; n - 1; i++)\\n\\t{\\n\\t\\tint x, y;\\n\\t\\tcin &gt;&gt; x &gt;&gt; y;\\n\\t\\tadd(x, y);\\n\\t\\tadd(y, x);\\n\\t}\\n\\n\\tdfs1(1, -1);\\n\\n\\tdfs2(1, -1, -1044266559);\\n\\t// for(int i = 1;i &lt;= n;i ++)debug3(i,dist1[i],dist2[i]);\\n\\tcout &lt;&lt; ans &lt;&lt; endl;\\n}\\n\\nsigned main()\\n{\\n\\n\\tios::sync_with_stdio(false);\\n\\tcin.tie(0);\\n\\tcout.tie(0);\\n\\n\\t// caseT\\n\\tsolve();\\n\\n\\treturn 0;\\n}\\n/*\\n\\n*/\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
