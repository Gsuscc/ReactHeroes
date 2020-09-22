import React from "react";

export const BackPage = (props) => {
  const hero = props.hero;

  return (
    <div className="heroCard backPage isFlipped">
      <div className="cardContainer">
        <div className="name">
          <div>{hero.name}</div>
        </div>
        <div>Stats</div>
      </div>
    </div>
  );
};
