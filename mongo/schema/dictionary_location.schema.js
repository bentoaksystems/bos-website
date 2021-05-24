const Schema = require('mongoose').Schema;
const dictionaryWordSchema = require('./dictionary_word.schema');

const schema_obj = {
  name: {
    type: Schema.Types.String,
  },
  direction: {
    type: Schema.Types.String,
  },
  value: {
    type: Schema.Types.String,
  },
  default_loc: {
    type: Schema.Types.Boolean,
  },
  locale_symbol: {
    type: Schema.Types.String,
    default: 'en',
  },
  keywords: [dictionaryWordSchema],
};


let dictionaryLocationSchema = new Schema(schema_obj, {collection: 'dictionary_location', strict: true});

module.exports = dictionaryLocationSchema;
