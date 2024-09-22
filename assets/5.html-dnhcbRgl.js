import{_ as n,o as s,c as a,b as e}from"./app-ACDQQq2e.js";const p={},t=e(`<h1 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h1><p>在使用<code>webpack</code>之前，我们需要对<code>webpack</code>的配置有一定的认识。</p><h2 id="_5-大核心概念" tabindex="-1"><a class="header-anchor" href="#_5-大核心概念" aria-hidden="true">#</a> 5 大核心概念</h2><ul><li><p>entry(入口)</p><p>指定 Webpack 从哪个文件开始打包。</p></li><li><p>output(输出)</p><p>指示 Webpack 打包完的文件输出到哪里去，如何命名等。</p></li><li><p>loader(加载器)</p><p>webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，webpack 才能解析。</p></li><li><p>plugins(插件)</p><p>扩展 webpack 的功能。</p></li><li><p>mode(模式)</p><p>主要有两种模式：</p><ul><li>开发模式：development</li><li>生产模式：production</li></ul></li></ul><h2 id="准备-webpack-配置文件" tabindex="-1"><a class="header-anchor" href="#准备-webpack-配置文件" aria-hidden="true">#</a> 准备 Webpack 配置文件</h2><p>在项目根目录下新建文件：<code>webpack.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//加载器</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">//模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>webpack 是基于 Node.js 运行的，所以采用 Common.js 模块化规范。</p><h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2><ol><li>配置文件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">//相对路径</span>
  <span class="token comment">//输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//文件的输出路径</span>
    <span class="token comment">//__dirname nodejs的变量，代表当前文件的文件夹目录</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//相对路径</span>
    <span class="token comment">//文件名</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//加载器</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">//loader的配置</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//plugin的配置</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">//模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行指令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>Webpack 将来都通过 <code>webpack.config.js</code> 文件进行配置，来增强 webpack 的功能。 后面会以两个模式来分别搭建 webpack 的配置，先进行开发模式，再完成生产模式。</p>`,15),o=[t];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","5.html.vue"]]);export{u as default};
