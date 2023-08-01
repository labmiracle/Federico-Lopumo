import React from "react";

function Buttons({ setCounter, counter }) {
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default Buttons;
