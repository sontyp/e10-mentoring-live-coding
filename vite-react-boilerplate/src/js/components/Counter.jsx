// Import the store hook
import useCounterStore from "../hooks/useCounterStore";

export default function Counter() {
    // get access to the counter property from your global store by using our store hook
    // make sure to extract only those properties, you need
    // if using the complete store instead of extracting single properties
    // the component is going to re-render on ANY state change within the store
    const count = useCounterStore((state) => state.counter);

    const increase = useCounterStore(state => state.increase);
    const decrease = useCounterStore(state => state.decrease);
    const reset = useCounterStore(state => state.reset);
    
    return (<>
        <h2 className="text-2xl mx-2 my-2">Count: {count}</h2>
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => increase()}
        >+</button>
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {if (count > 0) decrease()}}
        >-</button>
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => reset()}    
        >Reset</button>
    </>);
}