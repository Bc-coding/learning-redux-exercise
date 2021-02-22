import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store
// two arguments - state, action
// state - old state/ state before update
// action - what happend/ what update
// return updated or old state

import { createStore } from "redux";

// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

// when we create a store in Redux, we have access to get state function
// store.getState() - we will get back our state

// inital state
const initialStore = {
  count: 0,
};
// reducer
function reducer(state, action) {
  console.log({ state, action });

  if (action.type === "DECREASE") {
    console.log("IT IS DECREASING");
    // state.count = state.count - 1; // THIS IS MUTATING THE STATE, NOT ALLOWED IN REDUX!
    return { count: state.count - 1 };
  }

  if (action.type === "INCREASE") {
    console.log("IT IS INCREASING");
    return { count: state.count + 1 };
  }

  if (action.type === "RESET") {
    console.log("IT IS RESETTING");
    return { count: 0 };
  }

  return state;
}
const store = createStore(reducer, initialStore);

// dispatch an action to store
store.dispatch({ type: "DECREASE" });

store.dispatch({ type: "INCREASE" });

store.dispatch({ type: "INCREASE" });

store.dispatch({ type: "RESET" });

console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
