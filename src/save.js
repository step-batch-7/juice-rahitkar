const lib = require("./processRecords.js");

const save = function(records, args, date) {
  const newTransaction = {
    empId: args[args.lastIndexOf("--empId") + 1],
    beverage: args[args.lastIndexOf("--beverage") + 1],
    quantity: args[args.lastIndexOf("--qty") + 1],
    date: date
  };

  const allRecords = lib.addNewTransaction(records, newTransaction);
  return allRecords;
};

exports.save = save;
