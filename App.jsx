import { useEffect, useState } from "react";

export default function App() {
  // State to keep track of the counter value
  const [count, setCount] = useState(0);
  // State to determine if the counter is active
  const [isActive, setIsActive] = useState(false);
  let intervalId = null; // Variable to hold the interval ID

  // Effect to manage the counter's interval
  useEffect(() => {
    // If the counter is active, start the interval
    if (isActive) {
      intervalId = setInterval(() => {
        setCount(prev => prev + 1); // Increment the count every second
      }, 1000);
    } else {
      clearInterval(intervalId); // Clear the interval if not active
    }
    // Cleanup function to clear the interval when the component unmounts or isActive changes
    return () => clearInterval(intervalId);
  }, [isActive]); // Dependency array to re-run effect when isActive changes

  // Function to start the counter
  const startCounter = () => {
    setIsActive(true); // Set isActive to true to start the counter
  };

  // Function to toggle between pause and resume
  const pauseCounter = () => {
    setIsActive(prev => !prev); // Toggle isActive state
  };

  // Function to reset the counter
  const resetCounter = () => {
    setIsActive(false); // Stop the counter
    setCount(0); // Reset count to 0
  };

  return (
    <div>
      <div className="counter">{count}</div> {/* Display the current count */}
      <div className="controls">
        <button onClick={startCounter}>Start</button> {/* Button to start the counter */}
        <button onClick={pauseCounter}>{isActive ? "Pause" : "Resume"}</button> {/* Toggle button for pause/resume */}
        <button onClick={resetCounter}>Reset</button> {/* Button to reset the counter */}
      </div>
    </div>
  );
}
