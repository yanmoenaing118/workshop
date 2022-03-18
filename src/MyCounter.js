import useCount from "./useCount";

export default function MyCounter() {
  const { count, inc, dec } = useCount(5);

  return (
    <div>
      <div>MY counter component</div>
      <div>count : {count}</div>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
    </div>
  );
}
