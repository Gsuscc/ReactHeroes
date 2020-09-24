import React, { useCallback } from "react";

export default function DragCard(props) {
  const dragStart = useCallback(
    (e) => {
      props.callback(props.hero, { setter: props.setter, value: props.value });
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
