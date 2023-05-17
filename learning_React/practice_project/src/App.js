import React, { useState } from "react";
import styles from "./styles/components/App.module.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import HintModal from "./components/UI/HintModal";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {};

  const addUserHandler = (userName, userAge) => {
    setUserDetails((prevState) => {
      return [
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString },
      ];
    });
  };

  return (
    <div>
      <HintModal onShowSwitch={showModalHandler} />
      <div className={styles.centre}>
        <AddUser onAddUser={addUserHandler} onHintClick={showModalHandler} />
        <UsersList users={userDetails} />
      </div>
    </div>
  );
}

export default App;
