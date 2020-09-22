import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

export const HeroCard = (props) => {
  const id = props.id;
  const [hero, setHero] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="heroCard">
      <div className="cardContainer">
        <p className="name">{hero.name}</p>
        <img className="heroImg" src={hero.image.url} alt="img"></img>
      </div>
    </div>
  );
};
