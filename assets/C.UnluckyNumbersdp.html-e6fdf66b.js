import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as e,c as m,a as n,b as s,d as r,f as t}from"./app-85eb831d.js";const d={},c=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),u={href:"https://codeforces.com/contest/1808/problem/C",target:"_blank",rel:"noopener noreferrer"},o=n("h2",{id:"题意",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题意","aria-hidden":"true"},"#"),s(" 题意")],-1),v=n("ul",null,[n("li",null,"给两个数 l 和 r $ ( 1 ≤ l ≤ r ≤ 10^{18})$"),n("li",null,"请找出再这个范围内的一个数字，使得按数位这个数字中的数最大值和最小值之差最小")],-1),h=n("h2",{id:"思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),s(" 思路")],-1),p=n("ul",null,[n("li",null,"当 l 和 r 的数位长度不一样时，可以输出和l长度相同的999...（贪心）"),n("li",null,"在此之外，数位dp的思想，进行搜索"),n("li",null,[s("定义"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"d"),n("mi",null,"f"),n("mi",null,"s"),n("mo",{stretchy:"false"},"("),n("mi",null,"i"),n("mi",null,"n"),n("mi",null,"t"),n("mi",null,"s"),n("mi",null,"t"),n("mo",{separator:"true"},","),n("mi",null,"i"),n("mi",null,"n"),n("mi",null,"t"),n("mi",null,"s"),n("mi",null,"t"),n("mi",null,"a"),n("mi",null,"r"),n("mi",null,"t"),n("mo",{separator:"true"},","),n("mi",null,"i"),n("mi",null,"n"),n("mi",null,"t"),n("mi",null,"e"),n("mi",null,"d"),n("mo",{separator:"true"},","),n("mi",null,"c"),n("mi",null,"h"),n("mi",null,"a"),n("mi",null,"r"),n("mi",null,"m"),n("mi",null,"a"),n("mi",null,"x"),n("mi",null,"L"),n("mi",null,"a"),n("mi",null,"s"),n("mi",null,"t"),n("mo",{separator:"true"},","),n("mi",null,"c"),n("mi",null,"h"),n("mi",null,"a"),n("mi",null,"r"),n("mi",null,"m"),n("mi",null,"i"),n("mi",null,"n"),n("mi",null,"L"),n("mi",null,"a"),n("mi",null,"s"),n("mi",null,"t"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"dfs(int st, int start, int ed, char maxLast, char minLast)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"df"),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"in"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"in"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"in"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal"},"d"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"c"),n("span",{class:"mord mathnormal"},"ha"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"mord mathnormal"},"ma"),n("span",{class:"mord mathnormal"},"xL"),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"c"),n("span",{class:"mord mathnormal"},"ha"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"mord mathnormal"},"min"),n("span",{class:"mord mathnormal"},"L"),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mclose"},")")])])])]),n("li",null,"st 当前搜索到的数位"),n("li",null,"start 左边界是否受限"),n("li",null,"ed 右边界是否受限"),n("li",null,"maxLast(mingLast) 当前搜索的最大和最小值")],-1),b=t(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string a, b;
int ans = 10;
string res;
string temp;
void dfs(int st, int start, int ed, char maxLast, char minLast)
{
    if (maxLast - minLast &gt;= ans)  //剪枝掉比当前不优的情况
        return;

    if (st == a.size())            //搜索结束
    {
        ans = maxLast - minLast;
        res = temp;
        return;
    }
    char l ;                       //搜索的起点和终点
    char r ;
    
    if (start &amp;&amp; ed)
        l = a[st],r = b[st];
    else if (start)
        l = a[st],r = &#39;9&#39;;
    else if (ed)
        l = &#39;0&#39;,r = b[st];
    else
        l = &#39;0&#39;, r = &#39;9&#39;;

    for (char i = l; i &lt;= r; i++)
    {
        temp.push_back(i);
        dfs(st + 1, i == l &amp;&amp; start, i == r &amp;&amp; ed, max(maxLast, i), min(minLast, i));
        temp.pop_back();
    }
}

void solve()
{
    int l, r;
    cin &gt;&gt; l &gt;&gt; r;
    a = to_string(l);
    b = to_string(r);
    res = a;
    ans = 10;
    temp.clear();

    if (a.size() + 1 &lt;= b.size())
    {
        cout &lt;&lt; string((int)a.size(), &#39;9&#39;) &lt;&lt; endl;
        return;
    }
    for (char i = a[0]; i &lt;= b[0]; i++)
    {
        temp.push_back(i);
        dfs(1, i == a[0], i == b[0], i, i);
        temp.pop_back();
    }

    cout &lt;&lt; res &lt;&lt; endl;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(_,f){const l=i("ExternalLinkIcon");return e(),m("div",null,[c,n("ul",null,[n("li",null,[n("a",u,[s("https://codeforces.com/contest/1808/problem/C"),r(l)])])]),o,v,h,p,b])}const k=a(d,[["render",g],["__file","C.UnluckyNumbersdp.html.vue"]]);export{k as default};
