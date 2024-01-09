const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hi, this is home page')
}) 

app.get('/about', (req, res) => {
    res.send('Hi, this is about page')
})

app.get('/help', (req, res) => {
    res.send('Hi, this is help page...')
})

app.listen(5000)