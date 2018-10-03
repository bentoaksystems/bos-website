const Schema = require('mongoose').Schema;

const schema_obj = {
  backgroundPic: {
    type: Schema.Types.String,
  },
  title: {
    type: Schema.Types.String,
  },
  intro: {
    type: Schema.Types.String,
  }
};


let headerTopSectionSchema = new Schema(schema_obj, {collection: 'header_top_section', strict: true});

module.exports = headerTopSectionSchema;
