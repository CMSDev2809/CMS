const EMITTERS = {
  SMS: require("./emitters/SMS"),
};

module.exports = (io) => (socket) => (key, room) => {
  const obj = {};
  EMITTERS[key].map(
    (el) =>
      (obj[el.name] = (data) =>
        el.type === "broadcast"
          ? io.sockets.in(room).emit(el.name, data)
          : socket.emit(el.name, data))
  );
  return obj;
};
