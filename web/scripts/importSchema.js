const g = require("graphql-import");
const schema = g.importSchema("./src/config/schema.graphql");
module.exports = schema;
