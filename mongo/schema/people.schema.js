const Schema = require('mongoose').Schema;

const schema_obj = {
  fullname: {
    type: Schema.Types.String,
    trim: true,
  },
  first_name: {
    type: Schema.Types.String,
    trim: true,
  },
  surname: {
    type: Schema.Types.String,
    trim: true,
  },
  image: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
  },
  responsibility: {
    type: Schema.Types.String,
  },
  social: {
    type: Schema.Types.Mixed
  },
  favorites: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
  meta: {
    type: Schema.Types.Mixed
  }
};


let peopleSchema = new Schema(schema_obj, {collection: 'people', strict: true});

module.exports = peopleSchema;
