import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as a,c as d,a as n,b as i,d as t,f as r}from"./app-f94c3d64.js";const c={},m=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),i(" 题目")],-1),v={href:"https://codeforces.com/contest/1788/problem/D",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"题意",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题意","aria-hidden":"true"},"#"),i(" 题意")],-1),o=n("ul",null,[n("li",null,"给一个长度为n的x数组，代表n个点的坐标"),n("li",null,"每个点会向离他最近的点移动，当有点相遇时，停止"),n("li",null,"问任意子序列（点数量大于等于2），有多少个终点")],-1),b=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),i(" 思路")],-1),h=n("ul",null,[n("li",null,"从题目给的“2”这个信息入手，从贡献这个方面来考虑"),n("li",null,"对于任意两不同的点，具有一定的范围，让这个范围内的点都被吸过来"),n("li",null,"于是范围外的点能保证两点相互靠近产生一次贡献，所以，这些范围外的数字可选可不选"),n("li",null,[i("对于（i,j） "),n("ul",null,[n("li",null,"l = lower_bound(x+1,x+n+1,x[i] - len)"),n("li",null,"r = lower_bound(x+1,x+n+1,x[j] + len)"),n("li",null,[i("贡献为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mn",null,"2"),n("mrow",null,[n("mi",null,"l"),n("mo",null,"+"),n("mi",null,"n"),n("mo",null,"−"),n("mi",null,"r"),n("mo",null,"+"),n("mn",null,"1")])])]),n("annotation",{encoding:"application/x-tex"},"2^{l + n - r + 1}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8491em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},"2"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8491em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mbin mtight"},"+"),n("span",{class:"mord mathnormal mtight"},"n"),n("span",{class:"mbin mtight"},"−"),n("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"mbin mtight"},"+"),n("span",{class:"mord mtight"},"1")])])])])])])])])])])]),n("br"),i(" ##代码")])])])],-1),p=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const int N = 3010;
const int mod = 1e9+7;
int x[N];
int qmi(int x,int y)
{
    int res = 1;
    int p = x;
    while(y)
    {
        if(y &amp; 1)res = (res * p) % mod;
        y &gt;&gt;= 1;
        p = (p * p) % mod;
    }
    return res;
}
void solve() 
{
    int n;cin &gt;&gt; n;
    for(int i = 1;i &lt;= n;i ++)
        cin &gt;&gt; x[i];

    int ans = 0;
    for(int i = 1;i &lt;= n;i ++)
    {
        for(int j = i+1;j &lt;= n;j ++)
        {
            int len = x[j] - x[i];
            int l = lower_bound(x+1,x+n+1,x[i] - len) - x - 1;
            int r = lower_bound(x+1,x+n+1,x[j] + len) - x;
            // debug2(l,r);
            ans = (ans + qmi(2,l + n - r + 1)) % mod;
            // debug1(ans);
        }
    }

    cout &lt;&lt; ans &lt;&lt; endl;
}
signed main()
{

    // ios::sync_with_stdio(false);
    // cin.tie(0);
    // cout.tie(0);

    // caseT
    solve();
    
    return 0;

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function x(g,_){const l=e("ExternalLinkIcon");return a(),d("div",null,[m,n("ul",null,[n("li",null,[n("a",v,[i("https://codeforces.com/contest/1788/problem/D"),t(l)])])]),u,o,b,h,p])}const y=s(c,[["render",x],["__file","D.MovingDots.html.vue"]]);export{y as default};
