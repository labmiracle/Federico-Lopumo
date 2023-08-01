import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  return (
    <>
      <div>{counter}</div>
      <div className="card">
        <button onClick={decrement}> - </button>
        <button onClick={increment}> + </button>
      </div>
    </>
  );
};

export default Counter;
