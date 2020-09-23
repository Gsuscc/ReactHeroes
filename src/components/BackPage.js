import React, { useContext } from "react";
import { Stat } from "./Stat";
import { GlobalContext } from "../GlobalState";

export const BackPage = (props) => {
  const hero = props.hero;
  const getColor = props.getColor;
  const { marker } = useContext(GlobalContext);
  const [markedCards, setMarkedCards] = marker;

  const handleChange = () => {
    if (isInGroup()) {
      markedCards.splice(markedCards.indexOf(hero.id), 1);
    } else {
      markedCards.push(hero.id);
    }
  };

  const isInGroup = () => markedCards.includes(hero.id);

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
              id={`hero${hero.id}`}
              onChange={handleChange}
              checked={isInGroup()}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
