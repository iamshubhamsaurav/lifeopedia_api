const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

const journalsRouter = require('./routes/journals')
const albumsRouter = require('./routes/albums')
const todosRouter = require('./routes/todos')
const notebooksRouter = require('./routes/notebooks')
const notesRouter = require('./routes/notes')
const remindersRouter = require('./routes/reminders')

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/v1/journals', journalsRouter)
app.use('/api/v1/albums', albumsRouter)
app.use('/api/v1/notebooks', notebooksRouter)
app.use('/api/v1/todos', todosRouter)
app.use('/api/v1/notes', notesRouter)
app.use('/api/v1/reminders', remindersRouter)

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