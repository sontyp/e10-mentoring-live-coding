import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
    // timer set to 10 seconds initally
    const [timer, setTimer] = useState(10);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            console.log('The timer is running!');
            interval = setInterval(() => {
                if (timer !== 0) {
                    setTimer(curr => curr-1);
                }
            }, 1000);

        } else {
            console.log('The timer stopped!');
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        if (timer < 1) setIsRunning(false);
    }, [timer]);

    function startHandler(evt) {
        setIsRunning(true);
    }

    function stopHandler(evt) {
        setIsRunning(false);
    }

    function resetHandler(evt) {
        setTimer(10);
    }

    return (
        <div>
            <p>Seconds left: {timer}</p>
            <button
                onClick={startHandler}
            >Start</button>

            <button
                onClick={stopHandler}
            >Stop</button>


            <button
                onClick={resetHandler}
            >Reset</button>
        </div>
    );
}