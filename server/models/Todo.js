const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title : {type: String},
    content : {type: String},
    done: {type: Boolean}
});

module.exports = mongoose.model('Todo', todoSchema)