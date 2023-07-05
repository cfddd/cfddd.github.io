import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as d,a as i,b as n,d as r,f as v}from"./app-587dee3d.js";const a={},u=i("h2",{id:"题目",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),m={href:"https://codeforces.com/contest/1359/problem/D",target:"_blank",rel:"noopener noreferrer"},c=v(`<h2 id="题意" tabindex="-1"><a class="header-anchor" href="#题意" aria-hidden="true">#</a> 题意</h2><ul><li>给一个 n(1≤n≤1e5) 和长为 n 的数组 a(-30≤a[i]≤30)</li><li>设 b 为 a 的一个非空连续子数组</li><li>输出 sum(b)-max(b) 的最大值</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>正解 <ul><li>从数组a的范围我们可以看出一点端倪</li><li>枚举 max(b)，把 &gt; max(b) 的去掉，分裂出每个子段都求一遍最大子段和再减去枚举的 max(b)。</li><li>所有结果的最大值即为答案。</li></ul></li><li>适用范围更广的（其实是为了贴板子）<br><strong>一种简单的最大连续子段板子O（N）</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//b[j] = max{b[j - 1] + a[j],a[j]}, 1 &lt;= j &lt;= n
int max_subsegment(int a[],int n){
	int result = 0,b = 0;
	int begin = 0,end = 0;//记录最大子段的起始，终止下标 
	for(int i = 0; i &lt; n;i++){
		if(b &gt; 0){
			b += a[i];
		}else{
			b = a[i];
			begin = i;
		}
		if(b &gt; result){
			result = b;	
			end = i;
		}
	}
	
	return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>线段树分治板子O(logN)</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>struct node{
	int l,r;
	int sum,ms;//maxsum
    int ml,mr;//maxl,maxr
}tree[N*4];


void PushUp(int i)
{
	tree[i].sum=tree[i&lt;&lt;1].sum+tree[i&lt;&lt;1|1].sum;
	tree[i].ml=max(tree[i&lt;&lt;1].sum+tree[i&lt;&lt;1|1].ml,tree[i&lt;&lt;1].ml);
	tree[i].mr=max(tree[i&lt;&lt;1|1].sum+tree[i&lt;&lt;1].mr,tree[i&lt;&lt;1|1].mr);
	tree[i].ms=max(max(tree[i&lt;&lt;1].ms,tree[i&lt;&lt;1|1].ms),tree[i&lt;&lt;1].mr+tree[i&lt;&lt;1|1].ml);
}
void build(int i,int l,int r)
{
	tree[i].l=l,tree[i].r=r;
	if(l==r)
	{
		tree[i].sum=tree[i].ml=tree[i].mr=tree[i].ms=a[l];//最小线段的值
		return ;
	}
	int mid=(l+r)&gt;&gt;1;
	build(i&lt;&lt;1,l,mid);
	build(i&lt;&lt;1|1,mid+1,r);
	PushUp(i);
}
void update(int i,int pos,int val)
{
	if(tree[i].l==tree[i].r)
	{
		tree[i].ms=tree[i].ml=tree[i].mr=tree[i].sum=val;
		return ;
	}
	int mid=(tree[i].l+tree[i].r)&gt;&gt;1;
	if(pos&lt;=mid)
		update(i&lt;&lt;1,pos,val);
	else update(i&lt;&lt;1|1,pos,val);
	PushUp(i);
}
node query(int i,int l,int r)
{
	if(l&lt;=tree[i].l&amp;&amp;tree[i].r&lt;=r)
		return tree[i];
	int mid=(tree[i].l+tree[i].r)&gt;&gt;1;
	if(r&lt;=mid) return query(i&lt;&lt;1,l,r);
	else if(l&gt;mid) return query(i&lt;&lt;1|1,l,r);
	else
	{
		node x=query(i&lt;&lt;1,l,r),y=query(i&lt;&lt;1|1,l,r),res;
		//合并答案 
		res.sum=x.sum+y.sum;
		res.ml=max(x.sum+y.ml,x.ml);
		res.mr=max(y.sum+x.mr,y.mr);
		res.ms=max(max(x.ms,y.ms),x.mr+y.ml);
		return res;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>回到题目上的做法 <ul><li>先利用单调栈找出以每个节点为最大值左边界和右边界(单调栈经典思路)</li><li>枚举所有点，用左边界和右边界之后，在这个区间内查询最大子段，和减当前这个点的值就是答案</li><li>注意，最大子段不一定包含这个最大值，看似逻辑上有bug，但是枚举了所有点，一定有枚举到正确的答案最大的情况</li><li>如果不包含这个最大值，但是减掉这个最大值，只会越小，不可能更新答案</li><li>所以这样的做法是正确的</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include&lt;bits/stdc++.h&gt;
#define debug1(a) cout&lt;&lt;#a&lt;&lt;&#39;=&#39;&lt;&lt; a &lt;&lt; endl;
#define debug2(a,b) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;endl;
#define debug3(a,b,c) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;endl;
#define debug4(a,b,c,d) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;&quot;  &quot;&lt;&lt;#d&lt;&lt;&quot; = &quot;&lt;&lt;d&lt;&lt;endl;
#define debug5(a,b,c,d,e) cout&lt;&lt;#a&lt;&lt;&quot; = &quot;&lt;&lt;a&lt;&lt;&quot;  &quot;&lt;&lt;#b&lt;&lt;&quot; = &quot;&lt;&lt;b&lt;&lt;&quot;  &quot;&lt;&lt;#c&lt;&lt;&quot; = &quot;&lt;&lt;c&lt;&lt;&quot;  &quot;&lt;&lt;#d&lt;&lt;&quot; = &quot;&lt;&lt;d&lt;&lt;&quot;  &quot;&lt;&lt;#e&lt;&lt;&quot; = &quot;&lt;&lt;e&lt;&lt;endl;
#define endl &quot;\\n&quot;
#define fi first
#define se second

#define int long long
//#define int __int128
using namespace std;

typedef long long LL;
typedef unsigned long long ULL;
typedef pair&lt;int,int&gt; PII;
typedef pair&lt;LL,LL&gt; PLL;

//#pragma GCC optimize(3,&quot;Ofast&quot;,&quot;inline&quot;)
//#pragma GCC optimize(2)

inline int rd()
{
	int f=1,x=0;char c=getchar();
	while(c&lt;&#39;0&#39;||&#39;9&#39;&lt;c){if(c==&#39;-&#39;)f=-1;c=getchar();}
	while(&#39;0&#39;&lt;=c&amp;&amp;c&lt;=&#39;9&#39;) x=(x&lt;&lt;3)+(x&lt;&lt;1)+(c^48),c=getchar();
	return f*x;
}

//常数定义
const double eps = 1e-4;
const double PI = acos(-1.0);
const int INF = 0x3f3f3f3f;
const int N = 1e5+10;

int a[N];
int L[N],R[N];

struct node{
	int l,r;
	int sum,ms/*maxsum*/,ml,mr/*maxl,maxr*/;
}tree[N*4];


void PushUp(int i)
{
	tree[i].sum=tree[i&lt;&lt;1].sum+tree[i&lt;&lt;1|1].sum;
	tree[i].ml=max(tree[i&lt;&lt;1].sum+tree[i&lt;&lt;1|1].ml,tree[i&lt;&lt;1].ml);
	tree[i].mr=max(tree[i&lt;&lt;1|1].sum+tree[i&lt;&lt;1].mr,tree[i&lt;&lt;1|1].mr);
	tree[i].ms=max(max(tree[i&lt;&lt;1].ms,tree[i&lt;&lt;1|1].ms),tree[i&lt;&lt;1].mr+tree[i&lt;&lt;1|1].ml);
}
void build(int i,int l,int r)
{
	tree[i].l=l,tree[i].r=r;
	if(l==r)
	{
		tree[i].sum=tree[i].ml=tree[i].mr=tree[i].ms=a[l];
		return ;
	}
	int mid=(l+r)&gt;&gt;1;
	build(i&lt;&lt;1,l,mid);
	build(i&lt;&lt;1|1,mid+1,r);
	PushUp(i);
}
void update(int i,int pos,int val)
{
	if(tree[i].l==tree[i].r)
	{
		tree[i].ms=tree[i].ml=tree[i].mr=tree[i].sum=val;
		return ;
	}
	int mid=(tree[i].l+tree[i].r)&gt;&gt;1;
	if(pos&lt;=mid)
		update(i&lt;&lt;1,pos,val);
	else update(i&lt;&lt;1|1,pos,val);
	PushUp(i);
}
node query(int i,int l,int r)
{
	if(l&lt;=tree[i].l&amp;&amp;tree[i].r&lt;=r)
		return tree[i];
	int mid=(tree[i].l+tree[i].r)&gt;&gt;1;
	if(r&lt;=mid) return query(i&lt;&lt;1,l,r);
	else if(l&gt;mid) return query(i&lt;&lt;1|1,l,r);
	else
	{
		node x=query(i&lt;&lt;1,l,r),y=query(i&lt;&lt;1|1,l,r),res;
		//合并答案 
		res.sum=x.sum+y.sum;
		res.ml=max(x.sum+y.ml,x.ml);
		res.mr=max(y.sum+x.mr,y.mr);
		res.ms=max(max(x.ms,y.ms),x.mr+y.ml);
		return res;
	}
}

void solve() 
{
    int n;cin &gt;&gt; n;
    a[0] = a[n+1] = 100;
    for(int i = 1;i &lt;= n;i ++)
    {
        cin &gt;&gt; a[i];
    }

    stack&lt;int&gt; sta;
    for(int i = 1;i &lt;= n;i ++)
    {
        while(sta.size() &amp;&amp; a[sta.top()] &lt;= a[i])
        {
            sta.pop();
        }
        if(sta.empty()) L[i] = 1;
        else L[i] = sta.top() + 1;
        sta.push(i);
    }
    while(sta.size())sta.pop();

    for(int i = n;i &gt;= 1;i --)
    {
        while(sta.size() &amp;&amp; a[sta.top()] &lt;= a[i])
        {
            sta.pop();
        }
        if(sta.empty()) R[i] = n;
        else R[i] = sta.top() - 1;
        sta.push(i);  
    }

    build(1,1,n);
    //for(int i = 1;i &lt;= n ;i ++)update(1,i,a[i]);

    int ans = 0;
    for(int i = 1;i &lt;= n ;i ++)
    {
        
        node now = query(1,L[i],R[i]);
        //debug4(i,L[i],R[i],now.ms);
        ans = max(ans,now.ms - a[i]);
    }
    //debug4(4,4,13,query(1,4,12).ms);

    cout &lt;&lt; ans &lt;&lt; endl;
}

signed main()
{
    
    /*
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    */
    int T = 1;//cin &gt;&gt; T;

    while(T--){
        //puts(solve()?&quot;YES&quot;:&quot;NO&quot;);
        solve();
    }
    return 0;

}
/*

*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function b(o,p){const e=t("ExternalLinkIcon");return s(),d("div",null,[u,i("ul",null,[i("li",null,[i("a",m,[n("https://codeforces.com/contest/1359/problem/D"),r(e)])])]),c])}const q=l(a,[["render",b],["__file","0.html.vue"]]);export{q as default};
