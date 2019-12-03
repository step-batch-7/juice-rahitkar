const assert = require("assert");
const { configPath, configDate } = require("../src/config");

describe("configPath", function() {
  it("should return env path if env.AnnaJuiceCenterTransactionsPath is not undefined", function() {
    const env = {
      AnnaJuiceCenterTransactionsPath:
        "./appTest/preset_2_juices_transactionData.json"
    };

    assert.deepStrictEqual(
      configPath(env),
      "./appTest/preset_2_juices_transactionData.json"
    );
  });

  it("should return default path env.AnnaJuiceCenterTransactionsPath is undefined", function() {
    const env = {};
    assert.deepStrictEqual(configPath(env), "./records.json");
  });
});

describe("getDate", function() {
  it("should return env NOW if env.NOW is not undefined", function() {
    const env = { NOW: "1998-11-01" };
    assert.deepStrictEqual(configDate(env), new Date("1998-11-01"));
  });

  it("should return current Date if env.NOW is undefined", function() {
    const env = {};
    const date = new Date();
    assert.deepStrictEqual(configDate(env), date);
  });
});
