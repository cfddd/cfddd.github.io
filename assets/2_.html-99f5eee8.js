import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as t,a as i,b as e,d as s,f as l}from"./app-f94c3d64.js";const v={},c=i("h2",{id:"题目",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),e(" 题目")],-1),m={href:"https://leetcode.cn/problems/longest-valid-parentheses/",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="方法一-dp" tabindex="-1"><a class="header-anchor" href="#方法一-dp" aria-hidden="true">#</a> 方法一：dp</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  int longestValidParentheses(string s) {
        int ans = 0;
        stack&lt;int&gt; sta;
        sta.push(-1);
        for(int i = 0;i &lt; s.size();i ++)
        {
            if(s[i] == &#39;(&#39;)sta.push(i);
            else{
                sta.pop();
                if(sta.empty())
                {
                    sta.push(i);
                }else{
                    ans = max(ans,i - sta.top());
                }
            }
        }
        return ans;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法二-栈" tabindex="-1"><a class="header-anchor" href="#方法二-栈" aria-hidden="true">#</a> 方法二：栈</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  int longestValidParentheses(string s) {
        s = &#39; &#39; + s;
        int n = s.size();
        vector&lt;int&gt; f(n,0);
        for(int i = 2;i &lt; n;i ++)
        {
            if(s[i] == &#39;)&#39;){
                if(s[i-1] == &#39;(&#39;)f[i] = f[i-2] + 2;
                else if(s[i - f[i-1] - 1] == &#39;(&#39;)f[i] = f[i - f[i-1] - 2] + f[i-1] + 2;
            }

        }
        return *max_element(f.begin(),f.end());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法三-贪心" tabindex="-1"><a class="header-anchor" href="#方法三-贪心" aria-hidden="true">#</a> 方法三：贪心</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    int longestValidParentheses(string s) {
        int left = 0,right = 0;
        int ans = 0;
        for(int i = 0;i &lt; s.size();i ++)
        {
            if(s[i] == &#39;(&#39;)left ++;
            else right ++;

            if(left == right) ans = max(ans,left * 2);
            else if(right &gt; left)right = left = 0;
        }
        left = 0,right = 0;
        for(int i = s.size() - 1;i &gt;= 0;i --)
        {
            if(s[i] == &#39;(&#39;)left ++;
            else right ++;

            if(left == right) ans = max(ans,left * 2);
            else if(right &lt; left)right = left = 0;
        }
        return ans;
        
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,7),b={href:"https://codeforces.com/problemset/problem/5/C",target:"_blank",rel:"noopener noreferrer"},o=i("li",null,"方法和上面的方法三一摸一样",-1),h=i("li",null,"只需要再加上一个记录答案数量的变量即可",-1),f=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void solve() 
{
    string s;cin &gt;&gt; s;
    int maxLen = longestValidParentheses(s);

    int left = 0,right = 0;
    int maxNum = 1,num = 0;
    for(int i = 0;i &lt; s.size();i ++)
    {
        if(s[i] == &#39;(&#39;)left ++;
        else right ++;

        if(right &gt; left)right = left = 0;
        else if(right == left &amp;&amp; right*2 == maxLen)num ++;
    }
    maxNum = max(maxNum,num);
    // debug1(num);
    left = right = num = 0;
    for(int i = s.size() - 1;i &gt;= 0;i --)
    {
        if(s[i] == &#39;(&#39;)left ++;
        else right ++;

        if(right &lt; left)right = left = 0;
        else if(right == left &amp;&amp; right*2 == maxLen)num ++;
    }
    // debug1(num); 
    maxNum = max(maxNum,num);
    cout &lt;&lt; maxLen &lt;&lt; &quot; &quot; &lt;&lt; maxNum &lt;&lt; endl;
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(x,p){const n=a("ExternalLinkIcon");return r(),t("div",null,[c,i("ul",null,[i("li",null,[i("a",m,[e("最长有效括号"),s(n)])])]),u,i("ul",null,[i("li",null,[i("a",b,[e("https://codeforces.com/problemset/problem/5/C"),s(n)])]),o,h]),f])}const V=d(v,[["render",g],["__file","2_.html.vue"]]);export{V as default};
