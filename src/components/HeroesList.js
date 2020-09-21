import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import { HeroCard } from "./HeroCard";

export const HeroesList = (props) => {
  const { heroId } = useContext(GlobalContext);
  const [id, setId] = heroId;

  let page = 0;

  const getHeroes = () => {
    let heroesList = [];
    for (let i = page * 10 + 1; i < page * 10 + 10; i++) {
      heroesList.push(<HeroCard id={i} key={i} />);
    }
    return heroesList;
  };

  return <div className="heroContainer">{getHeroes().map((hero) => hero)}</div>;
};
