const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"]
    },
    imageData: {
        type: String,
        required: [true, "Please provide image data"]
    },
    altText: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})