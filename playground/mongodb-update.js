
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser : true},(err, db) => {
    if (err) {
        console.log('Unable to connect to Server');
    }
    console.log('Connected to Mongo Server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c2b4c59cf23d3533cb3e088')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});