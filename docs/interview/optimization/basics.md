---
title: Vue项目性能优化
description: Vue项目性能优化
---

## 开发Vue项目时，做了那些性能上的优化

1. 代码层面优化
2. 场景优化
3. 静态资源优化
4. 打包优化
5. 用户体验优化

### 代码层面优化
1. 组件拆分
2. 减少不必要的响应式数据
3. 正确使用 v-if 和 v-show
4. 根据场景可以选择使用 v-once
5. 使用key 优化列表渲染
6. 事件防抖和节流
7. 使用KeepAlive 缓存组件
8. 合理使用生命周期钩子方法
9. 使用异步组件
10. 路由懒加载

### 场景优化
1. 懒加载
2. 虚拟滚动
...

### 静态资源优化

1. 图片优化
    - 压缩图片
    - 使用现代图片格式：WebP、AVIF
2. 使用SVG图标
    - 精灵图
    - 字体图标
    - SVG图标
3. 压缩CSS和JS文件

4. 合并文件
5. 使用CDN加速

### 打包优化
1. tree sharking
2. 多线程打包
    - webpack插件 thread-loader
3. 代码分块，实现按需加载
4. 生成sourcemap文件
5. 优化第三方库的打包：按需打包
6. 使用现代化构建工具

### 用户体验优化
1. 加载动画
2. 骨架屏
3. 过渡动画
4. 服务端渲染

## 在优化前端性能方面，通常会采取哪些措施

1. 发现问题：需要具体的数据来做支撑，确定问题确实存在
2. 确定问题：确定问题时那一个方面的问题？前端？网络？服务端问题？数据库？
3. 解决问题：确定了问题所在，在给出具体的解决方案

## 在优化前端性能方面，你通常会采用哪些措施？

1. 在不确定的情况下，使用浏览器的性能监控工具或通过数据埋点的情况对用户体验进行监控，找出性能瓶颈。
2. 确定确实存在性能问题的时候，接下来确定问题来源，前端性能问题可能是由于以下几个方面造成的
    - 前端问题：大文件夹杂、DOM操作频繁、动画性能差等原因
    - 网络问题：网络延迟、带宽不足、DNS查询耗时等
    - 服务器端问题：服务器性能瓶颈、数据库查询缓慢、缓存实效等问题
    - 数据库问题：数据库索引不当、查询性能差、数据传输量大等
前端问题可以使用 浏览器的 Performance 面板、网络亲故分析工具，以及服务器端的日志和监控工具，找出性能瓶颈的具体位置。之后确定前端存在的性能问题后，再进行针对性的优化。这一步应该根据具体的瓶颈采取不同的优化策略

- 网络请求过多：减少HTTP请求，合并CSS和JS文件，使用CSS精灵图或SVG图表，或者使用HTTP/2多路复用技术
- 静态资源太大：做资源压缩和优化，压缩js、css、图片等资源，使用WebP等高校图片格式
- 出事加载资源过多：按需加载JS和CSS，使用动态import分割代码，使用异步组件以及路由懒加载。
- 出事加载资源过多：按需加载JS和CSS，使用动态import分割代码，使用异步组件以及路由懒加载。
- 渲染性能瓶颈：减少重排重绘次数。
...