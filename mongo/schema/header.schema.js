const Schema = require('mongoose').Schema;

const schema_obj = {
  logo: {
    type: Schema.Types.String,
    trim: true,
  },
  menu_tab: {
    type: {
      title: Schema.Types.String,
      router_link: Schema.Types.String,
    }
  }
};


let headerSchema = new Schema(schema_obj, {collection: 'header', strict: true});

module.exports = headerSchema;
