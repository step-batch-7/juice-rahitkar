const assert = require("assert");
const lib = require("../src/processRecords.js");

describe("addNewTransaction", function() {
  it("should return a list consisting one object made from given command line args", function() {
    const date = new Date();
    const actual = lib.addNewTransaction([], {
      empId: "11111",
      beverage: "Orange",
      quantity: "1",
      Date: date
    });

    const expected = [
      {
        empId: "11111",
        beverage: "Orange",
        quantity: "1",
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
      empId: 25333,
      beverage: "orenge",
      quantity: "1",
      Date: date
    };
    const actual = lib.isIdPresent(25333)(transactionRecord);
    const expected = true;
    assert.strictEqual(actual, expected);
  });
});

describe("countTotalJuices", function() {
  it("should return added value of quantity of one transaction with total count", function() {
    const date = new Date();
    const transactionRecord = {
      empId: 25333,
      beverage: "orenge",
      quantity: "1",
      Date: date
    };
    const actual = lib.countTotalJuices(0, transactionRecord);
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
});

describe("getSpecificIdsRecords", function() {
  it("should return specific records from a list of data and total count of juices", function() {
    const queryRecord = 25333;
    const date = new Date();
    const transactionRecords = [
      {
        empId: 25333,
        beverage: "orenge",
        quantity: "1",
        Date: date
      },
      {
        empId: 25333,
        beverage: "apple",
        quantity: "3",
        Date: date
      }
    ];

    const actual = lib.getSpecificIdsRecords(transactionRecords, queryRecord);
    const expected = [
      [
        {
          empId: 25333,
          beverage: "orenge",
          quantity: "1",
          Date: date
        },
        {
          empId: 25333,
          beverage: "apple",
          quantity: "3",
          Date: date
        }
      ],
      4
    ];
    assert.deepStrictEqual(actual, expected);
  });
});
