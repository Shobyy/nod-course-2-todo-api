
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser : true},(err, db) => {
    if (err) {
        console.log('Unable to connect to Server');
    }
    console.log('Connected to Mongo Server');

    db.collection('Todos').find().toArray().then((docs) => {

        console.log('Todos');
        console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
            console.log('Unable to fetch todos',err);
    });

    db.close();
});