// routes.js
const express = require('express');
const reqFilter = require('./middleware');

const router = express.Router();

// Apply middleware to all routes in this router
router.use(reqFilter);

// Define routes within the router
router.get('/route1', (req, res) => {
  res.send('This is route 1!');
});

router.get('/route2', (req, res) => {
  res.send('This is route 2!');
});

module.exports = router;
