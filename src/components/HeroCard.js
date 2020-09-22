import React, { useState, useEffect } from "react";
import axios from "axios";
import { FrontPage } from "./FrontPage";
import { BackPage } from "./BackPage";

export const HeroCard = (props) => {
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
        console.log(response);
        let hero = response.data;
        setHero(hero);
        setIsLoading(false);
      });
  }, [id]);

  const flipped = () => {
    setIsFlipped(!isFlipped);
  };

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div onClick={flipped}>
      {isFlipped ? <BackPage hero={hero} /> : <FrontPage hero={hero} />}
    </div>
  );
};
