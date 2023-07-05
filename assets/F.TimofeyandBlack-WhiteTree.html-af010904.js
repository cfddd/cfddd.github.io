import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as e,c as t,a as s,b as n,d as c,f as m}from"./app-8cc557db.js";const r={},d=s("h2",{id:"题目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),v={href:"https://codeforces.com/contest/1790/problem/F",target:"_blank",rel:"noopener noreferrer"},u=s("h2",{id:"题意",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#题意","aria-hidden":"true"},"#"),n(" 题意")],-1),h=s("ul",null,[s("li",null,[n("给一颗根节点为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"c"),s("mn",null,"0")])]),s("annotation",{encoding:"application/x-tex"},"c_0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"c"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),n("树，有n个节点，n-1条边")]),s("li",null,"根节点已经被染成了黑色，其他所有节点都是白色"),s("li",null,[n("每次染黑一个节点"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"c"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"},"c_i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"c"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),n("，问所有已经染黑的节点的距离最短是多少")])],-1),p=s("h2",{id:"思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),n(" 思路")],-1),o=s("ul",null,[s("li",null,"维护一个dist数组，dist[i]表示节点 i 到黑色节点的最短距离（如果 i 已经是黑色节点，为0）"),s("li",null,[n("从"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"c"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"},"c_i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"c"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),n("开始搜索，把"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"c"),s("mi",null,"i")])]),s("annotation",{encoding:"application/x-tex"},"c_i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"c"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),n("点染黑后，bfs更新搜索到的点的dist，并入队")]),s("li",null,"用下一次染黑的节点dist更新ans，并输出答案"),s("li",null,[n("时间复杂度"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"N"),s("msqrt",null,[s("mi",null,"N")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(N\\sqrt N)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1767em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9267em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em","padding-left":"0.833em"}},"N")]),s("span",{style:{top:"-2.8867em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1133em"}},[s("span")])])])]),s("span",{class:"mclose"},")")])])])])],-1),g=m(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
using namespace std;
#define CaseT int CaseT; cin &gt;&gt; CaseT; while(CaseT--)
 
const int N = 2e5 + 10;
int c[N]; 
int dist[N]; 
 
void solve() {
    int n; cin &gt;&gt; n;
    vector&lt;vector&lt;int&gt;&gt; g(n + 1);
 
    for (int i = 1; i &lt;= n; i++) {
        cin &gt;&gt; c[i];
    }
 
    int m = n - 1;
    while (m--) {
        int u, v;
        cin &gt;&gt; u &gt;&gt; v;
        g[u].push_back(v), g[v].push_back(u);
    }
 
    for (int i = 1; i &lt;= n; i++) {
        dist[i] = n;
    }
 
    int ans = n;
    for (int i = 1; i &lt;= n; i++) {
        ans = min(ans, dist[c[i]]);
 
        if (i &gt; 1) {
            ans = min(ans, dist[c[i]]);
            cout &lt;&lt; ans &lt;&lt; &quot; &quot;;
        }
 
        queue&lt;int&gt; q;
        q.push(c[i]);
        dist[c[i]] = 0;
 
        while (q.size()) {
            int u = q.front(); q.pop();
            
            for (auto v : g[u]) {
                if (dist[u] + 1 &lt; min(dist[v], ans)) {
                    dist[v] = dist[u] + 1;
                    q.push(v);
                }
            }
        }
    }
    cout &lt;&lt; endl;
}
 
int main() {
    CaseT
    solve();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(x,_){const i=a("ExternalLinkIcon");return e(),t("div",null,[d,s("ul",null,[s("li",null,[s("a",v,[n("https://codeforces.com/contest/1790/problem/F"),c(i)])])]),u,h,p,o,g])}const y=l(r,[["render",b],["__file","F.TimofeyandBlack-WhiteTree.html.vue"]]);export{y as default};
