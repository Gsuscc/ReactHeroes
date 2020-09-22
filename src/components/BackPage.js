import React from "react";
import { Stat } from "./Stat";

export const BackPage = (props) => {
  const hero = props.hero;
  const getColor = props.getColor;

  return (
    <div className="heroCard backPage isFlipped">
      <div className="cardContainer">
        <div style={getColor()} className="name">
          <div>{hero.name}</div>
        </div>
        <div>
          <div className="stats">Stats</div>
          <div className="statsContainer">
            {Object.entries(hero.powerstats).map(([key, value]) => {
              return <Stat name={key} value={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
