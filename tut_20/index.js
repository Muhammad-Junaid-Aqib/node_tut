// render html tags and json data

const express = require('express')
const app = express()

// how to acces query params 
app.get('/', (req, res) => {
    // console.log("Name :", req.query.name) 
    res.send(`
    <h1> Hi, welcome ${req.query.name}</h1>
    <a href='/about'> Go to About page </a>
    `)
}) 

app.get('/about', (req, res) => {
    res.send(`
    <input type='text' placeholder='User Name' value='${req.query.name}' />
    <button>Submit</button>
    <h5>${req.query.name}</h5>
    `)
})

app.get('/help', (req, res) => {
    // 'For single user'
    res.send(`'For single user'</br> {
        name: 'Junaid',
        email:'junaid@test.com'
    }`)
    // 'For multiple user'
    // res.send([
    //     {
    //     name: 'Junaid',
    //     email:'junaid@test.com'
    //     },
    //     {
    //     name: 'Ali',
    //     email:'Ali@test.com'
    // }
    // ])
})

app.listen(5000)