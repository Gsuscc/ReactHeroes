import React, { useContext, useEffect, useState, useCallback } from "react";
import { Stat } from "./Stat";
import { GlobalContext } from "../GlobalState";
import { Link } from "react-router-dom";

export const BackPage = (props) => {
  const hero = props.hero;
  const getColor = props.getColor;
  const { marker } = useContext(GlobalContext);
  const [markedCards, setMarkedCards] = marker;
  const [isChecked, setIsChecked] = useState(false);
  const [shouldShowDetails, setShouldShowDetails] = useState(false);

  const handleChange = useCallback((e) => {
    if (e) {
      e.stopPropagation();
      isChecked ? setIsChecked(false) : setIsChecked(true);
      if (isInGroup()) {
        setMarkedCards(markedCards.filter((item) => item.id !== hero.id));
      } else {
        setMarkedCards((markedCards) => [...markedCards, hero]);
      }
      console.log(markedCards);
    }
  });
  const handleShouldShowDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShouldShowDetails(true);
  };

  useEffect(() => handleChange(), [handleChange]);
  const isInGroup = () => markedCards.includes(hero);

  console.log(shouldShowDetails);

  return (
    <div className="heroCard backPage isFlipped">
      <div className="cardContainer">
        <div
          style={getColor ? getColor() : { color: "black" }}
          className="name"
        >
          <div>{hero.name}</div>
        </div>
        <div>
          <div className="stats">Stats</div>
          <div className="statsContainer">
            {Object.entries(hero.powerstats).map(([key, value]) => {
              return <Stat name={key} value={value} />;
            })}
          </div>
          {getColor && (
            <div>
              <input
                type="checkbox"
                id={`hero${hero.id}`}
                onClick={handleChange}
                checked={isInGroup()}
              ></input>
              <Link
                to={{
                  pathname: `/hero/${hero.id}`,
                  state: { hero: hero },
                }}
              >
                <button>de</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
