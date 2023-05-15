import Button from "./Button";
import Container from "./Container";
import styles from "../../styles/UI/HintModal.module.css";

const HintModal = (props) => {
  return (
    <Container className="modal">
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <h3></h3>
        <h3></h3>
      </div>
      <footer></footer>
      <Button>Got an Idea?</Button>
    </Container>
  );
};

export default HintModal;
