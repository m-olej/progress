import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  console.log("card " + props.className);
  return <div className={classes}>{props.children}</div>;
}

export default Card;
