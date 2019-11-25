const assert = require("assert");
const lib = require("../src/processRecords.js");

describe("addNewTransaction", function() {
  it("should return a list consisting one object made from given command line args", function() {
    const date = new Date();
    const actual = lib.addNewTransaction([], date, [
      "--save",
      "--beverage",
      "Orange",
      "--empId",
      "11111",
      "--qty",
      "1"
    ]);

    const expected = [
      {
        "Employee ID": "11111",
        Beverage: "Orange",
        Quantity: "1",
        Date: date
      }
    ];

    assert.deepStrictEqual(actual, expected);
  });
});

describe("isEmployeeIdPresent", function() {
  it("should return true for matched", function() {
    const date = new Date();
    const transactionRecord = {
      "Employee ID": 25333,
      Beverage: "orenge",
      Quantity: "1",
      Date: date
    };
    const actual = lib.isIdPresent(25333)(transactionRecord);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
});

describe("countTotalJuices", function() {
  it("should return added value of quintity of one transaction with total count", function() {
    const date = new Date();
    const transactionRecord = {
      "Employee ID": 25333,
      Beverage: "orenge",
      Quintity: "1",
      Date: date
    };
    const actual = lib.countTotalJuices(0, transactionRecord);
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
});

describe("getSpecificIdsRecords", function() {
  it("should return specific records from a list of data and total count of juices", function() {
    const queryRecord = ["--query", "--empId", "25333"];
    const date = new Date();
    const transactionRecords = [
      {
        "Employee ID": 25333,
        Beverage: "orenge",
        Quintity: "1",
        Date: date
      },
      {
        "Employee ID": 25333,
        Beverage: "apple",
        Quintity: "3",
        Date: date
      }
    ];

    const actual = lib.getSpecificIdsRecords(transactionRecords, queryRecord);
    const expected = [
      [
        {
          "Employee ID": 25333,
          Beverage: "orenge",
          Quintity: "1",
          Date: date
        },
        {
          "Employee ID": 25333,
          Beverage: "apple",
          Quintity: "3",
          Date: date
        }
      ],
      4
    ];
    assert.deepStrictEqual(actual, expected);
  });
});
