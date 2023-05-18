import Container from "../UI/Container";
import styles from "../../styles/components/UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length === 0) {
    return;
  }
  return (
    <Container className="list">
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
