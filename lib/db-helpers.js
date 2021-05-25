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

async function dropCollection(excludesModels = []) {
  return new Promise((resolve, reject) => {
    db.dbIsReady().then(async res => {
      const connection = res.connection;
      connection.db.listCollections().toArray(async function (err, names) {
        if (err) {
          reject(err)
        } else {
          for (i = 0; i < names.length; i++) {
            if ((!excludesModels.includes(names[i].name.toUpperCase()))) {
              await connection.dropCollection(
                names[i].name
              );
              console.log(`-> Collection: "${names[i].name}" dropped`);
            } else {
              console.log(`-> Collection: "${names[i].name}" doesn't exist`);
            }
          }
        }
        resolve();
      });
    })
  });

}

module.exports = {
  dropAll,
  dropCollection
};