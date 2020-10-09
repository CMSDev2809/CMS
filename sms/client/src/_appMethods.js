import React from "react";
import { Utils, FontAwesomeIcon } from "arclight-react";

export default (_this, ENDPOINT, config, socket, socketListeners) => {
  _this.getSMSByNum = async (n) => {
    if (n) n = n.replace("+", "");
    const filtered = await fetch(
      `${ENDPOINT}:${config.port}/s/getSMS${n ? `?n1=${n}&n2=${n}` : null}`,
      {
        headers: {
          sms_key: Utils.Cookies.read_cookie("CMSSMS"),
        },
      }
    ).then((res) => res.json());
    _this.setState({ filtered });
  };

  _this.signIn = async (credentials) => {
    const result = await fetch(`${ENDPOINT}:${config.port}/loginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Basic ${btoa(
          `${credentials.username}:${credentials.password}`
        )}`,
      },
    }).then((res) => res.json());
    if (result.code <= 200) {
      Utils.Cookies.bake_cookie("CMSSMS", result.token);
      await _this.aquire();
      _this.setState({
        authenticated: true,
        active: null,
        friendlyName: "",
        filtered: null,
      });
    } else {
      return result;
    }
  };

  _this.validate = async () => {
    const result = await fetch(`${ENDPOINT}:${config.port}/s/validateToken`, {
      headers: {
        "Content-Type": "application/json",
        sms_key: Utils.Cookies.read_cookie("CMSSMS"),
      },
    }).then((res) => res.json());
    return result;
  };

  _this.signOut = () => {
    if (_this.state.active) _this.markSMSAsRead(_this.state.active);
    Utils.Cookies.delete_cookie("CMSSMS");
    _this.setState({
      authenticated: false,
      active: null,
      friendlyName: "",
      filtered: null,
    });
  };

  _this.deleteConversation = async (n) => {
    n.replace("+", "");
    const results = await fetch(`${ENDPOINT}:${config.port}/s/deleteAllSMS`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        sms_key: Utils.Cookies.read_cookie("CMSSMS"),
      },
      body: JSON.stringify({
        n1: n,
        n2: n,
      }),
    }).then((res) => res.json());
  };

  _this.setFiltered = (filtered) => _this.setState({ filtered });

  _this.aquire = async () => {
    let origins = [];
    let objs = [];
    let showNew = false;
    const messages = await fetch(`${ENDPOINT}:${config.port}/s/getSMS`, {
      headers: {
        sms_key: Utils.Cookies.read_cookie("CMSSMS"),
      },
    }).then((res) => res.json());
    if (Array.isArray(messages)) {
      messages
        .reverse()
        .map((el) => {
          if (el.new) showNew = true;
          if (
            !origins.includes(el.origin) &&
            el.origin !== config.twilioPhoneNumber
          ) {
            origins.push(el.origin);
            objs.push({ n: el.origin, new: el.new });
          } else if (
            !origins.includes(el.target) &&
            el.target !== config.twilioPhoneNumber
          ) {
            origins.push(el.target);
            objs.push({ n: el.target, new: el.new });
          }
        })
        .reverse()
        .filter((el) => (el !== config.twilioPhoneNumber ? el : null));
      origins = await Promise.all(
        origins.map(async (el, i) => {
          let friendlyName;
          const match = await fetch(
            `${ENDPOINT}:${config.port}/s/matchSMS?n=${el.replace("+", "")}`,
            {
              headers: {
                "Content-Type": "application/json",
                sms_key: Utils.Cookies.read_cookie("CMSSMS"),
              },
            }
          ).then((res) => res.json());
          if (match) friendlyName = match.friendlyName;
          return { number: el, friendlyName, new: objs[i].new };
        })
      );
      origins = origins
        .map((el) => ({
          component: (
            <div>
              {el.new ? (
                <div style={{ float: "left", marginLeft: "-20px" }}>
                  <FontAwesomeIcon
                    size={8}
                    color={"red"}
                    theme={"Dark"}
                    icon={"exclamation"}
                  />
                </div>
              ) : null}
              {el.friendlyName ? el.friendlyName : el.number}
            </div>
          ),
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
        showNew,
      });
    }
  };

  _this.sendSMS = (msg) => {
    fetch(`${ENDPOINT}:${config.port}/s/sendSMS`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        sms_key: Utils.Cookies.read_cookie("CMSSMS"),
      },
      body: JSON.stringify(msg),
    })
      .then((res) => res.json())
      .then((res) =>
        socket.emit("broadcast_update", {
          new: true,
          origin: res.from,
          target: res.to,
          timestamp: res.dateCreated,
          content: res.body,
        })
      );
  };

  _this.markSMSAsRead = async (number) => {
    if (number) {
      await fetch(`${ENDPOINT}:${config.port}/s/markSMSAsRead`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          sms_key: Utils.Cookies.read_cookie("CMSSMS"),
        },
        body: JSON.stringify({ number }),
      });
      _this.aquire();
    }
  };

  _this.updateFriendly = async (object) => {
    if (object.friendlyName.length < 1) delete object.friendlyName;
    const results = await fetch(`${ENDPOINT}:${config.port}/s/smartMatchSMS`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        sms_key: Utils.Cookies.read_cookie("CMSSMS"),
      },
      body: JSON.stringify(object),
    }).then((res) => res.json());
  };

  _this.setActive = async (active) => {
    let friendlyName;
    if (active) {
      friendlyName = await fetch(
        `${ENDPOINT}:${config.port}/s/matchSMS?n=${active.replace("+", "")}`,
        {
          headers: {
            sms_key: Utils.Cookies.read_cookie("CMSSMS"),
          },
        }
      ).then((res) => res.json());
    }
    _this.setState({
      active,
      friendlyName: friendlyName ? friendlyName.friendlyName : "",
    });
    _this.getSMSByNum(active).then(() => {
      const elmnt = document.getElementById("newestMsg");
      elmnt.scrollIntoView(true);
    });
  };

  _this.componentDidMount = async () => {
    socketListeners(socket, _this);
    const result = await _this.validate();
    if (result && result.code <= 200) {
      await _this.aquire();
      _this.setState({
        authenticated: true,
        active: null,
        friendlyName: "",
        filtered: null,
      });
    }
    window.onbeforeunload = () => {
      if (_this.state.active) _this.markSMSAsRead(_this.state.active);
    };
  };
};
