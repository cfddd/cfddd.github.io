const s=JSON.parse('{"key":"v-6c583661","path":"/Algorithm/contents/E.GenerateaString.html","title":"E. Generate a String（典：贪心+动态规划）","lang":"zh-CN","frontmatter":{"title":"E. Generate a String（典：贪心+动态规划）","icon":"calculator","description":"题目 E. Generate a String 题意 输入三个不同的整数 n(1≤n≤107)，x，y(1 ≤ x, y ≤ 109)n(1 \\\\leq n \\\\leq 10^7)，x，y(1 ≤ x, y ≤ 10^9)n(1≤n≤107)，x，y(1 ≤ x, y ≤ 109)。 从 0 开始，每次可以 + 1 ， - 1 ，代价是x，或者当前值 * 2，代价是y 问怎样才能到达n用最小的代价","head":[["meta",{"property":"og:url","content":"https://cfddd.github.io/Algorithm/contents/E.GenerateaString.html"}],["meta",{"property":"og:site_name","content":"俄罗斯刺沙蓬"}],["meta",{"property":"og:title","content":"E. Generate a String（典：贪心+动态规划）"}],["meta",{"property":"og:description","content":"题目 E. Generate a String 题意 输入三个不同的整数 n(1≤n≤107)，x，y(1 ≤ x, y ≤ 109)n(1 \\\\leq n \\\\leq 10^7)，x，y(1 ≤ x, y ≤ 10^9)n(1≤n≤107)，x，y(1 ≤ x, y ≤ 109)。 从 0 开始，每次可以 + 1 ， - 1 ，代价是x，或者当前值 * 2，代价是y 问怎样才能到达n用最小的代价"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-05T07:04:01.000Z"}],["meta",{"property":"article:author","content":"俄罗斯刺沙蓬"}],["meta",{"property":"article:modified_time","content":"2023-07-05T07:04:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"E. Generate a String（典：贪心+动态规划）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-05T07:04:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俄罗斯刺沙蓬\\",\\"url\\":\\"https://cfddd.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[]},{"level":2,"title":"题意","slug":"题意","link":"#题意","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1688540641000,"updatedTime":1688540641000,"contributors":[{"name":"cfd","email":"2909047212@qq.com","commits":1}]},"readingTime":{"minutes":0.9,"words":269},"filePathRelative":"Algorithm/contents/E.GenerateaString.md","localizedDate":"2023年7月5日","excerpt":"<h2> 题目</h2>\\n<p><a href=\\"https://codeforces.com/problemset/problem/710/E\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">E. Generate a String</a></p>\\n<h2> 题意</h2>\\n<ul>\\n<li>输入三个不同的整数 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>n</mi><mo stretchy=\\"false\\">(</mo><mn>1</mn><mo>≤</mo><mi>n</mi><mo>≤</mo><mn>1</mn><msup><mn>0</mn><mn>7</mn></msup><mo stretchy=\\"false\\">)</mo><mtext>，</mtext><mi>x</mi><mtext>，</mtext><mi>y</mi><mo stretchy=\\"false\\">(</mo><mn>1</mn><mtext> </mtext><mo>≤</mo><mtext> </mtext><mi>x</mi><mo separator=\\"true\\">,</mo><mtext> </mtext><mi>y</mi><mtext> </mtext><mo>≤</mo><mtext> </mtext><mn>1</mn><msup><mn>0</mn><mn>9</mn></msup><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">n(1 \\\\leq n \\\\leq 10^7)，x，y(1 ≤ x, y ≤ 10^9)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\">n</span><span class=\\"mopen\\">(</span><span class=\\"mord\\">1</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≤</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7719em;vertical-align:-0.136em;\\"></span><span class=\\"mord mathnormal\\">n</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≤</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mord\\"><span class=\\"mord\\">0</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">7</span></span></span></span></span></span></span></span><span class=\\"mclose\\">)</span><span class=\\"mord cjk_fallback\\">，</span><span class=\\"mord mathnormal\\">x</span><span class=\\"mord cjk_fallback\\">，</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mopen\\">(</span><span class=\\"mord\\">1 </span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≤</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8304em;vertical-align:-0.1944em;\\"></span><span class=\\"mord\\"> </span><span class=\\"mord mathnormal\\">x</span><span class=\\"mpunct\\">,</span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mord\\"> </span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mord\\"> </span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≤</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\"> 1</span><span class=\\"mord\\"><span class=\\"mord\\">0</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">9</span></span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span>。</li>\\n<li>从 0 开始，每次可以 + 1 ， - 1 ，代价是x，或者当前值 * 2，代价是y</li>\\n<li>问怎样才能到达n用最小的代价</li>\\n</ul>","autoDesc":true}');export{s as data};