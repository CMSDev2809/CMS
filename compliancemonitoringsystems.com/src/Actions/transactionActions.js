export function transactionStatus(transactionStatus) {
  return {
    type: "transactionStatus",
    transactionStatus
  };
}

export function selectedBox(selectedBox) {
  return {
    type: "selectedBox",
    selectedBox
  };
}
