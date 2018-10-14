const db = require('./index');

let schemas = {
  AboutUsSchema: require('./schema/about_us.schema'),
  FooterSchema: require('./schema/footer.schema'),
  HeaderSchema: require('./schema/header.schema'),
  HomeTopSectionSchema: require('./schema/home_top_section.schema'),
  PeopleSchema: require('./schema/people.schema'),
  PricingSchema: require('./schema/pricing.schema'),
  ProcessSchema: require('./schema/process.schema'),
  ProjectSchema: require('./schema/project.schema'),
  TechnologySchema: require('./schema/technology.schema'),
  BlogSchema: require('./schema/blog.schema')
};

// can save data out of schema using strict: false
let models = {};

db.dbIsReady().then((res) => {
  for (let key in schemas) {
    if (schemas.hasOwnProperty(key)) {
      let newKey = key.replace('Schema', '');
      models[newKey] = res.connection.model(newKey, schemas[key]);
    }
  }
}).catch(err => {
  console.error('Error in getting schema models: ', err);
});

module.exports = () => models;
