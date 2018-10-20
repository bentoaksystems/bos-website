var express = require('express');
var router = express.Router();
const path = require('path');

// just in case files weren't served in robot mode,
// this is the commonly used file extensions
const ext_supports = [
  'html', 'ico', 'woff', 'woff2', 'xml', 'css',
  'scss', 'less', 'otf', 'js', 'ttf', 'txt',
  'jpg', 'png', 'jpeg', 'svg', 'eot',
];

/* Diverting unknown user routes to Angular router */
router.all("*", (req, res, next) => {
  /* Redirect http to https */
  if (req.originalUrl.indexOf('api') === -1 && !req.isSpider()) {
    console.log('[TRACE] Server 404 request: ' + req.originalUrl);
    var p = path.join(__dirname, '../public', 'index.html').replace(/\/routes\//, '/');
    res.status(200).sendFile(p);
  } else {
    /* Either from:
      API requests -> send JSON response accordingly
      From crawlers -> do PUG server-side renderings
    */
    next();
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});


module.exports = router;
