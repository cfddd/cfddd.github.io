import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as e,c as m,a as s,b as n,d as t,f as r}from"./app-8cc557db.js";const d={},c=s("h2",{id:"题目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),o={href:"https://leetcode.cn/problems/minimum-time-to-visit-a-cell-in-a-grid/description/",target:"_blank",rel:"noopener noreferrer"},u=s("h2",{id:"思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),n(" 思路")],-1),v=s("ul",null,[s("li",null,"首先，这是一个最短路问题"),s("li",null,"直接用朴素记忆化搜索或者bfs无法实现“反复横跳”这一功能（只有有两个点以上可以走，就可以走到任意一个有最小时间限制的点）"),s("li",null,[n("所以更换思维，用图论的方式思考 "),s("ul",null,[s("li",null,[n("每个点到上下左右有一条特殊的边，边权值为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m"),s("mi",null,"a"),s("mi",null,"x"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mo",{stretchy:"false"},"("),s("mi",null,"g"),s("mi",null,"r"),s("mi",null,"i"),s("mi",null,"d"),s("mo",{stretchy:"false"},"["),s("mi",null,"x"),s("mi",null,"x"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mi",null,"y"),s("mi",null,"y"),s("mo",{stretchy:"false"},"]"),s("mo",null,"−"),s("mi",null,"d"),s("mi",null,"i"),s("mi",null,"s"),s("mi",null,"t"),s("mo",{stretchy:"false"},"["),s("mi",null,"x"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},"["),s("mi",null,"y"),s("mo",{stretchy:"false"},"]"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"2"),s("mo",null,"∗"),s("mn",null,"2"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"max( 1 , ( grid[ xx ][ yy ] - dist[ x ][ y ] ) / 2 * 2 + 1 )")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"ma"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"xx"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"yy"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},"]"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},"])"),s("span",{class:"mord"},"/2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),n("，前者是一步的权值，后者是需要“反复横跳”才能走到的位置")]),s("li",null,"用堆优化dijkstra方法，因为最大的grid元素不超过1e5，所以堆中的元素是有限的，走的步数也是有限的"),s("li",null,"当新的最短路径长度小于dist中对应点的大小，更新dist，然后入队")])]),s("li",null,"教训：最短路问题都可以通过优化建边的技巧来解决┭┮﹏┭┮"),s("li",null,[n("下面方法和题解的思路有一点不同，通过观察下标得到一个"),s("strong",null,"重要的结论"),n("：走到一个点的步数奇偶性和下标x+y的奇偶性相同")]),s("li",null,"其实都是一个道理，展现出来的面不同")],-1),p=r(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {

    struct node
    {
        int x,y,ti;
        bool operator &lt; (const node &amp; t)const{
            return ti &gt; t.ti;
        }
    };
    

public:
    int minimumTime(vector&lt;vector&lt;int&gt;&gt;&amp; grid) {
        if(grid[0][1] &gt; 1 &amp;&amp; grid[1][0] &gt; 1)
        {
            return -1;
        }
        int n = grid.size(),m = grid[0].size();
        int dx[] = {0,1,0,-1},dy[] = {1,0,-1,0};
        vector&lt;vector&lt;int&gt;&gt; dist(n,vector&lt;int&gt;(m,1e9));
        dist[0][0] = 0;

        priority_queue&lt;node&gt; q;q.push({0,0,0});
        
        while(1){
            auto[x, y, d] = q.top();
            q.pop();
            if (x == n - 1 &amp;&amp; y == m - 1)
                return d;
            for (int i = 0;i &lt; 4;i ++) {
                int xx = x + dx[i],yy = y + dy[i];
                if (0 &lt;= xx &amp;&amp; xx &lt; n &amp;&amp; 0 &lt;= yy &amp;&amp; yy &lt; m) {
                    int nd = max(d + 1, grid[xx][yy]);
                    nd += (nd - xx - yy) % 2;
                    if (nd &lt; dist[xx][yy]) {
                        dist[xx][yy] = nd; // 更新最短路
                        q.push({xx,yy,nd});
                    }
                }
            }
        }

        return dist[n-1][m-1];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(b,y){const l=i("ExternalLinkIcon");return e(),m("div",null,[c,s("ul",null,[s("li",null,[s("a",o,[n("https://leetcode.cn/problems/minimum-time-to-visit-a-cell-in-a-grid/description/"),t(l)])])]),u,v,p])}const f=a(d,[["render",h],["__file","6366.dijkstra.html.vue"]]);export{f as default};
