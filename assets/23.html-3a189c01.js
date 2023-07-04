const t=JSON.parse('{"key":"v-2bd742b5","path":"/OS/OS%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93/23.html","title":"处理机调度与死锁","lang":"zh-CN","frontmatter":{"title":"处理机调度与死锁","icon":"desktop","date":"2023-07-03T00:00:00.000Z","description":"处理机调度与死锁 调度 调度是为同时需要资源的多方，分配所需资源的方法。 凡有稀缺资源(“排队”)之处，皆有调度。 调度的资源 处理机（CPU） 从就绪队列中挑选下一个占用CPU运行的进程 临界区 信号量V操作后，从等待队列挑选一个进程唤醒 内存 从外存的挂起队列挑选一个进程激活 I/O设备 决定I/O设备处理等待队列中的哪个I/O请求","head":[["meta",{"property":"og:url","content":"https://cfddd.github.io/OS/OS%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93/23.html"}],["meta",{"property":"og:site_name","content":"俄罗斯刺沙蓬"}],["meta",{"property":"og:title","content":"处理机调度与死锁"}],["meta",{"property":"og:description","content":"处理机调度与死锁 调度 调度是为同时需要资源的多方，分配所需资源的方法。 凡有稀缺资源(“排队”)之处，皆有调度。 调度的资源 处理机（CPU） 从就绪队列中挑选下一个占用CPU运行的进程 临界区 信号量V操作后，从等待队列挑选一个进程唤醒 内存 从外存的挂起队列挑选一个进程激活 I/O设备 决定I/O设备处理等待队列中的哪个I/O请求"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-04T02:44:14.000Z"}],["meta",{"property":"article:author","content":"俄罗斯刺沙蓬"}],["meta",{"property":"article:published_time","content":"2023-07-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-04T02:44:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"处理机调度与死锁\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-04T02:44:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俄罗斯刺沙蓬\\",\\"url\\":\\"https://cfddd.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"调度","slug":"调度","link":"#调度","children":[]},{"level":2,"title":"调度算法","slug":"调度算法","link":"#调度算法","children":[]},{"level":2,"title":"调度算法总结","slug":"调度算法总结","link":"#调度算法总结","children":[]}],"git":{"createdTime":1688438654000,"updatedTime":1688438654000,"contributors":[{"name":"cfd","email":"2909047212@qq.com","commits":1}]},"readingTime":{"minutes":4.54,"words":1362},"filePathRelative":"OS/OS操作系统知识点总结/23.md","localizedDate":"2023年7月3日","excerpt":"<h1> 处理机调度与死锁</h1>\\n<h2> 调度</h2>\\n<p>调度是为同时需要资源的多方，分配所需资源的方法。<br>\\n凡有<strong>稀缺资源</strong>(“排队”)之处，皆有调度。</p>\\n<p><strong>调度的资源</strong></p>\\n<ul>\\n<li>处理机（CPU）<br>\\n从就绪队列中挑选下一个占用CPU运行的进程</li>\\n<li>临界区<br>\\n信号量V操作后，从等待队列挑选一个进程唤醒</li>\\n<li>内存<br>\\n从外存的挂起队列挑选一个进程激活</li>\\n<li>I/O设备<br>\\n决定I/O设备处理等待队列中的哪个I/O请求</li>\\n</ul>","autoDesc":true}');export{t as data};