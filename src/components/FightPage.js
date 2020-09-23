import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import { HeroCard } from "./HeroCard";

export const FightPage = () => {
  const { marker } = useContext(GlobalContext);
  const [markedCards, setMarkedCards] = marker;

  return (
    <div className="heroContainer">
      {markedCards.map((hero) => {
        return <HeroCard hero={hero} key={hero.id} />;
      })}
    </div>
  );
};
