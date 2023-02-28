// import { useState } from "react";
import "./ExpenseItem.css";
import ExpanseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  //first parameter of array destructuring is pointing to
  //initial one in useState(), the second one is going to be the
  //updated value

  //React Hooks are functions that start with use.
  //and they have to be called INSIDE the components
  //useState returns functions
  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
