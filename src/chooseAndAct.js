const getRecords = require("./getRecords").getRecords;
const save = require("./save").save;
const query = require("./query").query;

const chooseAndAct = function(args, date, helper) {
  const action = args[0];
  const lookUpSturct = { "--save": save, "--query": query };
  const exists = helper["exists"];
  const reader = helper["reader"];
  const path = helper["path"];
  const format = helper["format"];
  const parser = helper["parser"];

  const records = getRecords(exists, reader, path, format, parser);
  const performAction = lookUpSturct[action];
  return performAction(records, args, date);
};

exports.chooseAndAct = chooseAndAct;
