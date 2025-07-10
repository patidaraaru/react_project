import { useState } from "react";

const useCustom = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return { Increment, Decrement, count };
};

export default useCustom;
