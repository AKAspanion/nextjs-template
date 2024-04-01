import { createStore } from "zustand/vanilla";
// import { persist, createJSONStorage } from "zustand/middleware";

export type CounterState = {
  counter: number;
};

export type CounterActions = {
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

export type CounterStore = CounterState & CounterActions;

export const defaultInitState: CounterState = {
  counter: 0,
};

export const createCounterStore = (
  propState: Partial<CounterState> = defaultInitState,
) => {
  const initState = { ...defaultInitState, ...propState };
  return createStore<CounterStore>()(
    // persist(
    (set) => ({
      ...initState,
      increaseCounter: async () => {
        set((state) => ({ counter: state.counter + 1 }));
      },
      decreaseCounter: async () => {
        set((state) => ({ counter: state.counter - 1 }));
      },
    }),
    //   {
    //     name: "counter-storage",
    //     storage: createJSONStorage(() => sessionStorage),
    //   },
    // ),
  );
};
