const models = require('../mongo/models.mongo');

class PageInfo {
  async getAboutUs(req, res) {
    return models()['AboutUs'].find({}).lean();
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
    return models()['Project'].find({}).lean();
  }

  async getTechnology(req, res) {
    return models()['Technology'].find({}).lean();
  }
}

module.exports = new PageInfo();