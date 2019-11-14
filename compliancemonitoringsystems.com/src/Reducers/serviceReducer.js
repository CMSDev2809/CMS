export const serviceReducer = (state = {}, action) => {
  switch (action.type) {
    case "servicePage":
      return {
        ...state,
        servicePage: action.servicePage
      };

    default:
      return state;
  }
};

export default serviceReducer;
