const s=JSON.parse('{"key":"v-c204f516","path":"/Algorithm/F.TimofeyandBlack-WhiteTree.html","title":"Codeforces Round","lang":"zh-CN","frontmatter":{"title":"Codeforces Round","icon":"calculator","description":"题目 https://codeforces.com/contest/1790/problem/F 题意 给一颗根节点为c0c_0c0​树，有n个节点，n-1条边 根节点已经被染成了黑色，其他所有节点都是白色 每次染黑一个节点cic_ici​，问所有已经染黑的节点的距离最短是多少","head":[["meta",{"property":"og:url","content":"https://cfddd.github.io/Algorithm/F.TimofeyandBlack-WhiteTree.html"}],["meta",{"property":"og:site_name","content":"俄罗斯刺沙蓬"}],["meta",{"property":"og:title","content":"Codeforces Round"}],["meta",{"property":"og:description","content":"题目 https://codeforces.com/contest/1790/problem/F 题意 给一颗根节点为c0c_0c0​树，有n个节点，n-1条边 根节点已经被染成了黑色，其他所有节点都是白色 每次染黑一个节点cic_ici​，问所有已经染黑的节点的距离最短是多少"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-03T12:00:26.000Z"}],["meta",{"property":"article:author","content":"俄罗斯刺沙蓬"}],["meta",{"property":"article:modified_time","content":"2023-07-03T12:00:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Codeforces Round\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-03T12:00:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俄罗斯刺沙蓬\\",\\"url\\":\\"https://cfddd.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[]},{"level":2,"title":"题意","slug":"题意","link":"#题意","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1688385626000,"updatedTime":1688385626000,"contributors":[{"name":"cfd","email":"2909047212@qq.com","commits":1}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"Algorithm/F.TimofeyandBlack-WhiteTree.md","localizedDate":"2023年7月3日","excerpt":"<h2> 题目</h2>\\n<ul>\\n<li><a href=\\"https://codeforces.com/contest/1790/problem/F\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://codeforces.com/contest/1790/problem/F</a></li>\\n</ul>\\n<h2> 题意</h2>\\n<ul>\\n<li>给一颗根节点为<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>c</mi><mn>0</mn></msub></mrow><annotation encoding=\\"application/x-tex\\">c_0</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.5806em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">c</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">0</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>树，有n个节点，n-1条边</li>\\n<li>根节点已经被染成了黑色，其他所有节点都是白色</li>\\n<li>每次染黑一个节点<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>c</mi><mi>i</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">c_i</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.5806em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">c</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>，问所有已经染黑的节点的距离最短是多少</li>\\n</ul>","autoDesc":true}');export{s as data};
