import{_ as p,r as t,o as e,c,d as n,e as s,f as o,b as i}from"./app-IioCQd_M.js";const l="/blog/assets/xg-Ygccgz2i.png",u={},r=n("h1",{id:"pixi初识-以及搭建环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pixi初识-以及搭建环境","aria-hidden":"true"},"#"),s(" Pixi初识 以及搭建环境")],-1),d={href:"https://www.bilibili.com/video/BV1rG4y1M7MS/?spm_id_from=333.337.search-card.all.click&vd_source=9886bf14df2da5540ce6bd99b5aa71b0",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="依赖项" tabindex="-1"><a class="header-anchor" href="#依赖项" aria-hidden="true">#</a> 依赖项</h2><ul><li>node</li><li>pnpm</li><li>vue 3.4.21</li><li>vite 5.2.0</li></ul><h3 id="mac环境" tabindex="-1"><a class="header-anchor" href="#mac环境" aria-hidden="true">#</a> mac环境</h3><p>建议安装nvm,通过nvm安装node</p><p>pnpm 使用 <code>brew install pnpm</code></p><p>具体的安装步骤 直接百度，这里不做赘述</p><h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2><ul><li><code>pnpm create vite</code> 创建项目</li><li><code>pnpm install pixi.js@^7.1.1</code> 安装pixi</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 导入pixi</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Application<span class="token punctuation">,</span>Graphics<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pixi.js&#39;</span><span class="token punctuation">;</span>



 <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//创建应用</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span>window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span><span class="token string">&#39;#1099bb&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolution</span><span class="token operator">:</span>window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">antialias</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//抗锯齿</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//追加元素</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>view<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> rectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  rectangle<span class="token punctuation">.</span><span class="token function">beginFill</span><span class="token punctuation">(</span><span class="token number">0x66ccff</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//填充颜色</span>
  rectangle<span class="token punctuation">.</span><span class="token function">drawRect</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">164</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//绘制矩形</span>
  rectangle<span class="token punctuation">.</span><span class="token function">endFill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//结束绘制</span>

  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">*</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">canvas</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100vh<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图</p><p><img src="`+l+'" alt="效果图"></p>',11);function v(m,b){const a=t("ExternalLinkIcon");return e(),c("div",null,[r,n("p",null,[s("课程视频 "),n("a",d,[s("Pixi.js全新视频"),o(a)])]),k])}const h=p(u,[["render",v],["__file","01.html.vue"]]);export{h as default};
