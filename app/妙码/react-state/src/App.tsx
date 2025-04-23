import "./App.css";
import UseStateCom from "./components/UseStateCom";
import UseEffectCom from "./components/UseEffectCom";
import UseRefCom from "./components/UseRefCom";
import UseCallBackCom from "./components/UseCallBackCom";
import UseMemoCom from "./components/UseMemoCom";
import UseContextCom from "./components/UseContextCom";
import ThemeProvider from "./components/context/ThemeProvider";
import UseReducerCom from "./components/UseReducerCom";
import UseLayoutEffect from "./components/UseLayoutEffect";
// 定义一个名为App的函数组件
function App() {
  // 返回一个包含三个子组件的JSX元素
  return (
    <>
      {/* 使用useState的组件 */}
      <UseStateCom />
      {/* 使用useEffect的组件 */}
      <UseEffectCom />
      {/* 使用useRef的组件 */}
      <UseRefCom />
      <UseCallBackCom />
      <UseMemoCom />
      <ThemeProvider>
        <UseContextCom />
      </ThemeProvider>

      <UseReducerCom></UseReducerCom>

      <UseLayoutEffect></UseLayoutEffect>
    </>
  );
}

export default App;
