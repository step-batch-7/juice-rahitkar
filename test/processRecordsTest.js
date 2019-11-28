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
  it("should return true for matched empId", function() {
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

  it("should return false for not matched empId", function() {
    const dat = new Date().toJSON();
    const transactionRecord = {
      empId: 25333,
      beverage: "orenge",
      quantity: "1",
      date: dat
    };
    const actual = lib.isIdPresent(1234)(transactionRecord);
    const expected = false;
    assert.strictEqual(actual, expected);
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
    const actual = lib.isDatePresent(dat.slice(0, 10))(transactionRecord);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it("should return false for not matched date", function() {
    const dat = new Date().toJSON();
    const transactionRecord = {
      empId: 25333,
      beverage: "orenge",
      quantity: "1",
      date: dat
    };
    const actual = lib.isDatePresent("2019-11-20")(transactionRecord);
    const expected = false;
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
  it("should return specific records with matched ids from a list of data", function() {
    const queryId = 25333;
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

    const actual = lib.getSpecificIdsRecords(transactionRecords, queryId);
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

  it("should return empty list for having no match for given empId", function() {
    const queryId = 1234;
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

    const actual = lib.getSpecificIdsRecords(transactionRecords, queryId);
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });
});

describe("getSpecificDatesRecords", function() {
  it("should return a list of records with matched date from a list of data", function() {
    const dat = new Date().toJSON();
    const queryDate = dat.slice(0, 10);
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

    const actual = lib.getSpecificDatesRecords(transactionRecords, queryDate);
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

  it("should return empty list for having no matched date", function() {
    const dat = new Date().toJSON();
    const queryDate = "2019-12-20";
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

    const actual = lib.getSpecificDatesRecords(transactionRecords, queryDate);
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });
});
