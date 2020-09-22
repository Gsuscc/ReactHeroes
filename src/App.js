import React from "react";
import { HeroesList } from "./components/HeroesList";
import styled from "styled-components";

import "./App.css";

const H1 = styled.h1`
  font-family: superHeroFont;
  font-size: 3.5rem;
  text-align: center;
  color: white;
  background-color: red;
  max-width: 450px;
  min-width: 400px;
  letter-spacing: 1px;
  border-radius: 1px;
`;

function App() {
  return (
    <div className="App">
      <div className="header">
        <H1>Heroes of React</H1>
      </div>
      <HeroesList />
    </div>
  );
}

export default App;
