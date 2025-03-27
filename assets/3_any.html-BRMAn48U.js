import{_ as s,c as a,a as e,o as p}from"./app-Drra5e4z.js";const t={};function l(o,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="any-类型、unknown-类型、never-类型" tabindex="-1"><a class="header-anchor" href="#any-类型、unknown-类型、never-类型"><span>any 类型、unknown 类型、never 类型</span></a></h1><h2 id="_1-any-类型" tabindex="-1"><a class="header-anchor" href="#_1-any-类型"><span>1.any 类型</span></a></h2><h3 id="_1-1-基本含义" tabindex="-1"><a class="header-anchor" href="#_1-1-基本含义"><span>1.1 基本含义</span></a></h3><p>any 类型没有任何限制，该类型的变量可以赋值给任意类型的值。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量类型一旦被设置为 <code>any</code> ，TypeScript 实际上会关闭这个变量的类型检测。即使有明显的类型错误，只要语法正确，都不会报错。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">x</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//不报错</span></span>
<span class="line">x<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">//不报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以在实际开发中不要轻易使用<code>any</code> 适用场景：</p><ol><li>出于特殊原因，需要关闭某些变量的类型检查。</li><li>适配老的 JavaScript 项目，让代码快速迁移到 TypeScript。</li></ol><p>从集合论的角度来说，<code>any</code>类型可以看成是所有其他类型的全集，包含了一切可能得类型。TypeScript 讲这种类型称为&quot;顶层类型&quot; （top type）</p><h3 id="_1-2-类型推断问题" tabindex="-1"><a class="header-anchor" href="#_1-2-类型推断问题"><span>1.2 类型推断问题</span></a></h3><p>当开发者没有指定类型时，TypeScript 必须自己推断类型，如果无法推断出类型，TypeScript 就会认为该变量的类型是<code>any</code>。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 中提供了一个编译选项 <code>noImplictiAny</code>,打开该选项，只要推断出<code>any</code>类型就会报错。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">tsc <span class="token parameter variable">--noImplicitAny</span> app.ts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>有一种特殊情况，当你声明一个变量不过没有赋值时，即使 TypeScript 推断出是 <code>any</code> 也不会报错。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">var</span> x<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> y<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-污染问题" tabindex="-1"><a class="header-anchor" href="#_1-3-污染问题"><span>1.3 污染问题</span></a></h3><p><code>any</code> 类型除了关闭类型检查，还有一个很大的问题。它会污染其他变量。它可以赋值给其他任何类型的变量(因为没有类型检查)，导致其他变量出错。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">y <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">//不报错</span></span>
<span class="line"></span>
<span class="line">y <span class="token operator">*</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">//不报错</span></span>
<span class="line"></span>
<span class="line">y<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//不报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-unknown-类型" tabindex="-1"><a class="header-anchor" href="#_2-unknown-类型"><span>2.unknown 类型</span></a></h2><p>为了解决 <code>any</code> 类型污染其他变量的问题，TypeScript3.0 引入了<code>unknown</code> 类型。它和 <code>any</code> 含义相同，表示类型不确定，可能是任意类型，但是他的使用有一些限制，不想 <code>any</code>那么自由。</p><ol><li>相似之处：</li></ol><p>所有类型的值都可以分配给 unknown 类型。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>不同</li></ol><p>首先，<code>unknown</code>类型的变量，不能直接赋值给其他类型的变量(除了<code>any</code>类型和<code>unknown</code>类型)。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> v<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> v1<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> v<span class="token punctuation">;</span> <span class="token comment">//报错</span></span>
<span class="line"><span class="token keyword">let</span> v2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> v<span class="token punctuation">;</span> <span class="token comment">//报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其次不能直接调用 <code>unknown</code>类型变量的方法和属性。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> v1<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">v1<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">//报错</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> v2<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span></span>
<span class="line">v2<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//报错</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> v3<span class="token operator">:</span> <span class="token function-variable function">unknown</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">v3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次， <code>unknown</code> 类型变量能够进行的运算是有限的，只能进行比较运算(运算符 == 、=== 、!= 、!== 、|| 、&amp;&amp;、?)、取反运算符 ! 、typeof 运算符和 instanceof 运算符这几种，其他运算都会报错。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//报错</span></span>
<span class="line">a <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>何时使用？</p><p>只有经过&quot;类型缩小&quot;，<code>unknown</code> 类型变量才可以使用。所谓&quot;类型缩小&quot;,就是缩小 <code>unknown</code> 变量的类型范围，确保不会出错。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> r <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大概意思就是，你能清楚的知道变量的确定类型，这时候你就可以使用它来运算了。</p><p>从集合论来说，<code>unknown</code>也可以视为所有其他类型(除了<code>any</code>) 的全集，所以它和 <code>any</code> 一样，也属于 TypeScript 的顶层类型。</p><h2 id="_3-never-类型" tabindex="-1"><a class="header-anchor" href="#_3-never-类型"><span>3.never 类型</span></a></h2><p>空类型，即该类型为空，不包含任何值。</p><p>由于不存在任何属于&quot;空类型&quot;的值，所以该类型被称为<code>never</code>,即不可能有这样的值。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> nerver<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面的示例中，变量 <code>x</code> 的类型是 <code>never</code> ，就不可能赋给它任何值，否则都会报错。</p><p><code>never</code> 类型的使用场景，主要是在一些类型运算中，保证类型运算的完整性。另外，不可能返回值的函数，返回值的类型就可以写成 <code>never</code> 如果一个变量有多种类型(即联合类型)，通常需要使用分支处理每一种类型。这时，处理完所有可能得类型之后，剩余的情况就属于<code>never</code>类型。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    x<span class="token punctuation">;</span> <span class="token comment">// never 类型</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>never</code> 特点另一个特点就是，可以赋值给任意其他类型。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> v1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不报错</span></span>
<span class="line"><span class="token keyword">let</span> v2<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不报错</span></span>
<span class="line"><span class="token keyword">let</span> v3<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么 <code>never</code> 类型可以赋值给任意其他类型呢？这也很集合论有关，空集是任何集合的子集。TypeScript 就相应规定，任何类型都包含了 <code>never</code> 类型。因此，<code>never</code> 类型是任何其他类型所共有的。</p><p>TypeScript 把这种情况称为 &quot;底层类型&quot;(bottom type);</p><p>顶层类型(<code>any</code>和<code>unknown</code>); 底层类型(<code>never</code>)</p>`,49)]))}const i=s(t,[["render",l],["__file","3_any.html.vue"]]),r=JSON.parse('{"path":"/typescript/3_any.html","title":"any 类型、unknown 类型、never 类型","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.any 类型","slug":"_1-any-类型","link":"#_1-any-类型","children":[{"level":3,"title":"1.1 基本含义","slug":"_1-1-基本含义","link":"#_1-1-基本含义","children":[]},{"level":3,"title":"1.2 类型推断问题","slug":"_1-2-类型推断问题","link":"#_1-2-类型推断问题","children":[]},{"level":3,"title":"1.3 污染问题","slug":"_1-3-污染问题","link":"#_1-3-污染问题","children":[]}]},{"level":2,"title":"2.unknown 类型","slug":"_2-unknown-类型","link":"#_2-unknown-类型","children":[]},{"level":2,"title":"3.never 类型","slug":"_3-never-类型","link":"#_3-never-类型","children":[]}],"git":{"updatedTime":1709135432000,"contributors":[{"name":"Mrlishizhen","username":"Mrlishizhen","email":"718647063@qq.com","commits":1,"url":"https://github.com/Mrlishizhen"}]},"filePathRelative":"typescript/3_any.md"}');export{i as comp,r as data};
