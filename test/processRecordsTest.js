const assert = require("assert");
const lib = require("../src/processRecords.js");

describe("addNewTransaction", function() {
  it("should return a list consisting one object made from given command line args", function() {
    const dat = new Date().toJSON();
    const actual = lib.addNewTransaction([], {
      empId: "11111",
      beverage: "Orange",
      quantity: "1",
      date: dat
    });

    const expected = [
      {
        empId: "11111",
        beverage: "Orange",
        quantity: "1",
        date: dat
      }
    ];

    assert.deepStrictEqual(actual, expected);
  });
});

describe("isEmployeeIdPresent", function() {
  it("should return true for matched", function() {
    const dat = new Date().toJSON();
    const transactionRecord = {
      empId: 25333,
      beverage: "orenge",
      quantity: "1",
      date: dat
    };
    const actual = lib.isIdPresent(25333)(transactionRecord);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
});

describe("countJuices", function() {
  it("should return added value of quantity of one transaction with total count", function() {
    const dat = new Date().toJSON();
    const transactionRecord = {
      empId: 25333,
      beverage: "orenge",
      quantity: "1",
      date: dat
    };
    const actual = lib.countJuices(0, transactionRecord);
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
});

describe("getSpecificIdsRecords", function() {
  it("should return specific records from a list of data and total count of juices", function() {
    const queryRecord = 25333;
    const dat = new Date().toJSON();
    const transactionRecords = [
      {
        empId: 25333,
        beverage: "orenge",
        quantity: "1",
        date: dat
      },
      {
        empId: 25333,
        beverage: "apple",
        quantity: "3",
        date: dat
      }
    ];

    const actual = lib.getSpecificIdsRecords(transactionRecords, queryRecord);
    const expected = [
      {
        empId: 25333,
        beverage: "orenge",
        quantity: "1",
        date: dat
      },
      {
        empId: 25333,
        beverage: "apple",
        quantity: "3",
        date: dat
      }
    ];
    assert.deepStrictEqual(actual, expected);
  });
});

describe("isDatePresent", function() {
  it("should return true for matched date", function() {
    const dat = new Date().toJSON();
    const transactionRecord = {
      empId: 25333,
      beverage: "orenge",
      quantity: "1",
      date: dat
    };
    const userDate = dat.slice(0, 10);
    const actual = lib.isDatePresent(userDate)(transactionRecord);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
});
