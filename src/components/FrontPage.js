import React from "react";

export const FrontPage = (props) => {
  const hero = props.hero;
  const getColor = props.getColor;

  return (
    <div className="heroCard frontPage">
      <div className="cardContainer">
        <div style={getColor()} className="name">
          <div>{hero.name}</div>
        </div>
        <img
          className="heroImg"
          src={hero.image.url}
          alt="img"
          draggable="false"
        ></img>
      </div>
    </div>
  );
};
