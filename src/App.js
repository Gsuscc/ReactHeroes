import React from "react";
import { HeroesList } from "./components/HeroesList";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FightPage } from "./components/FightPage";

import "./App.css";
import HeroDetails from "./components/HeroDetails";

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
      <Router>
        <div className="header">
          <H1>Heroes of React</H1>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <HeroesList />
          </Route>
          <Route path="/fight">
            <FightPage />
          </Route>
          <Route path="/hero" component={HeroDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
