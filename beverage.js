const fs = require("fs");
const chooseAndAct = require("./src/chooseAndAct.js").chooseAndAct;

const main = function(args) {
  const date = new Date().toJSON();
  const helper = {
    exists: fs.existsSync,
    reader: fs.readFileSync,
    format: "utf8",
    path: "./records.json",
    parser: JSON.parse
  };
  console.log(chooseAndAct(args, date, helper));
};

main(process.argv.slice(2));
