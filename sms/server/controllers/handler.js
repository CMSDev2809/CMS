const TwilioAPI = require("./handlers/twilioAPI");
const CalendarAPI = require("./handlers/calendarAPI");
const KnownSMS = require("./handlers/KnownSMS");
const SMS = require("./handlers/SMS");
const UserHandling = require("./handlers/userHandling");

module.exports = { TwilioAPI, CalendarAPI, SMS, KnownSMS, UserHandling };
