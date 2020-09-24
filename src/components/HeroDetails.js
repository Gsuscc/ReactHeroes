import React from "react";

export default function HeroDetails(props) {
  console.log(props);
  return (
    <div className="details-container">
      {" "}
      boo
      <table>
        {/* {Object.entries(props.hero).map((key, value) => {
          return (
            <tr>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })} */}
      </table>
    </div>
  );
}
