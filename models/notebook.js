const mongoose = require('express')

const notebookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide notebook title"]
    },
    description: {
        type: String,
        required: [true, "Please provide description"]
    },
    createdAt: {
        type: String,
        default: Date.now()
    }
})

module.exports = mongoose.model('Notebook', notebookSchema)