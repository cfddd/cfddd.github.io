import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as a,a as i,b as e,d as r,f as c}from"./app-62dd404b.js";const v={},t=i("h2",{id:"题目",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),e(" 题目")],-1),m={href:"https://codeforces.com/problemset/problem/1436/C",target:"_blank",rel:"noopener noreferrer"},u=c(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><figure><img src="https://img2023.cnblogs.com/blog/2740326/202304/2740326-20230405204340314-630825628.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>给一个数字n，构造出一个全排列的数组a，满足上面二分结果为true</li><li>请求出不同全排列数组a的数量，答案模1e9+7</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>模拟：按照二叉查找树的思路，模拟这个二分所有可能遇到的mid，使得判断条件成立（为什么落在最后的点上？因为是折半查找，搜索树上没有重复的节点）</li><li>这样得到了必须大于<strong>等于</strong>x位置的数量，和必须小于x位置的数量，也就是知道了剩下没有遇到的位置该如何排列（全排列）</li><li><code>ans = C[Cles][les.size()] * fact[les.size()] % mod;</code>计算小于的数量（特殊处理遇到pos节点的位置，即忽略）<br><code>ans = (ans * (C[Cgre][gre.size()] * fact[gre.size()] % mod)) % mod;</code>计算大于的数量<br><code>ans = (ans * fact[n - les.size() - gre.size() - 1]) % mod;</code>计算剩余的排列数量</li><li>需要用到组合数和计数原理，和二分</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const double PI = acos(-1.0);
const int N = 1010, mod = 1e9 + 7;
int C[N][N];
int fact[N];
void solve()
{
    int n, x, pos;
    cin &gt;&gt; n &gt;&gt; x &gt;&gt; pos;
    vector&lt;int&gt; gre, les;
    vector&lt;int&gt; idx;
    int l = 0, r = n;
    while(l &lt; r)
    {
        int mid = l + r &gt;&gt; 1;
        idx.push_back(mid);
        if(mid &lt;= pos)
        {
            l = mid + 1;
            if(mid != pos)les.push_back(mid);
        }
        else
        {
            r = mid;
            gre.push_back(mid);
        }
        // debug1(mid);
    }
    
    int Cles = x - 1;
    int Cgre = n - x;
    // debug2(Cles, Cgre);
    // debug2(les.size(), gre.size());
    int ans = C[Cles][les.size()] * fact[les.size()] % mod;
    ans = (ans * (C[Cgre][gre.size()] * fact[gre.size()] % mod)) % mod;
    ans = (ans * fact[n - les.size() - gre.size() - 1]) % mod;
    cout &lt;&lt; ans &lt;&lt; endl;
}

signed main()
{

    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    C[0][0] = fact[0] = 1;
    for (int i = 1; i &lt;= 1000;i ++)
    {
        C[i][0] = C[i][i] = 1;
        fact[i] = (fact[i - 1] * i) % mod;
        for (int j = 1; j &lt; i;j ++)
        {
            C[i][j] = (C[i - 1][j] + C[i - 1][j - 1]) % mod;
        }
    }

        // caseT
        solve();

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function o(b,g){const n=l("ExternalLinkIcon");return d(),a("div",null,[t,i("ul",null,[i("li",null,[i("a",m,[e("C. Binary Search"),r(n)])])]),u])}const _=s(v,[["render",o],["__file","C.BinarySearch.html.vue"]]);export{_ as default};
