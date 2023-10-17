import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  // automatically sets up (and deletes if func is deleted) the subscriber to the redux store for this component
  // Changes in the redux store will cause this function to run again
  // and receive the latest State
  const counter = useSelector((state) => state.counter.counter);
  const amount = useSelector((state) => state.counter.amount);
  const show = useSelector((state) => state.counter.showCounter);
  console.log(counter, amount, show);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase({ amount: amount })); // { type: SOME_UNIQUE_IDENTIFIER, payload: amount }
  };

  const amountChangeHandler = (event) => {
    event.preventDefault();
    dispatch(counterActions.amountChange({ amount: +event.target.value }));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <div>
          <button onClick={increaseHandler}>Increase by </button>
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
