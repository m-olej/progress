import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2023");

  const filterChangeHandler = (enteredFilterDate) => {
    setFilterDate(enteredFilterDate);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterDate;
  });
  console.log(filteredExpenses);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterDate}
          onChangeFilterDate={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            // This is needed for keeping order in added elements.
            // If the added didn't have a unique key atrribute and was
            // Using state to manage data, there would be a problem with
            // it not updating properly as the browser couldn't differentiate
            // between elements
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
