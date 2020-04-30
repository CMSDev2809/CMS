const fs = require("fs");
const config = require("../../config");

module.exports = (req, res) => {
  const traveler = (dir, obj) => {
    fs.readdirSync(dir).forEach(file => {
      if (fs.statSync(dir + "/" + file).isDirectory()) {
        const title = file;
        obj[title] = {
          title,
          children: fs.readdirSync(dir + "/" + file).length > 0 ? {} : null
        };
        traveler(dir + "/" + file, obj[title].children);
      } else {
        if (file.charAt(0) !== "~") {
          const title = file;
          let url = null;
          if (file.includes(".link") || file.includes(".html")) {
            url = fs.readFileSync(dir + "/" + file, "utf8");
          } else {
            url =
              (config.production ? config.productionPath : config.path) +
              ":" +
              config.port +
              "/" +
              dir.substr(dir.indexOf("/Forms") + 1) +
              "/" +
              file;
          }
          obj[title] = {
            title,
            url
          };
        }
      }
    });
    return obj;
  };
  const obj = traveler(`${config.base}`, {});
  res.json(obj);
};
