import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../GlobalState";

export const HeroCard = (props) => {
  const id = props.id;
  // const { heroId } = useContext(GlobalContext);
  // const [id, setId] = heroId;
  const [hero, setHero] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3597117540350761/${id}`
      )
      .then((response) => {
        console.log(response);
        let hero = response.data;
        setHero(hero);
        setIsLoading(false);
        // setId((prevId) => prevId + 1);
      });
  }, [id]);

  // const getHeroes = () => {
  //   let heroesList = [];
  //   for (let i = 1; i < 10; i++) {
  //     heroesList.push(<HeroCard key={id} />);
  //     setId((id) => {
  //       id++;
  //     });
  //   }
  //   return heroesList;
  // };

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
