const fs = require("fs");

const FILE_PATH = `${__dirname}/../../results.json`;

module.exports = {
  _checkFile: () => {
    const DATE = new Date();
    DATE.setHours(0, 0, 0, 0);
    if (
      !fs.existsSync(FILE_PATH) ||
      (fs.existsSync(FILE_PATH) &&
        JSON.parse(fs.readFileSync(FILE_PATH, "utf-8")).DATE !==
          DATE.toString())
    ) {
      if (fs.existsSync(FILE_PATH)) fs.unlinkSync(FILE_PATH);
      fs.writeFileSync(
        FILE_PATH,
        JSON.stringify({
          DATE: DATE.toString(),
        })
      );
    }
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
  },
  read: (key) => module.exports._checkFile()[key],
  save: (arr) => {
    const _ = {};
    arr.map((el) => (_[el] = true));
    fs.writeFileSync(
      FILE_PATH,
      JSON.stringify(Object.assign(module.exports._checkFile(), _))
    );
    return module.exports._checkFile();
  },
};
