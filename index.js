const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

const journalRouter = require('./routes/journals')

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/v1/journals', journalRouter)

app.all('*', (req, res, next) => {
    res.send(404).json({
        success: false,
        message: 'Page not found'
    })
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening to server on port: ${PORT}`.green.underline)
})