import React, { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalState = (props) => {
  const [id, setId] = useState(1);
  return (
    <GlobalContext.Provider value={{ heroId: [id, setId] }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
