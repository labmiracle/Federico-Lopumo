import React, { useState } from "react";

function Select() {
  const [select, setSelect] = useState("");

  function handleSelectChange(e) {
    setSelect(e.target.value);
  }

  return (
    <div className="select-styles">
        <select value={select} onChange={handleSelectChange}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Svelte">Svelte</option>
        </select>
    </div>
    
  );
}

export default Select;