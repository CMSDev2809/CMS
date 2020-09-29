import React from "react";

export default (_this, ENDPOINT, config, socket, socketListeners) => {
  _this.getSMSByNum = async (n) => {
    if (n) n = n.replace("+", "");
    const filtered = await fetch(
      `${ENDPOINT}:${config.port}/getSMS${n ? `?n1=${n}&n2=${n}` : null}`
    ).then((res) => res.json());
    _this.setState({ filtered });
  };

  _this.deleteConversation = async (n) => {
    n.replace("+", "");
    const results = await fetch(`${ENDPOINT}:${config.port}/deleteAllSMS`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        n1: n,
        n2: n,
      }),
    }).then((res) => res.json());
    _this.setState({ active: null });
  };

  _this.setFiltered = (filtered) => _this.setState({ filtered });

  _this.aquire = async () => {
    let origins = [];
    const messages = await fetch(
      `${ENDPOINT}:${config.port}/getSMS`
    ).then((res) => res.json());
    messages
      .map((el) => {
        if (
          !origins.includes(el.origin) &&
          el.origin !== config.twilioPhoneNumber
        ) {
          origins.push(el.origin);
        } else if (
          !origins.includes(el.target) &&
          el.target !== config.twilioPhoneNumber
        ) {
          origins.push(el.target);
        }
      })
      .filter((el) => (el !== config.twilioPhoneNumber ? el : null));
    origins = await Promise.all(
      origins.map(async (el) => {
        let friendlyName;
        const match = await fetch(
          `${ENDPOINT}:${config.port}/matchSMS?n=${el.replace("+", "")}`
        ).then((res) => res.json());
        if (match) friendlyName = match.friendlyName;
        return { number: el, friendlyName };
      })
    );
    origins = origins
      .map((el) => ({
        component: <div>{el.friendlyName ? el.friendlyName : el.number}</div>,
        friendlyName: el.friendlyName,
        value: el.number,
      }))
      .sort((a, b) =>
        a.friendlyName && b.friendlyName
          ? a.friendlyName < b.friendlyName
            ? -1
            : 1
          : a.value < b.value
          ? -1
          : 1
      );
    if (_this.state.active) {
      _this.setActive(_this.state.active);
    }
    _this.setState({
      messages,
      origins,
    });
  };

  _this.sendSMS = (msg) => {
    fetch(`${ENDPOINT}:${config.port}/sendSMS`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    })
      .then((res) => res.json())
      .then((res) =>
        socket.emit("broadcast_update", {
          origin: res.from,
          target: res.to,
          timestamp: res.dateCreated,
          content: res.body,
        })
      );
  };

  _this.updateFriendly = async (object) => {
    const results = await fetch(`${ENDPOINT}:${config.port}/smartMatchSMS`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    }).then((res) => res.json());
  };

  _this.setActive = async (active) => {
    let friendlyName;
    if (active) {
      friendlyName = await fetch(
        `${ENDPOINT}:${config.port}/matchSMS?n=${active.replace("+", "")}`
      ).then((res) => res.json());
    }
    _this.setState({
      active,
      friendlyName: friendlyName ? friendlyName.friendlyName : "",
    });
    _this.getSMSByNum(active);
  };

  _this.componentDidMount = () => {
    socketListeners(socket, _this);
    _this.aquire();
  };
};
