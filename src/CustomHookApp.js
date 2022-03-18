import MyCounter from "./MyCounter";
import useCount from "./useCount";

function App() {
  const { count, inc, dec, incBy } = useCount(10);
  const { count: secondCount, inc: inSec } = useCount(1111111111);
  const { count: thrid } = useCount(33333);
  const { count: fourdj } = useCount(4444);
  const { count: five } = useCount(55555);

  return (
    <div>
      <div>app count: {count}</div>
      <div onClick={inSec}>second count {secondCount}</div>
      <div>third count {thrid}</div>
      <div>fourth coutn {fourdj}</div>
      <div>five coutn {five}</div>
      <div>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        <button onClick={(e) => incBy(10)}>inc by 10</button>
      </div>
      <MyCounter />
      <MyCount />
    </div>
  );
}

function MyCount() {
  const { count } = useCount(2000);
  const { count: third } = useCount(5000);
  return <div>{count}</div>;
}

export default App;
