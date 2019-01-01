
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser : true},(err, db) => {
    if (err) {
        console.log('Unable to connect to Server');
    }
    console.log('Connected to Mongo Server');

   //deleteMany
   /* db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
        console.log(result);
    }); */

    //deleteOne
   /* db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
        console.log(result);
    });*/

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
        console.log(result);
    });

    //db.close();
});