import React, { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalState = (props) => {
  const [id, setId] = useState(1);
  const [markedCards, setMarkedCards] = useState([]);
  const [greenCorner, setGreenCorner] = useState([]);
  const [redCorner, setRedCorner] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        heroId: [id, setId],
        marker: [markedCards, setMarkedCards],
        greenTeam: [greenCorner, setGreenCorner],
        redTeam: [redCorner, setRedCorner],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
