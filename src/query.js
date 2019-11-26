const lib = require("./processRecords.js");
const fs = require("fs");

const query = function(records, args) {
  const employeeId = +args[2];
  const matchedRecordAndCount = lib.getSpecificIdsRecords(records, employeeId);
  return matchedRecordAndCount;
};

exports.query = query;
