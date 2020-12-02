import React, { useState, useRef, useEffect } from "react";
import { HeroCard } from "./HeroCard";
import axios from "axios";

export const HeroesList = (props) => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true)
  const [hasMorePage, setHasMorePage] = useState(true)
  const [heroesList, setHeroesList] = useState([]);
  const pageBottom = useRef();

  useEffect(() => {
    const toggleDiv = pageBottom.current;
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      if (isLoading) return;
      setPage((page) => ++page);
    })
    if (hasMorePage) {
      intersectionObserver.observe(toggleDiv);
    }
    return () => intersectionObserver.disconnect(toggleDiv);
  }, [isLoading, hasMorePage])

  useEffect(() => {
    setIsLoading(true)
    console.log(page)
    axios.get(`http://localhost:8762/api/hero/heroes?page=${page}`)
      .then((response) => {
        let newHeroes = cardifyHeroes(response.data.content);
        setHeroesList(oldHeroes => [...oldHeroes, ...newHeroes])
        setIsLoading(false)
        if (response.data.last) {
          setHasMorePage(false)
        }
      }).catch((err) => {
        console.log(err)
        setIsLoading(false)
      });
  }, [page])

  const cardifyHeroes = (heroes) => {
    return heroes.map(hero => { 
      return (
        <div className="card-margin" key={hero.name + hero.id}>
          <HeroCard hero={hero} key={hero.id} />
        </div>
      )
    })
  }

  return (
    <div>
      <div className="heroContainer">
        {heroesList.map((hero) => {
          return hero;
        })}
      </div>
      <div
        className="scrollTrigger"
        ref={pageBottom}
        id="trigger"
        key="trigger"
      ></div>
      {isLoading.current ? <p className="heroFont">Loading...</p> : null}
      <div className="space"></div>
    </div>
  );
};
