
//const  MongoClient = require('mongodb').MongoClient;

//Use This instead of upper line
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser : true},(err, db) => {
    if (err) {
        console.log('Unable to connect to Server');
    }
    console.log('Connected to Mongo Server');

    db.collection('User').insertOne({
        name: 'SHOAIB',
        age: 23,
        location: 'Pakistan Karachi'
    }, (err , result) => {
        if (err) {
            return console.log('Unable to insert User',err);
        }
        console.log(result.ops);
    });
    db.close();
});