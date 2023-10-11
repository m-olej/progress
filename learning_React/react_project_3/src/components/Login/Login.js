import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // if useEffect() doesn't have the [dependencies] parameter it runs after every
  // component recycle/rerender. After every state change for example
  // useEffect(() => {
  //   console.log("I'm an annoying useEffect");
  // });

  // also important to know
  // if useEffect has an empty [dependencies] parameter. The cleanup function runs
  // after the component is removed from the dom

  // got baited, the state updating functions in React never change
  //// here in dependencies we put setFormIsValid function so
  //// the useEffect is going to run when that function is called
  //// it's also gonna run when enteredEmail and enteredPassword is changed

  // the useEffect is going to run whenever enteredEmail/Password change
  // A.K.A at every keystroke
  // to make it not run as much, because it may slow down the application
  // we should "debounce" it. Make it run only if the last keystroke was
  // for example 500ms ago.

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    console.log("checking validity");
    // useEffect can return a "cleanUp" function.
    // the returned function must finish before the useEffect can be run again
    // this function also doesn't run before the first useEffect execution
    return () => {
      // this clears the previous timer of the setTimeout.
      // because it's a cleanup function it's run before every new useEffect reoccurrence
      // so setFormIsValid is not run until the setTimeout get a chance to finish (lasts 500ms)
      clearTimeout(identifier);
      console.log("Cleanup");
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      emailState.value.includes("@") && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });

    setFormIsValid(
      emailState.value.includes("@") && passwordState.value.trim().length > 6
    );
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
