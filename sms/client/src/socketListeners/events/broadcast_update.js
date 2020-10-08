import { Utils, FontAwesomeIcon } from "arclight-react";

export default (socket, _this) =>
  socket.on("broadcast_update", (data) => {
    if (
      data.origin === _this.state.active ||
      data.target === _this.state.active
    ) {
      _this.getSMSByNum(data.target);
    }
    _this.aquire();
    Utils.SFX.play("ding");
  });
