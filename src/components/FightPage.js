import React, { useContext, useCallback, useRef } from "react";
import { GlobalContext } from "../GlobalState";
import { HeroCard } from "./HeroCard";
import DragCard from "./dnd/DragCard";
import DropBoard from "./dnd/DropBoard";

export const FightPage = () => {
  const { marker, greenTeam, redTeam } = useContext(GlobalContext);
  const [markedCards, setMarkedCards] = marker;
  const [greenCorner, setGreenCorner] = greenTeam;
  const [redCorner, setRedCorner] = redTeam;
  const draggedHero = useRef(null);
  const leaveFromSetter = useRef(null);
  const leaveFromValue = useRef(null);
  const onDrop = useCallback(
    (setter) => {
      leaveFromSetter.current(
        leaveFromValue.current.filter(
          (item) => item.id !== draggedHero.current.id
        )
      );
      setter((value) => [...value, draggedHero.current]);
    },
    [draggedHero, leaveFromSetter, leaveFromValue]
  );

  const onLeave = useCallback(
    (setter, value) => {
      leaveFromSetter.current = setter;
      leaveFromValue.current = value;
    },
    [leaveFromSetter, leaveFromValue]
  );

  const onDrag = useCallback(
    (hero) => {
      draggedHero.current = hero;
    },
    [draggedHero]
  );

  if (markedCards.length <= 0) {
    return <div>Arena is Empty</div>;
  }

  return (
    <div className="arenaContainer">
      <DropBoard
        id="heroQueue"
        className="cardBox"
        callbackDrop={onDrop}
        callbackLeave={onLeave}
        setter={setMarkedCards}
        value={markedCards}
      >
        {markedCards.map((hero) => {
          return (
            <DragCard
              id={`card-${hero.id}`}
              draggable={true}
              callback={onDrag}
              hero={hero}
            >
              <HeroCard hero={hero} key={hero.id} />
            </DragCard>
          );
        })}
      </DropBoard>
      <div className="teamsContainer">
        <DropBoard
          id="greenCorner"
          className="dropZone cardBox"
          callbackDrop={onDrop}
          callbackLeave={onLeave}
          setter={setGreenCorner}
          value={greenCorner}
        >
          {greenCorner.map((hero) => {
            return (
              <DragCard
                id={`card-${hero.id}`}
                draggable={true}
                callback={onDrag}
                hero={hero}
              >
                <HeroCard hero={hero} key={hero.id} />
              </DragCard>
            );
          })}
        </DropBoard>
        <DropBoard
          id="redCorner"
          className="dropZone cardBox"
          callbackDrop={onDrop}
          callbackLeave={onLeave}
          setter={setRedCorner}
          value={redCorner}
        >
          {redCorner.map((hero) => {
            return (
              <DragCard
                id={`card-${hero.id}`}
                draggable={true}
                callback={onDrag}
                hero={hero}
              >
                <HeroCard hero={hero} key={hero.id} />
              </DragCard>
            );
          })}
        </DropBoard>
      </div>
    </div>
  );
};
