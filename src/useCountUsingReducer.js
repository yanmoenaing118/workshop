import { useReducer } from "react";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "INC":
      return { ...prevState, count: prevState.count + 1 };
    case "DEC":
      return { ...prevState, count: prevState.count - 1 };
    case "INC_BY":
      return { ...prevState, count: prevState.count + action.payload };
    default:
      return prevState;
  }
};

export default function useCountUsingReducer(value) {
  const [state, dispatch] = useReducer(reducer, {
    count: value,
  });

  const inc = () => dispatch({ type: "INC" });

  const dec = () => dispatch({ type: "DEC" });

  const incBy = (amount) => dispatch({ type: "INC_BY", payload: amount });

  return {
    count: state.count,
    inc,
    dec,
    incBy
  };
}
