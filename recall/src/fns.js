const fs = require("fs");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(require("./keyword").key);

module.exports = {
  encryptCard: async object => {
    const contactEmail = object.contactEmail ? object.contactEmail : "";
    const receiptEmail = object.receiptEmail ? object.receiptEmail : "";
    const lastAccess = object.lastAccess ? object.lastAccess : "";
    return {
      firstName: object.firstName,
      lastName: object.lastName,
      cardNumber: cryptr.encrypt(object.cardNumber),
      expDate: cryptr.encrypt(object.expDate),
      cardHolder: cryptr.encrypt(object.cardHolder),
      securityCode: cryptr.encrypt(object.securityCode),
      amount: cryptr.encrypt(object.amount),
      billingAddress: cryptr.encrypt(object.billingAddress),
      billingAddress2: cryptr.encrypt(object.billingAddress2),
      city: cryptr.encrypt(object.city),
      state: cryptr.encrypt(object.state),
      zip: cryptr.encrypt(object.zip),
      phoneNumber: cryptr.encrypt(object.phoneNumber),
      purpose: cryptr.encrypt(object.purpose),
      notes: cryptr.encrypt(object.notes),
      processing: object.processing,
      lastAccess: object.lastAccess,
      highPriority: object.highPriority,
      lastFour: object.cardNumber.slice(-4),
      contactEmail,
      receiptEmail
    };
  },
  decryptCard: async object => {
    const contactEmail = object.contactEmail ? object.contactEmail : "";
    const receiptEmail = object.receiptEmail ? object.receiptEmail : "";
    const lastAccess = object.lastAccess ? object.lastAccess : "";
    return {
      id: object._id,
      firstName: object.firstName,
      lastName: object.lastName,
      cardNumber: cryptr.decrypt(object.cardNumber),
      expDate: cryptr.decrypt(object.expDate),
      cardHolder: cryptr.decrypt(object.cardHolder),
      securityCode: cryptr.decrypt(object.securityCode),
      amount: cryptr.decrypt(object.amount),
      billingAddress: cryptr.decrypt(object.billingAddress),
      billingAddress2: cryptr.decrypt(object.billingAddress2),
      city: cryptr.decrypt(object.city),
      state: cryptr.decrypt(object.state),
      zip: cryptr.decrypt(object.zip),
      phoneNumber: cryptr.decrypt(object.phoneNumber),
      purpose: cryptr.decrypt(object.purpose),
      notes: cryptr.decrypt(object.notes),
      processing: object.processing,
      highPriority: object.highPriority,
      lastFour: cryptr.decrypt(object.cardNumber).slice(-4),
      lastAccess: object.lastAccess,
      contactEmail,
      receiptEmail
    };
  },
  writeToken: token => {
    const home = require("os").homedir();
    const logpath = home + "/Documents/Recall";
    if (fs.existsSync(logpath)) {
      fs.writeFile(logpath + "/token", token, err => {
        if (err) {
          return console.log(err);
        }
      });
    } else {
      fs.mkdirSync(logpath);
      module.exports.writeToken(token);
    }
  },
  writeToSave: obj => {
    const home = require("os").homedir();
    const logpath = home + "/Documents/Recall";
    if (fs.existsSync(logpath)) {
      fs.writeFile(logpath + "/save", JSON.stringify(obj), err => {
        if (err) {
          return console.log(err);
        }
      });
    } else {
      fs.mkdirSync(logpath);
      module.exports.writeToSave(obj);
    }
  },
  readFromSave: async () => {
    const home = require("os").homedir();
    const logpath = home + "/Documents/Recall/save";
    if (fs.existsSync(logpath)) {
      const obj = await new Promise((resolve, reject) => {
        fs.readFile(logpath, "utf-8", (err, data) => {
          err ? reject(err) : resolve(JSON.parse(data));
        });
      }).then(res => {
        res.printLayout ? null : (res["printLayout"] = 0);
        res.placeHolderText ? null : (res["placeHolderText"] = 0);
        res.contactEmail ? null : (res["contactEmail"] = "");
        res.receiptEmail ? null : (res["receiptEmail"] = 0);
        return res;
      });
      return obj;
    } else {
      module.exports.writeToSave({
        db: "",
        port: "",
        limit: 20,
        printLayout: 0,
        showPlaceHolder: 0,
        contactEmail: "",
        receiptEmail: 0
      });
      return module.exports.readFromSave();
    }
  },
  ping: async () => {
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const ping = await new Promise((resolve, reject) => {
      setTimeout(function() {
        reject(new Error("timeout"));
      }, 10000);
      fetch(`${location}:${port}/ping`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => resolve(res.json()));
    });
    return ping;
  },
  readToken: async () => {
    const home = require("os").homedir();
    const logpath = home + "/Documents/Recall/token";
    if (fs.existsSync(logpath)) {
      const token = await new Promise((resolve, reject) => {
        fs.readFile(logpath, "utf-8", (err, data) => {
          err ? reject(err) : resolve(data);
        });
      }).then(res => res);
      return token;
    } else {
      module.exports.writeToken("");
      return module.exports.readToken();
    }
  },
  getUserAccess: async token => {
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const accessLevel = await fetch(`${location}:${port}/get_user_access`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token
      }
    }).then(res => res.json());
    return accessLevel;
  },
  createUser: async (username, password, level) => {
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const user = await fetch(`${location}:${port}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        level
      })
    }).then(res => res.json());
    return user;
  },
  deleteUser: async username => {
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const user = await fetch(`${location}:${port}/delete_user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username
      })
    }).then(res => res.json());
    return user;
  },
  loginUser: async (username, password) => {
    const base64 = require("base-64");
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const user = await fetch(`${location}:${port}/authenticate`, {
      method: "post",
      headers: {
        authorization: "Basic " + base64.encode(username + ":" + password),
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
    return user;
  },
  getCards: async (name, skip, chrono = false) => {
    const limit = parseInt(
      await module.exports.readFromSave().then(res => res.limit)
    );
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const cards = await fetch(`${location}:${port}/get_cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        skip,
        limit,
        chrono
      })
    }).then(res => res.json());
    return cards;
  },
  getTasks: async name => {
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const cards = await fetch(`${location}:${port}/get_tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
    return cards;
  },
  getUsers: async () => {
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const users = await fetch(`${location}:${port}/getUsers`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
    return users;
  },
  createCard: async cardData => {
    const base64 = require("base-64");
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const user = await fetch(`${location}:${port}/create_card`, {
      method: "post",
      headers: {
        authorization: "Basic " + base64.encode("data"),
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cardData)
    }).then(res => res.json());
    return user;
  },
  updateCard: async (id, data) => {
    const base64 = require("base-64");
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const obj = {
      id,
      data
    };
    const card = await fetch(`${location}:${port}/update_card`, {
      method: "post",
      headers: {
        authorization: "Basic " + base64.encode("data"),
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(res => res.json());
    return card;
  },
  updateLevel: async (username, level) => {
    const base64 = require("base-64");
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const user = await fetch(`${location}:${port}/update_level`, {
      method: "POST",
      headers: {
        authorization: "Basic " + base64.encode("data"),
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        level
      })
    }).then(res => res.json());
    return user;
  },
  deleteCard: async id => {
    const base64 = require("base-64");
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const user = await fetch(`${location}:${port}/delete_card`, {
      method: "delete",
      headers: {
        authorization: "Basic " + base64.encode("data"),
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(res => res.json());
    return user;
  },
  taskBarAlert: boolean => {
    const remote = require("electron").remote;
    let w = remote.getCurrentWindow();
    w.flashFrame(true);
  },
  highPriority: async obj => {
    const location = await module.exports.readFromSave().then(res => res.db);
    const port = await module.exports.readFromSave().then(res => res.port);
    const mail = await fetch(`${location}:${port}/send_mail`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(res => res.json());
    return mail;
  },
  sendReceipt: async obj => {
    if (obj.receiptEmail) {
      const location = await module.exports.readFromSave().then(res => res.db);
      const port = await module.exports.readFromSave().then(res => res.port);
      const mail = await fetch(`${location}:${port}/send_receipt`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contactEmail: obj.contactEmail,
          amount: obj.amount,
          clientLastName: obj.lastName,
          clientFirstName: obj.firstName,
          lastFour: obj.cardNumber.slice(-4)
        })
      });
    }
  }
};
