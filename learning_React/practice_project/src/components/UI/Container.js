import styles from "../../styles/UI/container.module.css";

const Container = (props) => {
  let classes;
  if (props.className === undefined) {
    classes = `${styles.main}`;
  } else {
    classes = `${styles[props.className]}`;
  }
  return <div className={classes}>{props.children}</div>;
};

export default Container;
