import{_ as n,c as a,a as e,o as p}from"./app-Bj_TYjpC.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h1><p>Less支持的内部函数</p><h2 id="逻辑函数" tabindex="-1"><a class="header-anchor" href="#逻辑函数"><span>逻辑函数</span></a></h2><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if</span></a></h3><p>根据条件返回两个值之一。</p><p>参数： - condition：布尔表达式 - value1:如果condition为真，，则返回该值。 - value2:如果condition不为真，则返回该值。</p><p>示例：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token variable">@some<span class="token punctuation">:</span></span>foo<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span><span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>2&gt;1<span class="token punctuation">)</span><span class="token punctuation">,</span>0<span class="token punctuation">,</span>3px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">iscolor</span><span class="token punctuation">(</span><span class="token variable">@some</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token variable">@some</span><span class="token punctuation">,</span>black<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span>  black<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>conditional</code>参数支持的布尔表达式与<a href="https://lesscss.cn/features/#mixins-feature-mixin-guards-feature" target="_blank" rel="noopener noreferrer">守卫声明</a>相同。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">if(not (true), foo, bar);</span>
<span class="line">if((true) and (2 &gt; 1), foo, bar);</span>
<span class="line">if((false) or (isstring(&quot;boo!&quot;)), foo, bar);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：在Less3.6之前，条件需要一组括号</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token function">if</span><span class="token punctuation">(</span>2 &gt; 1<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Causes an error in 3.0-3.5.3</span></span>
<span class="line"><span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>2 &gt; 1<span class="token punctuation">)</span><span class="token punctuation">,</span> blue<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Ok 3.6+</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean"><span>boolean</span></a></h3><p>评估值为真或假</p><p>你可以在“store”布尔测试以供后面在守卫中进行评估或<code>if()</code>。</p><p>参数： - condition：布尔表达式</p><p>示例：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token variable">@some<span class="token punctuation">:</span></span>foo<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span><span class="token function">if</span><span class="token punctuation">(</span><span class="token function">boolean</span><span class="token punctuation">(</span>2&gt;1<span class="token punctuation">)</span><span class="token punctuation">,</span>0<span class="token punctuation">,</span>3px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">if</span><span class="token punctuation">(</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token function">iscolor</span><span class="token punctuation">(</span><span class="token variable">@some</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token variable">@some</span><span class="token punctuation">,</span>black<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span>  black<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型函数" tabindex="-1"><a class="header-anchor" href="#类型函数"><span>类型函数</span></a></h2><h3 id="iscolor" tabindex="-1"><a class="header-anchor" href="#iscolor"><span>iscolor</span></a></h3><p>如果值是颜色，则返回true。</p><p>参数： - value：要检查的值</p><p>示例：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token variable">@some<span class="token punctuation">:</span></span>foo<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span><span class="token function">if</span><span class="token punctuation">(</span><span class="token function">iscolor</span><span class="token punctuation">(</span><span class="token variable">@some</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token variable">@some</span><span class="token punctuation">,</span>black<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token variable">@bg<span class="token punctuation">:</span></span> black<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@bg-light<span class="token punctuation">:</span></span> <span class="token function">boolean</span><span class="token punctuation">(</span><span class="token function">luma</span><span class="token punctuation">(</span><span class="token variable">@bg</span><span class="token punctuation">)</span> &gt; 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@bg</span><span class="token punctuation">;</span> </span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token variable">@bg-light</span><span class="token punctuation">,</span> black<span class="token punctuation">,</span> white<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数"><span>字符串函数</span></a></h2><h3 id="escape" tabindex="-1"><a class="header-anchor" href="#escape"><span>escape</span></a></h3><p>将 <a href="http://en.wikipedia.org/wiki/Percent-encoding" target="_blank" rel="noopener noreferrer">URL编码</a> 应用于在输入字符串中找到的特殊字符 - 这些字符未编码：,、/、?、@、&amp;、+、&#39;、～、!、$。 - 最常见的编码字符是：&lt;space&gt;\\、#、^、(、)、{、}、｜、:、&gt;、&lt;、;、]、[ 和=</p><p>参数：string：要转义的字符串。 返回：不带引号转义string内容。</p><p>示例：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token function">escape</span><span class="token punctuation">(</span><span class="token string">&#39;a=1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line">a%3D1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意：如果参数不是字符串，则未定义输出。当前的实现在颜色上返回 undefined，在任何其他类型的参数上返回不变的输入。不应依赖此行为，并且将来可能会更改。</p><h3 id="e" tabindex="-1"><a class="header-anchor" href="#e"><span>e</span></a></h3><p>字符串转义</p><p>它期望字符串作为参数并按原样返回其内容，但不带引号。它可用于输出无效 CSS 语法或使用 Less 无法识别的专有语法的 CSS 值。</p><p>参数：string - 要转义的字符串 返回：string - 转义字符串，不带引号。</p><p>示例：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token variable">@mscode<span class="token punctuation">:</span></span> <span class="token string">&quot;ms:alwaysHasItsOwnSyntax.For.Stuff()&quot;</span> </span>
<span class="line"><span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token variable">@mscode</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">ms</span><span class="token punctuation">:</span>alwaysHasItsOwnSyntax.For.<span class="token function">Stuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>%格式</span></a></h3><p>函数 <code>%(string, arguments ...)</code> 格式化一个字符串。</p><p>第一个参数是带占位符的字符串。所有占位符都以百分比符号 <code>%</code> 开头，后跟字母 <code>s</code>、<code>S</code>、<code>d</code>、<code>D</code>、<code>a</code> 或 <code>A</code>。其余参数包含用于替换占位符的表达式。如果你需要打印百分比符号，请使用另一个百分比 <code>%%</code> 将其转义。</p><p>如果你需要将特殊字符转义为它们的 utf-8 转义码，请使用大写占位符。该函数转义除 <code>()&#39;~!</code> 以外的所有特殊字符。空格编码为 <code>%20</code>。小写占位符保留特殊字符。</p><p>占位符： - <code>d</code>, <code>D</code>, <code>a</code>, <code>A</code> - 可以替换为任何类型的参数（颜色、数字、转义值、表达式...）。如果将它们与字符串结合使用，则将使用整个字符串 - 包括它的引号。但是，引号按原样放置在字符串中，它们不会被 &quot;/&quot; 或类似的东西转义。 - <code>s</code>, <code>S</code> - 可以用任何表达式替换。如果与字符串一起使用，则仅使用字符串值 - 引号被省略。</p><p>参数： - string：带占位符的格式字符串， - anything* ：替换占位符的值。 返回：格式化 string。</p><p>示例：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token property">format-a-d</span><span class="token punctuation">:</span> %<span class="token punctuation">(</span><span class="token string">&quot;repetitions: %a file: %d&quot;</span><span class="token punctuation">,</span> 1 <span class="token operator">+</span> 2<span class="token punctuation">,</span> <span class="token string">&quot;directory/file.less&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property">format-a-d-upper</span><span class="token punctuation">:</span> %<span class="token punctuation">(</span><span class="token string">&#39;repetitions: %A file: %D&#39;</span><span class="token punctuation">,</span> 1 <span class="token operator">+</span> 2<span class="token punctuation">,</span> <span class="token string">&quot;directory/file.less&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property">format-s</span><span class="token punctuation">:</span> %<span class="token punctuation">(</span><span class="token string">&quot;repetitions: %s file: %s&quot;</span><span class="token punctuation">,</span> 1 <span class="token operator">+</span> 2<span class="token punctuation">,</span> <span class="token string">&quot;directory/file.less&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property">format-s-upper</span><span class="token punctuation">:</span> %<span class="token punctuation">(</span><span class="token string">&#39;repetitions: %S file: %S&#39;</span><span class="token punctuation">,</span> 1 <span class="token operator">+</span> 2<span class="token punctuation">,</span> <span class="token string">&quot;directory/file.less&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token property">format-a-d</span><span class="token punctuation">:</span> <span class="token string">&quot;repetitions: 3 file: &quot;</span>directory<span class="token operator">/</span>file.less<span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property">format-a-d-upper</span><span class="token punctuation">:</span> <span class="token string">&quot;repetitions: 3 file: %22directory%2Ffile.less%22&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property">format-s</span><span class="token punctuation">:</span> <span class="token string">&quot;repetitions: 3 file: directory/file.less&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property">format-s-upper</span><span class="token punctuation">:</span> <span class="token string">&quot;repetitions: 3 file: directory%2Ffile.less&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace" tabindex="-1"><a class="header-anchor" href="#replace"><span>replace</span></a></h3><p>替换字符串中的文本</p><p>参数：</p><ul><li><p>string：要搜索和替换的字符串。</p></li><li><p>pattern：要搜索的字符串或正则表达式模式。</p></li><li><p>replacement：用于替换匹配模式的字符串。</p></li><li><p>flags：（可选）正则表达式标志。</p></li></ul><p>返回：具有替换值的字符串。</p><p>示例：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, Mars?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mars\\?&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Earth!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;One + one = 4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;This is a string.&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;(string)\\.$&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;new $1.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">replace</span><span class="token punctuation">(</span>~<span class="token string">&quot;bar-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&quot;Hello, Earth!&quot;;</span>
<span class="line">&quot;2 + 2 = 4&quot;;</span>
<span class="line">&#39;This is a new string.&#39;;</span>
<span class="line">bar-2;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表函数" tabindex="-1"><a class="header-anchor" href="#列表函数"><span>列表函数</span></a></h2><h3 id="length" tabindex="-1"><a class="header-anchor" href="#length"><span>length</span></a></h3><p>返回值列表中的元素值。</p><p>参数：</p><ul><li><code>list</code> 逗号或空格分隔的值列表</li></ul><p>示例：<code>length(1px solid #0080ff)</code>;</p><p>输出：<code>3</code></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token variable">@list<span class="token punctuation">:</span></span><span class="token string">&#39;banana&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;tomato&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;potato&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;peach&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property">n</span><span class="token punctuation">:</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token variable">@list</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token property">n</span><span class="token punctuation">:</span>4<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="extract" tabindex="-1"><a class="header-anchor" href="#extract"><span>extract</span></a></h3><p>返回列表中指定位置的值。 参数：</p><ul><li><code>list</code> - 逗号或空格分隔的值列表</li><li><code>index</code> - 一个整数，指定要返回的列表元素的位置。</li></ul><p>示例：extract(8px dotted red, 2);</p><p>输出：dotted</p><p>示例：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token variable">@list<span class="token punctuation">:</span></span>apple<span class="token punctuation">,</span>pear<span class="token punctuation">,</span>coconut<span class="token punctuation">,</span>orange<span class="token punctuation">;</span></span>
<span class="line"><span class="token property">value</span><span class="token punctuation">:</span> <span class="token function">extract</span><span class="token punctuation">(</span><span class="token variable">@list</span><span class="token punctuation">,</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token property">value</span><span class="token punctuation">:</span> coconut<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="range" tabindex="-1"><a class="header-anchor" href="#range"><span>range</span></a></h3><p>生成跨越一些列值的列表。</p><p>参数：</p><ul><li>start - (可选) 起始值例如1或1像素</li><li>end - 最终值，例如5px</li><li>step - (可选) 增加量</li></ul><p>示例：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token property">value</span><span class="token punctuation">:</span> <span class="token function">range</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token property">value</span><span class="token punctuation">:</span> 1 2 3 4<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>作用域内每个值的输出将与<code>end</code>值的单位相同。例如：</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre><code><span class="line"><span class="token property">value</span><span class="token punctuation">:</span><span class="token function">range</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span>30px<span class="token punctuation">,</span>10<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出： value：10px 20px 30px;</p>`,98)]))}const o=n(t,[["render",l],["__file","2.html.vue"]]),u=JSON.parse('{"path":"/less/2.html","title":"函数手册","lang":"zh-CN","frontmatter":{"title":"函数手册","description":"函数手册"},"headers":[{"level":2,"title":"逻辑函数","slug":"逻辑函数","link":"#逻辑函数","children":[{"level":3,"title":"if","slug":"if","link":"#if","children":[]},{"level":3,"title":"boolean","slug":"boolean","link":"#boolean","children":[]}]},{"level":2,"title":"类型函数","slug":"类型函数","link":"#类型函数","children":[{"level":3,"title":"iscolor","slug":"iscolor","link":"#iscolor","children":[]}]},{"level":2,"title":"字符串函数","slug":"字符串函数","link":"#字符串函数","children":[{"level":3,"title":"escape","slug":"escape","link":"#escape","children":[]},{"level":3,"title":"e","slug":"e","link":"#e","children":[]},{"level":3,"title":"%格式","slug":"格式","link":"#格式","children":[]},{"level":3,"title":"replace","slug":"replace","link":"#replace","children":[]}]},{"level":2,"title":"列表函数","slug":"列表函数","link":"#列表函数","children":[{"level":3,"title":"length","slug":"length","link":"#length","children":[]},{"level":3,"title":"extract","slug":"extract","link":"#extract","children":[]},{"level":3,"title":"range","slug":"range","link":"#range","children":[]}]}],"git":{"updatedTime":1724847022000,"contributors":[{"name":"qiuyulc","username":"qiuyulc","email":"qiuyulc@gmail.com","commits":1,"url":"https://github.com/qiuyulc"}]},"filePathRelative":"less/2.md"}');export{o as comp,u as data};