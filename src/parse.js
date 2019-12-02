const parseSaveCommand = (UserCommand, date) => {
  const recordTobeSaved = {
    empId: +UserCommand[UserCommand.lastIndexOf("--empId") + 1],
    beverage: UserCommand[UserCommand.lastIndexOf("--beverage") + 1],
    quantity: UserCommand[UserCommand.lastIndexOf("--qty") + 1],
    date: date
  };
  return recordTobeSaved;
};

const parseQueryCommand = UserCommand => {
  const queryRecord = {
    empId: UserCommand.includes("--empId")
      ? +UserCommand[UserCommand.lastIndexOf("--empId") + 1]
      : undefined,

    date: UserCommand.includes("--date")
      ? UserCommand[UserCommand.lastIndexOf("--date") + 1]
      : undefined,

    beverage: UserCommand.includes("--beverage")
      ? UserCommand[UserCommand.lastIndexOf("--beverage") + 1]
      : undefined
  };
  return queryRecord;
};

exports.parseSaveCommand = parseSaveCommand;
exports.parseQueryCommand = parseQueryCommand;
