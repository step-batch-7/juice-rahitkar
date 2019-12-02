const getRecords = require("./getRecords").getRecords;
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
  const filecontent = JSON.stringify(allRecords);
  write(writer, path, filecontent, format);
  const newTransaction = allRecords.slice(-1);
  return create.saveMessage(newTransaction);
};

const performQueryAction = function(records, args) {
  const matchedTransactions = query(records, args);
  const totalJuiceCount = count(matchedTransactions);
  const queryResult = {
    matchedRecords: matchedTransactions,
    total: totalJuiceCount
  };
  return create.queryMessage(queryResult);
};

const formatRecords = function(record) {
  record.date = new Date(record.date);
  return record;
};

const chooseTheAction = function(args, date, helper) {
  const action = args[0];
  const exists = helper.exists;
  const reader = helper.reader;
  const path = helper.path;
  const format = helper.format;
  const parser = helper.parser;
  const writer = helper.writer;

  let records = getRecords(exists, reader, path, format, parser);
  records = records.map(formatRecords);
  if (action == "--save") {
    const recordToBeSaved = parseSaveCommand(args, date);
    return performSaveAction(records, recordToBeSaved, writer, path, format);
  }
  const recordToBeSearched = parseQueryCommand(args);
  return performQueryAction(records, recordToBeSearched);
};

exports.chooseTheAction = chooseTheAction;
