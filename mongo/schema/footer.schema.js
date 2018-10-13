const Schema = require('mongoose').Schema;

const schema_obj = {
  address: {
    type: Schema.Types.String,
    // required: true,
  },
  email: {
    type: Schema.Types.String,
    trim: true,
  },
  social: {
    type: Schema.Types.Mixed
  },
  phone: {
    type: Schema.Types.String,
  },
  title: {
    type: Schema.Types.String,
  }
};


let footerSchema = new Schema(schema_obj, {collection: 'footer', strict: true});

module.exports = footerSchema;
