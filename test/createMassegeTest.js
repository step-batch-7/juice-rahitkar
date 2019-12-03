const assert = require("assert");
const create = require("../src/createMessage");

describe("createSaveMessageTest", function() {
  it("should give a message for save in cliant's demanded format", function() {
    const date = new Date();
    const records = [
      {
        empId: 1234,
        beverage: "orenge",
        quantity: 2,
        date: date
      }
    ];
    const actual = create.saveMessage(records);
    const expected = `Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n1234,orenge,2,${date.toJSON()}`;
    assert.strictEqual(actual, expected);
  });
});

describe("createQueryMessageTest", function() {
  it("should give a message for query in cliant's demanded format for more or less then one juice transaction", function() {
    const date = new Date();
    const queryResult = {
      matchedRecords: [
        {
          empId: 1234,
          beverage: "Banana",
          quantity: 4,
          date: date
        }
      ],
      total: 4
    };
    const actual = create.queryMessage(queryResult);
    const expected = `Employee ID,Beverage,Quantity,Date\n1234,Banana,4,${date.toJSON()}\nTotal: 4 Juices`;
    assert.strictEqual(actual, expected);
  });

  it("should give a message for query in cliant's demanded format for only one juice transaction", function() {
    const date = new Date();
    const queryResult = {
      matchedRecords: [
        {
          empId: 1234,
          beverage: "Banana",
          quantity: 1,
          date: date
        }
      ],
      total: 1
    };
    const actual = create.queryMessage(queryResult);
    const expected = `Employee ID,Beverage,Quantity,Date\n1234,Banana,1,${date.toJSON()}\nTotal: 1 Juice`;
    assert.strictEqual(actual, expected);
  });
});
