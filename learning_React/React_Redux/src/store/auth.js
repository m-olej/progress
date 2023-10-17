import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + state.amount,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === "amountChange") {
//     return {
//       ...state,
//       amount: action.amount,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

//.actions method creates an object with a unique identifier for all actions
// in reducers on a createSlice

export const authActions = authSlice.actions;
export default store;
