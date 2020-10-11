const db = require('./mongo');
const fs = require('fs');
const models = require('./mongo/models.mongo');
const dbHelpers = require('./lib/db-helpers');

const jsons = {
  AboutUs: require('./json-data/about_us'),
  Footer: require('./json-data/footer'),
  Header: require('./json-data/header.json'),
  HomeTopSection: require('./json-data/home_top_section.json'),
  People: require('./json-data/people.json'),
  Pricing: require('./json-data/pricing'),
  Process: require('./json-data/process'),
  Project: require('./json-data/project'),
  Technology: require('./json-data/technology'),
}

modelIsReady()
  .then(res => {
    // forcely drop all in database
    return dbHelpers.dropAll(true);
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
    // keywords:{id: 'شناسه', info: 'اطلاعات'}
    for (let index = 0; index < dictionaries.length; index++) {
      const dictionary = dictionaries[index];
      const keywords = Object.entries(dictionary['keywords']).map((e) => ( { key_word: e[0], value: e[1] } ));
      await models()['DictionaryLocation'].updateOne({name: dictionary['name']}, {
        name: dictionary['name'],
        direction: dictionary['direction'],
        default: dictionary['default'],
        locale_symbol: dictionary['locale_symbol'],
        keywords: keywords
      }, {upsert: true});
    }


    console.log('-> dictionary json updated');
  })
  .then(res => {
    console.log('-> all jsons have been added successfully!');
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