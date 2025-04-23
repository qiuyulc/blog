import { useReducer } from "react";

interface State {
  count: number;
}

interface Action {
  type: "increment" | "decrement";
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const UseReducerCom = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default UseReducerCom;
