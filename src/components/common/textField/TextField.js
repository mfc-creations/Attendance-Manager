import React from "react";
import classnames from "classnames";
import "./style.css";
const TextField = ({
  name,
  placeholder,
  value,
  error,
  type,
  label,
  onChange,
  checked,
  mt,
}) => {
  let textSetClasses = classnames({
    "m-t-16": mt === 16,
  });
  return (
    <div className={textSetClasses}>
      <label htmlFor="Name">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        checked={checked}
        className={classnames("input ", {
          "is-invalid": error,
        })}
      />
      {error && (
        <div className="invalid-feedback" style={{ marginLeft: "1vw" }}>
          {error}
        </div>
      )}
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};
export default TextField;
