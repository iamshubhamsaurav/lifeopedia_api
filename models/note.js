const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title."]
    },
    body: {
        type: String,
        required: [true, "Please provide a body"]
    },
    images: [String],
    featuredImage: [String],
    notebookId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Notebook',
        required: [true, "Note must belong to a Notebook. Please provide a nootebook"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Note', noteSchema)