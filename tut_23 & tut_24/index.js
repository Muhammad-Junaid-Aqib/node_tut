const express = require('express')
const path = require('path')

const app = express()
const filePath = path.join(__dirname, 'component')

// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

/// how to remove extension of the file (like .html)
app.get('/', (req, res) => {
    res.sendFile(`${filePath}/index.html`)
})


app.get('/profile', (_, res) => {
    const user = {
        name: 'junaid',
        email: 'junaid@test.com',
        skill: ['react', 'js', 'html', 'material-ui']
    }
    res.render('pages/index', {user})
    // res.sendFile(`${filePath}/index.html`)
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