---
title: vue面试题
description: vue面试题
---

## 对MVVM的理解

- MVVM是Model-View-ViewModel的缩写，是一种设计思想。
    - Model：数据模型，在Model中定义数据修改和操作的业务逻辑
    - View 代表UI组件，它负责激昂数据模型转换成UI展现出来，ViewModel是一个同步View 和 Model的对象
- 在MVVM架构下，View和Model之间没有直接的联系，通过ViewModel进行交互，Model和ViewModel之间的交互是双向的，因此VIew数据的变化会同步到Model中，而Model数据的变化也会立即反应到View中。
- 通过ViewModel把VIew和Model层连接起来，不需要手动操作DOM，只需要关注数据。

## Vue的优点
- 响应式编程
- 组件化开发
- 虚拟DOM

## Vue生命周期
- 什么是生命周期
- vue生命周期的作用是什么
- vue生命周期有哪些阶段
- 第一次页面加载会触发那几个钩子
- DOM渲染在那个周期完成
- 多组件（父子组件）中生命周期的调用顺序

### 什么是生命周期

对于Vue来说，生命周期就是一个Vue实例从创建到销毁的过程。

### vue生命周期的作用
生命周期其实就是回调函数，对于vue实例来说，在运行的不同阶段插入不同的回调函数，为使用者提供不同的调用时机。

### vue生命周期有哪几个阶段

共分为8个阶段：创建前/后，载入前/后，更新前/后，销毁前/后。

- beforeCreate：是new Vue之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能访问。
- created：实例创建完成后发生，当前阶段已经完成了数据观测，也可以使用手数据、更改数据、在这里更改数据不回触发updated函数，可以做一些初始化数据的获取，在当前阶段无法于DOM进行交互，如果非要想，可以通过vm.$nextTick来访问DOM。
- beforMount：发生在挂载之前，在这之前template模版已导入渲染函数编译。而当前阶段虚拟DOM已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。
- mounted：在挂载完成后繁盛，当前阶段，Vue实例已经初始化完成，虚拟DOM已经渲染成真实DOM，在这一步可以访问到DOM节点，进行DOM操作。
- beforeUpdate：发生在更新之前，也就是响应式数据发生更新，虚拟DOM重新渲染之前被触发，你可以在这一步中进一步更改状态，不会造成重渲染。
- updated：发生在更新完成之后，当前阶段组件DOM已经更新，可以执行依赖于DOM的操作。注意：不要在此函数中更改数据，可能会导致无限循环更新。
- beforeDestroy：发生在实例销毁之前，在这一步实例仍然完全可用。
- destroyed：发生在实例销毁之后，所有的事件监听器会被移除，所有的子实例也会被销毁。

### 第一次页面加载会触发那几个钩子

beforeCreate、created、beforeMount、mounted。

### DOM渲染在那个周期就完成

DOM渲染在mounted阶段完成，此阶段真实的DOM挂载完成，数据完成双响绑定，可以访问到DOM节点。

### 多组件（父子组件）中生命周期的调用顺序

组件的调用顺序都是先父后子，渲染完成的顺序是先子后父。组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

- 加载渲染过程：
父beforeCreate -> 父created -> 父beforeMount->子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted

- 子组件更新过程：
父beforeUpdat -> 子brforeUpdate -> 子updated -> 父updated
- 父组件更新过程：
父beforeUpdate -> 父updated

- 销毁过程：
父beforeDestroy -> 子beforDestroy -> 子destroyed -> 父destroyed

