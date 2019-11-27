const lib = require("./processRecords.js");
const fs = require("fs");

const query = function(records, args) {
  const employeeId = +args[2];
  const matchedRecords = lib.getSpecificIdsRecords(records, employeeId);
  return matchedRecords;
};

exports.query = query;
