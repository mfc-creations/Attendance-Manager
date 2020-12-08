import React from "react";
import classnames from "classnames";
import "./Style.css";
const Button = ({ type, mt, mb, text, active, loading, onPress }) => {
  let btnClasses = classnames({
    "btn-type-one": type === "normal",
    "btn-type-two": type === "join",
    "m-t-16": mt === 16,
    "m-t-24": mt === 24,
    "m-b-16": mb === 16,
    "m-t-38": mt === 38,
    "m-t-26": mt === 26,
    disabled: !active,
  });
  return (
    <button
      onClick={(e) => onPress(e)}
      disabled={!active}
      className={btnClasses}
    >
      {loading ? "loading" : text}
    </button>
  );
};

export default Button;
