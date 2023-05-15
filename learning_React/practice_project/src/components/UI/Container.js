import styles from "../../styles/UI/container.module.css";

const Container = (props) => {
  let classes = `${styles.main} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Container;
