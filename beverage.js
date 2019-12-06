const fs = require("fs");
const performAction = require("./src/chooseTheAction.js").performAction;
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
  const message = performAction(args, date, helper);
  console.log(message);
};

main(process.argv.slice(2));
