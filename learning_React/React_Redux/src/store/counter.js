import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, amount: 5, showCounter: true };

// in reducers of the initial object that createSlice receives
// all the boilerplate of createStore is being done behind the scenese
// preventing the mutation of the state object and copying the "unused" state during the change
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state) {
      state.counter = state.counter + state.amount;
    },
    toggleCounter(state) {
      console.log("working");
      state.showCounter = !state.showCounter;
    },
    amountChange(state, action) {
      console.log(action.payload.amount);
      state.amount = action.payload.amount;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
