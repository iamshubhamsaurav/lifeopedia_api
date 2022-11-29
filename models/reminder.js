const mongoose = require('mongoose')

const reminderSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide title"]
    },
    time: {
        type: Date,
        required: [true, "Please provide time"]
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

module.exports = mongoose.model('Reminder', reminderSchema)