import { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import styles from "../../styles/UI/HintModal.module.css";

const HintModal = (props) => {
  const [show, setShow] = useState(false);

  props.onShowSwitch();

  let names = require(`../lul/names.json`);

  let hintName = names[Math.floor(Math.random() * 21980)];
  let hintAge = Math.floor(Math.random() * 100);

  let showClass;
  if (!show) {
    showClass = `${styles.hide}`;
  } else {
    showClass = `${styles.show}`;
  }

  return (
    <div className={showClass}>
      <div className={styles.backdrop} />
      <Container className="modal">
        <header className={styles.header}>
          <h2>Here are some Name and Age ideas</h2>
        </header>
        <div className={styles.hintFlex}>
          <div>
            <h3>{hintName}</h3>
          </div>
          <div>
            <h3>{hintAge}</h3>
          </div>
        </div>
        <footer></footer>
        <Button>close</Button>
      </Container>
    </div>
  );
};

export default HintModal;
