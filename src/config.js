const configPath = function(env) {
  return env.AnnaJuiceCenterTransactionsPath || "./records.json";
};

const configDate = function(env) {
  return env.NOW === undefined ? new Date() : new Date(env.NOW);
};

exports.configPath = configPath;
exports.configDate = configDate;
