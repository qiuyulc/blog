import { useMemo, useState } from "react";

export default function UseMemoCom() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [count, setCount] = useState(0);
  const listMemo = useMemo(() => {
    console.log(123)
    return (
      <ul>
        {list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    );
  }, [list]);
  return (
    <div>
      <h2>useMemo</h2>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>点击增加</button>
      <button onClick={()=>setList([...list, list.length+1])}>增加list</button>
      {listMemo}
    </div>
  );
}
