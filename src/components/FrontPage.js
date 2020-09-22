import React from "react";

export const FrontPage = (props) => {
  const hero = props.hero;

  return (
    <div className="heroCard">
      <div className="cardContainer">
        <p className="name">{hero.name}</p>
        <img className="heroImg" src={hero.image.url} alt="img"></img>
      </div>
    </div>
  );
};
