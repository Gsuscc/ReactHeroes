import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const GlobalContext = createContext();

export const GlobalState = (props) => {
  const [heroes, setHeroes] = useState([]);
  const [id, setId] = useState(1);
  return (
    <GlobalContext.Provider value={{ heroId: [id, setId] }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
