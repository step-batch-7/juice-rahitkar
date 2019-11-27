const createSaveMessage = function(records) {
  let message =
    "Transaction Recorded:" +
    "\n" +
    "Employee ID,Beverage,Quantity,Date" +
    "\n";
  message = message + records[0]["empId"] + " ";
  message = message + records[0]["beverage"] + " ";
  message = message + records[0]["quantity"] + " ";
  message = message + records[0]["date"];
  return message;
};

const createQueryMessage = function(queryResult) {
  const matchedRecords = queryResult["matchedRecords"];
  let message = "";
  for (let indx = 0; indx < matchedRecords.length; indx++) {
    message = "Employee ID,Beverage,Quantity,Date" + "\n";
    message = message + matchedRecords[indx]["empId"] + " ";
    message = message + matchedRecords[indx]["beverage"] + " ";
    message = message + matchedRecords[indx]["quantity"] + " ";
    message = message + matchedRecords[indx]["date"] + "\n";
  }
  message = message + "Total :" + queryResult["total"];
  return message;
};

exports.saveMessage = createSaveMessage;
exports.queryMessage = createQueryMessage;