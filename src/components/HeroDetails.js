import React from "react";

export default function HeroDetails(props) {
  return (
    <div className="details-container">
      <table>
        {Object.entries(props.hero).map((key, value) => {
          return (
            <tr>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
