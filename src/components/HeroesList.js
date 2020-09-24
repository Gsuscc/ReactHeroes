import React, { useCallback, useState, useRef, useEffect } from "react";
import { HeroCard } from "./HeroCard";
import cardFetch from "./CardFetch";

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
        if (entries[0].intersectionRatio <= 0) return;
        if (id.current > 731) return;
        if (isLoading.current) return;
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

  const loadCardData = useCallback(
    (hero) => {
      let newCard = <HeroCard hero={hero} key={hero.id} />;
      if (parseInt(hero.id) === lastId) {
        finishLoading();
      }
      setHeroesList((heroesList) => [...heroesList, newCard]);
    },
    [lastId, finishLoading]
  );

  useEffect(() => {
    if (isLoading.current) return;
    isLoading.current = true;
    let currentId = id.current;
    while (currentId <= lastId && currentId <= 731) {
      cardFetch(currentId, loadCardData);
      currentId++;
    }
    id.current = currentId;
  }, [id, lastId, loadCardData]);

  return (
    <div>
      <div className="heroContainer">
        {heroesList.map((hero) => {
          return hero;
        })}
      </div>
      <div
        className="scrollTrigger"
        ref={lastCard}
        id="trigger"
        key="trigger"
      ></div>
      {isLoading.current ? <p className="heroFont">Loading...</p> : null}
      <div className="space"></div>
    </div>
  );
};
