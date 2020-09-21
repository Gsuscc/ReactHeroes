import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import { HeroesList } from "./components/HeroesList";
import styled from "styled-components";

import "./App.css";

const H1 = styled.h1`
  font-family: superHeroFont;
  font-size: 3.5rem;
  text-align: center;
  color: brown;
`;

function App() {
  return (
    <div className="App">
      <H1>Heroes of React</H1>
      <HeroesList />
    </div>
  );
}

export default App;
