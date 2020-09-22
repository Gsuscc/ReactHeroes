import React from "react";

export const BackPage = (props) => {
  const hero = props.hero;

  return (
    <div className="heroCard">
      <div className="cardContainer">
        <p className="name">{hero.name}</p>
        <div>Stats</div>
      </div>
    </div>
  );
};
