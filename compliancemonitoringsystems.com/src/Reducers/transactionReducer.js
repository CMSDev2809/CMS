export const transactionReducer = (state = {}, action) => {
  switch (action.type) {
    case "transactionStatus":
      return {
        ...state,
        transactionStatus: action.transactionStatus
      };
    case "selectedBox":
      return {
        ...state,
        selectedBox: action.selectedBox
      };
    default:
      return state;
  }
};

export default transactionReducer;
