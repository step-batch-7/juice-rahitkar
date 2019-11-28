const fs = require("fs");
const chooseTheAction = require("./src/chooseTheAction.js").chooseTheAction;

const main = function(args) {
  const date = new Date().toJSON();
  const helper = {
    exists: fs.existsSync,
    reader: fs.readFileSync,
    format: "utf8",
    path: "./records.json",
    parser: JSON.parse,
    writer: fs.writeFileSync
  };
  console.log(chooseTheAction(args, date, helper));
};

main(process.argv.slice(2));
