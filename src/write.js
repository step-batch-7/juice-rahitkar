const write = function(writer, path, content, format) {
  writer(path, content, format);
};

exports.write = write;
