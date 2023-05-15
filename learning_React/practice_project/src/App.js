import React, { useState } from "react";
import styles from "./styles/components/App.module.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userDetails, setUserDetails] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserDetails((prevState) => {
      return [
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString },
      ];
    });
  };

  return (
    <div className={styles.centre}>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userDetails} />
    </div>
  );
}

export default App;
