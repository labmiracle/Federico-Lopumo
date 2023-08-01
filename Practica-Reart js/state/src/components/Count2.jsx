import { useState } from "react";

const Counter2 = () => {
  const [text, setText] = useState("");
  const letters = ["R", "E", "A", "C", "T"];

  const increment = () => {
    const index = Math.floor(Math.random() * letters.length);
    const aleatoryLetter = letters[index];
    setText(text + aleatoryLetter);
  };

  const decrement = () => {
    setText(text.substring(0, text.length - 1));
  };

  return (
    <>
      <div>{text}</div>
      <div className="card">
        <button onClick={decrement}> - </button>
        <button onClick={increment}> + </button>
      </div>
    </>
  );
};
export default Counter2;
