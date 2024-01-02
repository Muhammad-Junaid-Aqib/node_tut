const http = require('http')
const port = 3000
const data = require('./data')

// const server = http.createServer(() => {
//     console.log("Someone connected to the server")
// })

// server.listen(port)

http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'application\json' })
    res.write(JSON.stringify(data))
    res.end()
}).listen(5000)