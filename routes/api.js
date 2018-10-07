var express = require('express');
var router = express.Router();

const lib = require('../lib');

function APIHandler(func) {
  return (function (req, res) {
    if (!func)
      return res.status(500).send(`function called on '${req.url}' doesn't exist.`);
    if (typeof func !== 'function')
      return res.status(500).send(`type '${typeof func}' is not a function.`);

    func(req, res)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.error(`ERROR occurred in ${func}: `, err);
        res.status(err.status || 500).send(err.message || err);
      });
  });
}

router.get('/page_info/about_us', APIHandler(lib.PageInfo.getAboutUs));
router.get('/page_info/footer', APIHandler(lib.PageInfo.getFooter));
router.get('/page_info/header', APIHandler(lib.PageInfo.getHeader));
router.get('/page_info/home/top_section', APIHandler(lib.PageInfo.getHomeTopSection));
router.get('/page_info/people', APIHandler(lib.PageInfo.getPeople));
router.get('/page_info/pricing', APIHandler(lib.PageInfo.getPricing));
router.get('/page_info/process', APIHandler(lib.PageInfo.getProcess));
router.get('/page_info/project', APIHandler(lib.PageInfo.getProject));
router.get('/page_info/technology', APIHandler(lib.PageInfo.getTechnology));

router.post('/contact', APIHandler(lib.Contact.submit));

module.exports = router;