export default (socket, _this) =>
  socket.on("broadcast_updateOrigins", async (data) => {
    await _this.aquire();
    if (data.number === _this.state.active) {
      _this.setState({
        active: null,
        friendlyName: "",
        filtered: null,
      });
    }
  });
