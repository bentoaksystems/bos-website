const bcrypt = require('bcrypt-nodejs');
const app = require('express')();
let env = app.get('env');
if (env === 'test')
  env = 'development';
const isProd = env === 'production';
const isDev = env === 'development';

/**
 * read environment variable form env.process
 * in dev or test mode the environment variables are read from .env file
 * .env file must at least contain:
 * APP_NAME
 * APP_ADDRESS
 * PORT
 * DATABASE
 * DB_URI
 * MONGO_HOST
 * MONGO_PORT
 * REDIS_HOST
 *
 * a .env file that might work for many:
 ** START **
 # the values must not be initiated with '!!'
 APP_NAME=BOS-Website
 APP_ADDRESS=http://localhost:8080
 PORT=8080
 DATABASE=heroku_ss5zxvwl
 DB_URI=ds215563.mlab.com
 MONGO_HOST=ds215563.mlab.com
 MONGO_PORT=15563
 ** END **
 */
if (isDev)
  require('dotenv').config(); // loads env variables inside .env file into process.env

/**
 *  App
 */
const appName = getEnvValue(process.env.APP_NAME);
const appAddress = getEnvValue(process.env.APP_ADDRESS);
const port = getEnvValue(process.env.PORT);

/**
 * Database
 */
const database = getEnvValue(process.env.DATABASE);
const database_test = getEnvValue(process.env.DATABASE) + '_test';
const db_uri = getEnvValue(process.env.DB_URI);
const db_uri_test = getEnvValue(process.env.DB_URI_TEST);


/**
 * Mail Config
 */
const mailConfig = require('./config.mail');
//Get and setup environments variables for configMail
mailConfig.mailCredentialData({
  port: process.env['MAILGUN_SMTP_PORT'],
  address: process.env['MAILGUN_SMTP_SERVER'],
  user_name: process.env['MAILGUN_SMTP_LOGIN'],
  password: process.env['MAILGUN_SMTP_PASSWORD'],
  domain: 'bentoak.heroku.com'
});


if (isDev)
  mailConfig['tls'] = {rejectUnauthorized: false};

/**
 *  in some cases env var name which is declared in .env file is not compatible with server env var in production mode.
 *  for example in Heroku the name of env var for database connection is DATABASE_URL, but it is declared as pg_connection in .env file
 *  To resolve this if the name of env var contains !! at first, its value will be extracted from name after this two character
 * @param procEnv
 * @returns {*}
 */
function getEnvValue(procEnv) {
  if (procEnv && procEnv.startsWith('!!'))
    return process.env[procEnv.substring(2)]; // remove two first char (!!)
  else
    return procEnv;
}


module.exports = {
  bcrypt,
  isProd: isProd,
  isDev: isDev,
  appAddress,
  appName,
  app,
  port,
  database,
  database_test,
  db_uri,
  db_uri_test,
  mailConfig,
};


