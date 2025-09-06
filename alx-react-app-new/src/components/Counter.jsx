// use useState hook to create a counter component
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "0 5px", padding: "10px 20px" }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "0 5px", padding: "10px 20px" }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: "0 5px", padding: "10px 20px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
