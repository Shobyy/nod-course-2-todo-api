
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim : true
    },
    completed: {
        type: Boolean,
        default :false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var otherTodo = new Todo({
    text: 'Edit this video'
   /* completed: true,
    completedAt: 123*/
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc,undefined,2));
}, (e) => {
    console.log('Unable to save Todo')
});

    // Create new User Model
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
});

var otherUser = new User({
    email: 'shoaib.kxoft@gamil.com'
});

otherUser.save().then((doc) => {
    console.log('User Saved',doc);
}, (e) =>{
    console.log('Unable to save User',e);
});