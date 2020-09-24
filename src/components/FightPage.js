import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import { HeroCard } from "./HeroCard";
import DragCard from "./dnd/DragCard";
import DropBoard from "./dnd/DropBoard";

export const FightPage = () => {
  const { marker, greenTeam, redTeam } = useContext(GlobalContext);
  const [markedCards, setMarkedCards] = marker;
  const [greenCorner, setGreenCorner] = greenTeam;
  const [redCorner, setRedCorner] = redTeam;

  if (markedCards.length <= 0) {
    return <div>Arena is Empty</div>;
  }

  const dropGreen = (hero) => {
    console.log(hero);
  };
  const dropRed = (hero) => {
    console.log(hero);
  };

  return (
    <div className="arenaContainer">
      <DropBoard id="heroQueue" className="cardBox">
        {markedCards.map((hero) => {
          return (
            <DragCard id={`card-${hero.id}`} draggable="true">
              <HeroCard hero={hero} key={hero.id} />
            </DragCard>
          );
        })}
      </DropBoard>
      <div className="teamsContainer">
        <DropBoard
          id="greenCorner"
          className="dropZone cardBox"
          onDrop={dropGreen.bind(this)}
        ></DropBoard>
        <DropBoard
          id="RedCorner"
          className="dropZone cardBox"
          onDrop={dropRed.bind(this)}
        ></DropBoard>
      </div>
    </div>
  );
};
