const Schema = require('mongoose').Schema;

const schema_obj = {
  description: {
    type: Schema.Types.String,
  },
  displayName: {
    type: Schema.Types.String,
  },
  shortDescription: {
    type: Schema.Types.String,
  },
  title: {
    type: Schema.Types.String,
  },
  mainImage: {
    type: {
      title: Schema.Types.String,
      url: Schema.Types.String
    }
  }
};


let processSchema = new Schema(schema_obj, {collection: 'pricing', strict: true});

module.exports = processSchema;
