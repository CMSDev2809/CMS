export default (socket, _this) =>
  socket.on("broadcast_nameChange", () => _this.aquire());
