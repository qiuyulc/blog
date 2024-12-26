import{_ as e,c as s,a as n,o as t}from"./app-Bj_TYjpC.js";const i={};function l(p,a){return t(),s("div",null,a[0]||(a[0]=[n(`<h1 id="viewport-meta-标记" tabindex="-1"><a class="header-anchor" href="#viewport-meta-标记"><span>viewport meta 标记</span></a></h1><h2 id="视口" tabindex="-1"><a class="header-anchor" href="#视口"><span>视口</span></a></h2><p>视口：指用户在浏览器中看到页面内容的区域。视口的大小取决于设备的屏幕大小和分辨率，以及用户是否使用了缩放功能。</p><p>分为三个：</p><ul><li>布局视口：是浏览器中用来渲染页面的区域大小，通常比屏幕宽度要大，以适应页面的内容。</li><li>视觉视口：是用户在浏览器中看到的页面内容区域，可以通过缩放来改变大小。</li><li>理想视口：设备的物理分辨率下的视口大小，通常等于设备的屏幕宽度。在移动端开发中，通常会通过设置<code>&lt;meta&gt;</code>标签来控制理想视口的大小。</li></ul><h2 id="视口基础知识" tabindex="-1"><a class="header-anchor" href="#视口基础知识"><span>视口基础知识</span></a></h2><p>针对移动页面一般都有下面这行代码</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>viewport<span class="token punctuation">&#39;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>width=device-width,initial-scale=1<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>viewport是meta标签的一个属性，它有六个属性</p><ul><li>width:设置视口的宽度，可以是固定的像素值，如（width=600），也可以设置特殊值<code>device-width</code>，即100vw，100%的视口宽度。最小值为1.最大值为10000，负值会被忽略。</li><li>height:设置视口的高度，一般不设置，因为视口会自动调节高度，也可以使用<code>device-height</code>，即100vh，100%的视口高度。最小值最大值同上。</li><li><code>initial-scale</code>:控制页面首次加载时显示的缩放倍数。最小值为0.1，最大值为10.默认值为1.负值会被忽略。</li><li><code>minimum-scale</code>:控制页面允许缩小的倍数。最小为0.1，最大为10。默认为1，负值会被忽略。</li><li><code>maximum-scale</code>:控制页面允许的放大的倍数。设置一个低于3的值将不具备无障碍访问性。最小值为0.1，最大值为10。默认为1，负值会被忽略。</li><li><code>user-scalable</code>:控制是否允许页面上的放大和缩小操作。有效值为0、1、yes、no。默认值为1，与yes相同。将值设置为0将潍坊Web内容无障碍指南</li><li><code>interactive-widget</code>:指定交互式UI组件（如虚拟键盘）对页面视口的影响。有效值：<code>resizes-visual</code>、<code>resizes-content</code>或<code>overlays-content</code>。默认值：<code>resizes-visual</code>。</li></ul><h2 id="屏幕密度" tabindex="-1"><a class="header-anchor" href="#屏幕密度"><span>屏幕密度</span></a></h2><p>移动端和pc端不同，屏幕小但是分辨率却高达1920-1080像素（约等于400dpi（每英寸面积内的像素点数））。所以，在移动端，1px并不等于1个物理像素，而是等于0.25个物理像素。</p><h2 id="视口宽度和屏幕宽度" tabindex="-1"><a class="header-anchor" href="#视口宽度和屏幕宽度"><span>视口宽度和屏幕宽度</span></a></h2><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>viewport<span class="token punctuation">&#39;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>width=500,initial-scale=1<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>页面可以将其视口设置为特定尺寸，例如<code>&quot;width=320,initial-scale=1&quot;</code>的定义可以用来精确地适应纵向模式下的小型手机显示屏。当浏览器以较大的尺寸渲染页面时，这可能导致问题。为了解决这个问题，如果有必要，浏览器会扩大视口宽度，以便按要求的比例填充屏幕。 上面的代码，视口宽度为500px，但是屏幕宽度为320px，浏览器会扩大视口宽度，以便适应屏幕。</p><h2 id="交互式ui组件效果" tabindex="-1"><a class="header-anchor" href="#交互式ui组件效果"><span>交互式UI组件效果</span></a></h2><p>浏览器的交互式UI组件可以影响页面视口的大小。最常见的这种UI组件式虚拟键盘。要控制浏览器应该使用那种调整大小的行为，可以设置<code>interactive-widget</code>属性</p><ul><li>resizes-visual：当交互式UI组件出现时，视口会调整大小以适应屏幕，但不会影响页面内容的大小。</li><li>resizes-content：当交互式UI组件出现时，视口会调整大小以适应屏幕，同时页面内容也会调整大小以适应新的视口大小。</li><li>overlays-content：当交互式UI组件出现时，视口不会调整大小，但页面内容会调整大小以适应新的视口大小。</li></ul><h2 id="分辨率" tabindex="-1"><a class="header-anchor" href="#分辨率"><span>分辨率</span></a></h2><p>分辨率指显示器所能显示的像素是多少，显示器可显示的像素越多，画面就越精细。</p><p>物理像素：</p><p>物理像素也称设备像素是屏幕的最小物理单位。是一个由红蓝绿三原色组成的一个点。</p><p>比如<code>2532 * 1170</code>分辨率指的就是物理像素，表示屏幕水平由1170个物理像素点，垂直有2532个物理像素点。</p><h2 id="css像素" tabindex="-1"><a class="header-anchor" href="#css像素"><span>css像素</span></a></h2><p>css像素又称为虚拟像素、设备独立像素或逻辑像素也就是web开发中使用的像素（px）。</p><p>物理像素和css像素的关系</p><p>物理像素是屏幕显示页面效果的最小单位，css像素是web开发中使用的像素。在不同分辨率的屏幕下，有多个物理像素对应一个css像素，是现在不同分辨率的屏幕下显示相同的页面效果。</p><h2 id="设备像素比-dpr" tabindex="-1"><a class="header-anchor" href="#设备像素比-dpr"><span>设备像素比（dpr）</span></a></h2><p>设备像素比 = 物理像素 / CSS像素</p><p>dpr = 2 意味着一个CSS像素需要2 * 2个物理像素来描绘。</p><p>获取dpr：window.devicePixelRatio;</p><h2 id="ppi-dpi" tabindex="-1"><a class="header-anchor" href="#ppi-dpi"><span>PPI DPI</span></a></h2><p>PPI：图像的采样率（在图像中，每英寸所包含的像素数目） DPI：每英寸点数，即每英寸的像素点数，是衡量打印机打印精度的重要指标。</p>`,33)]))}const o=e(i,[["render",l],["__file","06.html.vue"]]),d=JSON.parse('{"path":"/web/html/06.html","title":"viewport meta 标记","lang":"zh-CN","frontmatter":{"title":"viewport meta 标记","description":"viewport meta 标记"},"headers":[{"level":2,"title":"视口","slug":"视口","link":"#视口","children":[]},{"level":2,"title":"视口基础知识","slug":"视口基础知识","link":"#视口基础知识","children":[]},{"level":2,"title":"屏幕密度","slug":"屏幕密度","link":"#屏幕密度","children":[]},{"level":2,"title":"视口宽度和屏幕宽度","slug":"视口宽度和屏幕宽度","link":"#视口宽度和屏幕宽度","children":[]},{"level":2,"title":"交互式UI组件效果","slug":"交互式ui组件效果","link":"#交互式ui组件效果","children":[]},{"level":2,"title":"分辨率","slug":"分辨率","link":"#分辨率","children":[]},{"level":2,"title":"css像素","slug":"css像素","link":"#css像素","children":[]},{"level":2,"title":"设备像素比（dpr）","slug":"设备像素比-dpr","link":"#设备像素比-dpr","children":[]},{"level":2,"title":"PPI DPI","slug":"ppi-dpi","link":"#ppi-dpi","children":[]}],"git":{"updatedTime":1732005574000,"contributors":[{"name":"qiuyulc","username":"qiuyulc","email":"qiuyulc@gmail.com","commits":1,"url":"https://github.com/qiuyulc"}]},"filePathRelative":"web/html/06.md"}');export{o as comp,d as data};