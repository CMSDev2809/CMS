export const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case "selectedLocation":
      return {
        ...state,
        selectedLocation: action.selectedLocation
      };

    case "setContacts":
      return {
        ...state,
        contacts: action.contacts
      };

    case "addLocation":
      let locations = state.locations
        ? state.locations.concat(action.location)
        : new Array(action.location);
      return {
        ...state,
        locations: locations
      };

    case "locationModalToggle":
      return {
        ...state,
        locationModalToggle: action.locationModalToggle
      };

    case "setNavModal":
      return {
        ...state,
        navModalToggle: action.navToggle
      };
    default:
      return state;
  }
};

export default locationReducer;
