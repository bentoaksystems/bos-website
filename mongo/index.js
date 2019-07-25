const env = require('../env');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let dbIsReady = () => {
  let dbConnection = new Promise((resolve, reject) => {
    function connect(i = 0) {
      const connection = mongoose.createConnection(getDBCompleteURI(env.db), {useNewUrlParser: true});
      connection.on('connected', function () {
        console.log(`-> Mongoose ${env.isTest ? 'test ' : ''}has been connected!`);
        resolve({connection});
      });
      connection.on('error', function (err) {
        console.error('-> Mongoose connection error: ', err);
        console.log('Reconnecting mongoose...');
        if (i < 300) {
          setTimeout(() => connect(i + 1), 1000);
        } else {
          console.error('failed after 300 retries');
          reject(err);
        }
      });
    }
    connect();
  });

  if (mongoose.connection.readyState) {
    return Promise.resolve({connection: mongoose.connection});
  } else {
    return Promise.resolve(dbConnection);
  }
}

function getDBCompleteURI(db) {
  if (db.mongoURI)
    return db.mongoURI;

  if (db.username && db.password)
    return `mongodb://${db.username}:${db.password}@${db.uri}/${db.name}`;
  return `mongodb://${db.uri}/${db.name}`;
}

module.exports = {
  dbIsReady
};