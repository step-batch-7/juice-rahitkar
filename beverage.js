const fs = require("fs");
const chooseAndAct = require("./src/sudoMain.js").chooseAndAct;

const main = function(args) {
  const date = new Date();
  const helpers = {
    exists: fs.existsSync,
    reader: fs.readFileSync,
    format: "utf8",
    path: "./records.json",
    parser: JSON.parse
  };
  console.log(chooseAndAct(args, date, helpers));
};

main(process.argv.slice(2));
