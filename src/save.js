const lib = require("./processRecords.js");
const fs = require("fs");

const save = function(records, args, dat) {
  const newTransaction = {
    empId: args[4],
    beverage: args[2],
    quantity: args[6],
    date: dat
  };

  const allRecords = lib.addNewTransaction(records, newTransaction);
  return allRecords;
};

exports.save = save;
