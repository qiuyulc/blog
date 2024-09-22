import{_ as n,o as s,c as a,b as t}from"./app-ACDQQq2e.js";const e={},p=t(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>由一个工厂对象决定创建某一种产品对象类的实例，主要用来创建同一类对象。</p><h2 id="es5" tabindex="-1"><a class="header-anchor" href="#es5" aria-hidden="true">#</a> ES5</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserFactory</span><span class="token punctuation">(</span><span class="token parameter">role</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">role<span class="token punctuation">,</span> pages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> role<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pages <span class="token operator">=</span> pages<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>role<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;superadmin&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;superadmin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;user-manage&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;right-manage&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;news-manage&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token string">&quot;admin&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user-manage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;news-manage&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token string">&quot;editor&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;editor&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;news-manage&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;参数错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserFactory</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">role<span class="token punctuation">,</span> pages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pole <span class="token operator">=</span> role<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pages <span class="token operator">=</span> pages<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">UserFactory</span><span class="token punctuation">(</span><span class="token parameter">role</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>role<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&quot;superadmin&quot;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;superadmin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;user-manage&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;right-manage&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;news-manage&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>

      <span class="token keyword">case</span> <span class="token string">&quot;admin&quot;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user-manage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;news-manage&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>

      <span class="token keyword">case</span> <span class="token string">&quot;editor&quot;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;editor&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;news-manage&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>

      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;参数错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> User<span class="token punctuation">.</span><span class="token function">UserFactory</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","03.html.vue"]]);export{r as default};
