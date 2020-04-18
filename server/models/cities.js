const db = require('../database');

class Cities {
    static retrieveAll (callback) {
        db.query1('SELECT city_name from cities', function(err, res) {
            if (err.error)
               return(err.error);
            callback(res);
        });
    }

    static insert (city, callback) {
        db.query1('INSERT INTO cities (city_name) VALUES ($1)', [city], (err, res) => {
            if (err.error)
              return callback(err);
            callback(res);
          });
    }
}

module.exports = Cities;



