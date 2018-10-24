const Schema = require('mongoose').Schema;

const schema_obj = {
  title: {
    type: Schema.Types.String,
    trim: true,
    // required: true,
  },
  background: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
  meta: {
    type: Schema.Types.Mixed
  }
};


let aboutUsSchema = new Schema(schema_obj, {collection: 'about_us', strict: true});

module.exports = aboutUsSchema;
