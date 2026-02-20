import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter" data-testid="counter">
      <h2 className="counter-title">Counter</h2>
      <div className="counter-display" data-testid="counter-display">
        {count}
      </div>
      <div className="counter-buttons">
        <button
          onClick={decrement}
          className="counter-button decrement"
          data-testid="decrement-button"
          aria-label="Decrement"
        >
          -
        </button>
        <button
          onClick={reset}
          className="counter-button reset"
          data-testid="reset-button"
          aria-label="Reset"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="counter-button increment"
          data-testid="increment-button"
          aria-label="Increment"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
