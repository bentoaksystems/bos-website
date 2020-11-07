const models = require('../mongo/models.mongo');
const marked = require('marked');
const {translateBaseOnLanguage} = require('../lib/helpers');
class PageInfo {
  async getAboutUs(req, res) {
    let data = await models()['AboutUs'].find({}).lean();
    let language;
    if (this && this.isBot){
      if(req.params.lang === 'de') language = 'German';
      else language = 'English';
    }
    else
      language = req.headers['language'] || 'English';
    data.forEach(x => x['description'] = translateBaseOnLanguage(language, x['description']));
    data.forEach(r => r.description = r.description ? marked(r.description) : '');
    return data;
  }

  async getFooter(req, res) {
    let data = await models()['Footer'].find({}).lean();
    return data
  }

  async getHeader(req, res) {
    return await models()['Header'].find({}).lean();
  }

  async getHomeTopSection(req, res) {
    return await models()['HomeTopSection'].find({}).lean();
  }

  async getPeople(req, res) {
    return await models()['People'].find({}).lean();
  }

  async getPricing(req, res) {
    return await models()['Pricing'].find({}).lean();
  }

  async getProcess(req, res) {
    return await models()['Process'].find({}).lean();
  }

  async getProject(req, res) {
    /**
     * 
     * @params {req} is_iran
     */
    const query = {};
    if (!req.is_iran) {
      query['only_iran'] = false;
    }
    let data = await models()['Project'].find(query).lean();
    data.forEach(x => delete x['only_iran']);
    return data;
  }

  async getTechnology(req, res) {
    return await models()['Technology'].find({}).lean();
  }
}

module.exports = new PageInfo();