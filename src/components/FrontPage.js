import React from "react";

export const FrontPage = (props) => {
  const hero = props.hero;

  return (
    <div className="heroCard frontPage">
      <div className="cardContainer">
        <div className="name">
          <div>{hero.name}</div>
        </div>
        <img className="heroImg" src={hero.image.url} alt="img"></img>
      </div>
    </div>
  );
};
