module.exports = {
  broadcast_update: (message, emitters) => {
    emitters.broadcast_update(message);
  },
  broadcast_updateOrigins: (message, emitters) => {
    emitters.broadcast_updateOrigins();
  },
};
