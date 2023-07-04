import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as a,a as i,b as e,d as r,f as t}from"./app-833b555e.js";const c={},v=i("h2",{id:"题目",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),e(" 题目")],-1),u={href:"https://atcoder.jp/contests/arc111/tasks/arc111_b",target:"_blank",rel:"noopener noreferrer"},o=t(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li>输入 n(≤2e5) 和一个 n 行 2 列的矩阵，矩阵元素范围 [1,4e5]</li><li>从每行中恰好选一个数，最多能选出多少个不同的数</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>从图的方向去思考</li><li>建图，发现环上的点所有都可以取到</li><li>分支上的点，可以通过在拓扑排序的时候，计算出边得数量（即环外点的数量），这些点也是可以取到的</li><li>但是，如果一个连通块是无环的（是一棵树），那么这颗树的顶点不被取到</li><li>于是做法分两步 <ul><li>拓扑找环，同时把度数不为0的点插入（恰好把一棵树的顶点忽略）答案集合</li><li>环上所有点（度数大于1），插入答案集合</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const int N = 2e5+10,M = 2*N;
vector&lt;int&gt; edge[M];
int d[M];
void solve() 
{
    int n;cin &gt;&gt; n;
    for(int i = 0;i &lt; n;i ++)
    {
        int a,b;cin &gt;&gt; a &gt;&gt; b;
        edge[a].push_back(b);
        edge[b].push_back(a);
        d[a] ++;
        d[b] ++;
    }

    set&lt;int&gt; ans ;
    queue&lt;int&gt; q;
    for(int i = 1;i &lt;= 400000;i ++)if(d[i] == 1)q.push(i);
    while(q.size())
    {
        int u = q.front();q.pop();
        for(auto v:edge[u])
        {
            d[v] --;
            if(d[v] == 1)q.push(v);
            if(d[u] &gt; 0)ans.insert(u);
        }
    }
    for(int i = 1;i &lt;= 400000;i ++)if(d[i] &gt; 1)ans.insert(i);

    cout &lt;&lt; ans.size() &lt;&lt; endl;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(m,h){const n=s("ExternalLinkIcon");return d(),a("div",null,[v,i("ul",null,[i("li",null,[i("a",u,[e("https://atcoder.jp/contests/arc111/tasks/arc111_b"),r(n)])])]),o])}const g=l(c,[["render",b],["__file","B-ReversibleCards.html.vue"]]);export{g as default};
