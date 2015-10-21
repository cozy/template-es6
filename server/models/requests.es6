// See documentation on https://github.com/cozy/cozy-db

const cozydb = require('cozydb');

module.exports = {
  template: {
    // shortcut for emit doc._id, doc
    all: cozydb.defaultRequests.all,

    // create all the requests you want!
    customRequest: {
      map: (doc) => {
        // map function
        console.log(doc);
      },
      reduce: (key, values, rereduce) => {
        // non mandatory reduce function
        console.log(key, values, rereduce);
      },
    },
  },
};
