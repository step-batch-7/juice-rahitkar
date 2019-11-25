const fs = require("fs");

const addNewTransaction = function(records, date, userCommands) {
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

const getSpecificIdsRecords = function(records, userCommands) {
  EmployeeID = +userCommands[2];

  const matchedTransactions = records.filter(isIdPresent(EmployeeID));
  const totalJuiceCount = matchedTransactions.reduce(countTotalJuices, 0);

  return [matchedTransactions, totalJuiceCount];
};

exports.addNewTransaction = addNewTransaction;
exports.isIdPresent = isIdPresent;
exports.countTotalJuices = countTotalJuices;
exports.getSpecificIdsRecords = getSpecificIdsRecords;
