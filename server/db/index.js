const { MongoClient } = require('mongodb');
const { mongoUrl, db_name } = require('../configs')
// const MongoClient = new MongoClient(mongoUrl);
const store = {
    db: null
}

exports.connect = function(done) {
    MongoClient.connect(mongoUrl, function (err, client) {
        if (err) throw err;

        store.db = client.db(db_name);
        done();
    });
}


exports.get = function() {
    return store.db;
}

exports.close = function() {
    if (store.db) {
        store.db.close(function(err, result) {
            store.db = null;
        })
    }
}