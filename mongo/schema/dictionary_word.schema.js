const Schema = require('mongoose').Schema;

const schema_obj = {
  key_word: {
    type: Schema.Types.String,
  },
  value: {
    type: Schema.Types.String,
  },
};


let dictionaryWordSchema = new Schema(schema_obj, {collection: 'dictionary_word', strict: true});

module.exports = dictionaryWordSchema;
