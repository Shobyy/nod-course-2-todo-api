
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

/*var newTodo = new Todo({
    text: 'Cook Dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved Todo',doc);
}, (e) => {
    console.log('Unable to save Todo')
});*/

var otherTodo = new Todo({
    text: 'Feed the Cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc,undefined,2));
}, (e) => {
    console.log('Unable to save Todo')
});