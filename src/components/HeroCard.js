import React, { useState, useEffect } from "react";
import axios from "axios";
import { FrontPage } from "./FrontPage";
import { BackPage } from "./BackPage";

export const HeroCard = (props) => {
  const hero = props.hero;

  const [isLoading, setIsLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const getColor = () => {
    if (hero.biography.alignment === "good") return { color: "darkgreen" };
    if (hero.biography.alignment === "bad") return { color: "darkred" };
    return { color: "yellow" };
  };

  const flipped = (e) => {
    console.log(e.currentTarget);
    if (e.currentTarget === document.querySelector(`#hero${hero.id}`)) return;
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
