const lib = require("./processRecords.js");
const fs = require("fs");

const query = function(records, args) {
  employeeId = +args[2];
  // console.log(employeeId);
  const matchedRecordAndCount = lib.getSpecificIdsRecords(records, employeeId);
  return matchedRecordAndCount;
};

exports.query = query;
