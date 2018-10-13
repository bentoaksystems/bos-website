const Schema = require('mongoose').Schema;

const schema_obj = {
  title: {
    type: Schema.Types.String,
  },
  planning_price: {
    type: Schema.Types.String,
  },
  programming_price: {
    type: Schema.Types.String
  },
  backing_price: {
    type: Schema.Types.String
  },
  description1: {
    type: Schema.Types.String,
  },
  description2: {
    type: Schema.Types.String,
  }
};


let pricingSchema = new Schema(schema_obj, {collection: 'pricing', strict: true});

module.exports = pricingSchema;
