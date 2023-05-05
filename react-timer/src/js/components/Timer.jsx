import { useEffect } from "react";
import { useState } from "react";

export default function Timer({time}) {
    // timer set to 10 seconds initally
    const [timer, setTimer] = useState(time);
    const [isRunning, setIsRunning] = useState(false);

    // create a side-effect depending on changes of the isRunning state variable
    useEffect(() => {
        // Variable to store the interval reference
        let interval;

        // if running state has been set to true
        if (isRunning) {
            console.log('The timer is running!');

            // Start a new interval, which is going to run once a second (1000ms)
            interval = setInterval(() => {
                // if the timer state variable is still greater than 0
                if (timer > 0) {
                    // decrease it by one
                    setTimer(curr => curr-1);
                }
            }, 1000);

        } else { // isRunning has been set to false
            console.log('The timer stopped!');

            // clear the interval, it's not gonna run anymore
            clearInterval(interval);
        }

        // return a clean-up function which clears the running interval to make sure
        // that there's always just one of them running at once
        return () => clearInterval(interval);
    }, [isRunning]);

    // a side-effect for the timer change
    useEffect(() => {
        // if the timer state variable reaches 0, it stops the timer
        if (timer < 1) setIsRunning(false);
    }, [timer]);

    // click handler for the start button
    function startHandler(evt) {
        // start the timer
        setIsRunning(true);
    }

    // click handler for the stop button
    function stopHandler(evt) {
        // stop the timer
        setIsRunning(false);
    }

    // click handler for the reset button
    function resetHandler(evt) {
        // set the timer (state variable) to its inital value
        setTimer(time);
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