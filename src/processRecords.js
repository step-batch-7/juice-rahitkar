const fs = require("fs");

const addNewTransaction = function(records, newTransaction) {
  records.push(newTransaction);
  return records;
};

const isIdPresent = function(EmployeeID) {
  return function(transactionRecord) {
    return transactionRecord.empId == EmployeeID;
  };
};

const countTotalJuices = function(totalCount, transactionRecord) {
  let quantityOfTransaction = +transactionRecord["quantity"];

  totalCount = totalCount + quantityOfTransaction;
  return totalCount;
};

const getSpecificIdsRecords = function(records, employeeId) {
  const matchedTransactions = records.filter(isIdPresent(employeeId));
  const totalJuiceCount = matchedTransactions.reduce(countTotalJuices, 0);

  return [matchedTransactions, totalJuiceCount];
};

exports.addNewTransaction = addNewTransaction;
exports.isIdPresent = isIdPresent;
exports.countTotalJuices = countTotalJuices;
exports.getSpecificIdsRecords = getSpecificIdsRecords;
