import React, { useCallback } from "react";

export default function DropBoard(props) {
  const leave = useCallback(() => {
    props.callbackLeave();
  }, [props]);

  const over = useCallback(() => {
    props.callbackOver(props.setter, props.value);
  }, [props]);

  return (
    <div className="relative">
      <div id={props.id} className={props.className}>
        {props.children}
      </div>

      <div
        className="overlay"
        onDragOver={over}
        onDragLeave={leave}
        onDragEnter={over}
      ></div>
    </div>
  );
}
