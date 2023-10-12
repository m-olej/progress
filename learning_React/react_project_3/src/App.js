import React, { useState, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={ctx.onLogin} />}
        {isLoggedIn && <Home onLogout={ctx.onLogout} />}
      </main>
    </React.Fragment>
  );
}

export default App;
