const lib = require("./processRecords.js");
const fs = require("fs");

const save = function(records, args, date) {
  const newTransaction = {
    empId: args[4],
    beverage: args[2],
    quantity: args[6],
    Date: date
  };

  const addedRecord = lib.addNewTransaction(records, newTransaction);
  const newFileContent = JSON.stringify(addedRecord);
  fs.writeFileSync("./records.json", newFileContent, "utf8");
  return [newTransaction];
};

exports.save = save;
