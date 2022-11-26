const mongoose = require('express')

const albumSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide album title"]
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

module.exports = mongoose.model('Album', albumSchema)