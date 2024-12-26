import{_ as l,c as i,a as s,b as n,d as e,e as o,f as p,r as u,o as d}from"./app-Bj_TYjpC.js";const r={};function c(m,a){const t=u("RouteLink");return d(),i("div",null,[a[9]||(a[9]=s('<h1 id="响应式设计" tabindex="-1"><a class="header-anchor" href="#响应式设计"><span>响应式设计</span></a></h1><h4 id="响应式设计-1" tabindex="-1"><a class="header-anchor" href="#响应式设计-1"><span>响应式设计</span></a></h4><p>前言：在历史的某个时刻，设计网站时。有两个网站布局的方式。</p><ul><li>流式布局：使用百分比来定义元素的宽度，高度，外边距，内边距等。</li><li>固定布局：使用像素来定义元素的宽度，高度，外边距，内边距等。</li></ul><p>问题：流式布局在页面宽度小于元素宽度时，元素会溢出。固定布局在页面宽度大于元素宽度时，元素会留白。面对不同宽度的屏幕，上面的两种方式都不能很好的解决。</p><p>响应式设计（responsive web design，RWD）：根据不同的设备宽度，展示不同的页面布局。</p><p>响应式设计不是一个独立的技术，它是结合了流式布局、自适应图像、媒体查询等一系列技术的组合。</p><h4 id="响应式设计的实现方式" tabindex="-1"><a class="header-anchor" href="#响应式设计的实现方式"><span>响应式设计的实现方式</span></a></h4>',8)),n("ol",null,[a[3]||(a[3]=n("li",null,"媒体查询",-1)),a[4]||(a[4]=n("li",null,"流式布局（百分比布局）",-1)),a[5]||(a[5]=n("li",null,"多列布局（column-count）",-1)),a[6]||(a[6]=n("li",null,"flex布局",-1)),a[7]||(a[7]=n("li",null,"grid布局",-1)),n("li",null,[a[1]||(a[1]=e("自适应图像（max-width:100%或者使用")),o(t,{to:"/web/html/03.html#picture"},{default:p(()=>a[0]||(a[0]=[n("code",null,"<spicture>",-1)])),_:1}),a[2]||(a[2]=e("）"))]),a[8]||(a[8]=n("li",null,"视口单位（vw/vh）",-1))]),a[10]||(a[10]=s(`<h4 id="视口元标签" tabindex="-1"><a class="header-anchor" href="#视口元标签"><span>视口元标签</span></a></h4><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个元标签时告诉移动端浏览器，它们应该将视口宽度设定为设备宽度，将文档放大到其预期大小的100%。</p><p>为什么需要这个标签：</p><p>因为在iPhone发布后，移动端浏览器默认会将视口宽度设置为980px，这样在移动端浏览器中，页面会显得非常小。虽然可以放大但是这样在体验感非常差。而且还有个问题就是如果你有个窄屏布局，在480像素及以下的视口宽度生效，但是视口是按960像素设定的。那么在移动端你永远看不到你的窄屏布局。通过设定<code>width=device-width</code>，浏览器会根据设备的宽度来设定视口宽度，这样就可以看到窄屏布局了。</p><p>属性：</p><ul><li>initial-scale：设置页面的初始缩放，默认值为1</li><li>height：特别为视口设置一个高度</li><li>minimum-scale：设定最小缩放级别</li><li>maximum-scale：设定最大缩放级别</li><li>user-scalable：如果设为<code>no</code>的话组织缩放</li></ul><p>不过应该避免使用<code>minimum-scale</code>、<code>maximum-scale</code>，尤其是将<code>user-scalabel</code>设为<code>no</code>。</p><p>总结： 响应式设计是指一个响应浏览环境的网页或网页设计。是由多种技术组合而成的。</p>`,9))])}const k=l(r,[["render",c],["__file","04.html.vue"]]),v=JSON.parse('{"path":"/web/css/04.html","title":"响应式设计","lang":"zh-CN","frontmatter":{"title":"响应式设计","description":"响应式设计"},"headers":[],"git":{"updatedTime":1732785657000,"contributors":[{"name":"qiuyulc","username":"qiuyulc","email":"qiuyulc@gmail.com","commits":1,"url":"https://github.com/qiuyulc"}]},"filePathRelative":"web/css/04.md"}');export{k as comp,v as data};