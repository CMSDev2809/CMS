import broadcast_update from "./events/broadcast_update";
import broadcast_nameChange from "./events/broadcast_nameChange";
import broadcast_updateOrigins from "./events/broadcast_updateOrigins";

const EVENTS = [
  broadcast_update,
  broadcast_nameChange,
  broadcast_updateOrigins,
];

export default (socket, _this) => EVENTS.map((fn) => fn(socket, _this));
