const getRecords = function(exists, reader, path, format, parser) {
  if (exists(path)) {
    return parser(reader(path, format));
  }
  return [];
};

exports.getRecords = getRecords;
