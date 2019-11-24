const fs = require("fs");

const addNewTransaction = function(records, userCommands) {
  const date = new Date();
  const newTransaction = {
    "Employee ID": userCommands[4],
    Beverage: userCommands[2],
    Quantity: userCommands[6],
    Date: date
  };
  records.push(newTransaction);
  return records;
};

const isIdPresent = function(EmployeeID) {
  return function(transactionRecord) {
    return transactionRecord["Employee ID"] == EmployeeID;
  };
};

const countTotalJuices = function(totalCount, transactionRecord) {
  let QuantityOfTransaction = +transactionRecord["Quintity"];

  totalCount = totalCount + QuantityOfTransaction;
  return totalCount;
};

const getSpecificIdsRecord = function(records, userCommands) {
  EmployeeID = userCommands[2];

  const matchedTransactions = records.filter(isIdPresent(EmployeeID));
  matchedTransactions.reduce(countTotalJuices, 0);
  return records;
};

exports.addNewTransaction = addNewTransaction;
exports.isIdPresent = isIdPresent;
exports.countTotalJuices = countTotalJuices;
