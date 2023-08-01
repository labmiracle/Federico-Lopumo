import Text1 from "./Text1";
import Text2 from "./Text2";
import Button from "./Button";
import { DataProvider } from "../contexts/DataContext";
import { useState } from "react";

function MainText() {
  return (
    <DataProvider>
      <>
        <Text1 />
        <Text2 />

        <Button />
      </>
    </DataProvider>
  );
}

export default MainText;

alert;
