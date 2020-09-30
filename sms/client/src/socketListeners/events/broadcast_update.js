export default (socket, _this) =>
  socket.on("broadcast_update", (data) =>
    data.origin === _this.state.active || data.target === _this.state.active
      ? _this.getSMSByNum(data.target)
      : null
  );
