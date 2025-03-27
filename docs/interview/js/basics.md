---
title: JavaScript面试题
description: JavaScript面试题
---

# JavaScript 面试题

## JavaScript 基础概念

### typeof null 返回什么？为什么？

答案：object

为什么：这是一个历史遗留问题，根本原因是在 JavaScript 的早期版本中，JavaScript 中的值被表示为一个标签和数据值的组合。在这种表示方式下，对象的标签是 000，而 null 被认为是空指针对象，其二进制表示为全零。由于 null 的二进制表示全零，导致在进行 typeof null 操作时返回 'object'。

### 原始类型（Primitive Types）和引用类型的区别？

#### 原始类型

1. 存储方式：原始类型直接存储在栈中，
2. 不可变性：原始类型的值是不可变的，即一旦创建就不能修改。
3. 按值访问：原始类型的变量直接存储原始值，对变量的操作不会影响其他变量。
4. 分类：undefined、null、boolean、number、string、symbol、bigint

#### 引用类型

1. 存储方式：引用类型存储在堆中，变量存储的是引用类型的引用（地址）。
2. 可变形：引用类型的值是可变的，即可以修改引用类型的属性。
3. 按引用访问：引用类型的变量存储的是引用类型的引用，对变量的操作会影响其他变量。
4. 分类：Object、Array、Function、Date、RegExp、Map、Set、WeakMap、WeakSet

### 如何实现深拷贝？JSON.parse(JSON.stringify(obj))有什么缺陷？

#### 深拷贝实现：

```js
function deepClone(obj) {
  if (typeof obj !== "object" || obj !== null) {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = deepClone(obj[key]);
    }
  }
  return copy;
}
let obj = { a: 1, b: { c: 2 } };
let newObj = deepCopy(obj);
```

#### JSON.parse(JSON.stringify(obj))有什么缺陷？

1. 无法拷贝函数：JSON.stringify() 会忽略函数，导致拷贝后的对象中不包含函数。
2. 无法处理循环引用：如果对象中存在循环引用，JSON.stringify() 会抛出错误。
3. 无法处理 undefined、Symbol 等特殊值：这些值在转换过程中会被忽略或转换为 null。
4. 无法复制特殊对象：这种方法无法复制包含特殊对象（如 Date 对象）的属性，会将其转换为字符串。
5. 性能问题：对于大型对象或包含大量嵌套的对象来说，使用 JSON 序列化和解析可能会影响性能。

### 解释变量提升（Hoisting）和暂时性死区（TDZ）

#### 变量提升：

变量提升指在`var`声明变量时，js 会将变量声明提升到作用域的顶部，但是不会初始化（赋值操作不会提升）。函数会整体提升。

#### 暂时性死区

区暂时性死区是指在代码块中，由于变量的声明存在但尚未初始化（即在声明之前访问变量），导致引发错误的现象。在 let 和 const 声明的变量在声明前使用时会抛出 ReferenceError 错误，原因就是因为 let 和 const 会触发暂时性死区。

### 解释词法作用域和动态作用域的区别

#### 词法作用域

函数定义时决定作用域链

1. 定义：词法作用域是指变量作用域在代码书写阶段就已经确定，通过变量在代码中的位置来决定其可见性。
2. 工作原理：在词法作用域中，作用域是由代码中函数被声明的位置来决定的，而不是由函数在程序执行时调用的位置决定的。
3. 应用：JavaScript 中采用词法作用域，即函数的作用域在函数定义时就已经确定，而不会随着函数的调用位置而改变。

#### 动态作用域

函数调用时决定

1. 定义：动态作用域是指变量的作用域在程序运行时根据程序的调用栈（调用路径）来决定的作用域规则。
2. 工作原理：在动态作用域中，作用域是根据函数的调用链来确定的，即在函数内部查找变量时会根据函数调用的位置来决定。
3. 例子：Bash 和 Perl 等语言支持动态作用域，其中函数内部的变量作用域取决于调用函数的位置。

### 闭包的原理是什么？写一个实际应用场景

闭包是指在函数内部创建函数，并且内部函数可以访问外部函数作用域中的变量，即使外部函数已经执行完毕。闭包使得内部函数拥有对外部函数作用域中变量的引用，这种引用关系被称为闭包。

#### 原理

1. 当一个函数内部定义了另一个函数，并且内部函数引用了外部函数的变量时，就形成了闭包。
2. 内部函数可以访问外部函数的变量，因为内部函数保持对外部函数作用域的引用，即使外部函数执行完毕也可以访问这些变量。

#### 实际应用

```js
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const counter = createCounter();

// 每次调用 counter 函数，count 变量都会在闭包中得到更新
counter(); // 输出 1
counter(); // 输出 2
counter(); // 输出 3
```

### 下面的代码输出什么？为什么？

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

答案：输出 3 3 3
因为 setTimeout 是异步函数，会在 for 循环执行完毕后执行，此时 i 的值为 3。

### 如何判断 this 的指向？call/apply/bind 的区别？

#### 如何判断 this 的指向

在 js 中 this 的指向是通过函数被调用的方式决定的，主要有以下几个方式的判断：

1. 全局上下文：在全局上下文中，this 指向全局对象（浏览器中是 window，Node.js 中是 global）。
2. 函数调用：在普通函数调用中，this 指向全局对象。
3. 方法调用：在对象的方法中，this 指向调用该方法的对象。
4. 构造函数调用：在构造函数中，this 指向新创建的对象。
5. 使用 call、apply、bind：这些方法可以显式指定函数内部 this 的指向。

#### call/apply/bind 的区别？

1. call 方法立即执行函数，且可以接受参数列表。它的语法是 func.call(thisArg, arg1, arg2, ...)

```js
function sayHello() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: "Alice" };
sayHello.call(person); // 输出 "Hello, Alice"
```

2. apply：apply 方法与 call 类似，不同的是它接受一个参数数组。它的语法是 func.apply(thisArg, [arg1, arg2, ...])

```js
function sayHello() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: "Bob" };
sayHello.apply(person); // 输出 "Hello, Bob"
```

3. bind 方法返回一个新函数，绑定了指定的 this 值，但不会立即执行。它的语法是 newFunc = func.bind(thisArg)

```js
function sayHello() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: "Charlie" };
const boundFunc = sayHello.bind(person);
boundFunc(); // 输出 "Hello, Charlie"
```

### 实现一个 new 运算符的功能

```js
function myNew(constructor, ...args) {
  // 创建一个新对象，该对象继承自构造函数的原型
  const obj = Object.create(constructor.prototype);

  // 调用构造函数，并将 this 指向新创建的对象
  const result = constructor.apply(obj, args);

  // 如果构造函数返回了对象，则返回该对象；否则返回新创建的对象
  return result instanceof Object ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// 使用 myNew 创建一个 Person 实例
const person1 = myNew(Person, "Alice", 30);
person1.sayHello(); // 输出 "Hello, my name is Alice and I am 30 years old."
```

### 对象属性描述符（enumerable/writable/configurable）的作用

1. enumerable:
   - 作用：表示属性是否可枚举，即是否可以通过 for...in 循环或 Object.keys() 方法访问到该属性。
   - 默认值：true
2. writable：
   - 作用：表示属性是否可写，即是否可以通过赋值操作修改该属性的值。
   - 默认值：true
3. configurable：
   - 作用：表示属性是否可配置，即是否可以通过 Object.defineProperty() 方法修改该属性描述符。
   - 默认值：true

## JavaScript 高级概念

### 绘制 obj.**proto**与 Object.prototype 的关系图

```js
console.log(obj.__proto__ === Object.prototype); //true
```

### 实现继承的多种方式（原型链/构造函数/组合/class）

#### 原型链继承

```js
function A() {
  this.name = "a";
}

function B() {
  this.age = 18;
}

B.prototype = new A();

const b = new B();
console.log(b);
```

#### 构造函数继承

```js
function A(name) {
  this.name = name;
}

function B(name, age) {
  A.call(this, name);
  this.age = age;
}

const b = new B("a", 18);
```

#### 组合继承

```js
function A(name) {
  this.name = name;
}

A.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

function B(name, age) {
  A.call(this, name);
  this.age = age;
}

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

const b = new B("a", 18);
```

#### class 继承

```js
class A {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
class B extends A {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const b = new B("a", 18);
```

### Object.create(null)创建的对象有什么特性？

使用 Object.create(null)创建的对象是没有原型链的方法，即没有继承自 Object.prototype 的属性和方法。可以作为一个纯对象使用，没有默认的属性和方法。但是 没有办法使用 instanceof 运算符来检查对象的类型。

### 解释浏览器的事件循环（Event Loop）模型

浏览器的事件循环（Event Loop）模型是指浏览器用来处理 JavaScript 代码执行和事件触发的机制

1. 任务队列

浏览器中有多个任务队列，可以简单理解成宏任务队列和微任务队列。宏任务队列包括：setTimeout、setInterval、setImmediate、I/O、UI 渲染等。微任务队列包括：Promise.then、MutationObserver 等。

2. 事件循环

当浏览器执行 JavaScript 代码时，会将任务放入到不同的队列中。

3. 执行过程

   - 当执行栈（执行主线程中的代码）为空时，事件循环开始工作。
   - 会先检查微任务队列，有任务就按照顺序取出执行，直到清空微任务队列。
   - 然后检查宏任务队列，执行完成后会再次检查微任务队列，直到清空微任务队列。
   - 重复以上步骤，直到所有任务都执行完毕。

4. 宏任务和微任务的区别：

   - 宏任务包括整体代码块、setTimeout、setInterval、I/O、UI 渲染等。
   - 微任务包括 Promise.then、MutationObserver 等。

5. 注意事项：
   - 微任务比宏任务级别高
   - 同一时间只有一个任务执行

示例：

```js
console.log("Start");

setTimeout(function () {
  console.log("Timeout");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise");
});

console.log("End");

// 输出顺序：Start, End, Promise, Timeout
```

### V8 引擎的垃圾回收机制（分代回收/标记清除）

V8 引擎的垃圾回收机制主要采用了分代回收和标记清除两种策略。

1. 分代回收：

   - V8 引擎将内存分为新生代和老生代两个区域。
   - 大部分对象在创建后很快就会被销毁，所以新生代区域主要用来存放生命周期较短的对象。
   - 新生代使用 `Scavenge`算法，它通过复制存活对象来实现垃圾回收。这个过程包括将存活对象从 From 区域复制到 To 区域，然后交换 From 和 To 区域的角色。
   - 当对象经过几次复制后仍然存活，就会被移动到老生代区域，老生代区域使用 `Mark-Sweep`（标记清除） 算法进行垃圾回收。

2. 标记清除：

   - 标记清除算法分为两个阶段：标记和清除。
   - 标记阶段：从根对象（全局对象）开始，递归遍历所有可达的对象，将它们标记为“活动对象”。
   - 清除阶段：遍历整个堆内存，将所有未被标记为“活动对象”的对象进行回收。

3. 增量标记

   - 由于标记清除算法需要遍历整个堆内存，占用时间较长，V8 引擎引入增量标记算法，就是将标记过程分成多个小步骤，每次只标记一部分对象，分批执行。

4. 空间碎片整理
   - V8 引擎还包括空间碎片整理的过程，它会将存活对象移动到堆内存的一端，以便更有效地利用内存空间。

## ES6+核心特性

### let/const 与 var 的核心区别

| 特性         | var          | let               | const             |
| ------------ | ------------ | ----------------- | ----------------- |
| 作用域       | 函数/全局    | 块级              | 块级              |
| 变量提升     | 提升（有值） | 提升（无值，TDZ） | 提升（无值，TDZ） |
| 重复声明     | 允许         | 禁止              | 禁止              |
| 挂载全局对象 | 是           | 否                | 否                |
| 重新赋值     | 允许         | 允许              | 禁止（基本类型）  |
| 必须初始化   | 否           | 否                | 是                |

### 箭头函数与普通函数的区别（this/arguments/new）

- 箭头函数没有自己的 this
- 箭头函数不能用作构造函数
- 箭头函数没有 arguments 对象

### Promise 链式调用的错误处理（catch 位置差异）

可以在`.then`后紧接着跟`.catch`来处理错误，也可以在 promise 链的最后统一处理。

### 手写 Promise.all 的实现（需处理错误和顺序）

```js
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("Promises must be an array"));
    }

    const results = new Array(promises.length);
    let resolvedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const promise3 = Promise.reject(new Error("Custom Error"));

customPromiseAll([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

### async/await 底层实现原理（generator + 自动执行器）

async/await 是基于 generator 和自动执行器来实现的。

原理解析：

1. Generator 函数：是 es6 提供的一种异步编程解决方案，可以通过 function\*来定义，通过 yield 关键字来暂停函数的执行，通过 next 方法来恢复函数的执行。async 实际上就是 Generator 的一种变形，await 对应的就是 yield。
2. 自动执行器：Generator 函数的执行需要手动调用 next 方法，而 async/await 背后有一个自动执行器来不停的调用 next()方法。直到 Generator 执行完毕。

### Proxy 和 Reflect 的常见使用场景

### ES Module 与 CommonJS 模块化的差异

#### ESM：

1. esm 通过 import 和 export 来导入导出模块
2. esm 是静态的，在编译时确定模块的依赖关系，可以在导入时动态使用变量，但是不能在条件语句或函数内部导入模块。
3. esm 支持异步导入，可以使用 import()函数来动态导入模块，返回一个 Promise 对象。
4. 每个 esm 都有自己独立的作用域，不会出现作用域污染的情况。
5. ES Module 的导出是静态的，必须在模块顶层进行导出，不能在运行时动态添加导出。

#### CommonJS

1. CommonJS 通过 require 和 module.exports 来导入导出模块
2. CommonJS 是在运行时加载模块的，可以在条件语句或函数内部根据需要加载模块。
3. CommonJS 是同步加载模块的，模块的加载和执行是顺序执行的
4. 共享顶级作用域：CommonJS 模块都运行在同一个顶级作用域下，模块中的变量可以被其他模块访问。
5. CommonJS 支持在运行时动态添加导出，可以根据需要导出不同的值。

### 可选链操作符?.和空值合并运算符??的作用

#### 可选链操作符?.:

用来解决访问深层次的对象属性时，如果中间某个字段不存在，则返回 undefined 造成的报错问题。

#### 空值合并运算符??:

只有当变量是 undefined 或 null 时，返回备用值。

## 异步编程专题

### 实现一个带并发限制的 Promise 调度器

```js
class PromiseScheduler {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.queue = [];
    this.running = 0;
  }

  add(promiseCreator) {
    this.queue.push(promiseCreator);
    this.run();
  }
  run() {
    if (this.running >= this.concurrency || this.queue.length === 0) {
      return;
    }

    const task = this.queue.shift();
    this.running++;

    task().then(() => {
      this.running--;
      this.run();
    });
  }
}

const scheduler = new PromiseScheduler(2);
function createTask(time) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`Task executed after ${time} ms`);
      resolve();
    }, time)
  );
}

scheduler.add(() => createTask(1000));
scheduler.add(() => createTask(2000));
scheduler.add(() => createTask(1500));
scheduler.add(() => createTask(500));
scheduler.add(() => createTask(800));
```

### 如何取消一个正在进行的 fetch 请求？

使用 AbortController 来取消

```js
// 创建一个新的 AbortController 实例
const controller = new AbortController();
const signal = controller.signal;

// 设置 fetch 请求的 signal 选项为 controller.signal
const fetchData = () => {
  fetch("https://api.example.com/data", { signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch request was aborted");
      } else {
        console.error("Fetch error:", error);
      }
    });
};

// 发起 fetch 请求
fetchData();

// 取消 fetch 请求
controller.abort();
```

### 使用 async/await 实现一个重试机制（最多重试 3 次）

```js
async function fetchDataWithRetry(url, maxRetries) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }

    retries++;
    console.log(`Retry attempt: ${retries}`);

    // 添加延迟，可根据需要调整延迟时间
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error(`Failed to fetch data after ${maxRetries} retries`);
}

const url = "https://api.example.com/data";
const maxRetries = 3;

(async () => {
  try {
    const data = await fetchDataWithRetry(url, maxRetries);
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error(error.message);
  }
})();
```

## DOM 与 BOM

### 事件委托（Event Delegation）的原理和优势

事件委托是利用的事件冒泡机制，通过将事件处理程序添加到父元素上来管理事件。

#### 事件冒泡：

当子元素触发事件时，事件会向上传播，逐级触发祖先元素相同的事件直到根元素。

#### 事件捕获：

和冒泡相反，它是从根元素开始，逐级向下传播，直到触发目标元素的事件。

#### 优势：

1. 性能优化：通过将事件处理程序添加到父元素上，减少事件处理程序的数量。
2. 动态添加元素：当动态添加子元素时，不需要为新的子元素添加事件处理程序，因为事件会冒泡到父元素上。
3. 简化代码：将事件处理程序集中管理，代码更加简洁。
4. 方便管理：在父元素上管理事件处理程序可以更方便地控制事件的冒泡和捕获阶段，实现事件的委托和代理。

### 阻止事件冒泡和默认行为的方法

#### 阻止事件冒泡：

```js
event.stopPropagation();
```

#### 阻止默认行为：

```js
event.preventDefault();
```

### 如何判断元素是否在视口内？

1. 使用 `getBoundingClientRect()`方法获取元素相对视口的位置。
2. 使用 `Intersection Observer API`

### requestAnimationFrame 与 setTimeout 动画的区别

#### requestAnimationFrame

1. 优势：
   - 浏览器会在下一次重绘之前调用回调函数，以确保动画在浏览器的重绘周期内执行，从而实现更流畅的动画效果。
   - 自动适应浏览器窗口的刷新率，提供更高性能和更好的电池寿命。
   - 当页面处于非活动状态（例如在后台标签中）时，动画会自动暂停，节省系统资源。
2. 劣势：
   - 需要手动调用 `requestAnimationFrame()` 来启动动画，并且需要在动画的每一帧中调用它。
   - 无法控制时间

#### setTimeout

1. 优势：
   - 可以设置延迟时间，确保动画在指定的时间开始执行
   - 可以在回调函数中执行其他操作，例如更新状态或触发其他事件。
2. 劣势：
   - 延迟时间不精确，可能会因为浏览器性能、页面渲染等因素导致动画效果不如预期。
   - 当页面处于非活动状态时，动画会继续执行，消耗系统资源。

## 设计模式和架构

### 手写实现观察者模式（Pub/Sub）

```js
class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  unsubscribe(event, callback) {
    if (!this.subscribers[event]) return;

    this.subscribers[event] = this.subscribers[event].filter(
      (cb) => cb !== callback
    );
  }

  publish(event, data) {
    if (!this.subscribers[event]) return;
    this.subscribers[event].forEach((cb) => cb(data));
  }
}

const pubSub = new PubSub();

pubSub.subscribe("event1", (data) => {
  console.log("event1", data);
});

pubSub.subscribe("event2", (data) => {
  console.log("event2", data);
});

pubSub.publish("event1", "data1");
pubSub.publish("event2", "data2");

pubSub.unsubscribe("event1");
pubSub.publish("event1", "This event should not be received.");
```

### 单例模式的多种实现方式（ES5/ES6）

#### ES5

```js
var Singleton = (function () {
  var instance;

  function createInstance() {
    // 在这里创建实例
    return {
      // 实例属性和方法
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1 === instance2);
```

#### ES6

```js
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);
```

## 性能优化

### 如何减少重排（Reflow）和重绘（Repaint）？

1. 使用 CSS3 的 `transform` 和 `opacity` 属性进行动画，这些属性不会触发重排和重绘。
2. 使用 `will-change` 属性提前告知浏览器哪些属性将会改变，以便浏览器提前进行优化。
3. 避免频繁操作 DOM，可以使用文档片段（DocumentFragment）来批量更新 DOM。
4. 使用 `requestAnimationFrame` 来控制动画的执行，确保动画在浏览器的重绘周期内执行。

### 代码分割（Code Splitting）的实现方式

1. 使用 import()动态导入的方式。
2. 使用 webpack 懒加载特性。
3. 在 React 中使用 React.lazy 和 Suspense。
4. 在 Vue 中使用动态组件和异步组件。

### 图片懒加载的实现原理

1. 初始状态：页面加载时，所有图片的 src 属性都设置为一个占位符或者空字符串，而真实的图片地址通常存储在另一个属性（比如 data-src）中。
2. 监听滚动事件：通过 JavaScript 监听滚动事件，判断每张图片距离视窗顶部的距离，当图片进入可视区域时触发加载。
3. 加载图片：当图片进入可视区域时，将之前存储在 data-src 属性中的真实图片地址赋给 src 属性，以触发图片加载。

### Web Worker 的使用场景和限制

Web Worker 是在浏览器中运行的后台线程，可以让你在主线程之外运行脚本，从而避免阻塞用户界面。Web Worker 的使用场景和限制如下：

1. 使用场景：

   - 计算密集型任务：Web Worker 可以用于在后台线程处理大量计算，避免主线程阻塞，提高页面性能。
   - 网络请求：Web Worker 可以用于在后台线程处理网络请求，避免主线程阻塞，提高页面性能。
   - 数据处理：对大量数据进行处理、转换或筛选时，将处理逻辑放在 Web Worker 中可以提高页面的响应速度。
   - 实时数据更新：通过 Web Worker 可以实现实时数据的更新，而不影响用户界面的交互体验。
   - 图像处理：对图像进行处理、压缩等操作可以使用 Web Worker，不会影响主线程的性能。

2. 限制：
   - 无法访问 DOM
   - 无法访问全局对象
   - 通信开销：与主线程之间的通信会有一定的开销，因为需要通过序列化和反序列化消息来传递数据。
   - 文件限制：Web Worker 无法访问本地文件系统，只能处理通过网络加载的脚本。

## 手写代码题

### 手写一个防抖函数

```js
function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function myFunction() {
  console.log("Function debounced");
}

const debouncedFunction = debounce(myFunction, 300);

// 在事件处理程序中使用防抖函数
window.addEventListener("resize", debouncedFunction);
```

### 深拷贝（考虑循环引用和特殊对象）

```js
function deepClone(obj, map = new WeakMap()) {
  // 处理循环引用和原始类型
  if (obj === null || typeof obj !== "object") return obj;
  if (map.has(obj)) return map.get(obj);

  let clone;
  // 处理特殊对象类型
  if (obj instanceof Date) clone = new Date(obj);
  else if (obj instanceof RegExp) clone = new RegExp(obj);
  else if (Array.isArray(obj)) clone = [];
  else clone = Object.create(Object.getPrototypeOf(obj));

  map.set(obj, clone);
  // 递归拷贝属性
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }
  return clone;
}

const obj1 = {
  a: 1,
  b: {
    c: new Date(),
    d: /hello/,
  },
};
obj1.e = obj1; // 循环引用

// 深拷贝对象
const clonedObj = deepClone(obj1);

// 修改原对象，看是否影响克隆对象
obj1.a = 10;
obj1.b.c.setDate(10);

console.log(obj1); // 原对象
console.log(clonedObj); // 克隆对象
```

### 函数柯里化

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 输出: 6
console.log(curriedAdd(1, 2)(3)); // 输出: 6
console.log(curriedAdd(1)(2, 3)); // 输出: 6
```

### 实现 Promise.race

```js
function race(promises) {
  if (typeof promises[Symbol.iterator] !== "function") {
    throw new TypeError("arguments must be an iterable");
  }

  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

const p1 = new Promise((resolve) => setTimeout(resolve, 500, "p1"));
const p2 = new Promise((resolve) => setTimeout(resolve, 100, "p2"));
const p3 = new Promise((resolve) => setTimeout(resolve, 300, "p3"));

race([p1, p2, p3]).then((value) => {
  console.log(value); // 输出: "p2"
});
```

### 数组扁平化（支持指定深度）

```js
// 使用递归实现
function flattenArray(arr, depth = 1) {
  if (depth <= 0 || !Array.isArray(arr)) return [...arr];
  return arr.reduce(
    (acc, val),
    () => {
      if (Array.isArray(val) && depth > 0) {
        acc.push(...flattenArray(val, depth - 1));
      } else {
        acc.push(val);
      }
      return acc;
    },
    []
  );
}

// 使用 flat()

function flattenArray(arr, depth = 1) {
  return arr.flat(depth);
}

const arr = [1, [2, [3, [4, 5]]]];
console.log(flattenArray(arr, 2)); // 输出: [1, 2, 3, [4, 5]]
```
