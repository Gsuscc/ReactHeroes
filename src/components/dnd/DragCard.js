import React, { useCallback, useState } from "react";

export default function DragCard(props) {
  const [isDragging, setDragging] = useState(false);
  const dragStart = useCallback(() => {
    setDragging(true);
    props.callback(props.hero, { setter: props.setter, value: props.value });
    let overlays = document.querySelectorAll(".overlay");
    overlays.forEach((item) => {
      item.style.visibility = "visible";
      item.style.zIndex = "20";
    });
  }, [props]);

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const dragEnd = (e) => {
    setDragging(false);
    props.callbackDrop();
    let overlays = document.querySelectorAll(".overlay");
    overlays.forEach((item) => {
      item.style.visibility = "hidden";
      item.style.zIndex = "-20";
    });
  };

  const behind = {
    zIndex: 1,
  };

  const before = {
    zIndex: 30,
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
      style={isDragging ? before : behind}
    >
      {props.children}
    </div>
  );
}
