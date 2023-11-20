import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as l,a,b as s}from"./app-62dd404b.js";const t={},p=l('<h1 id="存储器管理" tabindex="-1"><a class="header-anchor" href="#存储器管理" aria-hidden="true">#</a> 存储器管理</h1><p>物理地址</p><ul><li>又称实地址、绝对地址</li><li>内存所看到的地址</li></ul><p>物理寻址</p><ul><li>CPU直接使用物理地址访问主存储器</li></ul><p>虚拟地址（virtual address）</p><ul><li>又称逻辑地址</li><li>CPU所生成的地址</li></ul><p>虚拟寻址（virtual addressing）</p><ul><li>CPU通过虚拟地址访问主存，虚拟地址经过地址翻译转换为物理地址</li><li>地址翻译由CPU里的内存管理单元(MMU)负责.</li></ul><h2 id="程序的装入" tabindex="-1"><a class="header-anchor" href="#程序的装入" aria-hidden="true">#</a> 程序的装入</h2><ol><li><p>绝对装入</p><ul><li>用户在程序设计时直接给出物理地址</li><li>或程序包含符号地址，编译/汇编时转换成物理地址</li></ul><p>缺点：不能加载到内存任意位置；只适合单道程序</p></li><li><p>可重定位装入，静态重定位</p><ul><li>编译器仅产生相对地址</li><li>加载器在加载时将相对地址转化为绝对地址</li></ul><p>缺点：不允许在运行时改变在内存中的位置；</p></li><li><p>动态运行时装入，动态重定位</p><ul><li>加载器在加载时仍使用相对地址</li><li>CPU在运行时将相对地址转化为绝对地址</li><li>需要地址转换硬件（MMU，重定位寄存器）支持</li></ul></li></ol><h2 id="程序的链接" tabindex="-1"><a class="header-anchor" href="#程序的链接" aria-hidden="true">#</a> 程序的链接</h2><p>链接器（linker）把一组目标模块作为输入，产生一���包含完整代码和数据的加载模块（load module），传递给加载器</p><ol><li><p>静态链接（static linking）</p><p>缺点：常用的库不能共享，库函数若更新，需重新链接</p></li><li><p>动态链接（static linking）</p><p>加载时动态链接</p></li></ol><h2 id="基地址-界限" tabindex="-1"><a class="header-anchor" href="#基地址-界限" aria-hidden="true">#</a> 基地址-界限</h2><p>分配一块连续的内存</p><p>基地址+逻辑地址实现地址转换</p><p>界限地址实现地址保护</p><h2 id="内存分配" tabindex="-1"><a class="header-anchor" href="#内存分配" aria-hidden="true">#</a> 内存分配</h2><ul><li><p>单一连续分配</p></li><li><p>固定分区分配</p></li><li><p>动态分区分配</p><p>管理动态分区分配的数据结构，要能动态跟踪每个已占用和空闲的分区情况</p><p>可用：二维数组；链表；位图(bitmap)</p></li></ul><p><strong>动态分区分配算法</strong></p><ol><li><p>First Fit算法</p><p>分配n个字节，使用第一个可用的空间比n大的空闲块。</p></li><li><p>Next Fit算法</p><p>分配n个字节，从上一次找到的分区向下寻找，使用下一个可用的空间比n大的空闲块。</p></li><li><p>Best Fit</p><p>分配n字节分区时， 查找并使用大于n的最小空闲分区</p></li><li><p>Worst Fit</p><p>分配n字节，使用尺寸不小于n的最大空闲分区</p></li></ol><p><strong>基于索引搜索的分配算法</strong></p>',23),r=a("ol",null,[a("li",null,[a("p",null,"快速适应"),a("p",null,"根据空闲区的容量作分类，设立大、中、小等多个链表方便索引")]),a("li",null,[a("p",null,[s("伙伴系统"),a("br"),a("img",{src:"https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230605193503031-700006592.png",alt:"img",loading:"lazy"}),a("br"),s(" 分配时可能多次分割，回收时可能多次合并")]),a("p",null,"时间性能和利用率折中了快速适应与顺序搜索"),a("p",null,"可以兼顾大小进程的分区需求"),a("p",null,[s("没有外部碎片，但有内部碎片，每块最大为"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msup",null,[a("mn",null,"2"),a("mi",null,"i")]),a("mo",null,"−"),a("mn",null,"1")]),a("annotation",{encoding:"application/x-tex"},"2^i-1")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.908em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},"2"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.8247em"}},[a("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"1")])])])])])],-1),m=l('<h2 id="分页式存储管理" tabindex="-1"><a class="header-anchor" href="#分页式存储管理" aria-hidden="true">#</a> 分页式存储管理</h2><p>基于基地址-界限的存储管理方式简单有效，可以实现内存<br> 分配、地址转换、地址保护，但始终解决不好碎片的问题<br> 原因在于，内存总是只能寻找一段连续的空间才能分配</p><p>解决方案：分页（Paging）管理</p><p>核心思想：离散分配，将进程打散，分到不同的空间中去</p><h4 id="页式地址变换" tabindex="-1"><a class="header-anchor" href="#页式地址变换" aria-hidden="true">#</a> 页式地址变换</h4><p><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230605160029469-1960106697.png" alt="img" loading="lazy"><br><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230605163148535-1745291127.png" alt="img" loading="lazy"><br> 虚拟地址结构：页号(page number)+页偏移量(page offset)</p><p>物理地址：物理块(frame number)+页偏移量(page offset)</p><p>页框：以页框为单位为各个进程分配内存空间，最小的一块储存单元大小</p><p>将用户程序的地址空间分为若干个固定大小的区域，称为“页”或“页面”。相应地，将内存空间分为若干个物理块或页框（frame），<strong>页和页框大小相同</strong>。</p><p><strong>在页表中，每一行存储的是属于那个物理页面的信息，又称为“页表项(Page Table Entry)</strong> 按位数</p><p>没有外部碎片</p><ul><li>因为块是物理内存分配的最小单位</li><li>空闲的物理块可以用位图（bitmap）或链表（freelist）管理</li><li>每一块都可以分配出去，不存在浪费；回收简单</li></ul><p>很小的内部碎片</p><ul><li>每个进程最多在最后一个页产生浪费</li><li>内碎片最大为：页面大小 – 1Byte</li></ul><h4 id="存取控制字段" tabindex="-1"><a class="header-anchor" href="#存取控制字段" aria-hidden="true">#</a> 存取控制字段</h4><p>页表是系统为每个进程建立的页面映射表</p><p>每个页表项的结构为：页号 + 物理块号</p><h4 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h4><ol><li>访问页表时间 <ul><li>基地址-界限方式，直接通过MMU的寄存器转换地址</li><li>页表在内存里，每次寻址多了一次内存访问</li></ul></li><li>页表占据空间 <ul><li>随着系统位数提升，页表会占有越来越多的空间</li></ul></li></ol><h4 id="快表" tabindex="-1"><a class="header-anchor" href="#快表" aria-hidden="true">#</a> 快表</h4><p>通过缓存，加速页的访问</p><p>t: 访问一次内存的时间</p><p>λ：查找快表的时间</p><p>α：快表命中率</p>',24),c=a("p",null,[s("有效访问时间："),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"α"),a("mo",{stretchy:"false"},"("),a("mi",null,"λ"),a("mo",null,"+"),a("mi",null,"t"),a("mo",{stretchy:"false"},")"),a("mo",null,"+"),a("mo",{stretchy:"false"},"("),a("mn",null,"1"),a("mo",null,"−"),a("mi",null,"a"),a("mo",{stretchy:"false"},")"),a("mo",{stretchy:"false"},"("),a("mi",null,"λ"),a("mo",null,"+"),a("mn",null,"2"),a("mi",null,"t"),a("mo",{stretchy:"false"},")"),a("mo",null,"+"),a("mi",null,"t"),a("mo",null,"="),a("mn",null,"2"),a("mi",null,"t"),a("mo",null,"+"),a("mi",null,"λ"),a("mo",null,"−"),a("mi",null,"α"),a("mi",null,"t")]),a("annotation",{encoding:"application/x-tex"},"α(λ + t) + (1 - a)(λ + 2t) + t = 2t + λ - αt")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"λ"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mopen"},"("),a("span",{class:"mord"},"1"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mclose"},")"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"λ"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"2"),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6151em"}}),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),a("span",{class:"mord"},"2"),a("span",{class:"mord mathnormal"},"t"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.0833em"}}),a("span",{class:"mord mathnormal"},"λ"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6151em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α"),a("span",{class:"mord mathnormal"},"t")])])])],-1),h=l('<h4 id="多级页表" tabindex="-1"><a class="header-anchor" href="#多级页表" aria-hidden="true">#</a> 多级页表</h4><p>减少直接寻址存储器的大小空间</p><h4 id="反向页表" tabindex="-1"><a class="header-anchor" href="#反向页表" aria-hidden="true">#</a> 反向页表</h4><p>让页表与物理地址空间的大小相对应</p><p>基于Hash映射值查找页表对应的帧号f<br> 用链表处理hash冲突</p><p>减少直接寻址存储器的大小空间</p><h2 id="段式存储管理" tabindex="-1"><a class="header-anchor" href="#段式存储管理" aria-hidden="true">#</a> 段式存储管理</h2><figure><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230605105750368-1468270188.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',8),o=[p,r,m,c,h];function g(d,u){return n(),i("div",null,o)}const f=e(t,[["render",g],["__file","26.html.vue"]]);export{f as default};