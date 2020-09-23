import React, { useContext } from "react";
import { Stat } from "./Stat";
import { GlobalContext } from "../GlobalState";

export const BackPage = (props) => {
  const hero = props.hero;
  const getColor = props.getColor;
  const { marker } = useContext(GlobalContext);
  const [markedCards, setMarkedCards] = marker;

  const handleChange = (id, e) => {
    console.log(id);
    console.log(e);
  };

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
          <div>
            <input
              type="checkbox"
              onChange={handleChange.bind(null, hero.id)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
