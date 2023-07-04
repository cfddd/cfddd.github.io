const t=JSON.parse(`{"key":"v-6a97fb98","path":"/Algorithm/3_.html","title":"找结论——势能","lang":"zh-CN","frontmatter":{"title":"找结论——势能","icon":"calculator","description":"https://atcoder.jp/contests/arc120/tasks/arc120_c 势能就是i + a[i],很有用的结论 对于能完成交换，从A变成B，势能数组一定相同 找出最小交换次数，贪心的方案是：最近的先交换 找到最近的在可以用数组数组和set实现 具体细节见代码 #include&lt;bits/stdc++.h&gt; #define debug1(a) cout&lt;&lt;#a&lt;&lt;'='&lt;&lt; a &lt;&lt; endl; #define debug2(a,b) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;endl; #define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;endl; #define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\" \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;endl; #define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\" \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;\\" \\"&lt;&lt;#e&lt;&lt;\\" = \\"&lt;&lt;e&lt;&lt;endl; #define debug0(x) cout &lt;&lt; \\"debug0: \\" &lt;&lt; x &lt;&lt; endl #define fr(t, i, n)for (long long i = t; i &lt; n; i++) #define YES cout&lt;&lt;\\"Yes\\"&lt;&lt;endl #define NO cout&lt;&lt;\\"No\\"&lt;&lt;endl #define fi first #define se second #define int long long using namespace std; typedef long long LL; typedef unsigned long long ULL; typedef pair&lt;int,int&gt; PII; typedef pair&lt;LL,LL&gt; PLL; //#pragma GCC optimize(3,\\"Ofast\\",\\"inline\\") //#pragma GCC optimize(2) const int N = 2e5+10; int aa[N]; int lowbit(int x) // 返回末尾的1 {return x &amp; -x;} void add(int x,int w){ for(int i = x;i &lt; N;i += lowbit(i)){ aa[i] += w; } } int query(int u){ int res = 0; for(int i = u;i &gt; 0;i -= lowbit(i)){ res += aa[i]; } return res; } int a[N],b[N]; multiset&lt;int&gt; A,B; void solve() { int n;cin &gt;&gt; n; for(int i = 1; i &lt;= n; i++)cin &gt;&gt; a[i],A.insert(a[i] + i); for(int i = 1; i &lt;= n; i++)cin &gt;&gt; b[i],B.insert(b[i] + i); if(A != B) { cout &lt;&lt; -1 &lt;&lt; endl; return ; } set&lt;PII&gt; s; int ans = 0; for(int i = 1; i &lt;= n; i++)s.insert(PII{a[i] + i, i}); for(int i = 1; i &lt;= n; i++) { set&lt;PII&gt;::iterator it = s.lower_bound(PII{b[i]+i,0}); int t = query((*it).second) + (*it).second; add(1,1); assert((*it).second&gt;0); add((*it).second,-1);//这里相对位置不用加1，因为这个是相对于a数组原始位置而言的 ans += t - i; s.erase(it); } cout &lt;&lt; ans &lt;&lt; endl; } signed main() { ios::sync_with_stdio(false); cin.tie(0); cout.tie(0); int T = 1;//cin &gt;&gt; T; while(T--){ solve(); } return 0; }","head":[["meta",{"property":"og:url","content":"https://cfddd.github.io/Algorithm/3_.html"}],["meta",{"property":"og:site_name","content":"俄罗斯刺沙蓬"}],["meta",{"property":"og:title","content":"找结论——势能"}],["meta",{"property":"og:description","content":"https://atcoder.jp/contests/arc120/tasks/arc120_c 势能就是i + a[i],很有用的结论 对于能完成交换，从A变成B，势能数组一定相同 找出最小交换次数，贪心的方案是：最近的先交换 找到最近的在可以用数组数组和set实现 具体细节见代码 #include&lt;bits/stdc++.h&gt; #define debug1(a) cout&lt;&lt;#a&lt;&lt;'='&lt;&lt; a &lt;&lt; endl; #define debug2(a,b) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;endl; #define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;endl; #define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\" \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;endl; #define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\" \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;\\" \\"&lt;&lt;#e&lt;&lt;\\" = \\"&lt;&lt;e&lt;&lt;endl; #define debug0(x) cout &lt;&lt; \\"debug0: \\" &lt;&lt; x &lt;&lt; endl #define fr(t, i, n)for (long long i = t; i &lt; n; i++) #define YES cout&lt;&lt;\\"Yes\\"&lt;&lt;endl #define NO cout&lt;&lt;\\"No\\"&lt;&lt;endl #define fi first #define se second #define int long long using namespace std; typedef long long LL; typedef unsigned long long ULL; typedef pair&lt;int,int&gt; PII; typedef pair&lt;LL,LL&gt; PLL; //#pragma GCC optimize(3,\\"Ofast\\",\\"inline\\") //#pragma GCC optimize(2) const int N = 2e5+10; int aa[N]; int lowbit(int x) // 返回末尾的1 {return x &amp; -x;} void add(int x,int w){ for(int i = x;i &lt; N;i += lowbit(i)){ aa[i] += w; } } int query(int u){ int res = 0; for(int i = u;i &gt; 0;i -= lowbit(i)){ res += aa[i]; } return res; } int a[N],b[N]; multiset&lt;int&gt; A,B; void solve() { int n;cin &gt;&gt; n; for(int i = 1; i &lt;= n; i++)cin &gt;&gt; a[i],A.insert(a[i] + i); for(int i = 1; i &lt;= n; i++)cin &gt;&gt; b[i],B.insert(b[i] + i); if(A != B) { cout &lt;&lt; -1 &lt;&lt; endl; return ; } set&lt;PII&gt; s; int ans = 0; for(int i = 1; i &lt;= n; i++)s.insert(PII{a[i] + i, i}); for(int i = 1; i &lt;= n; i++) { set&lt;PII&gt;::iterator it = s.lower_bound(PII{b[i]+i,0}); int t = query((*it).second) + (*it).second; add(1,1); assert((*it).second&gt;0); add((*it).second,-1);//这里相对位置不用加1，因为这个是相对于a数组原始位置而言的 ans += t - i; s.erase(it); } cout &lt;&lt; ans &lt;&lt; endl; } signed main() { ios::sync_with_stdio(false); cin.tie(0); cout.tie(0); int T = 1;//cin &gt;&gt; T; while(T--){ solve(); } return 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-03T12:00:26.000Z"}],["meta",{"property":"article:author","content":"俄罗斯刺沙蓬"}],["meta",{"property":"article:modified_time","content":"2023-07-03T12:00:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"找结论——势能\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-03T12:00:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俄罗斯刺沙蓬\\",\\"url\\":\\"https://cfddd.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1688385626000,"updatedTime":1688385626000,"contributors":[{"name":"cfd","email":"2909047212@qq.com","commits":1}]},"readingTime":{"minutes":1.51,"words":454},"filePathRelative":"Algorithm/3_.md","localizedDate":"2023年7月3日","excerpt":"<ul>\\n<li><a href=\\"https://atcoder.jp/contests/arc120/tasks/arc120_c\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://atcoder.jp/contests/arc120/tasks/arc120_c</a></li>\\n</ul>\\n<p>势能就是i + a[i],很有用的结论<br>\\n对于能完成交换，从A变成B，势能数组一定相同<br>\\n找出最小交换次数，贪心的方案是：最近的先交换<br>\\n找到最近的在可以用数组数组和set实现<br>\\n具体细节见代码</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>#include&lt;bits/stdc++.h&gt;\\n#define debug1(a) cout&lt;&lt;#a&lt;&lt;'='&lt;&lt; a &lt;&lt; endl;\\n#define debug2(a,b) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\"  \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;endl;\\n#define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\"  \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\"  \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;endl;\\n#define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\"  \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\"  \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\"  \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;endl;\\n#define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\"  \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\"  \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\"  \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;\\"  \\"&lt;&lt;#e&lt;&lt;\\" = \\"&lt;&lt;e&lt;&lt;endl;\\n#define debug0(x) cout &lt;&lt; \\"debug0: \\" &lt;&lt; x &lt;&lt; endl\\n#define fr(t, i, n)for (long long i = t; i &lt; n; i++)\\n#define YES cout&lt;&lt;\\"Yes\\"&lt;&lt;endl\\n#define NO cout&lt;&lt;\\"No\\"&lt;&lt;endl\\n#define fi first\\n#define se second\\n#define int long long\\nusing namespace std;\\n\\ntypedef long long LL;\\ntypedef unsigned long long ULL;\\ntypedef pair&lt;int,int&gt; PII;\\ntypedef pair&lt;LL,LL&gt; PLL;\\n\\n//#pragma GCC optimize(3,\\"Ofast\\",\\"inline\\")\\n//#pragma GCC optimize(2)\\n\\nconst int N = 2e5+10;\\nint aa[N];\\nint lowbit(int x)  // 返回末尾的1\\n{return x &amp; -x;}\\n\\nvoid add(int x,int w){\\n    for(int i = x;i &lt; N;i += lowbit(i)){\\n        aa[i] += w;\\n    }\\n}\\n\\nint query(int u){\\n    int res = 0;\\n    for(int i = u;i &gt; 0;i -= lowbit(i)){\\n        res += aa[i];\\n    }\\n    return res;\\n}\\n\\nint a[N],b[N];\\nmultiset&lt;int&gt; A,B;\\n\\nvoid solve() \\n{\\n    int n;cin &gt;&gt; n;\\n    \\n    for(int i = 1; i &lt;= n; i++)cin &gt;&gt; a[i],A.insert(a[i] + i);\\n    for(int i = 1; i &lt;= n; i++)cin &gt;&gt; b[i],B.insert(b[i] + i);\\n\\n    if(A != B)\\n    {\\n        cout &lt;&lt; -1 &lt;&lt; endl;\\n        return ;\\n    }\\n\\n    set&lt;PII&gt; s;\\n    int ans = 0;\\n    for(int i = 1; i &lt;= n; i++)s.insert(PII{a[i] + i, i});\\n    for(int i = 1; i &lt;= n; i++)\\n    {\\n        set&lt;PII&gt;::iterator it = s.lower_bound(PII{b[i]+i,0});\\n\\n        int t = query((*it).second) + (*it).second;\\n        \\n        add(1,1);\\n        assert((*it).second&gt;0);\\n        add((*it).second,-1);//这里相对位置不用加1，因为这个是相对于a数组原始位置而言的\\n        ans += t - i;\\n              \\n        s.erase(it);\\n    }\\n\\n    cout &lt;&lt; ans &lt;&lt; endl;\\n\\n}\\n\\nsigned main()\\n{\\n    \\n    ios::sync_with_stdio(false);\\n    cin.tie(0);\\n    cout.tie(0);\\n    \\n\\n    int T = 1;//cin &gt;&gt; T;\\n    while(T--){\\n        solve();\\n    }\\n    return 0;\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};