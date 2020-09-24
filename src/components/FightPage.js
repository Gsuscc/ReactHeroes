import React, { useContext, useCallback, useRef, useState } from "react";
import { GlobalContext } from "../GlobalState";
import { HeroCard } from "./HeroCard";
import DragCard from "./dnd/DragCard";
import DropBoard from "./dnd/DropBoard";
import useSound from "use-sound";
import slap from "../sounds/slap.mp3";

export const FightPage = () => {
  const [play] = useSound(slap, { volume: 0.5 });
  const { marker, greenTeam, redTeam } = useContext(GlobalContext);
  const [markedCards, setMarkedCards] = marker;
  const [greenCorner, setGreenCorner] = greenTeam;
  const [redCorner, setRedCorner] = redTeam;
  const draggedHero = useRef(null);
  const validTarget = useRef(null);
  const leaveFrom = useRef(null);

  const onDrop = useCallback(() => {
    console.log("drag", validTarget.current);
    if (validTarget.current) {
      validTarget.current.setter((value) => [...value, draggedHero.current]);
      leaveFrom.current.setter(
        leaveFrom.current.value.filter((x) => x.id !== draggedHero.current.id)
      );
    }
    let overlays = document.querySelectorAll(".overlay");
    overlays.forEach((item) => (item.style.zIndex = "-20"));
  }, [draggedHero, validTarget, leaveFrom]);

  const onEnter = useCallback(
    (setter, value) => {
      validTarget.current = {
        setter: setter,
        value: value,
      };
    },
    [validTarget]
  );

  const onLeave = useCallback(() => {
    setTimeout(() => (validTarget.current = null), 20);

    console.log("leave");
  }, [validTarget]);

  const onDrag = useCallback(
    (hero, leavedFrom) => {
      draggedHero.current = hero;
      leaveFrom.current = leavedFrom;
    },
    [draggedHero, leaveFrom]
  );
  const powerCalculator = (powerStats) => {
    return Object.keys(powerStats).reduce((sum, key) => {
      return sum + parseInt(powerStats[key] || 0);
    }, 0);
  };

  const fight = () => {
    play();
    let redHero = redCorner[0];
    let greenHero = greenCorner[0];
    if (!redHero || !greenHero) return;
    console.log(powerCalculator(redHero.powerstats));
    console.log(powerCalculator(greenHero.powerstats));
    if (
      powerCalculator(redHero.powerstats) <=
      powerCalculator(greenHero.powerstats)
    ) {
      setRedCorner((redCorner) => []);
    } else {
      setGreenCorner((greenCorner) => []);
    }
  };

  if (
    markedCards.length <= 0 &&
    greenCorner.length <= 0 &&
    redCorner.length <= 0
  ) {
    return <div>Arena is Empty</div>;
  }

  const clearArena = () => {
    setGreenCorner((greenCorner) => []);
    setRedCorner((redCorner) => []);
    setMarkedCards((markedCards) => []);
  };

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
              callbackDrop={onDrop}
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
      <div>
        <img
          className="the-end"
          onClick={clearArena}
          src="./the-end.png"
          alt="the-end"
        ></img>
      </div>
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
                callbackDrop={onDrop}
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
        <div>
          <img
            src={"./fightPngs/boom.png"}
            className="boom"
            onClick={fight}
            alt="boom"
          ></img>
        </div>
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
                callbackDrop={onDrop}
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
