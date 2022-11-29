const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide title"]
    },
    isCompleted: {
        type: String,
        required: [true, "Please provide isCompleted"]
    }
})


module.exports = mongoose.model('Todo', todoSchema)