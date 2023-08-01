import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function Text2() {
  const { text } = useContext(DataContext);

  return (
    <>
      <p>Component 2</p>
      <pre>{JSON.stringify(text, null, 2)}</pre>
    </>
  );
}
export default Text2;
