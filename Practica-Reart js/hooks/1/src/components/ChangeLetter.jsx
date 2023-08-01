import React, { useState } from "react";


const ChangeLetter = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    const replace = e.target.value.replace("a", "b");
    setInputText(replace);
  };

  return <input type="text" value={inputText} onChange={handleChange} />;
};

export default ChangeLetter;
