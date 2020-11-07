const express = require('express');
const router = express.Router();
const lib = require('../lib');
const helpers = require('../lib/helpers');

footer_items_en = {
  contactSection: 'Get in touch with us',
  aboutSection: 'About company',
  socialSection: 'Follow us',
};

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
      if (req.params.lang === 'en') {
        lang = 'English';
        req.data = {...req.data, ...{language: lang}};
      }
      else if (req.params.lang === 'de'){
        lang = 'German';
        req.data = {...req.data, ...{language: lang}};
      }
      Object.keys(req.data).forEach(section => {
        switch (section) {
          case 'header':
            helpers.trlHeader(req, lang);
            break;
          case 'footer':
            helpers.trlFooter(req, lang);
          case 'about':
            helpers.trlAboutus(req, lang);
            break;
          case 'topSection':
            helpers.trlTopSection(req, lang);
            break;
          case 'ourProcess':
            helpers.trlOurProcess(req, lang);
            break;
          case 'toolbox':
            helpers.trlToolbox(req, lang);
            break;
          case 'projects':
            helpers.trlProjects(req, lang);
            break;
          case 'people':
            helpers.trlPeople(req, lang);
            break;
          case 'pricing':
            helpers.trlPricing(req, lang);
            break;
        }
      });
      let paramsCopy = trlParams(parameters, lang);
      res.render(templateName, Object.assign(
        req.data || {},
        paramsCopy
      ));
    } else next();
  });
}

function trlParams(parameters, lang) {
  let params = JSON.parse(JSON.stringify(parameters));
  Object.keys(params).filter(it => it !== 'viewport').forEach(el => {
    if (el === 'keywords')
      params[el] = helpers.trlKeywords(params[el], lang);
    else
      params[el] = helpers.translateBaseOnLanguage(lang, params[el]);
  });
  return params;
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
router.get('/:lang/header',
  dbCall('header', lib.PageInfo.getHeader),
  templateHandler('header', {})
);

router.get('/:lang/footer',
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('footer', {})
);

router.get('/:lang', dbCall('header', lib.PageInfo.getHeader),
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
    viewport: 'width=device-width, initial-scale=1',
    ...footer_items_en
  })
);

router.get('/:lang/home',
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
    viewport: 'width=device-width, initial-scale=1',
    ...footer_items_en
  })
);

router.get('/:lang/projects',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('projects', lib.PageInfo.getProject),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('projects', {
    title: 'Our Projects',
    keywords: 'Burgista Timesheet,Planning and Budgeting App For Aria Teb,Quran Together App,Dr Mandegar\'s Electronic Medical Record App,Burgista Internal Delivery App',
    descriptions: 'Bent Oak Systems Projects',
    viewport: 'width=device-width, initial-scale=1',
    ...footer_items_en
  })
);

router.get('/:lang/people',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('people', lib.PageInfo.getPeople),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('people', {
    title: 'People In Bent Oak Systems',
    subtitle: 'People in our company',
    keywords: 'People,bentoak,bent oak',
    descriptions: 'Bent Oak Systems people',
    viewport: 'width=device-width, initial-scale=1',
    ...footer_items_en
  })
);

router.get('/:lang/about-us',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs.bind({isBot: true})),
  templateHandler('about-us', {
    title: 'About Us',
    keywords: 'People,Founder / CEO,Technical Manager,Business Consultant,Full-stack Developer,Test Automation',
    descriptions: 'About Bent Oak Systems',
    viewport: 'width=device-width, initial-scale=1',
    ...footer_items_en
  })
);

router.get('/:lang/pricing',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('pricing', lib.PageInfo.getPricing),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('pricing', {
    title: 'Pricing',
    keywords: 'Fully Remote,Leveraged On-site Contract,Remote Technical Acceleration,Local Technical Acceleration',
    descriptions: 'Bent Oak Systems Pricing',
    viewport: 'width=device-width, initial-scale=1',
    ...footer_items_en
  })
);

router.get('/:lang/contact',
  dbCall('header', lib.PageInfo.getHeader),
  dbCall('footer', lib.PageInfo.getFooter),
  dbCall('about', lib.PageInfo.getAboutUs),
  templateHandler('contact', {
    title: 'Contact us',
    keywords: 'contact,bentoak,bent oak',
    descriptions: 'Contact Bent Oak Systems',
    viewport: 'width=device-width, initial-scale=1',
    ...footer_items_en
  })
);

module.exports = router;
