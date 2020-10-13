const models = require('../mongo/models.mongo');
const marked = require('marked');
class PageInfo {
  async getAboutUs(req, res) {
    let data = await models()['AboutUs'].find({}).lean();
    data.forEach(r => r.description = r.description ? marked(r.description) : '');
    return data;
  }

  async getFooter(req, res) {
    return models()['Footer'].find({}).lean();
  }

  async getHeader(req, res) {
    return models()['Header'].find({}).lean();
  }

  async getHomeTopSection(req, res) {
    return models()['HomeTopSection'].find({}).lean();
  }

  async getPeople(req, res) {
    return models()['People'].find({}).lean();
  }

  async getPricing(req, res) {
    return models()['Pricing'].find({}).lean();
  }

  async getProcess(req, res) {
    return models()['Process'].find({}).lean();
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
    let result = await models()['Project'].find(query).lean();
    result.forEach(x => delete x['only_iran']);
    return result;
  }

  async getTechnology(req, res) {
    return models()['Technology'].find({}).lean();
  }
}

module.exports = new PageInfo();