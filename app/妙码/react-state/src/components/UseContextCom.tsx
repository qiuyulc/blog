import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
const UseContextCom = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, setTheme } = context;
  return (
    <div>
      <h2>useContext</h2>
      <div>{theme}</div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        改变主题色
      </button>
    </div>
  );
};

export default UseContextCom;
