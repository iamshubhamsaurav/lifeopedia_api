const mongoose = require('mongoose')

const journalSchema = mongoose.Schema({
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
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Journal', journalSchema)