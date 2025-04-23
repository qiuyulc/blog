import { useState, useImperativeHandle, Ref, useRef, forwardRef } from "react";
type ChildrenRef = { count: number; setCount: (count: number) => void };
export function ChildrenRefCom(props: { ref: Ref<ChildrenRef> }) {
  const { ref } = props;
  const [count, setCount] = useState(0);

  useImperativeHandle(
    ref,
    () => {
      return {
        count,
        setCount,
      };
    },
    [count]
  );

  return <div>{count}</div>;
}

const ChildrenRefCom2 = forwardRef((props, ref: Ref<ChildrenRef>) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(
    ref,
    () => {
      return {
        count,
        setCount,
      };
    },
    [count]
  );
  return (
    <div>
      <h3>react 18需要使用forwardRef</h3>
      {count}
    </div>
  );
});

function UseRefCom() {
  const childrenRef = useRef<ChildrenRef>(null);
  const childrenRef2 = useRef<ChildrenRef>(null);
  return (
    <div>
      <h2>useRef</h2>
      react19
      <ChildrenRefCom ref={childrenRef} />
      <button
        onClick={() => {
          if (childrenRef.current) {
            alert(childrenRef.current?.count);
          }
        }}
      >
        获取子组件的数据
      </button>
      <button
        onClick={() => {
          if (childrenRef.current) {
            childrenRef.current.setCount(100);
          }
        }}
      >
        执行子组件的方法
      </button>
      <hr />
      react18
      <ChildrenRefCom2 ref={childrenRef2} />
      <button
        onClick={() => {
          if (childrenRef2.current) {
            alert(childrenRef2.current?.count);
          }
        }}
      >
        获取子组件的数据
      </button>
      <button
        onClick={() => {
          if (childrenRef2.current) {
            childrenRef2.current.setCount(200);
          }
        }}
      >
        执行子组件的方法
      </button>
    </div>
  );
}

export default UseRefCom;
