import { useEffect, useState } from "react";

export default function App() {
    // State variable for the count, initialized to 0
    const [count, setCount] = useState(0);
    // State variable to track if the counter is active (running)
    const [active, setActive] = useState(false);
    // Variable to hold the interval ID
    let intervalId = null; 

    // Effect to manage the interval based on the 'active' state
    useEffect(() => {
        // If the counter is active, set up an interval
        if (active) {
            intervalId = setInterval(() => {
                // Increment the count every second
                setCount(prev => prev + 1);
            }, 1000);
        } else {
            // If not active, clear the interval
            clearInterval(intervalId);
        }
        // Clean up the interval on component unmount or when 'active' changes
        return () => clearInterval(intervalId);
    }, [active]); // Dependency array to run effect when 'active' changes

    // Function to start the counter
    const startCount = () => {
        setActive(true); // Set active state to true
    };

    // Function to pause the counter
    const pauseCount = () => {
        setActive(false); // Set active state to false
    };

    // Function to reset the counter
    const resetCount = () => {
        setActive(false); // Pause the counter
        setCount(0); // Reset count to 0
    };

    return (
        <div>
            {/* Display the current count */}
            <div className="counter">{count}</div>
            <div className="controls">
                {/* Buttons to control the counter */}
                <button onClick={startCount}>Start</button>
                <button onClick={pauseCount}>Pause</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    );
}
