const performAction = require("../src/performAction").performAction;
const assert = require("assert");

describe("performAction", function() {
  it("should return a message in required format for given command save ", function() {
    const args = [
      "--save",
      "--beverage",
      "Apple",
      "--empId",
      "1111",
      "--qty",
      "4"
    ];
    let date = new Date();
    const mokExists = function(path) {
      assert.strictEqual(path, "./right path");
      return true;
    };

    const mokReader = function(path, format) {
      assert.strictEqual(path, "./right path");
      assert.strictEqual(format, "right format");
      return "[]";
    };

    const mokParser = function(string) {
      assert.strictEqual(string, "[]");
      return [];
    };

    const mokWriter = function(path, data, format) {
      assert.strictEqual(path, "./right path");
      assert.strictEqual(format, "right format");
    };

    const helper = {
      exists: mokExists,
      reader: mokReader,
      format: "right format",
      path: "./right path",
      parser: mokParser,
      writer: mokWriter
    };

    const actual = performAction(args, date, helper);
    const expected = `Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n1111,Apple,4,${date.toJSON()}`;
    assert.strictEqual(actual, expected);
  });

  it("should return a massage having all matched  records for given command query ", function() {
    const args = ["--query", "--empId", "1111"];
    let date = new Date();
    date = date.toJSON();

    const mokExists = function(path) {
      assert.strictEqual(path, "./right path");
      return true;
    };

    const mokReader = function(path, format) {
      assert.strictEqual(path, "./right path");
      assert.strictEqual(format, "right format");
      return '[{"empId":"1111","beverage":"Apple","quantity":"4","date":"2019-11-26T17:29:48.737Z"}]';
    };

    const mokParser = function(string) {
      assert.strictEqual(
        string,
        '[{"empId":"1111","beverage":"Apple","quantity":"4","date":"2019-11-26T17:29:48.737Z"}]'
      );
      return [
        {
          empId: "1111",
          beverage: "Apple",
          quantity: "4",
          date: "2019-11-26T17:29:48.737Z"
        }
      ];
    };

    const mokWriter = function(path, data, format) {};

    const helper = {
      exists: mokExists,
      reader: mokReader,
      format: "right format",
      path: "./right path",
      parser: mokParser,
      writer: mokWriter
    };

    const actual = performAction(args, date, helper);
    const expected = `Employee ID,Beverage,Quantity,Date\n1111,Apple,4,2019-11-26T17:29:48.737Z\nTotal: 4 Juices`;

    assert.strictEqual(actual, expected);
  });
});
