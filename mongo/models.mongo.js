const db = require('./index');
const env = require('../env');

let schemas = {
  PeopleSchema: require('./schema/people.schema'),
  FooterSchema: require('./schema/footer.schema'),
  AboutUsSchema: require('./schema/about_us.schema'),
  HeaderSchema: require('./schema/header.schema'),
  HeaderTopSectionSchema: require('./schema/header_top_section.schema'),
  PricingSchema: require('./schema/pricing.schema'),
  ProcessSchema: require('./schema/process.schema'),
  ProjectSchema: require('./schema/project.schema'),
  technologySchema: require('./schema/technology.schema'),
};


SALT_WORK_FACTOR = 10;

preSaveFunction = function (next) {
  let agent = this;

  // Check mobile_no pattern
  if (agent.mobile_no && !(new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)).test(agent.mobile_no))
    return next('Incorrect mobile_no pattern');

  // only hash the secret if it has been modified (or is new)
  if (!agent.isModified('secret')) return next();

  // generate a salt
  env.bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    env.bcrypt.hash(agent.secret, salt, null, function (err, hash) {
      if (err) return next(err);

      // override the clear text secret with the hashed one
      agent.secret = hash;

      // Check object should saved into registerVerification collection
      if (agent.code)
        agent.secret = preSecret + agent.secret;

      next();
    });
  });
};


soldOutPreSaveFunction = function (next) {
  const soldOut = this;
  let insertionDate = new Date();
  soldOut.sold_out_date = insertionDate;
  soldOut.expiration_date = new Date().setDate(insertionDate.getDate() + 7);
  next();
}


compareFunction = function (candidatePassword, cb) {
  env.bcrypt.compare(candidatePassword, this.secret, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

schemas.AgentSchema.pre('save', preSaveFunction);
schemas.AgentSchema.methods.comparePassword = compareFunction;
schemas.CustomerSchema.pre('save', preSaveFunction);
schemas.CustomerSchema.methods.comparePassword = compareFunction;

schemas.SoldOutSchema.pre('save', soldOutPreSaveFunction);




// can save data out of schema using strict: false
let models = {};

db.dbIsReady().then((res) => {
  for (let key in schemas) {
    if (schemas.hasOwnProperty(key)) {
      let newKey = key.replace('Schema', '');
      models[newKey] = res.find(x => x.prodConnection).prodConnection.model(newKey, schemas[key]);
      models[newKey + 'Test'] = res.find(x => x.testConnection).testConnection.model(newKey, schemas[key]);
    }
  }
}).catch(err => {
});

module.exports = () => models;
