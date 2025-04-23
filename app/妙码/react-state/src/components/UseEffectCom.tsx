import { useEffect, useState } from "react";

export default function UseEffectCom() {
  const [title, setTitle] = useState("提示信息");

  useEffect(() => {
    setTimeout(() => {
        setTitle('新提示信息')
    }, 2000);
  }, [title]);

  const handleClick = () => {
    setTitle("提示信息");
  };
  return (
    <div>
      <h2>useEffect</h2>
      {title}
      <button onClick={handleClick}>重置</button>
    </div>
  );
}
