"use client";
import { Button } from "@/components/ui/button";
import useCounter from "@/hooks/use-counter";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function Counter() {
  const { counter, increaseCounter, decreaseCounter } = useCounter();
  return (
    <div className="flex gap-6 items-center">
      <Button onClick={() => increaseCounter()}>
        <PlusIcon />
      </Button>
      {counter}
      <Button onClick={() => decreaseCounter()}>
        <MinusIcon />
      </Button>
    </div>
  );
}
