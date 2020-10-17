const Schema = require('mongoose').Schema;

const schema_obj = {
    from: {
        type: Schema.Types.String,
    },
    name: {
        type: Schema.Types.String,
    },
    content: {
        type: Schema.Types.Mixed
    },
    phoneNumber: {
        type: Schema.Types.String
    },
    pricing_info: {}
};


let mailSchema = new Schema(schema_obj, {
    collection: 'mail',
    strict: true
});

module.exports = mailSchema;