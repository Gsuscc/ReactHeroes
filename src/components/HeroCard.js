import React, { useState } from "react";
import { FrontPage } from "./FrontPage";
import { BackPage } from "./BackPage";

export const HeroCard = (props) => {
  const hero = props.hero;
  const [isFlipped, setIsFlipped] = useState(false);

  const getColor = () => {
    if (hero.biography.alignment === "good") return { color: "darkgreen" };
    if (hero.biography.alignment === "bad") return { color: "darkred" };
    return { color: "yellow" };
  };

  const flipped = (e) => {
    if (e.currentTarget === document.querySelector(`#hero${hero.id}`)) return;
    setIsFlipped(!isFlipped);
  };

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
