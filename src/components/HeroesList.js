import React, { useCallback, useState, useRef, useEffect } from "react";
import { GlobalContext } from "../GlobalState";
import { HeroCard } from "./HeroCard";

export const HeroesList = (props) => {
  // const { heroId } = useContext(GlobalContext);
  const [lastId, setLastId] = useState(18);
  const [heroesList, setHeroesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(1);

  const observer = useRef();
  const lastCard = useCallback(
    (card) => {
      console.log(card);
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && id < 731) {
          console.log("visivle");
          setLastId((lastId) => lastId + 18);
        }
      });
      if (card) observer.current.observe(card);
      console.log("last");
    },
    [id, isLoading]
  );

  useEffect(() => {
    setIsLoading(true);
    let newList = [];
    let currentId = id;
    while (currentId <= lastId) {
      if (currentId === lastId) {
        newList.push(
          <div ref={lastCard}>
            <HeroCard id={currentId} key={currentId} />
          </div>
        );
      } else {
        newList.push(<HeroCard id={currentId} key={currentId} />);
      }
      currentId++;
    }
    setHeroesList((heroesList) => [...heroesList, newList]);
    setId((id) => (id = currentId));
  }, [id, lastCard, lastId]);

  return <div className="heroContainer">{heroesList.map((hero) => hero)}</div>;
};
