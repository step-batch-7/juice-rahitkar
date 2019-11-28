const fs = require("fs");
const getRecords = require("./getRecords").getRecords;
const save = require("./save").save;
const query = require("./query").query;
const count = require("./processRecords.js").countTotalJuices;
const write = require("./write.js").write;
const create = require("./createMessage.js");

const performSaveAction = function(records, args, date, writer, path, format) {
  // const saveData = args.slice(1);
  const allRecords = save(records, args, date);
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

const chooseTheAction = function(args, date, helper) {
  const action = args[args.lastIndexOf("--save")];
  const exists = helper["exists"];
  const reader = helper["reader"];
  const path = helper["path"];
  const format = helper["format"];
  const parser = helper["parser"];
  const writer = helper["writer"];

  const records = getRecords(exists, reader, path, format, parser);
  if (action == "--save") {
    return performSaveAction(records, args, date, writer, path, format);
  }
  return performQueryAction(records, args);
};

exports.chooseTheAction = chooseTheAction;
