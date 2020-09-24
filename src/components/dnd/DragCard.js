import React, { useCallback } from "react";

export default function DragCard(props) {
  const dragStart = useCallback(
    (e) => {
      props.callback(props.hero, { setter: props.setter, value: props.value });
      let overlays = document.querySelectorAll(".overlay");
      overlays.forEach((item) => (item.style.zIndex = "20"));
    },
    [props]
  );

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const dragEnd = (e) => {
    props.callbackDrop();
    // console.log("dragend");
    // let overlays = document.querySelectorAll(".overlay");
    // overlays.forEach((item) => (item.style.zIndex = "-20"));
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  );
}
