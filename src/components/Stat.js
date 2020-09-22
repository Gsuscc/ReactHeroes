import React from "react";

export const Stat = (props) => {
  const name = props.name;
  const value = props.value;

  const getColor = () => {
    if (props.value < 30) return { color: "red" };
    if (props.value < 70) return { color: "grey" };
    return { color: "green" };
  };

  return (
    <div className="statContainer">
      <div>{name}</div>
      <div style={getColor()}>{value}</div>
    </div>
  );
};
