const express = require('express');
const router = express.Router();
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
  return ((req, res, next) => {
    if (req.isSpider()) {
      res.render(templateName, Object.assign(
        req.data || {},
        parameters
      ));
    } else next();
  });
}


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
router.get('/header',
  dbCall('header', lib.PageInfo.getHeader),
  templateHandler('header', {})
);

router.get('/footer',
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('footer', {})
);

router.get('/',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('topSection', lib.PageInfo.getHomeTopSection),
  dbCall('ourProcess', lib.PageInfo.getProcess),
  dbCall('toolbox', lib.PageInfo.getTechnology),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('home', {
    title: 'Bent Oak Systems',
    processTitle: 'Our Process',
    toolboxTitle: 'Our Toolbox',
    keywords: 'Bent Oak Systems,web development,CICD,software development,dev ops',
    descriptions: 'Bent Oak Systems is a software and web development company founded in 2016',
    viewport: 'width=device-width, initial-scale=1'
  })
);

router.get('/home',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('topSection', lib.PageInfo.getHomeTopSection),
  dbCall('ourProcess', lib.PageInfo.getProcess),
  dbCall('toolbox', lib.PageInfo.getTechnology),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('home', {
    title: 'Bent Oak Systems',
    processTitle: 'Our Process',
    toolboxTitle: 'Our Toolbox',
    keywords: 'Bent Oak Systems,web development,CICD,software development,dev ops',
    descriptions: 'Bent Oak Systems is a software and web development company founded in 2016',
    viewport: 'width=device-width, initial-scale=1'
  })
);

router.get('/projects',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('projects', lib.PageInfo.getProject),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('projects', {
    title: 'Our Projects',
    keywords: 'Burgista Timesheet,Planning and Budgeting App For Aria Teb,Quran Together App,Dr Mandegar\'s Electronic Medical Record App,Burgista Internal Delivery App',
    descriptions: 'Bent Oak Systems Projects',
    viewport: 'width=device-width, initial-scale=1'
  })
);

router.get('/people',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('people', lib.PageInfo.getPeople),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('people', {
    title: 'People In Bent Oak Systems',
    keywords: 'People,bentoak,bent oak',
    descriptions: 'Bent Oak Systems people',
    viewport: 'width=device-width, initial-scale=1'
  })
);

router.get('/about-us',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('about-us', {
    title: 'About Us',
    keywords: 'People,Founder / CEO,Technical Manager,Business Consultant,Full-stack Developer,Test Automation',
    descriptions: 'About Bent Oak Systems',
    viewport: 'width=device-width, initial-scale=1'
  })
);


router.get('/pricing',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('pricing', lib.PageInfo.getPricing),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('pricing', {
    title: 'Pricing',
    keywords: 'Fully Remote,Leveraged On-site Contract,Remote Technical Acceleration,Local Technical Acceleration',
    descriptions: 'Bent Oak Systems Pricing',
    viewport: 'width=device-width, initial-scale=1'
  })
);

router.get('/contact',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('contact', {
    title: 'Contact us',
    keywords: 'contact,bentoak,bent oak',
    descriptions: 'Contact Bent Oak Systems',
    viewport: 'width=device-width, initial-scale=1'
  })
);


module.exports = router;
