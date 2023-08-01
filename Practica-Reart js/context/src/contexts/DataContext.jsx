import React, { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

const data = "Aprendiendo React";

export const DataProvider = ({ children }) => {
  const [text, setText] = useState(data);
  return (
    <DataContext.Provider
      value={{
        text,
        setText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
