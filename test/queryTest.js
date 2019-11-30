const assert = require("assert");
const query = require("../src/query").query;

describe("queryTest", function() {
  it("should give records which are matched with given empId", function() {
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
    const args = ["--query", "--empId", "1111"];
    const actual = query(records, args);
    const expected = [
      {
        empId: "1111",
        beverage: "Apple",
        quantity: "4",
        date: "2019-11-26T17:29:48.737Z"
      }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it("should give records which are matched with given date", function() {
    const date = new Date();
    const records = [
      {
        empId: "1111",
        beverage: "Apple",
        quantity: "4",
        date: date
      },
      {
        empId: "123456",
        beverage: "Banana",
        quantity: "2",
        date: date
      }
    ];
    const userDate = date.toJSON().slice(0, 10);
    const args = ["--query", "--date", userDate];
    const actual = query(records, args);
    const expected = [
      {
        empId: "1111",
        beverage: "Apple",
        quantity: "4",
        date: date
      },
      {
        empId: "123456",
        beverage: "Banana",
        quantity: "2",
        date: date
      }
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it("should give records which are matched with given beverage", function() {
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
    const args = ["--query", "--beverage", "Banana"];
    const actual = query(records, args);
    const expected = [
      {
        empId: "123456",
        beverage: "Banana",
        quantity: "2",
        date: "2019-11-26T17:29:48.737Z"
      }
    ];
    assert.deepStrictEqual(actual, expected);
  });
});
