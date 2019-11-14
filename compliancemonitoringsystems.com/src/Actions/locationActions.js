export function setSelectedLocation(selectedLocation) {
  return {
    type: "selectedLocation",
    selectedLocation
  };
}

export function setLocations(locations) {
  return {
    type: "setLocations",
    locations
  };
}

export function setContacts(contacts) {
  return {
    type: "setContacts",
    contacts
  };
}

export function addLocation(location) {
  return {
    type: "addLocation",
    location
  };
}

export function setLocationModalToggle(locationModalToggle) {
  return {
    type: "locationModalToggle",
    locationModalToggle
  };
}

export function setNavModal(navToggle) {
  return {
    type: "setNavModal",
    navToggle
  };
}
