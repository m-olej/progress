import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.hf}>{props.type}</label>
      <input
        type={props.hf}
        id={props.hf}
        value={props.state.value}
        onChange={props.change}
        onBlur={props.vali}
      />
    </div>
  );
};

export default Input;
