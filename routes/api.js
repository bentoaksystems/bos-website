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

router.post('/dictionary_words', APIHandler(lib.DictionaryService.getWordsBaseOnLocation));
// English
router.get('/en/page_info/about_us', APIHandler(lib.PageInfo.getAboutUs));
router.get('/en/page_info/footer', APIHandler(lib.PageInfo.getFooter));
router.get('/en/page_info/header', APIHandler(lib.PageInfo.getHeader));
router.get('/en/page_info/home/top_section', APIHandler(lib.PageInfo.getHomeTopSection));
router.get('/en/page_info/people', APIHandler(lib.PageInfo.getPeople));
router.get('/en/page_info/pricing', APIHandler(lib.PageInfo.getPricing));
router.get('/en/page_info/process', APIHandler(lib.PageInfo.getProcess));
router.get('/en/page_info/project', APIHandler(lib.PageInfo.getProject));
router.get('/en/page_info/technology', APIHandler(lib.PageInfo.getTechnology));
// German
router.get('/de/page_info/about_us', APIHandler(lib.PageInfo.getAboutUs));
router.get('/de/page_info/footer', APIHandler(lib.PageInfo.getFooter));
router.get('/de/page_info/header', APIHandler(lib.PageInfo.getHeader));
router.get('/de/page_info/home/top_section', APIHandler(lib.PageInfo.getHomeTopSection));
router.get('/de/page_info/people', APIHandler(lib.PageInfo.getPeople));
router.get('/de/page_info/pricing', APIHandler(lib.PageInfo.getPricing));
router.get('/de/page_info/process', APIHandler(lib.PageInfo.getProcess));
router.get('/de/page_info/project', APIHandler(lib.PageInfo.getProject));
router.get('/de/page_info/technology', APIHandler(lib.PageInfo.getTechnology));

router.post('/contact', APIHandler(lib.Contact.submit));

module.exports = router;