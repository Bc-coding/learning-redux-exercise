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
import { DECREASE, INCREASE } from "./action";
import reducer from "./reducer";

// react-redux - Provider - wraps app, connect - used in components
import { Provider } from "react-redux";

// inital state
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

// when we create a store in Redux, we have access to get state function
// store.getState() - we will get back our state

const store = createStore(reducer, initialStore);

// dispatch an action to store
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });

// console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
