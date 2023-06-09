import { create } from "zustand";

const useCounterStore = create( (set) => {
    return {
        counter: 0,

        foo: 'bar',

        increase: () => set( (currState) => {
            return {
                counter: currState.counter + 1
            };
        }),
        decrease: () => set( (currState) => {
            return {
                counter: currState.counter - 1
            };
        }),
        reset: () => set({counter: 0})
    };
});

export default useCounterStore;