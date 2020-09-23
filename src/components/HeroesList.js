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
        if (entries[0].isIntersecting && id.current < 731) {
          if (isLoading.current) return;
          if (observer.current) observer.current.disconnect(card);
          console.log("visible");
          setLastId((lastId) => lastId + 18);
          isLoading.current = false;
        }
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
    while (currentId <= lastId || currentId <= 731) {
      if (currentId === lastId) {
        newList.push(
          <div ref={lastCard} id={currentId}>
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
  }, [id, lastCard, lastId, finishLoading]);

  return <div className="heroContainer">{heroesList.map((hero) => hero)}</div>;
};
