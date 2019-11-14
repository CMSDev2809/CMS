export const cartReducer = (
  state = {
    cart: {}
  },
  action
) => {
  switch (action.type) {
    case "addItem":
      state.cart[action.item.name] = action.item;
      return {
        ...state
      };
    case "removeItem":
      state.cart[action.item.name] = undefined;
      return {
        ...state
      };
    default:
      return state;
  }
};

export default cartReducer;
