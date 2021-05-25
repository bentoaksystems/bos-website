const db = require('./mongo');
const fs = require('fs');
const models = require('./mongo/models.mongo');
const dbHelpers = require('./lib/db-helpers');

const jsons = {
  AboutUs: require('./json-data/about_us.json'),
  Footer: require('./json-data/footer.json'),
  Header: require('./json-data/header.json'),
  HomeTopSection: require('./json-data/home_top_section.json'),
  People: require('./json-data/people.json'),
  Pricing: require('./json-data/pricing.json'),
  Process: require('./json-data/process.json'),
  Project: require('./json-data/project.json'),
  Technology: require('./json-data/technology.json'),
}

modelIsReady()
  .then(res => {
    // forcely drop all in database
    return dbHelpers.dropCollection(["MAIL"]);
  })
  .then(res => {
    return Promise.all(Object.keys(models()).map(el => {
      if (jsons.hasOwnProperty(el)) {
        console.log(`-> '${el}' json is being added`);
        return models()[el].insertMany(jsons[el]);
      }
    }));
  })
  .then(async () => {
    /**
     * add dictionary json
     */
    const dictionaries = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));
    const queries = [];
    for (let index = 0; index < dictionaries.length; index++) {
      const dictionary = dictionaries[index];
      const keywords = Object.entries(dictionary['keywords']).map((e) => ( { key_word: e[0], value: e[1] } ));
      queries.push(models()['DictionaryLocation'].updateOne({name: dictionary['name']}, {
        name: dictionary['name'],
        direction: dictionary['direction'],
        default: dictionary['default'],
        locale_symbol: dictionary['locale_symbol'],
        keywords: keywords
      }, {upsert: true}));
    }
    await Promise.all(queries);


    console.log('-> dictionary json updated');
  })
  .then(res => {
    console.log('-> all json have been added successfully!');
    process.exit();
  })
  .catch(err => {
    console.error('error occurred: ', err);
    process.exit();
  });

function modelIsReady() {
  return new Promise((res, rej) => {
    getModels = () => {
      setTimeout(() => {
        if (models && models() && Object.keys(models()).length)
          res();
        else
          getModels();
      }, 500);
    }
    getModels();
  });
}