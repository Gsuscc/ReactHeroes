import React, { useCallback } from "react";

export default function DropBoard(props) {
  const drop = useCallback(
    (e) => {
      e.preventDefault();
      props.callbackDrop(props.setter);
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
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
      onDragLeave={leave}
      onDragEnter={enter}
    >
      {props.children}
    </div>
  );
}
