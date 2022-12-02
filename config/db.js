const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useCreateIndex: true,
            // useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })    
        console.log(`Database connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log("Database Connection Failed".red.inverse.bold)
    }
}

module.exports = connectDB