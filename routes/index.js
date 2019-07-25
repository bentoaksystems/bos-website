var express = require('express');
var router = express.Router();
const path = require('path');

/* Diverting unknown user routes to Angular router */
router.all("*", (req, res, next) => {
  /* Redirect http to https */
  if (!req.originalUrl.startsWith('/api') && !req.isSpider()) {
    console.log('[TRACE] Server 404 request: ' + req.originalUrl);
    var p = path.join(__dirname, '../public', 'index.html').replace(/\/routes\//, '/');
    res.status(200).sendFile(p);
  } else {
    next();
  }
});


module.exports = router;
