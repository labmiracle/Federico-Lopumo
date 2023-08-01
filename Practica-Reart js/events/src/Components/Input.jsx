import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="input-styles">
      <input type="text" value={input} onChange={handleInputChange} />
    </div>
  );
}

export default Input;
