export const serviceReducer = (state = {}, action) => {
  switch (action.type) {
    case "setService":
      return {
        ...state,
        serviceReducer: action.service
      };
    default:
      return state;
  }
};

export default serviceReducer;
