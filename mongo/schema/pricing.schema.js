const Schema = require('mongoose').Schema;

const schema_obj = {
};


let pricingSchema = new Schema(schema_obj, {collection: 'pricing', strict: false});

module.exports = pricingSchema;
