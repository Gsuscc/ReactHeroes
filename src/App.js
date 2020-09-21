import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import { HeroesList } from "./components/HeroesList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HeroesList />
    </div>
  );
}

export default App;
