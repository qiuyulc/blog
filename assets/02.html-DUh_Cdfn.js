import{_ as s,c as a,a as p,o as t}from"./app-Drra5e4z.js";const e="/blog/assets/Graphics-BZoV-TAD.png",c={};function l(o,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="graphics的具体使用" tabindex="-1"><a class="header-anchor" href="#graphics的具体使用"><span>Graphics的具体使用</span></a></h1><p>通过 Graphics 来创建元素</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 导入pixi</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Application<span class="token punctuation">,</span>Graphics<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pixi.js&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//创建应用</span></span>
<span class="line">  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span>window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">background</span><span class="token operator">:</span><span class="token string">&#39;#1099bb&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">resolution</span><span class="token operator">:</span>window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">antialias</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//抗锯齿</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">//追加元素</span></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>view<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> rectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 边框的样式</span></span>
<span class="line">  rectangle<span class="token punctuation">.</span><span class="token function">lineStyle</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">0xff000</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 线宽 颜色 透明度</span></span>
<span class="line">  rectangle<span class="token punctuation">.</span><span class="token function">beginFill</span><span class="token punctuation">(</span><span class="token number">0x66ccff</span><span class="token punctuation">,</span><span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//填充颜色,透明度从0-1</span></span>
<span class="line">  rectangle<span class="token punctuation">.</span><span class="token function">drawRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">164</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//绘制矩形</span></span>
<span class="line">  rectangle<span class="token punctuation">.</span><span class="token function">endFill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//结束绘制</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 图形的缩放</span></span>
<span class="line">  <span class="token comment">// rectangle.scale.set(2,2);</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 图形的位移</span></span>
<span class="line">  <span class="token comment">// rectangle.position.set(100,100)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 图形的旋转</span></span>
<span class="line">  <span class="token comment">// rectangle.rotation = 0.5;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 图形的锚点</span></span>
<span class="line">  <span class="token comment">// rectangle.pivot.set(82,32);</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 将矩形添加到舞台</span></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 创建一个圆形</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  circle<span class="token punctuation">.</span><span class="token function">beginFill</span><span class="token punctuation">(</span><span class="token number">0x66ccff</span><span class="token punctuation">,</span><span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  circle<span class="token punctuation">.</span><span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  circle<span class="token punctuation">.</span><span class="token function">endFill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  circle<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 绘制圆角矩形</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> roundeRectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  roundeRectangle<span class="token punctuation">.</span><span class="token function">beginFill</span><span class="token punctuation">(</span><span class="token number">0x66ccff</span><span class="token punctuation">,</span><span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  roundeRectangle<span class="token punctuation">.</span><span class="token function">drawRoundedRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">164</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//x,y,w,h,radius</span></span>
<span class="line">  roundeRectangle<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line">  roundeRectangle<span class="token punctuation">.</span><span class="token function">endFill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>roundeRectangle<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 绘制椭圆</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> ellipse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  ellipse<span class="token punctuation">.</span><span class="token function">beginFill</span><span class="token punctuation">(</span><span class="token number">0x66ccff</span><span class="token punctuation">,</span><span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  ellipse<span class="token punctuation">.</span><span class="token function">drawEllipse</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">164</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//x,y,w,h</span></span>
<span class="line">  ellipse<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span></span>
<span class="line">  ellipse<span class="token punctuation">.</span><span class="token function">endFill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>ellipse<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 绘制多边形</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> polygon <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Graphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  polygon<span class="token punctuation">.</span><span class="token function">beginFill</span><span class="token punctuation">(</span><span class="token number">0x66ccff</span><span class="token punctuation">,</span><span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  polygon<span class="token punctuation">.</span><span class="token function">drawPolygon</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 绘制多边形，参数是一个数组，每个元素是一个点的坐标</span></span>
<span class="line">  polygon<span class="token punctuation">.</span><span class="token function">endFill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  polygon<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">600</span><span class="token punctuation">)</span></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>polygon<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">//绘制圆弧</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> arc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  arc<span class="token punctuation">.</span><span class="token function">beginFill</span><span class="token punctuation">(</span><span class="token number">0x66ccff</span><span class="token punctuation">,</span><span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  arc<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  arc<span class="token punctuation">.</span><span class="token function">endFill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  arc<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>arc<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">//绘制线段</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  line<span class="token punctuation">.</span><span class="token function">lineStyle</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0x66ccff</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  line<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  line<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  line<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  line<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">*</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">canvas</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span>100vw<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span>100vh<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图</p><p><img src="`+e+'" alt="效果图"></p>',5)]))}const u=s(c,[["render",l],["__file","02.html.vue"]]),k=JSON.parse('{"path":"/other/pixi/02.html","title":"Graphics的具体使用","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1713107552000,"contributors":[{"name":"qiuyulc","username":"qiuyulc","email":"qiuyulc@gmail.com","commits":1,"url":"https://github.com/qiuyulc"}]},"filePathRelative":"other/pixi/02.md"}');export{u as comp,k as data};
