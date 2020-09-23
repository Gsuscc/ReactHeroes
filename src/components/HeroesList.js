import React, { useCallback, useState, useRef, useEffect } from "react";
import { HeroCard } from "./HeroCard";

export const HeroesList = (props) => {
  const [lastId, setLastId] = useState(18);
  const [heroesList, setHeroesList] = useState([]);
  const isLoading = useRef(false);
  const id = useRef(1);
  const observer = useRef();

  const lastCard = useCallback(
    (card) => {
      observer.current = new IntersectionObserver((entries) => {
        if (id.current > 731) {
          observer.current.disconnect(card);
          return;
        }
        console.log("visible");
        if (entries[0].intersectionRatio <= 0) return;
        console.log("intersected");
        if (id.current > 731) return;
        console.log("in range");
        if (isLoading.current) return;
        console.log("load");
        setLastId((lastId) => lastId + 18);
        isLoading.current = false;
      });
      if (card) observer.current.observe(card);
    },
    [id, isLoading]
  );

  const finishLoading = useCallback(() => {
    isLoading.current = false;
  }, [isLoading]);

  useEffect(() => {
    if (isLoading.current) return;
    isLoading.current = true;
    let newList = [];
    let currentId = id.current;
    while (currentId <= lastId && currentId <= 731) {
      if (currentId === lastId) {
        newList.push(
          <div id={currentId}>
            <HeroCard id={currentId} key={currentId} callback={finishLoading} />
          </div>
        );
      } else {
        newList.push(<HeroCard id={currentId} key={currentId} />);
      }
      currentId++;
    }
    setHeroesList((heroesList) => [...heroesList, newList]);
    id.current = currentId;
  }, [id, lastId, finishLoading]);

  return (
    <div>
      <div className="heroContainer">{heroesList.map((hero) => hero)}</div>
      <div
        classname="scrollTrigger"
        ref={lastCard}
        id="trigger"
        key="trigger"
      ></div>
      {isLoading ? <p className="heroFont">Loading...</p> : null}
      <div className="space"></div>
    </div>
  );
};
