const addNewTransaction = function(records, newTransaction) {
  const copyRecords = records.slice();
  copyRecords.push(newTransaction);
  return copyRecords;
};

const isIdPresent = function(EmployeeID) {
  return function(transactionRecord) {
    return transactionRecord.empId == EmployeeID;
  };
};

isDatePresent = function(userDate) {
  return function(transactionRecord) {
    const dat = transactionRecord.date;
    return dat.slice(0, 10) == userDate;
  };
};

const countJuices = function(count, transactionRecord) {
  let quantityOfTransaction = +transactionRecord["quantity"];

  count = count + quantityOfTransaction;
  return count;
};

const countTotalJuices = function(matchedTransactions) {
  const totalCount = matchedTransactions.reduce(countJuices, 0);
  return totalCount;
};

const getSpecificIdsRecords = function(records, employeeId) {
  const matchedTransactions = records.filter(isIdPresent(employeeId));
  // const totalJuiceCount = countTotalJuices(matchedTransactions);
  return matchedTransactions;
};

exports.addNewTransaction = addNewTransaction;
exports.isIdPresent = isIdPresent;
exports.countJuices = countJuices;
exports.getSpecificIdsRecords = getSpecificIdsRecords;
exports.isDatePresent = isDatePresent;
exports.countTotalJuices = countTotalJuices;
