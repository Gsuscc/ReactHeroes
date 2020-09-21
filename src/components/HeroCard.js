import Axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../GlobalState";

export const HeroCard = (props) => {
  const { heroId } = useContext(GlobalContext);
  const [id, setId] = heroId;
  const [hero, setHero] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://superheroapi.com/api/3597117540350761/${id}`)
      .then((response) => {
        console.log(response);
        let hero = response;
        setHero(hero);
        setIsLoading(false);
      });
    //   .then(
    //     setHeroId((heroId) => {
    //       heroId++;
    //     })
    //   );
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="heroCard">
      <p className="name">{hero.name}</p>
      <div>
        <img className="heroImg" src={hero.image.url} alt="img"></img>
      </div>
    </div>
  );
};
