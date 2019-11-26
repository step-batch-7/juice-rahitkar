const chooseAndAct = require("../src/sudoMain.js");

describe("chooseAndAct", function() {
  it("should return a list of objects for given command save ", function() {
    const actual = chooseAndAct(command, date, helper);
    const expected = assert.equalizer(actual, expected);
  });
});
