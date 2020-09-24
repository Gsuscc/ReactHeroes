import React, { useContext, useCallback, useRef } from "react";
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
