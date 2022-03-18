import useCountUsingReducer from "./useCountUsingReducer";
import useCount from "./useCount";

export default function App() {
  const { count, inc, dec, incBy } = useCount(1000);

  return (
    <div>
      <div>count {count}</div>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={() => incBy(300)}>inc by</button>
    </div>
  );
}
