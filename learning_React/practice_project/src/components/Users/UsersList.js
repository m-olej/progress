import Container from "../UI/Container";
import styles from "../../styles/components/UsersList.module.css";

const UsersList = (props) => {
  return (
    <Container className={styles.list}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}, ({user.age})
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default UsersList;
