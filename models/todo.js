const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide title"]
    },
    isCompleted: {
        type: Boolean,
        default: false,
        required: [true, "Please provide isCompleted"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Todo', todoSchema)