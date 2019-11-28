const lib = require("./processRecords.js");
const fs = require("fs");

const save = function(records, args, dat) {
  const newTransaction = {
    empId: args[args.lastIndexOf("--empId") + 1],
    beverage: args[args.lastIndexOf("--beverage") + 1],
    quantity: args[args.lastIndexOf("--qty") + 1],
    date: dat
  };

  const allRecords = lib.addNewTransaction(records, newTransaction);
  return allRecords;
};

exports.save = save;
