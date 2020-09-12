import React from "react";
import "./buttons.css";

const Buttons = (props) => {
  // console.log(props);
  return (
    <div
      className={`Buttons ${props.content === "0" ? "zero" : ""} ${
        props.type || ""
      }`}
      onClick={props.onButtonClick(props.content)}
    >
      {props.content}
    </div>
  );
};

export default Buttons;
