import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // // [] dependency means that useEffect will run once after the first rendering of the components
  // // because password input is last in being rendered it will focus that
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  // // We don't want that

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.hf}>{props.type}</label>
      <input
        ref={inputRef}
        type={props.hf}
        id={props.hf}
        value={props.state.value}
        onChange={props.change}
        onBlur={props.vali}
      />
    </div>
  );
});

export default Input;
