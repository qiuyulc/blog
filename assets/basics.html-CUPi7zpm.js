import{_ as t,c as a,a as l,o as i}from"./app-Drra5e4z.js";const c={};function r(n,e){return i(),a("div",null,e[0]||(e[0]=[l('<h2 id="什么是-jsx" tabindex="-1"><a class="header-anchor" href="#什么是-jsx"><span>什么是 JSX？</span></a></h2><ul><li>JSX 是一种在 JavaScript 中编写类似于 XML 的语法扩展。</li></ul><h2 id="简述虚拟-dom-的概念和机制" tabindex="-1"><a class="header-anchor" href="#简述虚拟-dom-的概念和机制"><span>简述虚拟 DOM 的概念和机制？</span></a></h2><ul><li>虚拟 DOM（Virtual DOM）是一种用于提升 Web 应用性能的技术概念。</li><li>虚拟 DOM 的基本思想是在 JavaScript 中构建一个轻量级的、以 JavaScript 对象表示的虚拟版本的 DOM 树。</li><li>机制 <ol><li>初始渲染：当应用加载时，虚拟 DOM 会被构建为初始状态的虚拟 DOM 树，该树与实际的 DOM 树相应节点一一对应。</li><li>更新操作：当应用状态发生变化时，需要更新用户界面。此时，React 会生成一个新的虚拟 DOM 树，表示更新后的界面状态。</li><li>对比过程：React 会将新的虚拟 DOM 树与之前的虚拟 DOM 树进行比较，找出两者之间的差异。这个过程称为虚拟 DOM 的 diff（差异）算法。</li><li>最小化操作：在比较过程中，React 会尽量找到最小的差异，只更新发生变化的部分。这样可以避免无谓的 DOM 操作，提高性能。</li><li>批量更新：React 会将所有需要更新的操作记录下来，并在一次性更新结束后，将这些操作批量应用到实际的 DOM 树上。</li></ol></li><li>通过这种机制，虚拟 DOM 可以帮助应用减少直接操作实际 DOM 的次数，从而提高性能。</li><li>虚拟 DOM 的好处是让开发者只需要关注应用状态的变化，而不需要关注 DOM 操作，同时通过 diff 算法高效计算出最小化的更新，从而提升性能。</li></ul><h2 id="react-类组价和函数组件的区别是什么" tabindex="-1"><a class="header-anchor" href="#react-类组价和函数组件的区别是什么"><span>React 类组价和函数组件的区别是什么？</span></a></h2><ul><li>语法和定义方式：类组件主要通过继承的方式来创建组件，而函数组件是使用 JavaScript 函数定义。</li><li>状态和生命周期：类组件可以包含状态（state）和生命周期方法，可以通过 this.state 来管理组件的状态。而函数组件通常不包含状态，也没有生命周期方法，因此更适合简单的展示型组件。</li><li>性能：由于类组件的实例化和生命周期方法的存在，它们在某些情况下可能会有一些性能开销。函数组件由于没有实例化和生命周期方法，通常比较轻量，执行效率较高，特别是在 React 16.8 版本引入的 Hooks 之后，函数组件也可以拥有状态和生命周期等特性。</li></ul><h2 id="简述-react-中-refs-的作用" tabindex="-1"><a class="header-anchor" href="#简述-react-中-refs-的作用"><span>简述 React 中 refs 的作用？</span></a></h2><p>ref 是一个用于获取对 DOM 元素或组件实例的引用的特殊属性。它提供了一种访问 DOM 元素或组件实例的方式，允许开发者直接操作它们。</p><ul><li>访问 DOM 元素</li><li>访问组件实例</li></ul><h2 id="解释为什么浏览器不能读取-jsx" tabindex="-1"><a class="header-anchor" href="#解释为什么浏览器不能读取-jsx"><span>解释为什么浏览器不能读取 JSX</span></a></h2><p>JSX 是 JavaScript 的语法扩展，浏览器本身不支持这种语法的解析。需要使用 babel 等 JSX 解析工具将 JSX 解析为浏览器可以执行的代码。</p><h2 id="react-中-key-的作用" tabindex="-1"><a class="header-anchor" href="#react-中-key-的作用"><span>React 中 key 的作用</span></a></h2><p>key 属性在 React 中用于标识组件或元素的唯一性。它帮助 React 识别列表中的每个元素，提高性能并避免不必要的重新渲染。此外，key 属性还用于在组件列表中维护组件的状态，确保正确地销毁和创建组件实例。</p><h2 id="react-和-vue-的差异性和相似性" tabindex="-1"><a class="header-anchor" href="#react-和-vue-的差异性和相似性"><span>React 和 Vue 的差异性和相似性</span></a></h2><p>差异性：</p><ul><li>学习曲线：React 是一个库而不是一个完整的框架，需要配合其他的库一起使用。vue 是一个完整的库，有这最合适的解决方案</li><li>组件化：React 使用 JSX 语法，而 Vue 使用模板语法</li><li>响应式更新：Vue 使用响应式数据双向绑定，而 React 当数据变化时，会对整个组件进行渲染</li><li>状态管理：Vue 内置 Vuex、pinia，而 React 本身不提供这种完整的状态管理，需要使用三方库(redux)等。（在 hooks 之后出现了像 useReducer 的官方 hooks，也算是提供了一种方案）</li></ul><p>相似性：</p><ul><li>虚拟 DOM</li><li>组件化</li><li>社区支持</li><li>集成能力</li></ul><h2 id="react-中什么是受控组件和非控组件" tabindex="-1"><a class="header-anchor" href="#react-中什么是受控组件和非控组件"><span>React 中什么是受控组件和非控组件？</span></a></h2><p>在 React 中受控和非受控指的是对于处理表单输入的方式。</p><p>受控组件指的是将表单的处理逻辑交给 React 的 state 去处理，一切变动都经过 React。</p><p>而非受控组件是将处理逻辑交给元素，React 只负责读取 DOM 元素的输出值，一般是通过 ref 的方式。</p><h2 id="react-hook-的使用限制有哪些" tabindex="-1"><a class="header-anchor" href="#react-hook-的使用限制有哪些"><span>React Hook 的使用限制有哪些？</span></a></h2><ul><li>只能在函数组件的顶层使用。</li><li>只能在函数组件中使用。</li><li>每次调用顺序必须一致，及不能在条件和循环中使用，这样 react 才能正确将状态和对应的 hook 关联。</li><li>自定义 hooks 必须使用前缀名 use。</li><li>内置的 hooks 在使用时需要按照限制来使用。</li></ul><h2 id="react-的严格模式如何使用-有什么用处" tabindex="-1"><a class="header-anchor" href="#react-的严格模式如何使用-有什么用处"><span>React 的严格模式如何使用，有什么用处？</span></a></h2><p>即 StrictMode，在开发环境下会进行额外的检查和警告，帮助你发现潜在问题。</p><h2 id="react-中如何处理事件" tabindex="-1"><a class="header-anchor" href="#react-中如何处理事件"><span>React 中如何处理事件？</span></a></h2><p>为了解决跨浏览器的兼容性问题，SyntheticEvent 实例将被传递给你的事件处理函数，SyntheticEvent 是 React 跨浏览器的浏览器原生事件包装器，它还拥有和浏览器原生事件相同的接口，包括 stopPropagation() 和 preventDefault()。</p><p>React 实际上并不将事件附加到子节点本身。React 使用单个事件侦听器侦听顶层的所有事件。这对性能有好处，也意味着 React 在更新 DOM 时不需要跟踪事件监听器</p><h2 id="简述什么是-react-高阶组件" tabindex="-1"><a class="header-anchor" href="#简述什么是-react-高阶组件"><span>简述什么是 React 高阶组件？</span></a></h2><p>React 高阶组件（Higher-Order Component，HOC）是一种用于复用组件逻辑的设计模式。它本质上是一个函数，接受一个组件作为参数，并返回一个新的包装组件。 比如页面鉴权。</p><h2 id="请简述-usecallback-和-usememo-的使用场景" tabindex="-1"><a class="header-anchor" href="#请简述-usecallback-和-usememo-的使用场景"><span>请简述 useCallback 和 useMemo 的使用场景 ？</span></a></h2><ul><li>useCallback 适用于再向子组件传递方法时避免不必要的函数重新创建。</li><li>useMemo 适用于当你有一个昂贵的计算或函数调用。 useCallback 适用于优化回调函数的传递，而 useMemo 适用于优化昂贵的计算和函数调用。它们可以帮助你避免不必要的计算和重新渲染，从而提高 React 应用的性能。</li></ul><h2 id="解释-react-组件的生命周期方法" tabindex="-1"><a class="header-anchor" href="#解释-react-组件的生命周期方法"><span>解释 React 组件的生命周期方法 ？</span></a></h2><p>在 React 组件的生命周期中，存在一系列特定的方法，可以在不同的阶段执行特定的操作。以下是 React 组件的生命周期方法：</p><ul><li>Mounting（挂载阶段）：</li></ul><ol><li>constructor(): 组件被创建时调用，用于初始化状态和绑定事件处理程序。</li><li>static getDerivedStateFromProps(): 在组件实例化和接收新的 props 时调用，用于根据新的 props 更新状态。</li><li>render(): 渲染组件的内容，并返回 React 元素。</li><li>componentDidMount(): 组件挂载到 DOM 后调用，可以进行数据获取、订阅事件等副作用操作。</li></ol><ul><li>Updating（更新阶段）：</li></ul><ol><li>static getDerivedStateFromProps(): 在接收到新的 props 或 state 时调用，用于根据新的 props 或 state 更新状态。</li><li>shouldComponentUpdate(): 决定组件是否需要重新渲染，默认返回 true。可以根据 props 和 state 的变化进行性能优化。</li><li>render(): 重新渲染组件的内容，并返回 React 元素。</li><li>getSnapshotBeforeUpdate(): 在更新前获取 DOM 状态的快照，通常用于保存滚动位置等信息。</li><li>componentDidUpdate(): 组件更新完成后调用，可以进行状态更新、数据获取等副作用操作。</li></ol><ul><li>Unmounting（卸载阶段）：</li></ul><ol><li>componentWillUnmount(): 组件即将从 DOM 中卸载时调用，可以进行清理操作，如取消订阅、清除计时器等。</li></ol><ul><li>Error Handling（错误处理阶段）：</li></ul><ol><li>static getDerivedStateFromError(): 在子组件抛出错误时调用，用于捕获错误并更新状态。</li><li>componentDidCatch(): 在子组件抛出错误后调用，用于记录错误信息、发送错误报告等。</li></ol><p>除了上述方法，React 16.3 版本后引入了新的生命周期方法： static getDerivedStateFromProps(): 替代了旧的 componentWillReceiveProps()方法，用于根据 props 更新状态。 getSnapshotBeforeUpdate(): 在更新前获取 DOM 状态的快照，替代了旧的 componentWillUpdate()方法。</p><p>React 17 版本中废弃了一些生命周期方法，如 componentWillReceiveProps()、componentWillUpdate()和 componentWillUnmount()，并建议使用新的替代方法。</p><h2 id="解释-react-中的合成事件是什么" tabindex="-1"><a class="header-anchor" href="#解释-react-中的合成事件是什么"><span>解释 React 中的合成事件是什么？</span></a></h2><p>在 React 中，合成事件（Synthetic Event）是一种封装了底层浏览器原生事件的跨浏览器包装器。React 使用合成事件来提供一致的事件处理机制，使开发者能够以一种统一的方式处理不同浏览器中的事件。</p><p>合成事件的优势包括：</p><ul><li><p>跨浏览器一致性：合成事件封装了底层浏览器的原生事件，对于不同浏览器提供了一致的事件处理接口，无需担心浏览器兼容性问题。</p></li><li><p>性能优化：合成事件使用了事件委托（event delegation）的技术，将事件处理程序附加到组件的最上层，而不是每个具体的 DOM 元素上。这样可以减少内存占用，并提高事件处理的性能。</p></li><li><p>事件池：合成事件使用了事件池（event pooling）的机制，即在事件处理完成后，合成事件对象会被重置并放回池中以供下次使用。这种复用机制减少了对象创建和垃圾回收的开销。</p></li></ul><h2 id="usestate-的-state-是否可以直接修改-是否可以引起组件渲染" tabindex="-1"><a class="header-anchor" href="#usestate-的-state-是否可以直接修改-是否可以引起组件渲染"><span>useState()的 state 是否可以直接修改？是否可以引起组件渲染？</span></a></h2><p>不可以，不能引起组件渲染。直接修改 React 内部不能监听数据的修改，自然不能引起组件渲染</p><h2 id="完整的简述-react-的-diff-过程" tabindex="-1"><a class="header-anchor" href="#完整的简述-react-的-diff-过程"><span>完整的简述 React 的 diff 过程 ？</span></a></h2><ul><li><p>生成虚拟 DOM 树：React 将组件的 JSX 代码转换为虚拟 DOM 树，这是一个轻量级的 JavaScript 对象表示。每个虚拟 DOM 节点对应一个实际的 DOM 元素。</p></li><li><p>比较两个虚拟 DOM 树：React 将前后两个虚拟 DOM 树进行逐层比较，从根节点开始递归地比较子节点。</p></li><li><p>同级比较和更新：</p></li></ul><ol><li>React 首先比较当前节点的类型（标签名或组件类型）。如果类型不同，React 将完全替换该节点及其子树。</li><li>如果类型相同，React 将比较节点的属性（props）。如果属性不同，React 将更新该节点的属性。</li><li>接下来，React 将比较节点的子节点。React 使用一种称为&quot;key&quot;的特殊属性来识别和跟踪列表中的每个子节点。React 将在同级子节点之间进行比较，找出新增、移除、替换或更新的节点。</li></ol><ul><li><p>递归比较子节点：如果节点有子节点，React 将递归地对子节点进行比较，重复上述比较和更新过程。</p></li><li><p>应用差异：在进行完整的比较后，React 收集到了前后两个虚拟 DOM 树之间的差异。React 将这些差异记录为一系列操作，称为&quot;变更&quot;（mutations）。</p></li></ul><ol><li>对于新增的节点，React 会创建对应的实际 DOM 元素并插入到正确的位置。</li><li>对于移除的节点，React 会从实际 DOM 中删除该节点。</li><li>对于更新的节点，React 会更新对应的实际 DOM 元素的属性和内容。</li></ol><ul><li><p>批量更新：为了提高性能，React 会将所有的变更操作进行批量处理。这意味着 React 会一次性地将所有变更应用到实际 DOM 上，尽量减少实际 DOM 操作的次数。</p></li><li><p>渲染：最后，React 将更新后的实际 DOM 渲染到屏幕上，展示最新的 UI。</p></li></ul><h2 id="react-shouldcomponentupdate-有什么用" tabindex="-1"><a class="header-anchor" href="#react-shouldcomponentupdate-有什么用"><span>React shouldComponentUpdate 有什么用？</span></a></h2><p>shouldComponentUpdate 的主要作用是控制组件是否更新和重新渲染。 有 nextProps 和 nextState 两个参数 返回值为 true 和 false，合理利用它可以避免一些不必要的渲染和更新。</p><h2 id="什么是纯组件" tabindex="-1"><a class="header-anchor" href="#什么是纯组件"><span>什么是纯组件</span></a></h2><p>React 中的纯组件（Pure Component）是指继承自 React.PureComponent 的类组件，它们通过浅比较来优化渲染性能。 特点：</p><ol><li>自动实现 shouldComponentUpdate</li><li>浅比较：纯组件进行属性和状态的比较时，使用的是浅比较（shallow comparison）。浅比较是一种比较对象的引用是否相等的方式。它不会递归比较对象的属性或状态的属性，而是直接比较它们的引用。这意味着如果属性或状态的引用没有发生变化，纯组件会认为它们没有变化，从而避免不必要的重新渲染。</li></ol><h2 id="请用源码解释-react-setstate-调用的原理" tabindex="-1"><a class="header-anchor" href="#请用源码解释-react-setstate-调用的原理"><span>请用源码解释 React setState 调用的原理 ？</span></a></h2><p>react 的 setState 方法是用于更新组件的状态（state）的方法。它是一个异步操作，会引发组件的重新渲染。下面是 React 中 setState 方法的一般调用流程的简化源码解释：</p><ol><li><p>调用 setState 方法：在组件中调用 setState 方法，传入一个对象或一个函数。</p></li><li><p>合并更新：React 会将传入的更新对象或更新函数与当前状态进行合并，生成新的状态。这是一个浅合并操作，只会修改传入更新对象中的属性，而不会覆盖其他属性。</p></li><li><p>添加到更新队列：React 会将新的状态更新添加到组件的更新队列中。更新队列是一个存储待处理更新的数据结构。</p></li><li><p>批量更新：React 会对更新队列中的更新进行批量处理，以提高性能。React 会在合适的时机，比如事件处理结束或异步操作回调中，执行批量更新操作。</p></li><li><p>准备更新：在批量更新之前，React 会将更新队列中的更新进行处理，计算出最终的状态。</p></li><li><p>触发重新渲染：完成准备更新后，React 会触发组件的重新渲染过程，将新的状态应用到组件的虚拟 DOM 上。</p></li><li><p>渲染到真实 DOM：React 会对比新旧虚拟 DOM，找出需要更新的部分，并将变化应用到真实 DOM 上，完成组件的更新。</p></li></ol><p>需要注意的是，由于 setState 方法是异步的，多次调用 setState 可能会被合并为一次更新。React 会尽量减少不必要的重新渲染，通过批量更新和虚拟 DOM 的优化，提高性能和效率。</p><p>需要特别注意的是，由于 setState 是异步的，如果需要在 setState 之后立即获取最新的状态，可以在 setState 的回调函数中进行操作，或者使用 componentDidUpdate 生命周期方法来获取更新后的状态。</p><h2 id="解释-react-reducer-的作用" tabindex="-1"><a class="header-anchor" href="#解释-react-reducer-的作用"><span>解释 React Reducer 的作用？</span></a></h2><p>Reducers 是纯函数，它指定应用程序的状态如何响应 ACTION 变化。Reducers 通过接收之前的状态和动作来工作，然后它返回一个新状态。它根据操作的类型确定需要进行何种类型的更新，然后返回新值。 如果不需要做任何工作，它会按原样返回先前的状态</p><h2 id="react-中如何避免不必要的-render" tabindex="-1"><a class="header-anchor" href="#react-中如何避免不必要的-render"><span>React 中如何避免不必要的 render？</span></a></h2><p>使用 shouldComponentUpdate 或者 是 pureComponent</p><h2 id="解释-react-中-render-的目的和作用" tabindex="-1"><a class="header-anchor" href="#解释-react-中-render-的目的和作用"><span>解释 React 中 render() 的目的和作用 ？</span></a></h2><p>每个 React 组件强制要求必须有一个 render()。它返回一个 React 元素，是原生 DOM 组件的表示。如果需要渲染多个 HTML 元素，则必须将它们组合在一个封闭标记内。此函数必须保持纯净，即必须每次调用时都返回相同的结果</p><h2 id="请简述-react-组件的构造函数的作用" tabindex="-1"><a class="header-anchor" href="#请简述-react-组件的构造函数的作用"><span>请简述 React 组件的构造函数的作用？</span></a></h2><p>React 组件的构造函数（constructor）是一种特殊的方法，用于创建和初始化组件的实例。构造函数在组件被实例化时被调用，它接收组件的初始属性（props）作为参数。 主要作用如下：</p><ol><li>初始化状态</li><li>绑定方法</li><li>执行其他初始化操作</li></ol><h2 id="简述-react-中-hooks-是如何模拟组件的生命周期的" tabindex="-1"><a class="header-anchor" href="#简述-react-中-hooks-是如何模拟组件的生命周期的"><span>简述 React 中 hooks 是如何模拟组件的生命周期的？</span></a></h2><p>在函数式组件中，一般使用 useEffect 去模拟生命周期，通常是 componentDidMount、componentDidUpdate、componentWillUnmount</p><h2 id="简述什么是-react-中的错误边界" tabindex="-1"><a class="header-anchor" href="#简述什么是-react-中的错误边界"><span>简述什么是 React 中的错误边界？</span></a></h2><p>在 React 中，错误边界（Error Boundaries）是一种特殊的组件，用于捕获并处理其子组件中发生的 JavaScript 错误，从而避免整个应用崩溃。 错误边界的定义方法：</p><ol><li>componentDidCatch(error, info) 当子组件中发生错误时，错误边界的 componentDidCatch 方法会被调用。它接收两个参数，error 表示捕获到的错误对象，info 包含了错误的堆栈信息。</li><li>static getDerivedStateFromError(error) 该生命周期方法用于在错误边界的渲染过程中更新组件的状态。它接收错误对象作为参数，并返回一个新的状态对象，用于更新错误边界的状态。</li></ol><h2 id="执行两次-setstate-的时候会-render-几次-会不会立即触发" tabindex="-1"><a class="header-anchor" href="#执行两次-setstate-的时候会-render-几次-会不会立即触发"><span>执行两次 setState 的时候会 render 几次？会不会立即触发？</span></a></h2><p>render 的次数有可能是一次，也有可能是两次。具体需要看当时的场景。因为涉及到 setState 多次调用合并的问题、不立即触发是因为它是一个异步操作，不会堵塞 react 的渲染。</p><h2 id="简述什么是-react-fiber" tabindex="-1"><a class="header-anchor" href="#简述什么是-react-fiber"><span>简述什么是 React Fiber?</span></a></h2><p>React Fiber 是 React 中重新实现的一种用于调度和协调组件更新的新的协调引擎（reconciliation engine）。它是 React 16 版本引入的重要特性。</p><p>在 React 之前的版本中，React 使用递归的方式进行组件的调度和协调，称为栈调度。这种方式存在一些问题，例如当组件树层级较深或组件更新过程较长时，会导致主线程长时间被占用，造成用户界面的卡顿和不流畅。</p><p>为了解决这些问题，React Fiber 引入了一种基于纤程（fiber）的调度算法。纤程是一种轻量级的执行单元，可以在主线程的空闲时间内中断和恢复执行。React Fiber 将组件的调度和协调过程切分成多个优先级较低的小任务，并使用纤程调度算法在这些任务之间进行切换。</p><p>React Fiber 的主要目标是实现增量渲染（incremental rendering），即将渲染任务分解为多个小任务，并通过优先级调度算法来动态地分配时间片，以提高用户界面的响应性和流畅性。</p><p>以下是 React Fiber 的一些特点和优势：</p><ol><li><p>异步渲染：React Fiber 支持异步渲染，可以将渲染任务分解为多个小任务，并根据优先级动态调度，以提高用户界面的响应性。</p></li><li><p>优先级调度：React Fiber 实现了一套优先级调度算法，可以根据任务的优先级动态地分配时间片，以保证用户界面的流畅性和交互性。</p></li><li><p>任务分片：React Fiber 将组件的更新过程切分为多个小任务（fiber），可以在任务之间进行中断和恢复，从而更好地控制任务的执行顺序和时长。</p></li><li><p>错误边界改进：React Fiber 引入了新的错误处理机制，使得错误边界（Error Boundaries）能够捕获和处理组件更新过程中的错误。</p></li><li><p>更好的可控性：React Fiber 提供了更细粒度的控制和调度策略，使得开发人员能够更好地管理组件的更新过程，优化性能和用户体验。</p></li></ol><p>总而言之，React Fiber 是 React 中重新设计和实现的一种调度和协调引擎，通过引入纤程和优先级调度算法，使得 React 能够实现异步渲染和增量渲染，提高用户界面的响应性和流畅性。</p><h2 id="如何避免-react-组件的重新渲染" tabindex="-1"><a class="header-anchor" href="#如何避免-react-组件的重新渲染"><span>如何避免 React 组件的重新渲染？</span></a></h2><p>React 中最常见的问题之一是组件不必要地重新渲染。React 提供了两个方法，在这些情况下非常有用：</p><p>React.memo():这可以防止不必要地重新渲染函数组件 PureComponent:这可以防止不必要地重新渲染类组件 这两种方法都依赖于对传递给组件的 props 的浅比较，如果 props 没有改变，那么组件将不会重新渲染。虽然这两种工具都非常有用，但是浅比较会带来额外的性能损失，因此如果使用不当，这两种方法都会对性能产生负面影响。</p><p>通过使用 React Profiler，可以在使用这些方法前后对性能进行测量，从而确保通过进行给定的更改来实际改进性能。</p><h2 id="简述对-react-中-fragment-的理解-它的使用场景是什么" tabindex="-1"><a class="header-anchor" href="#简述对-react-中-fragment-的理解-它的使用场景是什么"><span>简述对 React 中 Fragment 的理解，它的使用场景是什么？</span></a></h2><p>react 的类组件或者是函数组件都只能返回一个根节点元素，当你需要返回多个节点元素时，就需要使用 Fragment 提供一层包裹，它本身是不会渲染真实的 dom 的。也可以使用&lt;&gt;&lt;/&gt;来替代。</p><h2 id="简述-react-的插槽-portals-的理解" tabindex="-1"><a class="header-anchor" href="#简述-react-的插槽-portals-的理解"><span>简述 React 的插槽(Portals)的理解？</span></a></h2><p>在 React 中，插槽（Portals）是一种特殊的功能，它允许你将组件的内容渲染到 DOM 树中的另一个位置，而不是默认的父级位置。</p><h2 id="react-并发模式是如何执行的" tabindex="-1"><a class="header-anchor" href="#react-并发模式是如何执行的"><span>React 并发模式是如何执行的？</span></a></h2><p>React 并发模式是一种用于改进 React 应用性能和用户体验的技术。它的目标是使应用在大型组件树中具备更好的响应性，并确保用户在与应用交互时不会遇到卡顿或阻塞。</p><p>在 React 并发模式中，React 使用了一种称为“时间分片”的技术来将工作分解为小的、可中断的任务。这些任务被称为“异步可中断任务”（Async Interruption Tasks），它们可以根据优先级逐步执行，而不会阻塞主线程。</p><p>React 并发模式的执行过程如下：</p><ol><li><p>任务切片（Task Slicing）：React 将工作切分成小的任务单元，每个任务单元的执行时间应该足够短，以便可以在主线程上执行而不会阻塞用户界面的响应。</p></li><li><p>任务调度（Task Scheduling）：React 使用调度器（Scheduler）来根据任务的优先级和截止时间安排任务的执行顺序。任务调度器可以根据需要重新安排任务的执行顺序，以确保用户交互的响应性。</p></li><li><p>任务优先级（Task Prioritization）：React 使用优先级来确定任务的重要性和紧迫性。它将任务分为不同的优先级级别，例如高优先级任务（如用户交互）和低优先级任务（如后台数据加载）。这样可以确保高优先级任务优先执行，以保证用户体验。</p></li><li><p>中断和恢复（Suspension and Resumption）：React 允许任务在执行过程中被中断，并在下一个时间片段继续执行。这种中断和恢复的机制使得 React 能够根据需要重新调整任务的执行顺序，以提供更好的用户响应性。</p></li></ol><p>通过这些步骤，React 并发模式能够有效地管理和调度任务的执行，从而提供更好的用户体验和性能。它可以确保关键任务的优先执行，同时保持应用的响应性，使得用户在与应用进行交互时感觉更加流畅和快速。</p><h2 id="react-如何实现强制刷新" tabindex="-1"><a class="header-anchor" href="#react-如何实现强制刷新"><span>React 如何实现强制刷新？</span></a></h2><p>.forceUpdate() 一个不常用的生命周期方法, 它的作用就是强制刷新</p><h2 id="简述原生事件和-react-事件的区别" tabindex="-1"><a class="header-anchor" href="#简述原生事件和-react-事件的区别"><span>简述原⽣事件和 React 事件的区别 ？</span></a></h2><ol><li>事件绑定方式：原生组件通常使用 addEventListener 方法来绑定，而 React 事件使用 JSX 语法中的事件处理函数属性来绑定事件。</li><li>事件命名：原生事件使用 DOM 标准的事件命名，如&quot;click&quot;、&quot;keydown&quot;等，而 React 事件使用驼峰式命名，如&quot;onClick&quot;、&quot;onKeyDown&quot;等。React 事件命名规范中的事件名是基于原生事件命名的。</li><li>事件处理函数参数：原生事件处理函数的参数包括事件对象（Event Object），可以通过事件对象获取事件的相关信息。而 React 事件处理函数的参数是一个合成事件对象（SyntheticEvent），它是 React 封装的跨浏览器的事件对象，提供了与原生事件相似的属性和方法。</li><li>事件冒泡和阻止默认行为：原生事件系统中，事件会按照 DOM 树的层次结构向上冒泡，可以使用事件对象的 stopPropagation 方法来停止事件冒泡，以及 preventDefault 方法来阻止事件的默认行为。在 React 中，事件也会冒泡，但是需要使用 e.stopPropagation()和 e.preventDefault()方法来实现。</li><li>事件绑定作用域：原生事件的事件处理函数在执行时，其作用域（this 指向）是绑定该事件的元素本身。而 React 事件处理函数的作用域默认是组件实例，因此可以直接访问组件的状态和属性。</li><li>事件合成：React 事件系统提供了事件合成（Event Pooling）的机制，在事件处理函数执行完毕后，会将事件对象进行重置和重用，以提高性能和减少内存占用。</li></ol><h2 id="简述为什么-react-并不推荐优先考虑使用-context" tabindex="-1"><a class="header-anchor" href="#简述为什么-react-并不推荐优先考虑使用-context"><span>简述为什么 React 并不推荐优先考虑使⽤ Context？</span></a></h2><ol><li>复杂性和维护成本增加：过度使用 Context 可能导致组件之间的耦合度增加，使代码复杂化，并增加了组件的维护成本。当多个组件共享相同的 Context 时，组件之间的关系变得更加隐晦，不易理解和调试。</li><li>组件复用和可移植性受限：Context 的使用会将组件与特定的上下文耦合在一起，使得组件变得难以复用和移植。当一个组件依赖于特定的 Context 时，它在其他上下文中的使用可能会变得困难，需要进行适应和重构。</li><li>测试和调试困难：使用 Context 的组件在测试和调试过程中可能会面临一些挑战。由于 Context 的依赖关系不够明确，对组件的测试和调试变得更加复杂和困难。</li><li>性能问题：Context 的更新会触发相关组件的重新渲染，当 Context 链中的某个 Context 更新时，与该 Context 相关的所有组件都会重新渲染。这可能导致不必要的性能开销，特别是在组件树较大或嵌套较深时。</li></ol><h2 id="简述-useeffect-与-uselayouteffect-的区别" tabindex="-1"><a class="header-anchor" href="#简述-useeffect-与-uselayouteffect-的区别"><span>简述 useEffect 与 useLayoutEffect 的区别 ？</span></a></h2><p>useEffect 和 useLayoutEffect 是 React 中用于处理副作用的两个 Hook。它们的主要区别在于触发时机和对页面渲染的影响。</p><ol><li>触发时机：useEffect 在组件渲染完成后异步执行，不会阻塞浏览器的渲染进程，即它会在浏览器完成绘制后执行。而 useLayoutEffect 在组件渲染到屏幕上之前同步执行，它会在浏览器执行绘制之前执行。</li><li>对页面渲染的影响：由于 useLayoutEffect 在组件渲染前立即执行，如果在该 Hook 中进行了对 DOM 的操作，可能会阻塞浏览器的渲染过程，导致页面出现闪烁或卡顿。因此，建议在 useLayoutEffect 中进行的操作尽量保持轻量，以避免对页面渲染性能产生负面影响。而 useEffect 在组件渲染完成后执行，不会对页面渲染造成阻塞。</li></ol><p>综上所述，一般情况下，优先使用 useEffect，因为它具有更好的性能和用户体验。只有在需要在 DOM 更新之前同步执行某些操作（如测量 DOM 元素的尺寸）时，才应该使用 useLayoutEffect。在大多数情况下，useEffect 是处理副作用的首选，而 useLayoutEffect 是一种更为特殊的、需要谨慎使用的情况下的选择。</p>',115)]))}const o=t(c,[["render",r],["__file","basics.html.vue"]]),p=JSON.parse('{"path":"/interview/react_interview/basics.html","title":"React","lang":"zh-CN","frontmatter":{"title":"React","description":"React"},"headers":[{"level":2,"title":"什么是 JSX？","slug":"什么是-jsx","link":"#什么是-jsx","children":[]},{"level":2,"title":"简述虚拟 DOM 的概念和机制？","slug":"简述虚拟-dom-的概念和机制","link":"#简述虚拟-dom-的概念和机制","children":[]},{"level":2,"title":"React 类组价和函数组件的区别是什么？","slug":"react-类组价和函数组件的区别是什么","link":"#react-类组价和函数组件的区别是什么","children":[]},{"level":2,"title":"简述 React 中 refs 的作用？","slug":"简述-react-中-refs-的作用","link":"#简述-react-中-refs-的作用","children":[]},{"level":2,"title":"解释为什么浏览器不能读取 JSX","slug":"解释为什么浏览器不能读取-jsx","link":"#解释为什么浏览器不能读取-jsx","children":[]},{"level":2,"title":"React 中 key 的作用","slug":"react-中-key-的作用","link":"#react-中-key-的作用","children":[]},{"level":2,"title":"React 和 Vue 的差异性和相似性","slug":"react-和-vue-的差异性和相似性","link":"#react-和-vue-的差异性和相似性","children":[]},{"level":2,"title":"React 中什么是受控组件和非控组件？","slug":"react-中什么是受控组件和非控组件","link":"#react-中什么是受控组件和非控组件","children":[]},{"level":2,"title":"React Hook 的使用限制有哪些？","slug":"react-hook-的使用限制有哪些","link":"#react-hook-的使用限制有哪些","children":[]},{"level":2,"title":"React 的严格模式如何使用，有什么用处？","slug":"react-的严格模式如何使用-有什么用处","link":"#react-的严格模式如何使用-有什么用处","children":[]},{"level":2,"title":"React 中如何处理事件？","slug":"react-中如何处理事件","link":"#react-中如何处理事件","children":[]},{"level":2,"title":"简述什么是 React 高阶组件？","slug":"简述什么是-react-高阶组件","link":"#简述什么是-react-高阶组件","children":[]},{"level":2,"title":"请简述 useCallback 和 useMemo 的使用场景 ？","slug":"请简述-usecallback-和-usememo-的使用场景","link":"#请简述-usecallback-和-usememo-的使用场景","children":[]},{"level":2,"title":"解释 React 组件的生命周期方法 ？","slug":"解释-react-组件的生命周期方法","link":"#解释-react-组件的生命周期方法","children":[]},{"level":2,"title":"解释 React 中的合成事件是什么？","slug":"解释-react-中的合成事件是什么","link":"#解释-react-中的合成事件是什么","children":[]},{"level":2,"title":"useState()的 state 是否可以直接修改？是否可以引起组件渲染？","slug":"usestate-的-state-是否可以直接修改-是否可以引起组件渲染","link":"#usestate-的-state-是否可以直接修改-是否可以引起组件渲染","children":[]},{"level":2,"title":"完整的简述 React 的 diff 过程 ？","slug":"完整的简述-react-的-diff-过程","link":"#完整的简述-react-的-diff-过程","children":[]},{"level":2,"title":"React shouldComponentUpdate 有什么用？","slug":"react-shouldcomponentupdate-有什么用","link":"#react-shouldcomponentupdate-有什么用","children":[]},{"level":2,"title":"什么是纯组件","slug":"什么是纯组件","link":"#什么是纯组件","children":[]},{"level":2,"title":"请用源码解释 React setState 调用的原理 ？","slug":"请用源码解释-react-setstate-调用的原理","link":"#请用源码解释-react-setstate-调用的原理","children":[]},{"level":2,"title":"解释 React Reducer 的作用？","slug":"解释-react-reducer-的作用","link":"#解释-react-reducer-的作用","children":[]},{"level":2,"title":"React 中如何避免不必要的 render？","slug":"react-中如何避免不必要的-render","link":"#react-中如何避免不必要的-render","children":[]},{"level":2,"title":"解释 React 中 render() 的目的和作用 ？","slug":"解释-react-中-render-的目的和作用","link":"#解释-react-中-render-的目的和作用","children":[]},{"level":2,"title":"请简述 React 组件的构造函数的作用？","slug":"请简述-react-组件的构造函数的作用","link":"#请简述-react-组件的构造函数的作用","children":[]},{"level":2,"title":"简述 React 中 hooks 是如何模拟组件的生命周期的？","slug":"简述-react-中-hooks-是如何模拟组件的生命周期的","link":"#简述-react-中-hooks-是如何模拟组件的生命周期的","children":[]},{"level":2,"title":"简述什么是 React 中的错误边界？","slug":"简述什么是-react-中的错误边界","link":"#简述什么是-react-中的错误边界","children":[]},{"level":2,"title":"执行两次 setState 的时候会 render 几次？会不会立即触发？","slug":"执行两次-setstate-的时候会-render-几次-会不会立即触发","link":"#执行两次-setstate-的时候会-render-几次-会不会立即触发","children":[]},{"level":2,"title":"简述什么是 React Fiber?","slug":"简述什么是-react-fiber","link":"#简述什么是-react-fiber","children":[]},{"level":2,"title":"如何避免 React 组件的重新渲染？","slug":"如何避免-react-组件的重新渲染","link":"#如何避免-react-组件的重新渲染","children":[]},{"level":2,"title":"简述对 React 中 Fragment 的理解，它的使用场景是什么？","slug":"简述对-react-中-fragment-的理解-它的使用场景是什么","link":"#简述对-react-中-fragment-的理解-它的使用场景是什么","children":[]},{"level":2,"title":"简述 React 的插槽(Portals)的理解？","slug":"简述-react-的插槽-portals-的理解","link":"#简述-react-的插槽-portals-的理解","children":[]},{"level":2,"title":"React 并发模式是如何执行的？","slug":"react-并发模式是如何执行的","link":"#react-并发模式是如何执行的","children":[]},{"level":2,"title":"React 如何实现强制刷新？","slug":"react-如何实现强制刷新","link":"#react-如何实现强制刷新","children":[]},{"level":2,"title":"简述原⽣事件和 React 事件的区别 ？","slug":"简述原生事件和-react-事件的区别","link":"#简述原生事件和-react-事件的区别","children":[]},{"level":2,"title":"简述为什么 React 并不推荐优先考虑使⽤ Context？","slug":"简述为什么-react-并不推荐优先考虑使用-context","link":"#简述为什么-react-并不推荐优先考虑使用-context","children":[]},{"level":2,"title":"简述 useEffect 与 useLayoutEffect 的区别 ？","slug":"简述-useeffect-与-uselayouteffect-的区别","link":"#简述-useeffect-与-uselayouteffect-的区别","children":[]}],"git":{"updatedTime":1709216895000,"contributors":[{"name":"Mrlishizhen","username":"Mrlishizhen","email":"718647063@qq.com","commits":4,"url":"https://github.com/Mrlishizhen"}]},"filePathRelative":"interview/react_interview/basics.md"}');export{o as comp,p as data};
