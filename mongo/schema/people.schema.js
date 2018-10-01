const Schema = require('mongoose').Schema;

const schema_obj = {
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
  social: [Schema.Types.Mixed],
  favorites: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  }
};


let peopleSchema = new Schema(schema_obj, {collection: 'people', strict: true});

module.exports = peopleSchema;
