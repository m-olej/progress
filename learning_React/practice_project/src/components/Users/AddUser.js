import { useState } from "react";
import styles from "../../styles/components/AddUser.module.css";
import Button from "../UI/Button";
import Container from "../UI/Container";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enterdAge, setEnteredAge] = useState("");
  const [userValid, setUserValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (+enterdAge > 0 && enteredUsername.trim().length > 0) {
      props.onAddUser(enteredUsername, enterdAge);
    } else if (+enterdAge > 0) {
      setUserValid(false);
      setTimeout(() => setUserValid(true), 2000);
      return;
    } else if (enteredUsername.trim().length > 0) {
      setAgeValid(false);
      setTimeout(() => setAgeValid(true), 2000);
      return;
    } else {
      setAgeValid(false);
      setUserValid(false);
      setTimeout(() => {
        setUserValid(true);
        setAgeValid(true);
      }, 2000);
      return;
    }
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Container>
      <form className={styles.wrapper} onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          className={`${userValid ? "" : styles.animUser}`}
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          className={`${ageValid ? "" : styles.animAge}`}
          id="age"
          type="number"
          value={enterdAge}
          onChange={ageChangeHandler}
        />
        <Button onClick={addUserHandler}>Add User</Button>
      </form>
    </Container>
  );
};

export default AddUser;
