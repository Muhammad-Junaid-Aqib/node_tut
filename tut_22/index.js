const express = require('express')
const path = require('path')

const app = express()
const filePath = path.join(__dirname,'component')

/// how to remove extension of the file (like .html)

app.get('/', (req, res) => {
    res.sendFile(`${filePath}/index.html`)
})

// how to change the URL of the
// http://localhost:5000/about change the about to anotherName
// to secure the file for example
// http://localhost:5000/abc 

app.get('/abc', (req, res) => {
    res.sendFile(`${filePath}/About.html`)
})

// how to handle not defined path in node.js

app.get("*", (req, res) => {
    res.sendFile(`${filePath}/pageNotFound.html`)
})



app.listen(5000)