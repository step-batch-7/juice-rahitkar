const createSaveMessage = function(TransactionTobeSaved) {
  let message = `Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n`;
  message = `${message}${TransactionTobeSaved[0].empId} `;
  message = `${message}${TransactionTobeSaved[0].beverage} `;
  message = `${message}${TransactionTobeSaved[0].quantity} `;
  message = `${message}${TransactionTobeSaved[0].date.toJSON()}`;
  return message;
};

const createQueryMessage = function(queryResult) {
  const matchedRecords = queryResult.matchedRecords;
  let message = `Employee ID,Beverage,Quantity,Date\n`;
  for (let indx = 0; indx < matchedRecords.length; indx++) {
    message = `${message}${matchedRecords[indx].empId} `;
    message = `${message}${matchedRecords[indx].beverage} `;
    message = `${message}${matchedRecords[indx].quantity} `;
    message = `${message}${matchedRecords[indx].date.toJSON()}\n`;
  }
  message = `${message}Total :${queryResult.total}`;
  return message;
};

exports.saveMessage = createSaveMessage;
exports.queryMessage = createQueryMessage;
