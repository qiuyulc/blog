import { useCallback, useState, memo } from "react";

const ChildrenCom = memo((props: { onClick: () => void }) => {
  const { onClick } = props;
  return <button onClick={onClick}>增加</button>;
});

const ChildrenComCallBack = memo((props: { onClick: () => void }) => {
  const { onClick } = props;
  return <button onClick={onClick}>callback 增加</button>;
});

export default function UseCallBackCom() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((c: number) => c + 1);
  };

  const onClickCallBack = useCallback(() => {
    setCount((c: number) => c + 1);
  }, []);
  return (
    <div>
      <h2>useCallBack</h2>
      {count}
      <ChildrenCom onClick={onClick} />
      <br />
      <ChildrenComCallBack onClick={onClickCallBack} />
    </div>
  );
}
