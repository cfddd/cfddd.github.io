const t=JSON.parse(`{"key":"v-e92278bc","path":"/Algorithm/D-IWannaWinTheGame.html","title":"D - I Wanna Win The Game","lang":"zh-CN","frontmatter":{"title":"D - I Wanna Win The Game","icon":"calculator","description":"https://atcoder.jp/contests/arc116/tasks/arc116_d #include&lt;bits/stdc++.h&gt; #define debug1(a) cout&lt;&lt;#a&lt;&lt;'='&lt;&lt; a &lt;&lt; endl; #define debug2(a,b) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;endl; #define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;endl; #define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\" \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;endl; #define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\" \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;\\" \\"&lt;&lt;#e&lt;&lt;\\" = \\"&lt;&lt;e&lt;&lt;endl; #define debug0(x) cout &lt;&lt; \\"debug0: \\" &lt;&lt; x &lt;&lt; endl #define fr(t, i, n)for (long long i = t; i &lt; n; i++) #define YES cout&lt;&lt;\\"Yes\\"&lt;&lt;endl #define NO cout&lt;&lt;\\"No\\"&lt;&lt;endl #define fi first #define se second #define int long long using namespace std; typedef long long LL; typedef unsigned long long ULL; typedef pair&lt;int,int&gt; PII; typedef pair&lt;LL,LL&gt; PLL; //#pragma GCC optimize(3,\\"Ofast\\",\\"inline\\") //#pragma GCC optimize(2) const int N = 5e3+10,mod = 998244353; int C[N][N]; int f[N]; /* 求异或和为0，那么必然按位来看 按位dp f[i]表示和为i且异或和为0时，方案数量 从低位开始，枚举当前最低位的1的数量（必须是偶数个1，显然奇数个对答案不成立） 左边除了最低位得那些位 f[i] += f[(i-j)/2]*C[n][j] */ void solve() { int n,m;cin &gt;&gt; n &gt;&gt; m; C[1][0] = C[1][1] = 1; for(int i = 2;i &lt;= n;i ++) { for(int j = 0;j &lt;= i;j ++) { if(j)C[i][j] = (C[i-1][j] + C[i-1][j-1]) % mod; else C[i][j] = 1; } } f[0] = 1; for(int i = 2;i &lt;= m;i += 2)//数字范围 { for(int j = 0;j &lt;= n &amp;&amp; j &lt;= i;j += 2)//位数范围 { f[i] = (f[i] + f[(i-j)/2]*C[n][j]) % mod; } } cout &lt;&lt; f[m] &lt;&lt; endl; } signed main() { /* ios::sync_with_stdio(false); cin.tie(0); cout.tie(0); */ int T = 1;//cin &gt;&gt; T; while(T--){ solve(); } return 0; }","head":[["meta",{"property":"og:url","content":"https://cfddd.github.io/Algorithm/D-IWannaWinTheGame.html"}],["meta",{"property":"og:site_name","content":"俄罗斯刺沙蓬"}],["meta",{"property":"og:title","content":"D - I Wanna Win The Game"}],["meta",{"property":"og:description","content":"https://atcoder.jp/contests/arc116/tasks/arc116_d #include&lt;bits/stdc++.h&gt; #define debug1(a) cout&lt;&lt;#a&lt;&lt;'='&lt;&lt; a &lt;&lt; endl; #define debug2(a,b) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;endl; #define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;endl; #define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\" \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;endl; #define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\" \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\" \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\" \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;\\" \\"&lt;&lt;#e&lt;&lt;\\" = \\"&lt;&lt;e&lt;&lt;endl; #define debug0(x) cout &lt;&lt; \\"debug0: \\" &lt;&lt; x &lt;&lt; endl #define fr(t, i, n)for (long long i = t; i &lt; n; i++) #define YES cout&lt;&lt;\\"Yes\\"&lt;&lt;endl #define NO cout&lt;&lt;\\"No\\"&lt;&lt;endl #define fi first #define se second #define int long long using namespace std; typedef long long LL; typedef unsigned long long ULL; typedef pair&lt;int,int&gt; PII; typedef pair&lt;LL,LL&gt; PLL; //#pragma GCC optimize(3,\\"Ofast\\",\\"inline\\") //#pragma GCC optimize(2) const int N = 5e3+10,mod = 998244353; int C[N][N]; int f[N]; /* 求异或和为0，那么必然按位来看 按位dp f[i]表示和为i且异或和为0时，方案数量 从低位开始，枚举当前最低位的1的数量（必须是偶数个1，显然奇数个对答案不成立） 左边除了最低位得那些位 f[i] += f[(i-j)/2]*C[n][j] */ void solve() { int n,m;cin &gt;&gt; n &gt;&gt; m; C[1][0] = C[1][1] = 1; for(int i = 2;i &lt;= n;i ++) { for(int j = 0;j &lt;= i;j ++) { if(j)C[i][j] = (C[i-1][j] + C[i-1][j-1]) % mod; else C[i][j] = 1; } } f[0] = 1; for(int i = 2;i &lt;= m;i += 2)//数字范围 { for(int j = 0;j &lt;= n &amp;&amp; j &lt;= i;j += 2)//位数范围 { f[i] = (f[i] + f[(i-j)/2]*C[n][j]) % mod; } } cout &lt;&lt; f[m] &lt;&lt; endl; } signed main() { /* ios::sync_with_stdio(false); cin.tie(0); cout.tie(0); */ int T = 1;//cin &gt;&gt; T; while(T--){ solve(); } return 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-03T12:00:26.000Z"}],["meta",{"property":"article:author","content":"俄罗斯刺沙蓬"}],["meta",{"property":"article:modified_time","content":"2023-07-03T12:00:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"D - I Wanna Win The Game\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-03T12:00:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俄罗斯刺沙蓬\\",\\"url\\":\\"https://cfddd.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1688385626000,"updatedTime":1688385626000,"contributors":[{"name":"cfd","email":"2909047212@qq.com","commits":1}]},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"Algorithm/D-IWannaWinTheGame.md","localizedDate":"2023年7月3日","excerpt":"<p><a href=\\"https://atcoder.jp/contests/arc116/tasks/arc116_d\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://atcoder.jp/contests/arc116/tasks/arc116_d</a></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>#include&lt;bits/stdc++.h&gt;\\n#define debug1(a) cout&lt;&lt;#a&lt;&lt;'='&lt;&lt; a &lt;&lt; endl;\\n#define debug2(a,b) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\"  \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;endl;\\n#define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\"  \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\"  \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;endl;\\n#define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\"  \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\"  \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\"  \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;endl;\\n#define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;\\" = \\"&lt;&lt;a&lt;&lt;\\"  \\"&lt;&lt;#b&lt;&lt;\\" = \\"&lt;&lt;b&lt;&lt;\\"  \\"&lt;&lt;#c&lt;&lt;\\" = \\"&lt;&lt;c&lt;&lt;\\"  \\"&lt;&lt;#d&lt;&lt;\\" = \\"&lt;&lt;d&lt;&lt;\\"  \\"&lt;&lt;#e&lt;&lt;\\" = \\"&lt;&lt;e&lt;&lt;endl;\\n#define debug0(x) cout &lt;&lt; \\"debug0: \\" &lt;&lt; x &lt;&lt; endl\\n#define fr(t, i, n)for (long long i = t; i &lt; n; i++)\\n#define YES cout&lt;&lt;\\"Yes\\"&lt;&lt;endl\\n#define NO cout&lt;&lt;\\"No\\"&lt;&lt;endl\\n#define fi first\\n#define se second\\n#define int long long\\nusing namespace std;\\n\\ntypedef long long LL;\\ntypedef unsigned long long ULL;\\ntypedef pair&lt;int,int&gt; PII;\\ntypedef pair&lt;LL,LL&gt; PLL;\\n\\n//#pragma GCC optimize(3,\\"Ofast\\",\\"inline\\")\\n//#pragma GCC optimize(2)\\n\\nconst int N = 5e3+10,mod = 998244353;\\nint C[N][N];\\nint f[N];\\n/*\\n求异或和为0，那么必然按位来看\\n按位dp\\nf[i]表示和为i且异或和为0时，方案数量\\n从低位开始，枚举当前最低位的1的数量（必须是偶数个1，显然奇数个对答案不成立）\\n\\n左边除了最低位得那些位\\nf[i] += f[(i-j)/2]*C[n][j]\\n\\n\\n*/\\nvoid solve() \\n{\\n    int n,m;cin &gt;&gt; n &gt;&gt; m;\\n    C[1][0] = C[1][1] = 1;\\n    for(int i = 2;i &lt;= n;i ++)\\n    {\\n        for(int j = 0;j &lt;= i;j ++)\\n        {\\n            if(j)C[i][j] = (C[i-1][j] + C[i-1][j-1]) % mod;\\n            else C[i][j] = 1;\\n        }\\n    }\\n    f[0] = 1;\\n    for(int i = 2;i &lt;= m;i += 2)//数字范围\\n    {\\n        for(int j = 0;j &lt;= n &amp;&amp; j &lt;= i;j += 2)//位数范围\\n        {\\n            f[i] = (f[i] + f[(i-j)/2]*C[n][j]) % mod;\\n        }\\n    }\\n    cout &lt;&lt; f[m] &lt;&lt; endl;\\n}\\n\\nsigned main()\\n{\\n    /*\\n    ios::sync_with_stdio(false);\\n    cin.tie(0);\\n    cout.tie(0);\\n    */\\n\\n    int T = 1;//cin &gt;&gt; T;\\n    while(T--){\\n        solve();\\n    }\\n    return 0;\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
