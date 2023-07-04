import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,f as l}from"./app-833b555e.js";const a={},s=l(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li>给两个整数n，m（1 ~ 1e12）</li><li>找到两个1 ~ n之内的数字，它的大于等于m并且最小</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><figure><img src="https://img2023.cnblogs.com/blog/2740326/202304/2740326-20230402151304133-1341384930.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void solve()
{
    int n, m;
    cin &gt;&gt; n &gt;&gt; m;

    int ans = 9e18;
    int limit = sqrtl(m);
    while((limit - 1)*(limit - 1) &gt;= m)
        limit--;
    while ((limit + 1) * (limit + 1) &lt; m)
        limit++;
    for (int i = 1; i &lt;= limit+1; i++)
    {
        int t = (m + i - 1) / i;
        // debug2(t,i);
        if(t &lt;= n &amp;&amp; i &lt;= n)
            ans = min(ans, t * i);
    }
    if(ans == 9e18)
        cout &lt;&lt; -1 &lt;&lt; endl;
    else printf(&quot;%lld&quot;, ans);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[s];function t(r,c){return n(),e("div",null,d)}const u=i(a,[["render",t],["__file","D-Mab.html.vue"]]);export{u as default};
