const express = require('express')
const app = express()

// localhost:5000/?name=junaid
// after slash=/ is params  e.g the name is param in the above line 
app.get('/', (req, res) => {
    console.log("Name :", req.query.name)
    res.send(`Hi, welcome ${req.query.name} `)
}) 

app.get('/about', (req, res) => {
    res.send('Hi, this is about page')
})

app.get('/help', (req, res) => {
    res.send('Hi, this is help page...')
})

app.listen(5000)