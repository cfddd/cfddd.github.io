import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as e,a as n,b as s,d as c,f as l}from"./app-833b555e.js";const i={},u=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),k={href:"https://codeforces.com/problemset/problem/1404/B",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><figure><img src="https://img2023.cnblogs.com/blog/2740326/202304/2740326-20230420210130124-971151525.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>因为这是一颗树，所以不管怎么追逐，我们都可以理解为在同一条路上追逐（去掉我们不走的路，就是一个线段）</li><li>首先，如果da &gt; db，显然能追上，进一步，da == db时，因为路径的长度是有限的，也显然可以追上</li><li>因为树上任意两点的最短路径是固定的，所以a点可以一直朝着b追，而b是无法走回头路的（至少在a的范围外）</li><li>所以只存在当a刚好可以追上b时（da == dista_b）,b &gt;2*a才可以逃脱，bob胜利</li><li>还要注意一点，如果整棵树的最长直径不大于2*a，那么显然bob无法逃脱，alice胜利。对于这一步，可以<strong>跑树的最长直径板子</strong></li><li>还有一点，alice先手，直接抓到bob，alice胜利。<strong>判断ab之间距离</strong></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">2e5</span><span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> e<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> ne<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> idx<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">;</span>
    ne<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> h<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
    h<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> idx<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> maxlen <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> distab <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> da<span class="token punctuation">,</span> db<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span><span class="token keyword">int</span> fa<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> l0 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">=</span> ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> fa<span class="token punctuation">)</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> u<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&gt;=</span> l0<span class="token punctuation">)</span>
            l1 <span class="token operator">=</span> l0<span class="token punctuation">,</span> l0 <span class="token operator">=</span> len<span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&gt;</span> l1<span class="token punctuation">)</span>
            l1 <span class="token operator">=</span> len<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    maxlen <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>maxlen<span class="token punctuation">,</span> l0 <span class="token operator">+</span> l1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> l0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">dfs1</span><span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> fa<span class="token punctuation">,</span> <span class="token keyword">int</span> dis<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>u <span class="token operator">==</span> b<span class="token punctuation">)</span>
        distab <span class="token operator">=</span> dis<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> h<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> ne<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> fa<span class="token punctuation">)</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token function">dfs1</span><span class="token punctuation">(</span>e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> u<span class="token punctuation">,</span> dis <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    maxlen <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    cin <span class="token operator">&gt;&gt;</span> n <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b <span class="token operator">&gt;&gt;</span> da <span class="token operator">&gt;&gt;</span> db<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span>i <span class="token operator">++</span><span class="token punctuation">)</span>
        h<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">;</span>
        <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>da <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">&gt;=</span> db<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Alice&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// debug1(maxlen);</span>
    <span class="token function">dfs1</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>maxlen <span class="token operator">&lt;=</span> da<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">||</span> distab <span class="token operator">&lt;=</span> da<span class="token punctuation">)</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Alice&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Bob&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function d(v,b){const a=t("ExternalLinkIcon");return o(),e("div",null,[u,n("p",null,[n("a",k,[s("B. Tree Tag"),c(a)])]),r])}const g=p(i,[["render",d],["__file","B.TreeTag.html.vue"]]);export{g as default};