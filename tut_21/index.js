const express = require('express')
const path = require('path')

const app = express();
const filePath = path.join(__dirname,'component')
// app.get('/', (req, res) => {
//     res.send(`this is home page ${filePath}`)
// })

app.use(express.static(filePath))
app.listen(5000)