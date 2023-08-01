import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function Text1() {
  const { text } = useContext(DataContext);

  return (
    <>
      <p>Component 1</p>

      <pre>{JSON.stringify(text, null, 2)}</pre>
    </>
  );
}

export default Text1;
