import{_ as n,o as s,c as a,b as t}from"./app-IioCQd_M.js";const p={},e=t(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>使多个对象都有机会处理请求，从而避免了请求的发送者与多个接受者直接的耦合关系，将这些接受者链接成 一条链，顺着这条链传递该请求，直到找到能处理请求的对象。</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这里不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token operator">+</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这里必须是数字&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这里数字长度必须大于6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>迭代器模式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">/*
     使多个对象都有机会处理请求，从而避免了请求的发送者与多个接受者直接的耦合关系，将这些接受者链接成
     一条链，顺着这条链传递该请求，直到找到能处理请求的对象
     
     */</span>

      <span class="token comment">// btn.onclick = function () {</span>
      <span class="token comment">//   checks.check();</span>
      <span class="token comment">// };</span>

      <span class="token comment">// function checkEmpty() {</span>
      <span class="token comment">//   if (input.value.length === 0) {</span>
      <span class="token comment">//     console.log(&quot;这里不能为空&quot;);</span>
      <span class="token comment">//     return;</span>
      <span class="token comment">//   }</span>
      <span class="token comment">// }</span>

      <span class="token comment">// function checkNumber() {</span>
      <span class="token comment">//   if (Number.isNaN(+input.value)) {</span>
      <span class="token comment">//     console.log(&quot;这里必须是数字&quot;);</span>
      <span class="token comment">//   }</span>
      <span class="token comment">// }</span>

      <span class="token comment">// function checkLength() {</span>
      <span class="token comment">//   if (input.value.length &lt; 6) {</span>
      <span class="token comment">//     console.log(&quot;这里数字长度必须大于6&quot;);</span>
      <span class="token comment">//   }</span>
      <span class="token comment">// }</span>

      <span class="token comment">// class Chain {</span>
      <span class="token comment">//   constructor(fn) {</span>
      <span class="token comment">//     this.checkRule = fn;</span>
      <span class="token comment">//     this.nextRule = null;</span>
      <span class="token comment">//   }</span>
      <span class="token comment">//   addRule(nextRule) {</span>
      <span class="token comment">//     this.nextRule = nextRule;</span>
      <span class="token comment">//   }</span>

      <span class="token comment">//   check() {</span>
      <span class="token comment">//     this.checkRule() === &quot;next&quot; ? this.nextRule.check() : null;</span>
      <span class="token comment">//   }</span>
      <span class="token comment">// }</span>

      <span class="token comment">// const checks = new Chain(checkEmpty);</span>
      <span class="token comment">// const checkNumberChain = new Chain(checkNumber);</span>
      <span class="token comment">// const checkLengthChain = new Chain(checkLength);</span>

      <span class="token comment">// checks.addRule(checkNumberChain);</span>
      <span class="token comment">// checks.addRule(checkLengthChain);</span>
      <span class="token comment">// checks.addRule(() =&gt; {</span>
      <span class="token comment">//   check: () =&gt; &quot;end&quot;;</span>
      <span class="token comment">// });</span>

      <span class="token comment">//优化</span>
      btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        checks<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">function</span> <span class="token function">checkEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这里不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">checkNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token operator">+</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这里必须是数字&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">checkLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这里数字长度必须大于6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">class</span> <span class="token class-name">Chain</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>checkRule <span class="token operator">=</span> fn<span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>nextRule <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">addRule</span><span class="token punctuation">(</span><span class="token parameter">nextRule</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>nextRule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chain</span><span class="token punctuation">(</span>nextRule<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nextRule<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>nextRule <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">check</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">checkRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;next&quot;</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nextRule<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> checks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chain</span><span class="token punctuation">(</span>checkEmpty<span class="token punctuation">)</span><span class="token punctuation">;</span>
      checks<span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span>checkNumber<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span>checkLength<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","19.html.vue"]]);export{k as default};
