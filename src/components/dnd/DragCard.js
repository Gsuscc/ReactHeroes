import React, { useCallback } from "react";

export default function DragCard(props) {
  const dragStart = useCallback(
    (e) => {
      console.log("start");
      e.dataTransfer.setData("card_id", e.target.id);
      e.target.style.opacity = "50%";
      props.callback(props.hero);
    },
    [props]
  );

  const dragOver = (e) => {
    e.stopPropagation();
    e.target.style.opacity = "50%";
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}
