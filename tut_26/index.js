// what are MiddleWares
// ye function hota hai jo routes k sth use hota hai
// middleware ki help s request or respone k access or modify kar skta hai
// boht bar hma authenitication check karni hota hai k user login hai k nai wo hum middleware k
// specific country k andr website block karni hoti hai to ye sub middleware mai hota hai
// jha b hma request or respone mai kuch change karna hota hai udr middleware use karta hai

// const { application } = require("express");




// how to make a middleware
// Apply middleware on routes


// types of middleware

// Application-level middleware
// route-level middleware
// error-handling middleware
// built-In middleware
// third-party middleware

const express = require('express')

const app = express()

const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('Age is required')
    } else if (req.query.age < 18) {
        res.send('You must be at least')
    } else {
        next();
    }
}

// app.use(reqFilter)

app.get('/', (req, res) => {
    // console.log('Home Page');
    res.send('Home Page')
})

app.get('/user', (req, res) => {
    // console.log('Home Page');
    res.send('User Page')
})

// For Specific route
// for specific route we hide or don't use app.use(middleware_Name)
// middleware apply only on this below rout
// second parameter is the middleware (e.g reqFilter is middle)
app.get('/about', reqFilter, (req, res) => {
    // console.log('Home Page');
    res.send('About Page')
})

app.listen(5000) 
