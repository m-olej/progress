import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "./Input";
import AuthContext from "../../store/auth-context";

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

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      // focus is now available through useImperativeHandle as it is returnen as an item in an object that is returned
      // focus: activate, focus runs activate func in Input component
      // useImperativeHandle and React.forwardRef func on Input component lets us use the email/password ref in the Input component
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type={"E-Mail"}
          hf={"email"}
          state={emailState}
          change={emailChangeHandler}
          vali={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type="Password"
          hf="password"
          state={passwordState}
          change={passwordChangeHandler}
          vali={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
