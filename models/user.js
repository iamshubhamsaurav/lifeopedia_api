const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please provide full name"],
        trim: true,
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: [true, "Username must be unique"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "You must have a unique email"],
        lowercase: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, "User must have a password"],
        minLength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, "Please provide confirm password"]
    },
    photo: String,
    dateOfBirth: {
        type: Date,
        required: [true, "Please provide date of birth"]
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)