const getOptions = require("loader-utils").getOptions;
const validate = require("schema-utils").validate;

const removeComment = require("./remove-comment");

const schema = {
  type: "object",
  properties: {
    test: {
      type: "string",
    },
  },
};

module.exports = function(source) {
  const options = getOptions(this);

  validate(schema, options, {
    name: "JSON Loader",
    baseDataPath: "options",
  });

  let pureSource = source;
  if (options.comment === false) {
    pureSource = removeComment(source);
  }

  JSON.parse(pureSource); // JSON validate
  return `module.exports = ${pureSource}`;
};
