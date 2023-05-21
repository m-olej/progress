import Button from "./Button";
import Container from "./Container";
import styles from "../../styles/UI/HintModal.module.css";
import { useState } from "react";
import { useCallback, useEffect } from "react";

// to - do use ReactDOM.createPortal() to render HintModal above the root

const HintModal = (props) => {
  let names = require(`../lul/names.json`);

  const [randName, setRandName] = useState(
    names[Math.floor(Math.random() * 21980)]
  );
  const [randAge, setRandAge] = useState(Math.floor(Math.random() * 100));

  const onCloseHandler = (event) => {
    event.preventDefault();
    props.closeModal();
  };

  const escFunction = useCallback(
    (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        props.closeModal();
      }
    },
    [props]
  );
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const onRerollHandler = () => {
    setRandName(names[Math.floor(Math.random() * 21980)]);
    setRandAge(Math.floor(Math.random() * 100));
  };

  const onAddNameHandler = () => {
    props.onNameAdd(randName);
  };

  const onAddAgeHandler = () => {
    props.onAgeAdd(randAge);
  };

  return (
    <div className={styles.show}>
      <div className={styles.backdrop} onClick={onCloseHandler} />
      <Container className="modal">
        <header className={styles.header}>
          <h2>Here are some Name and Age ideas</h2>
        </header>
        <div className={styles.hintFlex}>
          <div onClick={onAddNameHandler}>
            <h3>{randName}</h3>
          </div>
          <div onClick={onAddAgeHandler}>
            <h3>{randAge}</h3>
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <Button onClick={onRerollHandler}>Reroll</Button>
          <Button onClick={onCloseHandler}>close</Button>
        </div>
      </Container>
    </div>
  );
};

export default HintModal;
