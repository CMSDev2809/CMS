export function addItem(item) {
  return {
    type: "addItem",
    item
  };
}

export function removeItem(item) {
  return {
    type: "removeItem",
    item
  };
}
