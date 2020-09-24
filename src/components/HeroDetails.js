import React from "react";

export default function HeroDetails(props) {
  console.log(props.location.state.hero);
  let hero = props.location.state.hero;
  console.log(Object.entries(hero));
  return (
    <div className="details-container">
      {" "}
      boo
      <table>
        <tbody>
          {Object.entries(hero).map((key, value) => {
            return (
              <tr>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
