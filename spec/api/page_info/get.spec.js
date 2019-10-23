const lib = require('../../../lib');
const rp = require('request-promise');
const env = require('../../../env');
const models = require('../../../mongo/models.mongo');

describe("GET Page Info", () => {
  let people;

  beforeEach(done => {
    lib.dbHelpers.dropAll()
      .then(res => {
        return models()['People'].insertMany([{
          "fullname": "Amin Azarbadegan",
          "image": "http://images.ctfassets.net/yati6i04nkb8/4uZusPZA00Qi6g406iYKQM/f3feef1f7d3e5f253743fb2d5375a456/amin_photo.JPG",
          "email": "amin@azarbadegan.net",
          "responsibility": "Founder / CEO",
          "social": {
            "github": "https://github.com/aminazar"
          },
          "favorites": "Artificial Life / Encryption",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }, {
          "fullname": "Ehsan Ansari Basir",
          "image": "http://images.ctfassets.net/yati6i04nkb8/6ED3DD38PK64kUAq0YgO0m/1e801dea5b4a5f6061dae197a3538636/photo_2017-09-17_20-28-34.jpg",
          "email": "eabasir@gmail.com",
          "responsibility": "Technical Manager",
          "social": {
            "linkedIn": "https://www.linkedin.com/in/ehsan-ansari-basir/",
            "github": "https://github.com/eabasir",
            "telegram": "t.me/eabasir"
          },
          "favorites": "Budget Project",
          "description": "A shorter description to see how it fits in the page and whether it stays inside the placeholder that was defined for it or not"
        }]);
      })
      .then(res => {
        people = res;
        done();
      })
      .catch(err => {
        console.error('ERROR in beforeEach: ', err);
        done();
      });
  });

  it('should get a list of all people', function (done) {
    this.done = done;
    rp({
      method: 'GET',
      uri: `${env.appAddress}/api/page_info/people`,
      json: true,
      resolveWithFullResponse: true,
    })
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(2);
        expect(res.body.map(el => el.email)).toContain('eabasir@gmail.com');
        expect(res.body.map(el => el.email)).toContain('amin@azarbadegan.net');
        done();
      })
      .catch(lib.helpers.errorHandler.bind(this));
  });
});
