const EVENTS = {
  SMS: require("./events/SMS"),
};

const EMITTERS = {
  SMS: require("./emitters/SMS"),
};

module.exports = (socket) => (emitters) => (key, room) => {
  socket.join(room);
  for (let _key in EVENTS[key]) {
    socket.on(_key, (data) => EVENTS[key][_key](data, emitters));
  }
};
