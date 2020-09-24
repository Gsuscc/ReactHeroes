import React, { useCallback, useState } from "react";

export default function DropBoard(props) {
  const drop = useCallback(
    (e) => {
      console.log("drop");
      props.callbackDrop(props.setter);
      e.preventDefault();
      let overlays = document.querySelectorAll(".overlay");
      overlays.forEach((item) => (item.style.zIndex = "-20"));
    },
    [props]
  );
  const leave = useCallback(
    (e) => {
      props.callbackLeave();
    },
    [props]
  );

  const enter = useCallback(
    (e) => {
      props.callbackEnter(props.setter, props.value);
    },
    [props]
  );

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <div id={props.id} className={props.className}>
        {props.children}
      </div>

      <div
        className="overlay"
        onDrop={drop}
        onDragOver={enter}
        onDragLeave={leave}
        onDragEnter={enter}
      ></div>
    </div>
  );
}
