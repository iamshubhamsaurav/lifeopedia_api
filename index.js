const express = require('express')

const app = express()

app.all('*', (req, res, next) => {
    res.send(404).json({
        success: false,
        message: 'Page not found'
    })
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening to server on port: ${PORT}`)
})