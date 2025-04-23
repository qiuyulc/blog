# react

## 项目初始化

- vite
- create-react-app

## jsx

全称 javascript and xml ，在 JavaScript 代码中编写 html 代码的一种规范
因为规范是为编译器设计的。

```jsx
const element = <h1>Hello,world!</h1>;
```

jsx 通过编译器进行转换，babel(@babel/preset-react、@babel/plugin-transform-react-jsx)
通过 jsx 转换后，代码就会变成 js 引擎可以执行的代码

```js
var _reactJsxRuntime = require("react/jsx-runtime");
var element = /*#__PURE__*/ _reactJsxRuntime.jsx("h1", {
  children: "Hello,world!",
});
```

再在 react 运行时，通过 react 定义的 jsx 创建 ReactElement

```js
return ReactElement(
  type,
  key,
  undefined,
  undefined,
  getOwner(),
  props,
  undefined,
  undefined
);
```

## hooks

1. useState
2. useEffect
3. useContext
4. useReducer
5. useCallback
6. useMemo
7. useRef
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue

## 样式方案和状态方案

样式方案：

- 内联方案
- module css
- css in js
- tailwind css

状态方案：

- useState
- useReducer
- useContext
- useSyncExternalStore
- redux
- mobx
- zustand
- jotai
- recoil

## React 知识进阶

目标

- 初中级
  a. 掌握 React 进阶特性 ：掌握 ref、 fonwardRef、suspense、lazy 等特性
  b. 深入了解 React 18 基础：深入理解 React hooks，能根据实际业务需求封装自定义 hook
- 高级
  a. 深入理解 React 样式体系方案：深入理解样式方案，对于 module css 、css in js 样式方案有深入了解
  b. 深入掌握 React + TypeScript 开发范式：掌握基于 TypeScript 应用开发范式，熟练使用 TypeScript 约束 React 编码

1. ref
2. forwardRef
3. Suspense
4. lazy
5. memo

自定义 Hooks

样式方案

状态方案

## 进阶基础知识

1. ref
   为什么需要 ref，引用

- dom 引用
- 作为不需要引起视图更新的数据储存。

```tsx
const RefDemo = () => {
  const refs = useRef();

  useEffect(() => {}, []);

  return (
    <div>
      <h2 ref={(node) => (refs.current.c1 = node)}>1</h2>
      <h2 ref={(node) => (refs.current.c2 = node)}>2</h2>
      <h2 ref={(node) => (refs.current.c3 = node)}>3</h2>
    </div>
  );
};
```

2. forwardRef
   ref 转发

```tsx
const ForwardRefDemo = forwardRef((props, ref) => {
  return (
    <div>
      <h2 ref={ref}>forwardRef</h2>
    </div>
  );
});
```

3. Suspense
   异步组件

```tsx
import React, { Suspense } from "react";
const AsyncDemo = () => {
  const [count, setCount] = useState(0);
  const Header = React.lazy(() => import("./Header")).then(
    (module) => module.Header
  );
  const Footer = React.lazy(() => import("./Footer")).then(
    (module) => module.Footer
  );
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {count == 0 && <Header />}
        {count > 0 && <Footer />}
      </Suspense>
    </div>
  );
};
```

这种拆分后组件会被拆包，加载时动态导入

```ts
export function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
  }

  throw promise;
}
```

```tsx
import React from "react";
import { use } from "./use";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 1000);
  });
};

export const Header = () => {
  const data = use(fetchData());

  return <div>{data}</div>;
};
```

错误边界

4. memo

5. useState

useState 是 useReducer 语法糖

6. useEffect
7. useLayoutEffect
8. useId
9. useImperativeHandle
10. useTransition
11. useDeferredValue
12. useSyncExternalStore

## React 状态管理

- 初中级：
  a. 掌握 React 状态管理方案：掌握 React 状态管理的基本概念和方法，包括 useState、useReaducer、
  useContext、useSyncExternalStore 等
  b. 掌握 React 常见状态管理方案：掌握 React 常见几种状态管理库：Redex、Zustand、Jotai
  c. 了解 Redux 原理：了解单一状态树、reducer、acion、state flow，理解 Redux 单项数据
  流实现。
- 高级：
  a. 深入 React 集中状态管理方案：深入理解 React 集中状态管理方案的原理和实现，能根据实际业务选择合适方案
  b. 手写 Redux：手写简化版 Redux，从 0 实现核心功能，如 createStore、combineReducers、applyMiddleware
  c. 其他状态库原理浅析：分析其他流行的状态管理库，如 Valtio、XState、Mobx、Recoil、Zustand 等。
  了解设计理念、使用场景、优势于不足，并能在实际项目中根据需求选择合适的状态管理方案

### React 基础状态管理

- useState
- useReducer
- useContext
- useSyncExternalStore

#### useState

react 中是状态驱动视图更新，时刻需要关注状态值的变更

什么操作会使这个状态发生更改，而后状态驱动视图更新（react 内部实现）

- 点击事件（onClick）
- 副作用
- 网络请求的响应

#### useReducer

#### useContext

### 集中状态管理方案

#### redux

### Redux 实现

重点关注三个概念
强调阅读源码和理解原理之前一定要熟悉使用 api

入口：creaateStore
操作：action
reducer

```js
// reducer 是用于生成新状态的
// initialState 是初始状态
function createStore(reducer,initialState){
    //初始状态
    //所有状态都挂载到这个变量上，这也就是我们说的状态树
    let state = initialState;

    // 注册事件
    const listeners = [];


    //新状态生成一定要借助动作
    function dispatch(action){
        // 为什么说reducer是一个纯函数
        state = reducer(state,action);

        // 通知订阅者

        listeners.forEach(listener => listener());
    }

    //获取状态
    function getState(){
        return state;
    }

    function subscribe(listener){
        listeners.push(listener);
        //事件只要有订阅就一定有取消订阅

        return ()=>{
            const index = listeners.indexOf(listener);
            listeners.splice(index,1);
        }
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}

//使用
const reducer = (state,action)=>{
    switch(action.type){
        case 'UPDATE_NAME':{
            return {
                ...state,
                name:action.payload
            }
        }
        case 'UPDATE_AGE':{
            return {
                ...state,
                age:action.payload
            }
        }

        default:return state
    }
}

const store = crateStore(reducer,{name:'张三',age:18});
const unsubscribe = state.subscribe(()=>{
    console.log('dispatch-log'state.getState());
})

store.dispatch({type:'UPDATE_NAME',payload:'李四'});

const {dispatch,getState,subscribe} = store;

//结合react使用
// 
export const CustomReduxDemo = ()=>{
    const state = useSyncExternalStore(subscribe,getState,getState);
    return <div>custom redux demo{state.name} ---- {state.age}

        <button onClick={()=>dispatch({type:'UPDATE_NAME',payload:'王五'})}>update name</button>
        <button  onClick={()=>dispatch({type:'UPDATE_AGE',payload:16})}>update age</button>
    </div>
}

// const state = createStore(xxx,xxxx)
// state.dispatch({type:"xxx",payload:'xxxx'})
// state.getState()

// 解绑
// const unsubscribe = state.subscribe(()=>{
//     console.log(state.getState());
// })
```

### mantine

[源码](https://github.com/mantinedev/mantine)

### jotai

[官网](https://www.jotai.com.cn/)
### 面试题

#### 说说你对 redux 的理解

redux 时一种用于 JavaScript 应用的状态管理工具，特别适用于 react 应用。通过单一的状态树来管理整个应用的状态，
使状态管理更加可预测和易于调试。首先注意，redux 和 react 本身没有任何关系，redux 和 react 的关系完全取决于 react-redux

- 单一状态树
- 纯函数 reducer
- 动作（action）
- 中间件（middleware）
- 数据流
- 工具支持

#### 状态改变引起视图频繁更新、怎么优化？

1. 避免不必要的状态更新
2. 拆分组件
3. 使用 react context 优化
4. 优化 redux
5. 批量更新
6. 避免过深的组件嵌套
7. 使用合适的状态管理工具
8. 细颗粒度更新


## react路由使用与原理详情

- 初中级
  a. 掌握React-Router 路由方案：掌握React-Router 基础使用
  b. 了解路由库实现原理

- 高级
  a. 深入理解路由体系：深入理解路由体系，包含声明式、配置式、约定时
  b. 掌握React-Router常用api：掌握常用API、包括常用租金啊、常用方案、常用hook
  c. 手写React-Router：实现最核心的React-Router代码，包括路由处理、历史记录、记录变更监听和Hooks封装等
  d. 了解其他路由方案：了解除了React-Router的其他路由方案，包括：@tastack/router、wouter

### React-Router基础使用

前端需要实现一套路由的实现

路由做了什么工作？当路径发生改变时，映射对应视图进行渲染

#### 多类型记录

- const browserRouter = createBrowserRouter()
- const hashRouter = createHashRouter()
- const memoryRouter = createMemoryRouter()

### React-Router 源码解析

从两个api入手

- createBrowserRouter
- RouterProvider

1. 关注 createBrowserRouter 的函数定义

https://github.com/remix-run/react-router/blob/v6/packages/react-router-dom/index.tsx#L268

2. 调用 createRouter

https://github.com/remix-run/react-router/blob/main/packages/react-router/lib/router/router.ts#L807

3. 根据不同方法，调用create历史的方法，browserHistory和hashHistory因为区别仅存在于history

4. 区分history还是hash时调用

https://github.com/remix-run/react-router/blob/main/packages/react-router/lib/router/history.ts#L454

5. 匹配路由

https://github.com/remix-run/react-router/blob/c13ae095c9a4870a7eb601a421933cf6d184f9d9/packages/react-router/lib/router/router.ts#L872

6. 渲染匹配路由对应的视图

https://github.com/remix-run/react-router/blob/c13ae095c9a4870a7eb601a421933cf6d184f9d9/packages/react-router/lib/components.tsx#L1230


### React-Router基础实现
1. Provider(BrowserRouter)
2. Route
3. 匹配
4. 渲染
```tsx
import React from 'react';

interface RouterContextValue{
  history:History
  location:string
  navigate:(to:string)
}
interface BrowserRouterProps{
  
}

const RouterContext = React.createContext<RouterContextValue|null>(null);
const useNavigate = ()=>{
  return useContext(RouterContext)!.navigate;
}

export const BrowserRouter:React.FC<PropsWithChildren<BrowserRouterProps>> = ({children})=>{
  const [location, setLocation] = useState(window.location.pathname);

const navigate = (to:string)=>{
  window.history.pushState({},'',to);
  setLocation(to);
}

useEffect(()=>{
  const handlePopstate = ()=>setLocation(window.location.pathname);
  window.addEventListener('popstate',handlePopstate);
  return ()=>{
    window.removeEventListener('popstate',handlePopstate);
  }
},[])

  return <RouterContext.Provider value={{location,navigate}}>{children}</RouterContext.Provider>
}
```

```tsx
interface RoutesProps{

}
interface RouteProps{
  path:string;
  element:React.ReactNode;
}
const mathPath = (pathname:string,path:string)=>{
  return pathname === path;
}
export const Routes:PropsWithChildren<RoutesProps> = ({children})=>{
  let element:React.ReactNode = null;
  const location = useContxt(RouterContext)!.location;

  React.Children.map(children,(child)=>{
    if(!element && React.isValidElement(child)&&matchPath(child.props.path,location)){
      element = child
    }
  })
  return element;
}
export const Route:React.FC<RouteProps> = ({path,element})=>{
  return <div>{element}</div>
}
```