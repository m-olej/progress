import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // if useEffect() doesn't have the [dependencies] parameter it runs after every
  // component recycle/rerender. After every state change for example
  useEffect(() => {
    console.log("I'm an annoying useEffect");
  });

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
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);
    // useEffect can return a "cleanUp" function.
    // the returned function must finish before the useEffect can be run again
    // this function also doesn't run before the first useEffect execution
    return () => {
      // this clears the previous timer of the setTimeout.
      // because it's a cleanup function it's run before every new useEffect reoccurrence
      // so setFormIsValid is not run until the setTimeout get a chance to finish (lasts 500ms)
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
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
