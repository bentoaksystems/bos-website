const Schema = require('mongoose').Schema;

const schema_obj = {
  title: {
    type: Schema.Types.String,
  },
  icon: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  }
};


let processSchema = new Schema(schema_obj, {collection: 'process', strict: true});

module.exports = processSchema;
