const db = require('../mongo');
const env = require('../env');

function dropAll(force = false) {
  return new Promise((resolve, reject) => {
    if (!env.isTest) {
      console.warn('YOU ARE ASKING TO DROP REAL (NOT TEST) DATABASE!');
      if (!force) {
        console.warn('OPERATION PROHIBITED!');
        reject('Dropping DB Not Allowed');
      }
      console.warn('I sure hope you know what you are doing!');
    }

    db.dbIsReady().then(res => {
      const connection = res.connection;
      connection.db.dropDatabase((err, result) => {
        if (!err) {
          console.log('-> Database has been dropped!');
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  })
}

module.exports = {
  dropAll,
};