import React, { useCallback } from "react";

export default function DragCard(props) {
  const dragStart = useCallback(
    (e) => {
      console.log("start");
      const target = e.target;
      e.dataTransfer.setData("card_id", target.id);
      setTimeout(() => {
        target.style.display = "none";
      });
      props.callback(props.hero);
    },
    [props]
  );

  const dragOver = (e) => {
    e.stopPropagation();
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
