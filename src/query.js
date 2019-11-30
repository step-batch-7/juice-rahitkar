const lib = require("./processRecords.js");

const query = function(records, args) {
  const employeeId = +args[args.lastIndexOf("--empId") + 1];
  const date = args[args.lastIndexOf("--date") + 1];
  const beverage = args[args.lastIndexOf("--beverage") + 1];
  let matchedRecords = records;
  if (args.indexOf("--empId") > 0) {
    matchedRecords = lib.getSpecificIdsRecords(records, employeeId);
  }
  if (args.indexOf("--date") > 0) {
    matchedRecords = lib.getSpecificDatesRecords(matchedRecords, date);
  }
  if (args.indexOf("--beverage") > 0) {
    matchedRecords = lib.getSpecificBeveragesRecords(matchedRecords, beverage);
  }
  return matchedRecords;
};

exports.query = query;
