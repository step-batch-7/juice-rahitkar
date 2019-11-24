const fs = require("fs");
const lib = require("./src/processRecords.js");

const main = function(args) {
  const actionOutput = chooseAndDoAction(args);
  console.log(actionOutput.slice(-1));
};

main(process.argv.slice(2));
