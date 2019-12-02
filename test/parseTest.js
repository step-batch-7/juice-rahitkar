const assert = require("assert");
const { parseSaveCommand, parseQueryCommand } = require("../src/parse");

describe("parseSaveCommand", function() {
  it("should give a object  with keys of empId, beverage, quantity with values of their corresponding element and key date with value passed from argument", function() {
    const UserCommand = [
      "--save",
      "--empId",
      "1234",
      "--beverage",
      "Orenge",
      "--qty",
      "2"
    ];
    date = new Date().toJSON().slice(0, 10);
    const actual = parseSaveCommand(UserCommand, date);
    const expected = {
      empId: 1234,
      beverage: "Orenge",
      quantity: "2",
      date: date
    };
    assert.deepStrictEqual(actual, expected);
  });
});

describe("parseQueryCommand", function() {
  it("should give a object with key of empId with its corresponding elemrnt and keys beverage and date with values of undifened", function() {
    const UserCommand = ["--query", "--empId", "1234"];
    const actual = parseQueryCommand(UserCommand);
    const expected = { empId: 1234, date: undefined, beverage: undefined };
    assert.deepStrictEqual(actual, expected);
  });

  it("should give a object with key of date with its corresponding elemrnt and keys empId and beverage with values of undifened", function() {
    const UserCommand = ["--query", "--date", "2019-12-02"];
    const actual = parseQueryCommand(UserCommand);
    const expected = {
      empId: undefined,
      date: "2019-12-02",
      beverage: undefined
    };
    assert.deepStrictEqual(actual, expected);
  });

  it("should give a object with key of beverage with its corresponding elemrnt and keys empId and date with values of undifened", function() {
    const UserCommand = ["--query", "--beverage", "Orange"];
    const actual = parseQueryCommand(UserCommand);
    const expected = { empId: undefined, date: undefined, beverage: "Orange" };
    assert.deepStrictEqual(actual, expected);
  });
});
