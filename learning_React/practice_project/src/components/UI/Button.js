import styles from "../../styles/UI/button.module.css";

const Button = (props) => {
  return (
    <div className={styles.wrapper}>
      <button
        type="submit"
        onClick={props.onClick}
        className={styles[props.className]}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
