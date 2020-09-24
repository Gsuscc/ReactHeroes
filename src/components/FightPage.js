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
  const validTarget = useRef(null);
  const leaveFrom = useRef(null);

  const onDrop = useCallback(() => {
    if (validTarget.current) {
      validTarget.current.setter((value) => [...value, draggedHero.current]);
      leaveFrom.current.setter(
        leaveFrom.current.value.filter((x) => x.id !== draggedHero.current.id)
      );
    }
  }, [draggedHero, validTarget, leaveFrom]);

  const onEnter = useCallback(
    (setter, value) => {
      validTarget.current = {
        setter: setter,
        value: value,
      };
      console.log(validTarget.current);
    },
    [validTarget]
  );

  const onLeave = useCallback(() => {
    validTarget.current = null;
    console.log("leave");
  }, [validTarget]);

  const onDrag = useCallback(
    (hero, leavedFrom) => {
      draggedHero.current = hero;
      leaveFrom.current = leavedFrom;
    },
    [draggedHero, leaveFrom]
  );

  if (
    markedCards.length <= 0 &&
    greenCorner.length <= 0 &&
    redCorner.length <= 0
  ) {
    return <div>Arena is Empty</div>;
  }

  return (
    <div className="arenaContainer">
      <DropBoard
        id="heroQueue"
        className="cardBox"
        callbackDrop={onDrop}
        callbackLeave={onLeave}
        callbackEnter={onEnter}
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
              className="draggableCard"
              setter={setMarkedCards}
              value={markedCards}
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
          callbackEnter={onEnter}
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
                className="draggableCard"
                setter={setGreenCorner}
                value={greenCorner}
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
          callbackEnter={onEnter}
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
                className="draggableCard"
                setter={setRedCorner}
                value={redCorner}
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
