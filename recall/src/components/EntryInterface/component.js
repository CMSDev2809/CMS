import config from "electron-json-config";

// Init reduxHelper
import reduxHelper from "../../utils/reduxHelper.js";
const reduxUtil = reduxHelper("EntryInterface");

// Include component
import component from "./entry_interface.js";

// Action Definitions
const SAVE_SETTINGS = reduxUtil.defineAction("SAVE_SETTINGS");

// Initial State
const initialState = {
  // get this from config file (second parameter is the default value if not found)
};

// Make Actions
const actions = {
  saveSettings: reduxUtil.createAction(SAVE_SETTINGS)
};

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [SAVE_SETTINGS]: function(state, action) {
      let newState = { ...state, ...action.payload };
      return newState;
    }
  },
  initialState
);

// Export
export { component, actions, reducer };
