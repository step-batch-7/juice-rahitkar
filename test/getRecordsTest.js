const assert = require("assert");
const chooseAndAct = require("../src/getRecords.js").chooseAndAct;
const getRecords = require("../src/getRecords.js").getRecords;

describe("getRecords", function() {
  it("should return reader's parsed output", function() {
    const exists = function(path) {
      assert.strictEqual(path, "./records.json");
      return true;
    };

    const parser = function(string) {
      assert.strictEqual(string, "[1]");
      return [1];
    };

    const reader = function(path, format) {
      assert.strictEqual(path, "./records.json");
      assert.strictEqual(format, "utf8");
      return "[1]";
    };

    const format = "utf8";
    const path = "./records.json";
    const actual = getRecords(exists, reader, "./records.json", format, parser);
    const expected = [1];
    assert.deepStrictEqual(actual, expected);
  });

  it("should return empty list", function() {
    const exists = function(path) {
      assert.strictEqual(path, "./ds.json");
      return false;
    };

    const parser = function(string) {};

    const reader = function(path, format) {};
    const format = "utf8";
    const path = "./ds.json";

    const actual = getRecords(exists, reader, path, format, parser);
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });
});
