import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as m,c as i,a as s,b as a,d as t,f as c}from"./app-85eb831d.js";const r={},p=s("h2",{id:"题目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),a(" 题目")],-1),o={href:"https://codeforces.com/contest/1272/problem/D",target:"_blank",rel:"noopener noreferrer"},h=s("h2",{id:"题意",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#题意","aria-hidden":"true"},"#"),a(" 题意")],-1),d=s("ul",null,[s("li",null,"输入 n(2≤n≤2e5) 和长为 n 的数组 a(1≤a[i]≤1e9)。"),s("li",null,"从 a 中去掉一个数（也可以不去掉）。"),s("li",null,"输出 a 的最长严格递增连续子数组的长度。")],-1),u=s("h2",{id:"思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),a(" 思路")],-1),g=s("ul",null,[s("li",null,"一种方法是前缀最长和后缀最长，加起来。这种方法比较简单。"),s("li",null,"用状态机来写，定义f[i][0/1]分别表示前缀最大到第 i 这个位置上是否用过这唯一一次删除机会"),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mn",null,"0"),s("mo",{stretchy:"false"},"]"),s("mo",null,"="),s("mi",null,"a"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,">"),s("mi",null,"a"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"?"),s("mi",null,"f"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mn",null,"0"),s("mo",{stretchy:"false"},"]"),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,":"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"f[i][0] = a[i] > a[i-1]?f[i-1][0] + 1:1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]?"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},":"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mn",null,"1"),s("mo",{stretchy:"false"},"]"),s("mo",null,"="),s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x"),s("mo",{stretchy:"false"},"("),s("mi",null,"a"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,">"),s("mi",null,"a"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"?"),s("mi",null,"f"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mn",null,"0"),s("mo",{stretchy:"false"},"]"),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,":"),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mi",null,"a"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mo",null,">"),s("mi",null,"a"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"2"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"?"),s("mi",null,"f"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",null,"−"),s("mn",null,"2"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mn",null,"0"),s("mo",{stretchy:"false"},"]"),s("mo",null,"+"),s("mn",null,"1"),s("mo",null,":"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f[i][1] = max( a[i] > a[i-1]?f[i-1][0] + 1:1,a[i] > a[i-2]?f[i-2][0] + 1:1 )")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"ma"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]?"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},":"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mclose"},"]?"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},":"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])]),s("li",null,[a("初始状态 "),s("ul",null,[s("li",null,"f[1][0] = f[1][1] = 1;"),s("li",null,"f[2][0] = (a[2] > a[1]) + 1;"),s("li",null,"f[2][1] = 1;")])])],-1),y=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const int N = 2e5 + 10;
int a[N];
int f[N][2];
void solve()
{
    int n;
    cin &gt;&gt; n;
    for (int i = 1; i &lt;= n;i ++)
        cin &gt;&gt; a[i];

    f[1][0] = f[1][1] = 1;
    f[2][0] = (a[2] &gt; a[1]) + 1;
    f[2][1] = 1;

    for (int i = 3; i &lt;= n; i++)
    {
        f[i][0] = f[i][1] = 1;
        if(a[i] &gt; a[i - 1])
        {
            f[i][0] = f[i - 1][0] + 1;
            f[i][1] = f[i - 1][1] + 1;
        }

        if (a[i] &gt; a[i - 2])
            f[i][1] = max(f[i][1], f[i - 2][0] + 1);
    }
    int ans = 1;
    for (int i = 1; i &lt;= n;i ++)
        ans = max({ans, f[i][0], f[i][1]});
    cout &lt;&lt; ans &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(v,b){const l=e("ExternalLinkIcon");return m(),i("div",null,[p,s("ul",null,[s("li",null,[s("a",o,[a("D. Remove One Element"),t(l)])])]),h,d,u,g,y])}const k=n(r,[["render",f],["__file","D.RemoveOneElement.html.vue"]]);export{k as default};
