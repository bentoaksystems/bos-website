const Schema = require('mongoose').Schema;

const schema_obj = {
  title: {
    type: Schema.Types.String,
  },
  url: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
  file: {
    type: {
      url: Schema.Types.String
    }
  }
};


let technologySchema = new Schema(schema_obj, {collection: 'technology', strict: true});

module.exports = technologySchema;
