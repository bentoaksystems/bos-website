const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const detector = require('spider-detector');
const geoip = require('geoip-lite');


const index = require('./routes/index');
const bot = require('./routes/bot');
const api = require('./routes/api');

const app = express();
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(detector.middleware());

// Identify Which ip visit our site !!
app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const geo = geoip.lookup(ip);
  req.is_iran = false;
  if (geo && geo.country === 'IR') {
    req.is_iran = true
  }
  next();
})
// this router is for google bots and spiders to be tricked
// NOTE: use 'User-Agent Switcher' chrome extension on port 4000 to see these
app.use('/', bot);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/api', api);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {
  get: () => app,
};

