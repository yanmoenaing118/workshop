import { useState } from "react";

export default function useCount(value) {
  const [count, setCount] = useState(value);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const incBy = (amount) => setCount(count + amount);

  return {
    count,
    inc,
    dec,
    incBy
  };
}
