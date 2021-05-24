const models = require('../mongo/models.mongo');
class DictionaryService {

  async getWordsBaseOnLocation(req, res) {
    let name = 'English';
    if (req.body.name) {
      name = req.body.name;
    }
    const result = await models()['DictionaryLocation'].findOne({name: name}).lean();
    return result
  }
}

module.exports = new DictionaryService();