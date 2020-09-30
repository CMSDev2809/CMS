import broadcast_update from "./events/broadcast_update";
import broadcast_nameChange from "./events/broadcast_nameChange";

const EVENTS = [broadcast_update, broadcast_nameChange];

export default (socket, _this) => EVENTS.map((fn) => fn(socket, _this));
