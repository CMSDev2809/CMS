const Cryptr = require("cryptr");
const cryptr = new Cryptr("ryleysflower");
const fs = require("fs");
const fetch = require("node-fetch");

const apiPath = "http://localhost:8081";

const encryptCard = async object => {
  const contactEmail = object.contactEmail ? object.contactEmail : "";
  const receiptEmail = object.receiptEmail ? object.receiptEmail : "";
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
    highPriority: object.highPriority,
    lastFour: object.cardNumber.slice(-4),
    contactEmail,
    receiptEmail
  };
};
const decryptCard = async object => {
  const contactEmail = object.contactEmail ? object.contactEmail : "";
  const receiptEmail = object.receiptEmail ? object.receiptEmail : "";
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
    contactEmail,
    receiptEmail
  };
};
const updateCard = async (id, data) => {
  const base64 = require("base-64");
  const obj = {
    id,
    data
  };
  const card = await fetch(`${apiPath}/update_card`, {
    method: "post",
    headers: {
      authorization: "Basic " + base64.encode("data"),
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  }).then(res => res.json());
  return card;
};
const setCards = async () => {
  const cards = await fetch(`${apiPath}/get_cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "",
      skip: 0,
      limit: 2000,
      chrono: false
    })
  }).then(res => res.json());
  cards.cards.map(el => {
    try {
      let decCard = decryptCard(el);
      decCard["lastFour"] = decCard.cardNumber.slice(-4);
      updateCard(decCard._id, decCard);
    } catch (err) {}
  });
  return cards;
};

setCards();
