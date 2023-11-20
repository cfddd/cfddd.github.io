import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as r,a as e,b as n,d as l,f as t}from"./app-62dd404b.js";const o={},c=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),m={href:"https://codeforces.com/problemset/problem/1361/B",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li><p>输入 t(≤1e5) 表示 t 组数据，每组数据输入 n(≤1e6) p(1≤p≤1e6) 和长为 n 的数组 k(0≤k[i]≤1e6)。所有数据的 n 之和不超过 1e6。</p></li><li><p>从这 n 个数中选出若干个数（可以为空）组成一组，剩余的数组成另一组。</p></li><li><p>每组计算 pow(p,k[i]) 之和。</p></li><li><p>输出这两个和的差值的最小值，对结果模 1e9+7。</p></li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>分组计算抽象为ans的加减</li><li>对k数组降序排序</li><li>首先，加上最大的 pow(p,k[i]) ，然后减去接下来的项，贪心把结果变小，直到 ans 减为0，只要数足够多，必然会出现这个过程（因为这是一个同底数的幂，可以当作一个p进制数，位数高的数肯定是能被单调递减的位数低的数恰好减掉的）</li><li>当上一个步骤减为0，那么回到最初是的贪心状态，加上一个最大的，为了缩小答案，逐渐减去后面的项，类似数学归纳</li></ul><h2 id="代码1" tabindex="-1"><a class="header-anchor" href="#代码1" aria-hidden="true">#</a> 代码1</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const double eps = 1e-6;
const double PI = acos(-1.0);
const int INF = 0x3f3f3f3f;
const int N = 1e6+10;
const int mod1 = 1e9+7,mod2 = 1e9+8;
int k[N];
int n,p;

int qmi(int a,int b,int mod)//快速幂在于思想
{
    int res=1;
    while(b)//对b进行二进制化,从低位到高位
    {
        if(b&amp;1) res = res *a % mod;
        b &gt;&gt;= 1;
        a = a * a % mod;
    }
    return res;
}

void solve() 
{
    cin &gt;&gt; n &gt;&gt; p;
    for(int i = 0;i &lt; n;i ++)cin &gt;&gt; k[i];
    sort(k,k+n,greater&lt;int&gt;());

    int ans1 = 0,ans2 = 0;
    for(int i = 0;i &lt; n;i ++)
    {
        if(!ans1 &amp;&amp; !ans2)
        {
            ans1 = (ans1 + qmi(p,k[i],mod1)) % mod1;
            ans2 = (ans2 + qmi(p,k[i],mod2)) % mod2;
        }else {
            ans1 = (ans1 + mod1 - qmi(p,k[i],mod1)) % mod1;
            ans2 = (ans2 + mod2 - qmi(p,k[i],mod2)) % mod2;
        }
    }

    cout &lt;&lt; ans1 &lt;&lt; endl;

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一点点思考" tabindex="-1"><a class="header-anchor" href="#一点点思考" aria-hidden="true">#</a> 一点点思考</h2><ul><li>trick：判断原来的数字是否真的在原始意义上减为0，可以用双模数的方法（评测范围在mod1*mod2）</li><li>这个题目的数字大小是指数级别的，双模数的范围明显��不够的（我用mod2 = 998244353在第44个样例wa了）</li><li>但是对于无限的卡掉这个位置的点，测试数据是有限的（所以我改成mod2 = 1e9+8过了）</li><li>所以这个方法并不太实用，但是应该不会很倒霉恰好被卡掉<img src="https://img2023.cnblogs.com/blog/2740326/202302/2740326-20230211182007256-1977649419.png" alt="" loading="lazy"></li></ul><h2 id="正解————栈" tabindex="-1"><a class="header-anchor" href="#正解————栈" aria-hidden="true">#</a> 正解————栈</h2>`,9),u=e("li",null,"基本贪心路线一致",-1),h=e("a",{href:""},"https://codeforces.com/blog/entry/78355",-1),b={href:"https://codeforces.com/blog/entry/78355",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"那最大的数字除掉后面的小的数字，必然是一个整数，然后一通操作",-1),f=e("h2",{id:"代码2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码2","aria-hidden":"true"},"#"),n(" 代码2")],-1),_=e("a",{href:""},"https://codeforces.com/blog/entry/78355",-1),g={href:"https://codeforces.com/blog/entry/78355",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"无敌解————写一个超级详细的模数类-然后就可以按照第一种方法随便搞",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#无敌解————写一个超级详细的模数类-然后就可以按照第一种方法随便搞","aria-hidden":"true"},"#"),n(" 无敌解————写一个超级详细的模数类，然后就可以按照第一种方法随便搞")],-1),x=e("ul",null,[e("li",null,"：）")],-1);function y(N,q){const i=d("ExternalLinkIcon");return a(),r("div",null,[c,e("ul",null,[e("li",null,[e("a",m,[n("https://codeforces.com/problemset/problem/1361/B"),l(i)])])]),v,e("ul",null,[u,e("li",null,[h,e("a",b,[n("https://codeforces.com/blog/entry/78355"),l(i)])]),p]),f,e("ul",null,[e("li",null,[_,e("a",g,[n("https://codeforces.com/blog/entry/78355"),l(i)])])]),k,x])}const I=s(o,[["render",y],["__file","JohnnyandGrandmaster.html.vue"]]);export{I as default};
