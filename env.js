const bcrypt = require('bcrypt-nodejs');
const app = require('express')();
let env = app.get('env');
env = env ? env.trim() : 'development';
const isTest = env === 'test';
if (isTest)
  env = 'development';
const isProd = env === 'production';
const isDev = env === 'development';
/*
  Generally we have three situations:
  - running in development mode as test (npm run start_test)
  - running in development mode (npm start)
  - running in production mode (set NODE_ENV=production)
*/

/**
 * read environment variable form env.process
 * in dev or test mode the environment variables are read from .env file
 * .env file must at least contain:
 * APP_NAME
 * APP_ADDRESS
 * PORT
 * DB_NAME
 * DB_URI
 * DB_USERNAME
 * DB_PASSWORD
 * DB_NAME_TEST
 * DB_URI_TEST
 * DB_USERNAME_TEST (optional)
 * DB_PASSWORD_TEST (optional)
 * 
 * EMAIL_USERNAME
 * EMAIL_PASSWORD
 * EMAIL_USERNAME_DEV
 * EMAIL_PASSWORD_DEV
 * 
 * If you want to use HEROKU db, use 'DB_USE=heroku',
 * otherwise, ignore this, as the default db is local
 *
 * a .env file that might work for many:
 ** START **
    # the values must not be initiated with '!!'
    APP_NAME=BOS-Website
    APP_ADDRESS=http://localhost:4000
    PORT=4000

    # DB_USE=heroku
    DB_NAME=heroku_ss5zxvwl
    DB_URI=ds215563.mlab.com:15563
    DB_USERNAME=heroku_ss5zxvwl
    DB_PASSWORD=*****

    DB_NAME_TEST=bos_website_test
    DB_URI_TEST=127.0.0.1:27017
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
const db_use = getEnvValue(process.env.DB_USE) || 'local';
const suffix = isTest ? '_TEST' : (db_use === 'heroku' ? '_HEROKU' : '');
const db = {
  name: getEnvValue(process.env['DB_NAME' + suffix]),
  uri: getEnvValue(process.env['DB_URI' + suffix]),
};
const db_username = getEnvValue(process.env['DB_USERNAME' + suffix]);
const db_password = getEnvValue(process.env['DB_PASSWORD' + suffix]);
if (db_username && db_password) {
  db['username'] = db_username;
  db['password'] = db_password;
}

/**
 * Mail Config
 */
const mailConfig = {
  host: "smtp.mailgun.org",
  port: "465",
  secure: true,
  auth: {
    user: getEnvValue(isDev ? process.env.EMAIL_USERNAME_DEV : process.env.EMAIL_USERNAME),
    pass: getEnvValue(isDev ? process.env.EMAIL_PASSWORD_DEV : process.env.EMAIL_PASSWORD)
  },
  from: `Bent Oak Systems <${getEnvValue(isDev ? process.env.EMAIL_USERNAME_DEV : process.env.EMAIL_USERNAME)}>`
};
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
  isTest: isTest,
  appAddress,
  appName,
  app,
  port,
  db,
  mailConfig,
};


