import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const text = "Learning React";

const Button = () => {
  const { setText } = useContext(DataContext);
  return (
    <div>
      <button onClick={() => setText(text)}>Cambiar texto</button>
    </div>
  );
};

export default Button;
