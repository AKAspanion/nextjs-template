"use client";

import { useCounterStore } from "@/store/counter/provider";

const useCounter = () => {
  const { counter, increaseCounter, decreaseCounter } = useCounterStore(
    (s) => s,
  );

  return { counter, increaseCounter, decreaseCounter };
};

export default useCounter;
