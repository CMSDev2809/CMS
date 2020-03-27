import config from "electron-json-config";

// Init reduxHelper
import reduxHelper from "../../utils/reduxHelper.js";
const reduxUtil = reduxHelper("Tasks");

// Include component
import component from "./Tasks.js";

// Action Definitions
const SEND_CARD = reduxUtil.defineAction("SEND_CARD");

// Initial State
const initialState = {
  // get this from config file (second parameter is the default value if not found)
};

// Make Actions
const actions = {
  sendCard: reduxUtil.createAction(SEND_CARD)
};

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [SEND_CARD]: (state, action) => {
      return { ...state, ...action.payload };
    }
  },
  initialState
);

// Export
export { component, actions, reducer };
