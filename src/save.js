const lib = require("./processRecords.js");

const save = function(records, newTransaction) {
  const allRecords = lib.addNewTransaction(records, newTransaction);
  return allRecords;
};

exports.save = save;
