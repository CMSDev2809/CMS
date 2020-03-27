import config from "electron-json-config";

// Init reduxHelper
import reduxHelper from "../../utils/reduxHelper.js";
const reduxUtil = reduxHelper("Admin");

// Include component
import component from "./Admin.js";

// Action Definitions

// Initial State
const initialState = {
  // get this from config file (second parameter is the default value if not found)
};

// Make Actions
const actions = {};

// Make reducer
const reducer = reduxUtil.createReducer({}, initialState);

// Export
export { component, actions, reducer };
