import React, { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalState = (props) => {
  const [id, setId] = useState(1);
  const [markedCards, setMarkedCards] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        heroId: [id, setId],
        marker: [markedCards, setMarkedCards],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
