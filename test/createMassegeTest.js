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
    const expected = `Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n1234 orenge 2 ${date.toJSON()}`;
    assert.strictEqual(actual, expected);
  });
});

describe("createQueryMessageTest", function() {
  it("should give a message for query in cliant's demanded format", function() {
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
    const expected = `Employee ID,Beverage,Quantity,Date\n1234 Banana 4 ${date.toJSON()}\nTotal :4`;
    assert.strictEqual(actual, expected);
  });
});
