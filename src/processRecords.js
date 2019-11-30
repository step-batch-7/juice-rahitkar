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

const isDatePresent = function(userDate) {
  return function(transactionRecord) {
    let date = transactionRecord.date;
    date = date.toJSON();
    return date.slice(0, 10) == userDate;
  };
};

const isBeveragePresent = function(userBeverage) {
  return function(transactionRecord) {
    return transactionRecord.beverage == userBeverage;
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

const getSpecificIdsRecords = function(records, dataToBeMatched) {
  const matchedIdTransactions = records.filter(isIdPresent(dataToBeMatched));
  return matchedIdTransactions;
};

const getSpecificDatesRecords = function(records, dataToBeMatched) {
  const matchedDateTransactions = records.filter(
    isDatePresent(dataToBeMatched)
  );
  return matchedDateTransactions;
};

const getSpecificBeveragesRecords = function(records, dataToBeMatched) {
  const matchedBeverageTransactions = records.filter(
    isBeveragePresent(dataToBeMatched)
  );
  return matchedBeverageTransactions;
};

exports.addNewTransaction = addNewTransaction;
exports.isIdPresent = isIdPresent;
exports.isDatePresent = isDatePresent;
exports.isBeveragePresent = isBeveragePresent;
exports.countJuices = countJuices;
exports.getSpecificIdsRecords = getSpecificIdsRecords;
exports.getSpecificDatesRecords = getSpecificDatesRecords;
exports.getSpecificBeveragesRecords = getSpecificBeveragesRecords;
exports.countTotalJuices = countTotalJuices; //
