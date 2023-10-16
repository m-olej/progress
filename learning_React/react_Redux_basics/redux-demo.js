//importing with node.js

const redux = require("redux");

// in parameters you should give state it's default value
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  // gets newest state snapshot after change
  const latestState = store.getState();
  console.log(latestState);
};

//
store.subscribe(counterSubscriber);

//dispatching actions (objects)

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
