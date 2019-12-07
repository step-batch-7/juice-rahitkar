const getTransactionRecords = require("./getRecords").getRecords;
const save = require("./save").save;
const query = require("./query").query;
const count = require("./processRecords.js").countTotalJuices;
const write = require("./write.js").write;
const create = require("./createMessage.js");
const parseSaveCommand = require("./parse").parseSaveCommand;
const parseQueryCommand = require("./parse").parseQueryCommand;

const performSaveAction = function(
  records,
  recordToBeSaved,
  writer,
  path,
  format
) {
  const allRecords = save(records, recordToBeSaved);
  const fileContent = JSON.stringify(allRecords);
  write(writer, path, fileContent, format);
  const newTransaction = allRecords.slice(-1);
  return newTransaction;
};

const performQueryAction = function(records, args) {
  const matchedTransactions = query(records, args);
  const totalJuiceCount = count(matchedTransactions);
  const queryResult = {
    matchedRecords: matchedTransactions,
    total: totalJuiceCount
  };
  return queryResult;
};

const formatRecords = function(records) {
  records.date = new Date(records.date);
  return records;
};

const performAction = function(args, date, helper) {
  const action = args[0];
  const exists = helper.exists;
  const reader = helper.reader;
  const path = helper.path;
  const format = helper.format;
  const parser = helper.parser;
  const writer = helper.writer;

  let records = getTransactionRecords(exists, reader, path, format, parser);
  records = records.map(formatRecords);
  if (action == "--save") {
    const recordToBeSaved = parseSaveCommand(args, date);
    const saveResult = performSaveAction(
      records,
      recordToBeSaved,
      writer,
      path,
      format
    );
    const saveMessage = create.saveMessage(saveResult);
    return saveMessage;
  }

  const recordToBeSearched = parseQueryCommand(args);
  const queryResult = performQueryAction(records, recordToBeSearched);
  const queryMessage = create.queryMessage(queryResult);
  return queryMessage;
};

exports.performAction = performAction;
