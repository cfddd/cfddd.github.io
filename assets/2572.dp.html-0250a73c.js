import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as a,c as t,a as s,b as n,d as m,f as c}from"./app-85eb831d.js";const r={},d=s("h2",{id:"题目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),u={href:"https://leetcode.cn/problems/count-the-number-of-square-free-subsets/",target:"_blank",rel:"noopener noreferrer"},v=s("h2",{id:"思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),n(" 思路")],-1),p=s("ul",null,[s("li",null,"类似01背包优化的状态压缩dp（误）"),s("li",null,"首先按照数字分出是否有平方子集，然后再计数cnt[x]"),s("li",null,[n("枚举合法的数字（2 ~ 30），为什么不算1？因为所有的1都有两种状态，选或者不选（或者说他不算是质数），直接在最后的结果上"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mi",null,"c"),s("mi",null,"n"),s("mi",null,"t"),s("mo",{stretchy:"false"},"["),s("mn",null,"1"),s("mo",{stretchy:"false"},"]")])])]),s("annotation",{encoding:"application/x-tex"},"2^{cnt[1]}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.888em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.888em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"c"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"t"),s("span",{class:"mopen mtight"},"["),s("span",{class:"mord mtight"},"1"),s("span",{class:"mclose mtight"},"]")])])])])])])])])])])]),n("即可")]),s("li",null,"枚举所有状态（0 ~ 1 << 10, 倒着来是类似01背包的优化），如果和当前状态mask互不相交，递推至mask|j"),s("li",null,[n("最后无平方子集的数量就是"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("msubsup",null,[s("mo",null,"∑"),s("mn",null,"0"),s("msup",null,[s("mn",null,"2"),s("mn",null,"10")])]),s("mi",null,"f"),s("mo",{stretchy:"false"},")"),s("mo",null,"∗"),s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mi",null,"c"),s("mi",null,"n"),s("mi",null,"t"),s("mo",{stretchy:"false"},"["),s("mn",null,"1"),s("mo",{stretchy:"false"},"]")])]),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"(\\sum_0^{2^{10}}f) * 2^{cnt[1]} - 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.4265em","vertical-align":"-0.2997em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1268em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8913em"}},[s("span",{style:{top:"-2.931em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"10")])])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2997em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9713em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.888em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"c"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mord mathnormal mtight"},"t"),s("span",{class:"mopen mtight"},"["),s("span",{class:"mord mtight"},"1"),s("span",{class:"mclose mtight"},"]")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])])],-1),o=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const int mod = 1e9 + 7;
int sum[31];
int p[30] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
typedef long long LL;
LL f[(1 &lt;&lt; 11) + 10];

class Solution {
public:
    int squareFreeSubsets(vector&lt;int&gt; &amp;nums)
    {
        for (int i = 2; i &lt;= 30; i++) 
        {
            for (int j = 0; j &lt; 10; j++)
            {
                if (i % p[j] == 0)
                {
                    if (i % (p[j] * p[j]) == 0)
                    {
                        sum[i] = -1;
                        break;
                    }
                    sum[i] = sum[i] | (1 &lt;&lt; j);
                }
            }
        }
        map&lt;int,int&gt;cnt;
        for(int i = 0;i &lt; nums.size();i++)
            cnt[nums[i]]++;
        int v = 1 &lt;&lt; 10;
        memset(f,0,sizeof f);
        f[0] = 1;
        for(auto it : cnt)
        {
            int a = it.first;
            int b = it.second;
            int mask = sum[a];
            if(mask &gt; 0)
            {
                for(int i = v;i &gt;= 0;i--)
                {
                    if((i &amp; mask) == 0)
                    {
                        f[i | mask] = (f[i] * b + f[i | mask]) % mod;
                    }
                }
            }
        }
        LL ans = 0;
        int x = cnt[1];
        int y = 1;
        while(x)
        {
            y = y * 2 % mod;
            x--;
        }
        for(int i = 0;i &lt; 1 &lt;&lt; 10;i++)
        {
            ans = (f[i] + ans) % mod;
        }

        ans = (ans * y) % mod;
        return (ans+ mod - 1) % mod;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(b,g){const i=e("ExternalLinkIcon");return a(),t("div",null,[d,s("ul",null,[s("li",null,[s("a",u,[n("https://leetcode.cn/problems/count-the-number-of-square-free-subsets/"),m(i)])])]),v,p,o])}const x=l(r,[["render",h],["__file","2572.dp.html.vue"]]);export{x as default};
