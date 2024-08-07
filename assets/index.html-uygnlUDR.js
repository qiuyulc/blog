import{_ as l,r as p,o as i,c,d as n,f as a,e as s,w as r,b as t}from"./app-HF9gtpQA.js";const u={},d=n("div",{align:"center"},[n("a",{href:"https://github.com/webpack/webpack"},[n("img",{width:"200",height:"200",src:"https://webpack.js.org/assets/icon-square-big.svg"})])],-1),k={href:"https://npmjs.com/package/stylus-loader",target:"_blank",rel:"noopener noreferrer"},v=n("img",{src:"https://img.shields.io/npm/v/stylus-loader.svg",alt:"npm"},null,-1),m={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},b=n("img",{src:"https://img.shields.io/node/v/stylus-loader.svg",alt:"node"},null,-1),y={href:"https://github.com/webpack-contrib/stylus-loader/actions",target:"_blank",rel:"noopener noreferrer"},g=n("img",{src:"https://github.com/webpack-contrib/stylus-loader/workflows/stylus-loader/badge.svg",alt:"tests"},null,-1),h={href:"https://codecov.io/gh/webpack-contrib/stylus-loader",target:"_blank",rel:"noopener noreferrer"},f=n("img",{src:"https://codecov.io/gh/webpack-contrib/stylus-loader/branch/master/graph/badge.svg",alt:"cover"},null,-1),x={href:"https://github.com/webpack/webpack/discussions",target:"_blank",rel:"noopener noreferrer"},_=n("img",{src:"https://img.shields.io/github/discussions/webpack/webpack",alt:"discussion"},null,-1),q={href:"https://packagephobia.now.sh/result?p=stylus-loader",target:"_blank",rel:"noopener noreferrer"},w=n("img",{src:"https://packagephobia.now.sh/badge?p=stylus-loader",alt:"size"},null,-1),j=t(`<h1 id="stylus-loader" tabindex="-1"><a class="header-anchor" href="#stylus-loader" aria-hidden="true">#</a> stylus-loader</h1><p>A Stylus loader for webpack. Compiles Styl to CSS.</p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p>To begin, you&#39;ll need to install <code>stylus</code> and <code>stylus-loader</code>:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>npm install stylus stylus-loader --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>yarn add -D stylus stylus-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>pnpm add -D stylus stylus-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then add the loader to your <code>webpack</code> config. For example:</p><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// compiles Styl to CSS</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And run <code>webpack</code> via your preferred method.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><ul><li><strong><a href="#stylusOptions"><code>stylusOptions</code></a></strong></li><li><strong><a href="#sourcemap"><code>sourceMap</code></a></strong></li><li><strong><a href="#webpackimporter"><code>webpackImporter</code></a></strong></li><li><strong><a href="#additionalData"><code>additionalData</code></a></strong></li><li><strong><a href="#implementation"><code>implementation</code></a></strong></li></ul><h3 id="stylusoptions" tabindex="-1"><a class="header-anchor" href="#stylusoptions" aria-hidden="true">#</a> <code>stylusOptions</code></h3><p>Type:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">stylusOptions</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      use<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
      include<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      define<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token punctuation">;</span>
      includeCSS<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      resolveURL<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> Object<span class="token punctuation">;</span>
      lineNumbers<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
      hoistAtrules<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
      compress<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">|</span> <span class="token punctuation">(</span>loaderContext<span class="token operator">:</span> LoaderContext<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Default: <code>{}</code></p>`,19),S=n("code",null,"stylus-loader",-1),C=n("code",null,"stylusOptions",-1),O={href:"https://webpack.js.org/configuration/module/#rule-options-rule-query",target:"_blank",rel:"noopener noreferrer"},T={href:"https://stylus-lang.com/docs/js.html",target:"_blank",rel:"noopener noreferrer"},I=t(`<h4 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> <code>object</code></h4><p>Use an object to pass options through to Stylus.</p><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">stylusOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token doc-comment comment">/**
                 * Specify Stylus plugins to use. Plugins may be passed as
                 * strings instead of importing them in your Webpack config.
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span>Function<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> []
                 */</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;nib&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * Add path(s) to the import lookup paths.
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> []
                 */</span>
                <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/styl/config&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * Import the specified Stylus files/paths.
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> []
                 */</span>
                <span class="token keyword">import</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;nib&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/styl/mixins&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * Define Stylus variables or functions.
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token operator">|</span>Object<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                 */</span>
                <span class="token comment">// Array is the recommended syntax: [key, value, raw]</span>
                <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">[</span><span class="token string">&quot;$development&quot;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span><span class="token string">&quot;rawVar&quot;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">// Object is deprecated syntax (there is no possibility to specify &quot;raw&#39;)</span>
                <span class="token comment">// define: {</span>
                <span class="token comment">//   $development: process.env.NODE_ENV === &#39;development&#39;,</span>
                <span class="token comment">//   rawVar: 42,</span>
                <span class="token comment">// },</span>

                <span class="token doc-comment comment">/**
                 * Include regular CSS on @import.
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> false
                 */</span>
                <span class="token literal-property property">includeCSS</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * Resolve relative url()&#39;s inside imported files.
                 *
                 * <span class="token keyword">@see</span> https://stylus-lang.com/docs/js.html#stylusresolveroptions
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token operator">|</span>Object<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> <span class="token class-name"><span class="token punctuation">{</span> nocheck<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
                 */</span>
                <span class="token literal-property property">resolveURL</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token comment">// resolveURL: { nocheck: true },</span>

                <span class="token doc-comment comment">/**
                 * Emits comments in the generated CSS indicating the corresponding Stylus line.
                 *
                 * <span class="token keyword">@see</span> https://stylus-lang.com/docs/executable.html
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> false
                 */</span>
                <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * Move @import and @charset to the top.
                 *
                 * <span class="token keyword">@see</span> https://stylus-lang.com/docs/executable.html
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> false
                 */</span>
                <span class="token literal-property property">hoistAtrules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 * Compress CSS output.
                 * In the &quot;production&quot; mode is \`true\` by default
                 *
                 * <span class="token keyword">@see</span> https://stylus-lang.com/docs/executable.html
                 *
                 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
                 * <span class="token keyword">@default</span> false
                 */</span>
                <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> <code>function</code></h4><p>Allows setting the options passed through to Stylus based off of the loader context.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token function-variable function">stylusOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">loaderContext</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// More information about available properties https://webpack.js.org/api/loaders/</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span> resourcePath<span class="token punctuation">,</span> rootContext <span class="token punctuation">}</span> <span class="token operator">=</span> loaderContext<span class="token punctuation">;</span>
                <span class="token keyword">const</span> relativePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>rootContext<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>relativePath <span class="token operator">===</span> <span class="token string">&quot;styles/foo.styl&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;absolute/path/c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;absolute/path/d&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;absolute/path/a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;absolute/path/b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> <code>sourceMap</code></h3><p>Type:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">sourceMap</span> <span class="token operator">=</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpackimporter" tabindex="-1"><a class="header-anchor" href="#webpackimporter" aria-hidden="true">#</a> <code>webpackImporter</code></h3><p>Type:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">webpackImporter</span> <span class="token operator">=</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Default: <code>true</code></p><p>Enables/Disables the default Webpack importer.</p><p>This can improve performance in some cases. Use it with caution because aliases and <code>@import</code> at-rules starting with <code>~</code> will not work.</p><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">webpackImporter</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="additionaldata" tabindex="-1"><a class="header-anchor" href="#additionaldata" aria-hidden="true">#</a> <code>additionalData</code></h3><p>Type:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">additionalData</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token operator">|</span> <span class="token punctuation">(</span>
      content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Buffer<span class="token punctuation">,</span>
      loaderContext<span class="token operator">:</span> LoaderContext<span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token builtin">any</span>
    <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Default: <code>undefined</code></p><p>Prepends <code>Stylus</code> code before the actual entry file. In this case, the <code>stylus-loader</code> will not override the source but just <strong>prepend</strong> the entry&#39;s content.</p><p>This is especially useful when some of your Stylus variables depend on the environment:</p><blockquote><p><strong>Note</strong></p><p>Since you&#39;re injecting code, this will break the source mappings in your entry file. Often there&#39;s a simpler solution than this, like multiple Stylus entry files.</p></blockquote><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> <code>string</code></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@env: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="function-1" tabindex="-1"><a class="header-anchor" href="#function-1" aria-hidden="true">#</a> <code>function</code></h4><h5 id="sync" tabindex="-1"><a class="header-anchor" href="#sync" aria-hidden="true">#</a> Sync</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token function-variable function">additionalData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> loaderContext</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// More information about available properties https://webpack.js.org/api/loaders/</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span> resourcePath<span class="token punctuation">,</span> rootContext <span class="token punctuation">}</span> <span class="token operator">=</span> loaderContext<span class="token punctuation">;</span>
                <span class="token keyword">const</span> relativePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>rootContext<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>relativePath <span class="token operator">===</span> <span class="token string">&quot;styles/foo.styl&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token string">&quot;value = 100px&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> <span class="token string">&quot;value 200px&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> Async</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token function-variable function">additionalData</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> loaderContext</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// More information about available properties https://webpack.js.org/api/loaders/</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span> resourcePath<span class="token punctuation">,</span> rootContext <span class="token punctuation">}</span> <span class="token operator">=</span> loaderContext<span class="token punctuation">;</span>
                <span class="token keyword">const</span> relativePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>rootContext<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>relativePath <span class="token operator">===</span> <span class="token string">&quot;styles/foo.styl&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token string">&quot;value = 100px&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> <span class="token string">&quot;value 200px&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> <code>implementation</code></h3><p>Type:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">implementation</span> <span class="token operator">=</span> <span class="token builtin">Function</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The special <code>implementation</code> option determines which implementation of Stylus to use. Overrides the locally installed <code>peerDependency</code> version of <code>stylus</code>.</p><h4 id="function-2" tabindex="-1"><a class="header-anchor" href="#function-2" aria-hidden="true">#</a> <code>function</code></h4><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">implementation</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;stylus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string-1" tabindex="-1"><a class="header-anchor" href="#string-1" aria-hidden="true">#</a> <code>string</code></h4><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">implementation</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;stylus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="normal-usage" tabindex="-1"><a class="header-anchor" href="#normal-usage" aria-hidden="true">#</a> Normal usage</h3>`,46),N=n("code",null,"stylus-loader",-1),D={href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"css-loader",-1),P={href:"https://github.com/webpack-contrib/style-loader",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"style-loader",-1),A=t(`<p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// creates style nodes from JS strings</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// translates CSS into CommonJS</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// compiles Stylus to CSS</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="source-maps" tabindex="-1"><a class="header-anchor" href="#source-maps" aria-hidden="true">#</a> Source maps</h3><p>To enable sourcemaps for CSS, you&#39;ll need to pass the <code>sourceMap</code> property in the loader&#39;s options. If this is not passed, the loader will respect the setting for webpack source maps, set in <code>devtool</code>.</p><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;source-map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// any &quot;source-map&quot;-like devtool is possible</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-nib-with-stylus" tabindex="-1"><a class="header-anchor" href="#using-nib-with-stylus" aria-hidden="true">#</a> Using nib with stylus</h3><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// creates style nodes from JS strings</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// translates CSS into CommonJS</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// compiles Stylus to CSS</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">stylusOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;nib&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token keyword">import</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;nib&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import-json-files" tabindex="-1"><a class="header-anchor" href="#import-json-files" aria-hidden="true">#</a> Import JSON files</h3><p>Stylus does not provide resolving capabilities in the <code>json</code> function. Therefore webpack resolver does not work for <code>.json</code> files. Use <a href="#stylus-resolver"><code>stylus resolver</code></a>.</p><p><strong>index.styl</strong></p><div class="language-stylus line-numbers-mode" data-ext="styl"><pre class="language-stylus"><code><span class="token comment">// Suppose the file is located here \`node_modules/vars/vars.json\`</span>
<span class="token func"><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">&#39;vars.json&#39;</span><span class="token punctuation">)</span></span>

<span class="token atrule-declaration"><span class="token atrule">@media</span> queries-small</span>
  <span class="token selector">body</span>
    <span class="token property-declaration"><span class="token property">display</span> nope</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">stylusOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// Specify the path. where to find files</span>
                <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules/vars&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in-production" tabindex="-1"><a class="header-anchor" href="#in-production" aria-hidden="true">#</a> In production</h3>`,16),U={href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer"},L=n("h3",{id:"webpack-resolver",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack-resolver","aria-hidden":"true"},"#"),s(" webpack resolver")],-1),$={href:"https://webpack.js.org/configuration/resolve/",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"stylus-loader",-1),V=n("code",null,"node_modules",-1),J=t(`<div class="language-stylus line-numbers-mode" data-ext="styl"><pre class="language-stylus"><code><span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&#39;bootstrap-styl/bootstrap/index.styl&#39;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),B=n("code",null,"~",-1),F=n("strong",null,"we recommend it",-1),W=n("code",null,"@import",-1),G=n("code",null,"@require",-1),z=n("code",null,"@import",-1),Y=n("code",null,"@require",-1),H={href:"https://webpack.js.org/configuration/resolve/#resolve-modules",target:"_blank",rel:"noopener noreferrer"},K=n("code",null,"node_modules",-1),Q=n("code",null,"~",-1),X={href:"https://webpack.js.org/configuration/resolve/#resolve-modules",target:"_blank",rel:"noopener noreferrer"},Z=n("code",null,"modules",-1),nn=t(`<div class="language-stylus line-numbers-mode" data-ext="styl"><pre class="language-stylus"><code><span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;~bootstrap-styl/bootstrap/index.styl&quot;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It&#39;s important to only prepend it with <code>~</code>, because <code>~/</code> resolves to the home-directory. Webpack needs to distinguish between <code>bootstrap</code> and <code>~bootstrap</code>, because CSS and Styl files have no special syntax for importing relative files. Writing <code>@import &quot;file&quot;</code> is the same as <code>@import &quot;./file&quot;;</code></p><h3 id="stylus-resolver" tabindex="-1"><a class="header-anchor" href="#stylus-resolver" aria-hidden="true">#</a> Stylus resolver</h3><p>If you specify the <code>paths</code> option, modules will be searched in the given <code>paths</code>. This is Stylus default behavior.</p><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">stylusOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extracting-style-sheets" tabindex="-1"><a class="header-anchor" href="#extracting-style-sheets" aria-hidden="true">#</a> Extracting style sheets</h3>`,7),sn={href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer"},an={href:"https://en.wikipedia.org/wiki/Flash_of_unstyled_content",target:"_blank",rel:"noopener noreferrer"},en=n("p",null,"There are two possibilities to extract a style sheet from the bundle:",-1),tn={href:"https://github.com/peerigon/extract-loader",target:"_blank",rel:"noopener noreferrer"},pn=n("code",null,"extract-loader",-1),on={href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer"},ln=n("h2",{id:"contributing",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),s(" Contributing")],-1),cn=n("p",null,"Please take a moment to read our contributing guidelines if you haven't yet done so.",-1),rn=n("h2",{id:"license",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#license","aria-hidden":"true"},"#"),s(" License")],-1),un=n("p",null,[n("a",{href:"./LICENSE"},"MIT")],-1);function dn(kn,vn){const e=p("ExternalLinkIcon"),o=p("RouterLink");return i(),c("div",null,[d,n("p",null,[n("a",k,[v,a(e)]),n("a",m,[b,a(e)]),n("a",y,[g,a(e)]),n("a",h,[f,a(e)]),n("a",x,[_,a(e)]),n("a",q,[w,a(e)])]),j,n("p",null,[s("You can pass any Stylus specific options to the "),S,s(" through the "),C,s(" property in the "),n("a",O,[s("loader options"),a(e)]),s(". See the "),n("a",T,[s("Stylus documentation"),a(e)]),s(". Options in dash-case should use camelCase.")]),I,n("p",null,[s("Chain the "),N,s(" with the "),n("a",D,[E,a(e)]),s(" and the "),n("a",P,[M,a(e)]),s(" to immediately apply all styles to the DOM.")]),A,n("p",null,[s("Usually, it's recommended to extract the style sheets into a dedicated file in production using the "),n("a",U,[s("MiniCssExtractPlugin"),a(e)]),s(". This way your styles are not dependent on JavaScript.")]),L,n("p",null,[s("Webpack provides an "),n("a",$,[s("advanced mechanism to resolve files"),a(e)]),s(". The "),R,s(" applies the webpack resolver when processing queries. Thus you can import your Stylus modules from "),V,s(".")]),J,n("p",null,[s("Using "),B,s(" is deprecated and can be removed from your code ("),F,s("), but we still support it for historical reasons. Why you can removed it? The loader will first try to resolve "),W,s("/"),G,s(" as relative, if it cannot be resolved, the loader will try to resolve "),z,s("/"),Y,s(" inside "),n("a",H,[K,a(e)]),s(". Just prepend them with a "),Q,s(" which tells webpack to look up the "),n("a",X,[Z,a(e)]),s(".")]),nn,n("p",null,[s("Bundling CSS with webpack has some nice advantages like referencing images and fonts with hashed urls or "),n("a",sn,[s("hot module replacement"),a(e)]),s(" in development. In production, on the other hand, it's not a good idea to apply your style sheets depending on JS execution. Rendering may be delayed or even a "),n("a",an,[s("FOUC"),a(e)]),s(" might be visible. Thus it's often still better to have them as separate files in your final production build.")]),en,n("ul",null,[n("li",null,[n("a",tn,[pn,a(e)]),s(" (simpler, but specialized on the css-loader's output)")]),n("li",null,[n("a",on,[s("MiniCssExtractPlugin"),a(e)]),s(" (more complex, but works in all use-cases)")])]),ln,cn,n("p",null,[a(o,{to:"/app/webpack/webpack_code/node_modules/stylus-loader/.github/CONTRIBUTING.html"},{default:r(()=>[s("CONTRIBUTING")]),_:1})]),rn,un])}const bn=l(u,[["render",dn],["__file","index.html.vue"]]);export{bn as default};
