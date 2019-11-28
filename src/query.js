const lib = require("./processRecords.js");

const query = function(records, args) {
  const employeeId = +args[args.lastIndexOf("--empId") + 1];
  const date = args[args.lastIndexOf("--date") + 1];
  if (args.lastIndexOf("--empId") > 0 && args.lastIndexOf("--date") > 0) {
    let matchedIdRecords = lib.getSpecificIdsRecords(records, employeeId);
    let matchedDateRecords = lib.getSpecificDatesRecords(
      matchedIdRecords,
      date
    );
    return matchedDateRecords;
  }
  if (args.indexOf("--empId") > 0) {
    let matchedIdRecords = lib.getSpecificIdsRecords(records, employeeId);
    return matchedIdRecords;
  }
  let matchedDateRecords = lib.getSpecificDatesRecords(records, date);
  return matchedDateRecords;
};

exports.query = query;
