import React from "react";
import classnames from "classnames";
import "./Style.css";
const Text = ({ text, type, mt, mb, ml }) => {
  let textClasses = classnames({
    "head-text": type === "head-text",
    "body-text": type === "body-text",
    "body-text-bold": type === "body-text-bold",
    "m-t-16": mt === 16,
    "m-b-3": mb === 3,
    "m-t-30": mt === 30,
    "m-b-30": mb === 30,
    "m-b-24": mb === 24,
    "m-t-24": mt === 24,
    "m-b-27": mb === 27,
    "m-t-50": mt === 50,
    "m-b-20": mb === 20,
    "m-l-4": ml === 4,
  });
  return <div className={textClasses}>{text}</div>;
};

export default Text;
