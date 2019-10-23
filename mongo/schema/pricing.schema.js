const Schema = require('mongoose').Schema;

const schema_obj = {
  type: Schema.Types.Mixed
};


let pricingSchema = new Schema(schema_obj, {collection: 'pricing', strict: false});

module.exports = pricingSchema;
