import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./action";

// reducer
function reducer(state, action) {
  // console.log({ state, action });

  // if (action.type === DECREASE) {
  //   // state.count = state.count - 1; // THIS IS MUTATING THE STATE, NOT ALLOWED IN REDUX!
  //   return { ...state, count: state.count - 1 }; // with ES6, we could use spread operator to copy the old state, and update with the new state
  // }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount + 1,
        };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === DECREASE) {
    // let tempCart = [];

    // if (action.payload.amount === 1) {
    //   tempCart = state.cart.filter(
    //     cartItem => cartItem.id !== action.payload.id
    //   );
    // } else {
    //   tempCart = state.cart.map(cartItem => {
    //     if (cartItem.id === action.payload.id) {
    //       cartItem = {
    //         ...cartItem,
    //         amount: cartItem.amount - 1,
    //       };
    //     }
    //     return cartItem;
    //   });
    // }

    // refactoring the code
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount - 1,
        };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], total: 0, amount: 0 };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        // console.log(cartItem);
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  return state;

  // switch (action.type) {
  //   case CLEAR_CART:
  //     return { ...state, cart: [] };
  //   default:
  //     return state;
  // }
}

export default reducer;
