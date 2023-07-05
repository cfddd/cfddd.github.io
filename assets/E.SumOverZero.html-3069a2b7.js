import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as a,c as t,a as i,b as s,d as r,f as m}from"./app-587dee3d.js";const d={},c=i("h2",{id:"题目",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),u={href:"https://codeforces.com/contest/1788/problem/E",target:"_blank",rel:"noopener noreferrer"},v=i("h2",{id:"题意",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#题意","aria-hidden":"true"},"#"),s(" 题意")],-1),o=i("ul",null,[i("li",null,"给一个长度为n的数组a"),i("li",null,"定义一个子段为[x,y]，价值是长度（y - x + 1）"),i("li",null,[s("要选择一个子段，必须"),i("span",{class:"katex"},[i("span",{class:"katex-mathml"},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("semantics",null,[i("mrow",null,[i("mn",null,"0"),i("mo",null,"≤"),i("msubsup",null,[i("mo",null,"∑"),i("mrow",null,[i("mi",null,"i"),i("mo",null,"="),i("mi",null,"x")]),i("mi",null,"y")]),i("mi",null,"a"),i("mo",{stretchy:"false"},"["),i("mi",null,"i"),i("mo",{stretchy:"false"},"]")]),i("annotation",{encoding:"application/x-tex"},"0 \\leq \\sum_{i = x}^y a[i]")])])]),i("span",{class:"katex-html","aria-hidden":"true"},[i("span",{class:"base"},[i("span",{class:"strut",style:{height:"0.7804em","vertical-align":"-0.136em"}}),i("span",{class:"mord"},"0"),i("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),i("span",{class:"mrel"},"≤"),i("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),i("span",{class:"base"},[i("span",{class:"strut",style:{height:"1.104em","vertical-align":"-0.2997em"}}),i("span",{class:"mop"},[i("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),i("span",{class:"msupsub"},[i("span",{class:"vlist-t vlist-t2"},[i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.8043em"}},[i("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mtight"},[i("span",{class:"mord mathnormal mtight"},"i"),i("span",{class:"mrel mtight"},"="),i("span",{class:"mord mathnormal mtight"},"x")])])]),i("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),i("span",{class:"vlist-s"},"​")]),i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.2997em"}},[i("span")])])])])]),i("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),i("span",{class:"mord mathnormal"},"a"),i("span",{class:"mopen"},"["),i("span",{class:"mord mathnormal"},"i"),i("span",{class:"mclose"},"]")])])])]),i("li",null,"问所有不相交子段的最大价值和是多少")],-1),b=m(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>普通的最长上升子序列模型 <ul><li>定义f[i]：前i个元素构成的最大价值</li><li>转移：f[i] = max(f[i-1],f[j-1] + i - j + 1)</li><li>设x数组的前缀和数组sum，则j必须满足sum[j] &gt; sum[i]</li></ul></li><li>这样操作显然会超时</li><li>一个经典的思路————把<strong>f[x] - x</strong>看成一个整体，i又是一个定值，所以我们就可以用树状数组等数据结构来实现找到需要转移的最大位置</li><li>时间复杂度O（NlogN）</li><li>树状数组的下标对应前缀和的大小，但是，因为前缀和可能非常大或者非常小，所以我们需要离散化，再这个离散后的抽象大小相关位置上用树状数组 <ul><li>：）居然还可以用二分作为排序后离散化找位置的工具（学到了）</li></ul></li><li>树状数组上维护一个最大值，因为 <strong>- j</strong> 的存在，初始可能为负数，需要初始化最小</li><li>查找：比当前前缀和相对位置小的维护的最大值</li><li>插入：上一个已经找到有的结果f[i - 1] - i + 1;</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
const int N = 2e5+10;

int tr[N];
int a[N],sum[N],sumb[N];
int f[N];
int n;

int lowbit(int x)  // 返回末尾的1
{return x &amp; -x;}

void add(int x,int w){
    for(int i = x;i &lt; N;i += lowbit(i)){
        tr[i] = max(tr[i],w);
    }
}

int query(int u){
    int res = -INF;
    for(int i = u;i &gt; 0;i -= lowbit(i)){
        res = max(tr[i],res);
    }
    return res;
}

void solve() 
{
    cin &gt;&gt; n;
    for(int i = 1;i &lt;= n;i ++){
        cin &gt;&gt; a[i];
        sumb[i] = sum[i] = sum[i-1] + a[i];
        
    }
    for(int i = 1;i &lt;= n;i ++)tr[i] = -INF;
    sort(sumb+1,sumb+n+1);
    for(int i = 1;i &lt;= n;i ++)
    {   
        int id0 = lower_bound(sumb+1,sumb+n+1,sum[i-1]) - sumb;
        int id1 = lower_bound(sumb+1,sumb+n+1,sum[i]) - sumb;
        add(id0,f[i-1] - i + 1);
        f[i] = max(f[i-1],query(id1) + i);
    }

    cout &lt;&lt; f[n] &lt;&lt; endl;
}
signed main()
{
    solve();
    return 0;
}
/*

*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function h(p,g){const n=e("ExternalLinkIcon");return a(),t("div",null,[c,i("ul",null,[i("li",null,[i("a",u,[s("https://codeforces.com/contest/1788/problem/E"),r(n)])])]),v,o,b])}const _=l(d,[["render",h],["__file","E.SumOverZero.html.vue"]]);export{_ as default};
