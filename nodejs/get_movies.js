'use strict';

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://mongo-db:27017/video';

MongoClient.connect(url, function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    // Find some documents in our collection
    db.collection('movies').find({}).toArray(function(err, docs) {

        // Print the documents returned
        docs.forEach(function(doc) {
            console.log(doc.title + " released in " + doc.year);
        });

        // Close the DB
        db.close();
    });

    // Declare success
    console.log("Called find() for movies!");
});


