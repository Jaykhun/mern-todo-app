const mongoose = require('mongoose')

const TodoShema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: new Date().toLocaleDateString()
    }
}) 

const Todo = mongoose.model('todos', TodoShema)

module.exports = Todo