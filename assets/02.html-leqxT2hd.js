import{_ as a,r as i,o as l,c as r,d as n,e,f as t,b as o}from"./app-DYbZ968d.js";const d={},c=o(`<h1 id="react-native环境配置" tabindex="-1"><a class="header-anchor" href="#react-native环境配置" aria-hidden="true">#</a> React-Native环境配置</h1><p>其实正常按照官方的文档来配置基本不会有什么问题。国内更多的是网络问题，解决一下就好了。这里只记录下我遇到的问题。</p><h4 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>✖ Installing Ruby Gems
error Fetching gem metadata from https://rubygems.org/<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
Resolving dependencies<span class="token punctuation">..</span>.
Fetching base64 <span class="token number">0.2</span>.0
Installing base64 <span class="token number">0.2</span>.0
Fetching nkf <span class="token number">0.2</span>.0
Installing nkf <span class="token number">0.2</span>.0 with native extensions
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

current directory:
/Users/lsz/helloReactNative/vendor/bundle/ruby/2.6.0/gems/nkf-0.2.0/ext/nkf
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby <span class="token parameter variable">-I</span>
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0 <span class="token parameter variable">-r</span>
./siteconf20241203-50275-k9lxff.rb extconf.rb
creating Makefile

current directory:
/Users/lsz/helloReactNative/vendor/bundle/ruby/2.6.0/gems/nkf-0.2.0/ext/nkf
<span class="token function">make</span> <span class="token string">&quot;DESTDIR=&quot;</span> clean

current directory:
/Users/lsz/helloReactNative/vendor/bundle/ruby/2.6.0/gems/nkf-0.2.0/ext/nkf
<span class="token function">make</span> <span class="token string">&quot;DESTDIR=&quot;</span>
make: *** No rule to <span class="token function">make</span> target
<span class="token variable"><span class="token variable">\`</span>/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX15.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/universal-darwin23/ruby/config.h&#39;,
needed by <span class="token variable">\`</span></span>nkf.o<span class="token string">&#39;.  Stop.

make failed, exit code 2

Gem files will remain installed in
/Users/lsz/helloReactNative/vendor/bundle/ruby/2.6.0/gems/nkf-0.2.0 for
inspection.
Results logged to
/Users/lsz/helloReactNative/vendor/bundle/ruby/2.6.0/extensions/universal-darwin-23/2.6.0/nkf-0.2.0/gem_make.out

An error occurred while installing nkf (0.2.0), and Bundler cannot continue.
Make sure that \`gem install nkf -v &#39;</span><span class="token number">0.2</span>.0<span class="token string">&#39; --source &#39;</span>https://rubygems.org/<span class="token string">&#39;\`
succeeds before bundling.

In Gemfile:
  cocoapods was resolved to 1.15.2, which depends on
    xcodeproj was resolved to 1.25.1, which depends on
      CFPropertyList was resolved to 3.0.7, which depends on
        nkf
error Installing Cocoapods failed. This doesn&#39;</span>t affect project initialization and you can safely proceed. However, you will need to <span class="token function">install</span> Cocoapods manually when running iOS, follow additional steps <span class="token keyword">in</span> <span class="token string">&quot;Run instructions for iOS&quot;</span> section.

Error: Looks like your iOS environment is not properly set. Please go to https://reactnative.dev/docs/environment-setup?os<span class="token operator">=</span>macos<span class="token operator">&amp;</span><span class="token assign-left variable">platform</span><span class="token operator">=</span>ios<span class="token operator">&amp;</span><span class="token assign-left variable">guide</span><span class="token operator">=</span>native and follow the React Native CLI QuickStart guide <span class="token keyword">for</span> macOS and iOS.

info 💡 To <span class="token builtin class-name">enable</span> automatic CocoaPods installation when building <span class="token keyword">for</span> iOS you can create react-native.config.js with automaticPodsInstallation field.
For <span class="token function">more</span> details, see https://github.com/react-native-community/cli/blob/main/docs/projects.md<span class="token comment">#projectiosautomaticpodsinstallation</span>
<span class="token comment"># If you come from bash you might have to change your $PATH.</span>

✔ Initializing Git repository


  Run instructions <span class="token keyword">for</span> Android:
    • Have an Android emulator running <span class="token punctuation">(</span>quickest way to get started<span class="token punctuation">)</span>, or a device connected.
    • <span class="token builtin class-name">cd</span> <span class="token string">&quot;/Users/lsz/helloReactNative&quot;</span> <span class="token operator">&amp;&amp;</span> npx react-native run-android

  Run instructions <span class="token keyword">for</span> iOS:
    • <span class="token builtin class-name">cd</span> <span class="token string">&quot;/Users/lsz/helloReactNative&quot;</span>

    • npx react-native run-ios
    - or -
    • Open helloReactNative/ios/helloReactNative.xcodeproj <span class="token keyword">in</span> Xcode or run <span class="token string">&quot;xed -b ios&quot;</span>
    • Hit the Run button

  Run instructions <span class="token keyword">for</span> macOS:
    • See https://aka.ms/ReactNativeGuideMacOS <span class="token keyword">for</span> the latest up-to-date instructions.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h4><p>因为在mac电脑中内置了ruby，但是它的版本太低了,下面是我的电脑里面的版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ruby <span class="token parameter variable">-v</span>

ruby <span class="token number">2.6</span>.10p210 <span class="token punctuation">(</span><span class="token number">2022</span>-04-12 revision <span class="token number">67958</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>universal.arm64e-darwin23<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> rbenv ruby-build

rbenv <span class="token function">install</span> <span class="token parameter variable">--list</span> //查看所有可用版本

rbenv <span class="token function">install</span> <span class="token number">3.3</span>.6

rbenv rehash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后会出现<code>rbenv version</code>和<code>ruby -v</code>版本不一致。</p><p>通过 <code>vim ~/.zshrc</code> 添加 <code>export PATH=&quot;$HOME/.rbenv/bin:$PATH&quot; eval &quot;$(rbenv init -)&quot;</code></p><p>然后执行 <code>source ~/.zshrc</code></p><h4 id="最后一个问题" tabindex="-1"><a class="header-anchor" href="#最后一个问题" aria-hidden="true">#</a> 最后一个问题</h4>`,13),u={href:"https://reactnative.dev/docs/getting-started-without-a-framework",target:"_blank",rel:"noopener noreferrer"};function v(p,m){const s=i("ExternalLinkIcon");return l(),r("div",null,[c,n("p",null,[e("react-native官网上推荐 expo 来创建项目。这个看个人喜好和具体应用场景。 想自己一步步来的建议看这个"),n("a",u,[e("文章"),t(s)])])])}const k=a(d,[["render",v],["__file","02.html.vue"]]);export{k as default};
