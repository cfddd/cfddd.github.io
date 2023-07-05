import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as a,f as n}from"./app-f94c3d64.js";const t={},s=n(`<h1 id="进程同步" tabindex="-1"><a class="header-anchor" href="#进程同步" aria-hidden="true">#</a> 进程同步</h1><p><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230601170408198-1743296955.png" alt="img" loading="lazy"><br> 海森堡bug：不可重现的bug。如果程序重启，bug就可能不再出现。</p><p>可能原因：</p><ol><li>调试器本身影响了bug的产生；</li><li>编译器的不恰当优化；</li><li>未��始化变量的值；</li><li><strong>时间敏感的bug：常在多进程/多线程并发的程序发生</strong></li></ol><p>对<strong>共享变量</strong>的并发<strong>写操作（读没关系）</strong>，有必要互斥<strong>共享变量</strong>，如果不做相关保护措施，会有极大的可能造成bug</p><p>在实现同步之前，进/线程：</p><ul><li>可能在任何时间被暂停与重启；</li><li>一旦暂停，其等待的时间未知；</li><li>多个进/线程可能以任意顺序运行；</li></ul><h2 id="进程同步的基本概念" tabindex="-1"><a class="header-anchor" href="#进程同步的基本概念" aria-hidden="true">#</a> 进程同步的基本概念</h2><ul><li><strong>竞争条件（race condition）</strong>：多个进程在操作一个共享数据时，结果取决于多个进程的指令执行顺序</li><li><strong>同步（ Synchronization ）</strong>: 协调多个进程的执行次序，确保并发的进程之间按照一定的规则共享系统资源，很好的相互合作，使程序的执行具有可再现性。</li><li><strong>互斥（ Mutual Exclusion ）</strong>:当某进/线程正在做某件事时，不允许其它进/线程也做这件事</li><li><strong>临界资源（Critical Resource）</strong>：操作系统中一次允许一个进程访问的资源 <ul><li>如：打印机、文件、全局变量……</li><li>对临界资源应采用互斥方式共享</li></ul></li><li><strong>临界区（ Critical Section ）</strong>: 一次只有一个进程以执行的那段代码。即进程中访问临界资源的那段程序。 <ul><li>实现了互斥，也就有了临界区</li></ul></li><li><strong>锁</strong>（ Lock ）: 防止其它进程进入的工具 <ul><li>进入临界区前上锁</li><li>离开后解锁</li><li>如果已有锁，则在临界区外等待</li></ul></li></ul><figure><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230601171833418-474951557.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="进程同步的准则" tabindex="-1"><a class="header-anchor" href="#进程同步的准则" aria-hidden="true">#</a> 进程同步的准则</h2><figure><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230601172045644-71624159.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="原子操作" tabindex="-1"><a class="header-anchor" href="#原子操作" aria-hidden="true">#</a> 原子操作</h2><p>所有动作要么全做，要么全不做，操作过程中不能被打断又称原语（Primitive）</p><h2 id="实现互斥的软件方法" tabindex="-1"><a class="header-anchor" href="#实现互斥的软件方法" aria-hidden="true">#</a> 实现互斥的软件方法</h2><p><strong>忙等</strong>: 不能进入临界区的进程，一直占用CPU等待进入</p><ul><li>等待中的进程白白占用处理机周期</li><li>拿着锁的进程的时间被无效的等待进程占用</li><li>优先级反转（priority inversion）</li></ul><p>例外：</p><ul><li>在多核CPU系统中，对于只占用很少时间的临界区，忙等<br> 反而可以节约上下文切换的开销。</li></ul><h4 id="peterson算法" tabindex="-1"><a class="header-anchor" href="#peterson算法" aria-hidden="true">#</a> Peterson算法</h4><figure><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230601225407955-121488638.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>当Note &amp;&amp; turn 的条件不满足，进入忙等</li><li>代码必然让线程PA，PB都至少执行到了给turn复制的一步（哪个线程还没到，另一个就会等待）</li><li>完成后，就是看谁先执行turn赋值，谁先进入临界区，另一个仍然在等待</li><li>先执行的线程完成后，收走自己的纸条，让另一个线程运行，实现了互斥</li></ul><h2 id="软件同步的局限" tabindex="-1"><a class="header-anchor" href="#软件同步的局限" aria-hidden="true">#</a> 软件同步的局限</h2><p>纯软件方法利用最低限度的原子操作支持（Load和Store），也可以实现同步，但是</p><ol><li>算法的设计和实现都很困难</li><li>在现代计算机架构下可能失效 <ul><li>编译器/CPU可能使指令乱序执行（需内存屏障）<br> 所以很少使用纯软件同步方法，多是操作系统配合硬件实现同步，封装成各个api函数给程序员使用，所以不能直接调用。</li></ul></li></ol><h2 id="硬件同步" tabindex="-1"><a class="header-anchor" href="#硬件同步" aria-hidden="true">#</a> 硬件同步</h2><p>设法实现两个原语（原子操作）</p><p>Lock() – 加锁，当无人用锁时获得锁；若多人同时尝试拿锁，则只有一人能拿到，其余人等待；</p><p>Unlock() – 解锁，唤醒在等待的人</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//进入区</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>noPaper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buy Paper<span class="token punctuation">;</span> <span class="token comment">//临界区</span>
<span class="token punctuation">}</span>
<span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//退出区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要硬件提供更多的原子操作。</p><h4 id="关中断" tabindex="-1"><a class="header-anchor" href="#关中断" aria-hidden="true">#</a> 关中断</h4><figure><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230602095728045-1479289246.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>进程切换</p><ul><li>内因：进程做了某事(系统调用或异常)，自己释<br> 放了CPU</li><li>外因：中断导致内核介入，进程失去CPU</li></ul><p>如果<strong>关闭了中断</strong>，无论内因外因均不再响应，则可以避开进程切换</p><p>关中断方案，又称<strong>屏蔽(mask)中断</strong></p><p><strong>问题</strong></p><ul><li>不能允许用户使用这种锁！只可能内核使用</li><li>由于临界区的代码运行的时间未知，不能保证实时性；更重要任务发生时，系统也无法响应（死循环关闭中断）</li><li>仅能关闭单个CPU，不适合多核CPU</li></ul><h4 id="读-修改-写型原子操作swap" tabindex="-1"><a class="header-anchor" href="#读-修改-写型原子操作swap" aria-hidden="true">#</a> 读-修改-写型原子操作swap</h4><p>可以用于多核处理器的指令<br><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230602094204485-1940097668.png" alt="img" loading="lazy"></p><h4 id="test-and-set" tabindex="-1"><a class="header-anchor" href="#test-and-set" aria-hidden="true">#</a> Test-and-Set</h4><figure><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230602094540779-1792060562.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="锁" tabindex="-1"><a class="header-anchor" href="#锁" aria-hidden="true">#</a> 锁</h2><p>上述硬件原语通常不直接给程序员使用，于是操作系统和高级语言将它们封装为各种接口，供程序员使用。最常见的一类工具就是“锁(locks)”。</p><ul><li>锁是原子操作，多个进程同时lock，最终须依次执行</li><li>最先执行lock的进入临界区并加锁，后来的无法进入临界区</li><li>进不去的进程有两种选择：忙等，或睡眠</li></ul><figure><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230602095541266-1186857631.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>非忙等——互斥锁——重量级（悲观）锁</li><li>忙等——自旋锁——轻量级（乐观）锁</li></ul><h2 id="信号量" tabindex="-1"><a class="header-anchor" href="#信号量" aria-hidden="true">#</a> 信号量</h2><p>并发问题分为两类：</p><ol><li>互斥（Mutual Exclusion）：确保临界资源被互斥的使用 <ul><li>工具：锁（Lock）</li><li>程序员只需识别出临界区</li><li>竞争共享资源，用mutex=1，P、V操作成对出现</li></ul></li><li>同步（Synchronization）：确保进程按照期望的先后顺序运行 <ul><li>工具：条件变量（condition variable）</li><li>不满足条件的进程等待(wait)，直到条件满足，才通知(signal)其执行</li><li>控制进程间的先后顺序，初值根据具体情况设置，P、V分开在不同的进程使用对每个约束设置一个信号量</li></ul></li></ol><p>信号量是一种抽象数据类型</p><ul><li>由一个整形变量（Sem）和两个原子操作（P, V）组成</li><li>P——wait()——等待，信号量值-1（可以负数）</li><li>V——signal()——唤醒，信号量值+1</li></ul><p><strong>用法</strong></p><ol><li>实现进程互斥，信号量mutex</li><li>实现进程间前趋后继（又称同步）关系，可以让进程之间相互等待</li></ol><h2 id="生产者和消费者问题" tabindex="-1"><a class="header-anchor" href="#生产者和消费者问题" aria-hidden="true">#</a> 生产者和消费者问题</h2><p>问题描述：</p><ul><li>一个或多个生产者将产品放入一个共享的缓冲区</li><li>多个消费者从缓冲区中取出使用</li><li>生产者和消费者之间并发运行，保持同步</li></ul><p>以自动售货机为例，约束条件包括：</p><ul><li>每次只允许一个人对售货机进行操作（互斥约束）</li><li>当饮料已售空，消费者必须等待生产者（同步约束）</li><li>当饮料已放满，生产者必须等待消费者（同步约束）</li></ul><p>用信号量实现问题时的准则：</p><p><strong>对每个约束条件，各使用一个单独的信号量</strong></p><ul><li>Semaphore mutex; //互斥的约束</li><li>Semaphore drinkSlots ； //消费者的约束</li><li>Semaphore emptySlots; //生产者的约束</li></ul><p><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230602101415240-1023190904.png" alt="img" loading="lazy"><br><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230602101614453-1996810896.png" alt="img" loading="lazy"><br> 生产者和消费者的工作并不需要互斥。</p><p>生产者每次只能一个（互斥），消费者同样</p><p><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230602101923818-461431946.png" alt="img" loading="lazy"><br> 因为buffer的容量只有1，PV操作在实现信号量同步，保持生产者消费者之间的关系时，也天然实现了互斥，最多只有一个访问共享条件。</p><ul><li>P表示等待这个条件</li></ul><h2 id="读写者问题" tabindex="-1"><a class="header-anchor" href="#读写者问题" aria-hidden="true">#</a> 读写者问题</h2><p><strong>问题描述</strong>：</p><ul><li>共享数据，有两类使用者 <ul><li>读者：只读取/查询数据</li><li>写者：修改数据</li></ul></li><li>读-读允许：同一时刻，允许有多个读者同时读</li><li>读-写互斥： <ul><li>当有读者在，写者不能写</li><li>当有写者在，读者不能读</li><li>写-写互斥：两个写者不能同时写</li></ul></li></ul><p>示例：访问查询型数据库，通常，读者的数量远大于写者</p><p>可否直接用一个互斥信号量实现？</p><ul><li>不能。当读者获得数据库后无法让其它读者访问。</li></ul><p>能否借用生产者-消费者中的同步思路？</p><ul><li>与生产者-消费者问题不同，不存在一个有界的缓冲区，因此不能用一组信号量来控制读者-写者的互相等待</li></ul><p><strong>读者-写者问题解决方案</strong><br><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230602104214929-1370745817.png" alt="img" loading="lazy"><br><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230603151214646-2071939985.png" alt="img" loading="lazy"></p><h4 id="读者-写者锁" tabindex="-1"><a class="header-anchor" href="#读者-写者锁" aria-hidden="true">#</a> 读者-写者锁</h4><p>一些程序语言和操作系统提供了读写锁（Readers-writer lock）接口<br> 读写锁适合于：</p><ol><li>读进程和写进程可以区分开</li><li>读者进程数量比写者进程多</li></ol><p><strong>读者优先</strong></p><ul><li>又称第一类读者写者问题</li><li>只要有读者正在读，后来的读者都能直接进入</li><li>如读者持续不断进入，则写者就处于饥饿</li></ul><p><strong>写者优先</strong></p><ul><li>第二类读者写者问题</li><li>只要有写者就绪，写者应尽快执行写操作</li><li>如写者持续不断就绪，则读者就处于饥饿</li><li>该方法并发度和效率较低</li></ul><p><strong>读写锁替代策略：RCU</strong></p><p>读写锁允许读者之间不互斥的读取数据</p><ul><li>但是对于Rcount变量的操作需要加锁</li><li>当99%以上都是读者，且数量很大时，开销太大</li><li>读-复制-更新（Read-Copy-Update）</li></ul><h2 id="哲学家就餐问题" tabindex="-1"><a class="header-anchor" href="#哲学家就餐问题" aria-hidden="true">#</a> 哲学家就餐问题</h2><p>5个哲学家围圆桌而坐，每2人之间放一只叉子，哲学家的动作包括思考和进餐，同时拿到左右两边的叉子才能进餐，思考时将叉子放回原处。</p><p><strong>可能的解决方案</strong></p><ul><li>至多只允许有四位哲学家去拿左边的筷子，最终能保证至少<br> 有一位哲学家能够进餐，并可在用毕时释放出他用过的筷子，<br> 从而使更多的哲学家能够进餐。</li><li>仅当哲学家的左、右两只筷子均可用时，才允许他拿起筷子<br> 进餐。</li><li>规定奇数号哲学家先拿左边的筷子再拿右边的筷子；而偶数<br> 号哲学家先拿右边的筷子再拿左边的筷子。</li><li>增加一根筷子（完美解决）</li></ul><h2 id="管程" tabindex="-1"><a class="header-anchor" href="#管程" aria-hidden="true">#</a> 管程</h2><p><img src="https://img2023.cnblogs.com/blog/2740326/202306/2740326-20230602105633172-1671322918.png" alt="img" loading="lazy"><br> 管程是一种抽象数据类型(ADT)，代表共享资源，及对该资源的互斥操作确保任一时刻最多只有一个进程进入管程，使用共享数据</p><p>思想：用锁(locks，通常是隐含的)实现<strong>互斥</strong>，用条件变量<br> (condition variable)实现<strong>同步</strong>，提供与信号量相同的功能</p><p>包含面向对象思想，封装了同步机制</p>`,94),o=[s];function r(e,p){return l(),a("div",null,o)}const d=i(t,[["render",r],["__file","24.html.vue"]]);export{d as default};