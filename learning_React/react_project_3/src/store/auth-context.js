import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  // vsCode look on the default object for autocompletion so it's best to keep it similar to the state
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect is run AFTER EVERY STATE REAVALUEATION and only if
  // dependencies in [] parameter are changed
  // if [] parameter is empty, it changes only on the first render of the page
  // this prevents infinite loops
  useEffect(() => {
    const checkPreviousLogIn = localStorage.getItem("isLoggedIn");

    if (checkPreviousLogIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
