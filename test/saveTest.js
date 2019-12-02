const assert = require("assert");
const save = require("../src/save").save;

describe("saveTest", function() {
  it("should return a list of record with added new transaction", function() {
    const records = [
      {
        empId: "1111",
        beverage: "Apple",
        quantity: "4",
        date: new Date("2019-11-26T17:29:48.737Z")
      },
      {
        empId: "123456",
        beverage: "Banana",
        quantity: "2",
        date: new Date("2019-11-26T17:29:48.737Z")
      }
    ];
    const date = new Date();
    const newTransaction = {
      empId: "25333",
      beverage: "Orange",
      quantity: "2",
      date: date
    };

    const actual = save(records, newTransaction);
    const expected = [
      {
        empId: "1111",
        beverage: "Apple",
        quantity: "4",
        date: new Date("2019-11-26T17:29:48.737Z")
      },
      {
        empId: "123456",
        beverage: "Banana",
        quantity: "2",
        date: new Date("2019-11-26T17:29:48.737Z")
      },
      {
        empId: "25333",
        beverage: "Orange",
        quantity: "2",
        date: date
      }
    ];

    assert.deepStrictEqual(actual, expected);
  });
});
