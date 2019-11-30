const assert = require("assert");
const save = require("../src/save").save;

describe("saveTest", function() {
  it("should return a list of record with added new transaction", function() {
    const records = [
      {
        empId: "1111",
        beverage: "Apple",
        quantity: "4",
        date: "2019-11-26T17:29:48.737Z"
      },
      {
        empId: "123456",
        beverage: "Banana",
        quantity: "2",
        date: "2019-11-26T17:29:48.737Z"
      }
    ];

    const args = [
      "--save",
      "--beverage",
      "Orange",
      "--empId",
      "25333",
      "--qty",
      "2"
    ];
    const date = new Date();
    const actual = save(records, args, date);
    const expected = [
      {
        empId: "1111",
        beverage: "Apple",
        quantity: "4",
        date: "2019-11-26T17:29:48.737Z"
      },
      {
        empId: "123456",
        beverage: "Banana",
        quantity: "2",
        date: "2019-11-26T17:29:48.737Z"
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
