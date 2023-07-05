import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c as t,a as n,b as e,d,f as r}from"./app-587dee3d.js";const c={},v=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),e(" 题目")],-1),o={href:"https://atcoder.jp/contests/arc119/tasks/arc119_c",target:"_blank",rel:"noopener noreferrer"},u=r(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>交错和</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>onst int N = 3e5+10;
int v[N];
void solve()
{
    int n;cin &gt;&gt; n;
	for (int i = 1; i&lt;=n; i++){
        cin &gt;&gt; v[i];
		if (i%2 == 0){
			v[i]*=-1;
		}
	}
    map&lt;long long, long long&gt; mp;
 
	mp[0] = 1;
 
	long long ans = 0;
	long long suma = 0;
 
	for (int i = 1; i&lt;=n; i++){
		suma+=v[i];
		ans+=mp[suma];
		mp[suma]++;
	}
 
	cout &lt;&lt; ans;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(b,h){const i=a("ExternalLinkIcon");return l(),t("div",null,[v,n("ul",null,[n("li",null,[n("a",o,[e("https://atcoder.jp/contests/arc119/tasks/arc119_c"),d(i)])])]),u])}const g=s(c,[["render",m],["__file","C-ARCWrecker2.html.vue"]]);export{g as default};
