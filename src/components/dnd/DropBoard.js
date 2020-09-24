import React, { useCallback } from "react";

export default function DropBoard(props) {
  const drop = useCallback(
    (e) => {
      e.preventDefault();
      const card_id = e.dataTransfer.getData("card_id");
      const card = document.getElementById(card_id);
      card.style.display = "block";
      props.callbackDrop(props.setter);
    },
    [props]
  );
  const leave = useCallback(
    (e) => {
      console.log("leave");
      props.callbackLeave(props.setter, props.value);
    },
    [props]
  );

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
      onDragLeave={leave}
    >
      {props.children}
    </div>
  );
}
