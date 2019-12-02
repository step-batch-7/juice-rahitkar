const lib = require("./processRecords.js");

const query = function(records, args) {
  const employeeId = args.empId;
  const date = args.date;
  const beverage = args.beverage;
  let matchedRecords = records;
  if (employeeId !== undefined) {
    matchedRecords = lib.getSpecificIdsRecords(records, employeeId);
  }
  if (date !== undefined) {
    matchedRecords = lib.getSpecificDatesRecords(matchedRecords, date);
  }
  if (beverage !== undefined) {
    matchedRecords = lib.getSpecificBeveragesRecords(matchedRecords, beverage);
  }
  return matchedRecords;
};

exports.query = query;
