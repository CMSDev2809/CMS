const config = require("../../../config");
const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
const TOKEN_PATH = "token.json";

module.exports = {
  getCalendarEvents: async (req, res) => {
    const authorize = (callback) => {
      const {
        client_secret,
        client_id,
        redirect_uris,
      } = require("./credentials");
      const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
      );
      oAuth2Client.setCredentials(require("./token"));
      callback(oAuth2Client);
    };
    const getAccessToken = (oAuth2Client, callback) => {
      const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
      });
      console.log("Authorize this app by visiting this url:", authUrl);
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question("Enter the code from that page here: ", (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
          if (err) return console.error("Error retrieving access token", err);
          oAuth2Client.setCredentials(token);
          fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
            if (err) return console.error(err);
            console.log("Token stored to", TOKEN_PATH);
          });
          callback(oAuth2Client);
        });
      });
    };
    const listEvents = (auth) => {
      const startDate = new Date();
      const nextDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      nextDate.setHours(0, 0, 0, 0);
      nextDate.setDate(nextDate.getDate() + 1);
      const calendar = google.calendar({ version: "v3", auth });
      calendar.events.list(
        {
          calendarId: "primary",
          timeMin: startDate.toISOString(),
          timeMax: nextDate.toISOString(),
          maxResults: 100,
          singleEvents: true,
          orderBy: "startTime",
        },
        (err, _res) => {
          if (err) return console.log("The API returned an error: " + err);
          const events = _res.data.items;
          res.json(
            events.map((el) => {
              const summary = el.summary.split("-");
              return {
                time: el.start.dateTime
                  ? el.start.dateTime.split("T")[1].split("-")[0]
                  : null,
                description: el.description,
                name: summary[0].trim(),
                phoneNumber: summary[1].trim(),
              };
            })
          );
        }
      );
    };
    authorize(listEvents);
  },
};
