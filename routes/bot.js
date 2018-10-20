var express = require('express');
var router = express.Router();

const lib = require('../lib');

/**
 * This middleware can be used as much as needed,
 * it puts db datas from the result of 'func' function
 * to the req.data with the given 'field' input
 * 
 * For example, we want to fetch people data from database
 * and put it to req.data.people. We use:
 *      dbCall('people', lib.PageInfo.getPeople)
 * after this middleware is done, if you check req.data,
 * you can see that the result of getPeople function will
 * exist in req.data.people
 *
 * @param {*} field
 * The name of the field to be added to req.data
 * @param {*} func
 * The db function itself to fetch data from database
 */
function dbCall(field, func) {
  return ((req, res, next) => {
    if (!func || typeof func !== 'function') {
      next(`Invalid db call on '${req.url}'.`);
    }

    func(req, res)
      .then(data => {
        if (!req.data) {
          req.data = {};
        }
        req.data[field] = data;
        next();
      })
      .catch(err => {
        next(err);
      })
  });
}

/**
 * This is the last function that should be in the router
 * for rendering the desired template with given parameters
 *
 * This also adds the req.data to the sent parameters,
 * so the previous dbCalls are also attached and are
 * accessible in the pug template barely.
 * 
 * for example, if you've used dbCall middleware for getting people
 * via dbCall('people', lib.PageInfo.getPeople) and now you called
 * this function as follows: templateHandler('test', {title: 'hi'}),
 * it will render 'test.pug' with this parameters:
 * {
 *  people: [{id: 1, ...}, {id: 2, ...}],
 *  title: 'hi'
 * }
 *
 * @param {*} templateName
 * The template name. e.g. for 'example.pug', use 'example'
 * @param {*} parameters
 * The parameters to be sent to pug template
 * @returns
 */
function templateHandler(templateName, parameters = {}) {
  return ((req, res) => {
    res.render(templateName, Object.assign(
      req.data || {},
      parameters
    ));
  });
}

/* empty route */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/test',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('top_section', lib.PageInfo.getHomeTopSection),
  templateHandler('test', {
    title: 'Test Page'
  })
);

/* the routes and templates that we need:
  /home, home.pug
  /projects, projects.pug
  /people, people.pug
  /about-us, about-us.pug
  /pricing, pricing.pug
  /contact, contact.pug

  -> '/test' and 'test.pug' is implemented above
      as an example for different usages
*/

module.exports = router;
