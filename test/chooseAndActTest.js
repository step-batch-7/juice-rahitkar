const chooseAndAct = require("../src/chooseAndAct.js").chooseAndAct;
const assert = require("assert");
const fs = require("fs");

describe("chooseAndAct", function() {
  it("should return a list of objects for given command save ", function() {
    const args = [
      "--save",
      "--beverage",
      "Apple",
      "--empId",
      "1111",
      "--qty",
      "4"
    ];
    const date = new Date();

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

    const helper = {
      exists: mokExists,
      reader: mokReader,
      format: "right format",
      path: "./right path",
      parser: mokParser
    };

    const actual = chooseAndAct(args, date, helper);
    const expected = [
      {
        empId: "1111",
        beverage: "Apple",
        quantity: "4",
        Date: date
      }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it("should return a list of all records for given command query ", function() {
    const args = ["--query", "--empId", "1111"];
    const date = new Date();

    const mokExists = function(path) {
      assert.strictEqual(path, "./right path");
      return true;
    };

    const mokReader = function(path, format) {
      assert.strictEqual(path, "./right path");
      assert.strictEqual(format, "right format");
      return '[{"empId":"1111","beverage":"Apple","quantity":"4","Date":"2019-11-26T17:29:48.737Z"}]';
    };

    const mokParser = function(string) {
      assert.strictEqual(
        string,
        '[{"empId":"1111","beverage":"Apple","quantity":"4","Date":"2019-11-26T17:29:48.737Z"}]'
      );
      return [
        {
          empId: "1111",
          beverage: "Apple",
          quantity: "4",
          Date: "2019-11-26T17:29:48.737Z"
        }
      ];
    };

    const helper = {
      exists: mokExists,
      reader: mokReader,
      format: "right format",
      path: "./right path",
      parser: mokParser
    };

    const actual = chooseAndAct(args, date, helper);
    const expected = [
      [
        {
          empId: "1111",
          beverage: "Apple",
          quantity: "4",
          Date: "2019-11-26T17:29:48.737Z"
        }
      ],
      4
    ];
    assert.deepStrictEqual(actual, expected);
  });
});
