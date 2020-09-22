import React, { useState, useEffect } from "react";
import axios from "axios";
import { FrontPage } from "./FrontPage";
import { BackPage } from "./BackPage";

export const HeroCard = (props) => {
  const callback = props.callback;
  const id = props.id;
  const [hero, setHero] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://atib.servebeer.com:55555/https://superheroapi.com/api/3597117540350761/${id}`
      )
      .then((response) => {
        let hero = response.data;
        if (callback) callback();
        setHero(hero);
        setIsLoading(false);
      });
  }, [id, callback]);

  const getColor = () => {
    if (hero.biography.alignment === "good") return { color: "darkgreen" };
    if (hero.biography.alignment === "bad") return { color: "darkred" };
    return { color: "yellow" };
  };

  const flipped = () => {
    setIsFlipped(!isFlipped);
  };

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div onClick={flipped}>
      {isFlipped ? (
        <BackPage hero={hero} getColor={getColor} />
      ) : (
        <FrontPage hero={hero} getColor={getColor} />
      )}
    </div>
  );
};
