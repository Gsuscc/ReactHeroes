import React, { useContext } from "react";
import { GlobalState, GlobalContext } from "./GlobalState";
import { HeroCard } from "./components/HeroCard";

import "./App.css";

function App() {
  console.log(useContext(GlobalContext));
  const { heroId } = useContext(GlobalContext);
  const [id, setId] = heroId;

  const getHeroes = () => {
    let heroesList = [];
    for (let i = 1; i < 10; i++) {
      heroesList.push(<HeroCard key={id} />);
      setId((id) => {
        id++;
      });
    }
    return heroesList;
  };

  return (
    <GlobalState>
      <div className="App">
        {getHeroes().map((hero) => {
          return hero;
        })}
      </div>
    </GlobalState>
  );
}

export default App;
