const Base = require('./base.model');

class People extends Base {

  constructor(test = People.test) {

    super('People', test);

    this.PeopleModel = this.model;
  }

  getPeople() {
    return this.PeopleModel.find()
  }
}

People.test = false;
module.exports = People;