const fs = require("fs");
const chooseTheAction = require("./src/chooseTheAction.js").chooseTheAction;
const configPath = require("./src/config").configPath;
const configDate = require("./src/config").configDate;

const main = function(args) {
  const date = configDate(process.env);
  const helper = {
    exists: fs.existsSync,
    reader: fs.readFileSync,
    format: "utf8",
    path: configPath(process.env),
    parser: JSON.parse,
    writer: fs.writeFileSync
  };
  console.log(chooseTheAction(args, date, helper));
};

main(process.argv.slice(2));
