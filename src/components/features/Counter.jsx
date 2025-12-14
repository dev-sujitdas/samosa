import { useEffect, useState } from "react";

const useCounter = (min, max, speed = 100) => {
  const [count, setCount] = useState(min);

  useEffect(() => {
    let current = min;

    const timer = setInterval(() => {
      if (current >= max) {
        clearInterval(timer);
        return;
      }
      current++;
      setCount(current);
    }, speed);

    return () => clearInterval(timer);
  }, [min, max, speed]);

  return count;
};

export default useCounter;
