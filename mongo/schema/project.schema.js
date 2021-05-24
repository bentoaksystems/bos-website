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
    type: Schema.Types.Mixed,
  },
  only_iran: {
    type: Schema.Types.Boolean,
  }
};


let processSchema = new Schema(schema_obj, {collection: 'project', strict: true});

module.exports = processSchema;
