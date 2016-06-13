var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


MongoClient.connect('mongodb://mongo-db:27017/school', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {"category_code": "biotech"};

    db.collection('grades').find(query).toArray(function(err, docs) {

        assert.equal(err, null);
        assert.notEqual(docs.length, 0);
        
        docs.forEach(function(doc) {
            console.log( doc.student + " has " + doc.grade + " grade." );
        });
        
        db.close();
        
    });

});
