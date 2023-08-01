import React, { useState, useEffect } from "react";

const Hook2 = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
  };

  useEffect(() => {
    if (!show) {
      console.log("Desmontado!");
    }
  }, [show]);

  return (
    <div>
      {show ? (
        <button onClick={handleClick}>Desmontar</button>
      ) : (
        <div>El componente ha sido desmontado.</div>
      )}
    </div>
  );
};

export default Hook2;
