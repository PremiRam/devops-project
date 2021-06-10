const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connecton')
    res.end('Hello- now with continuos deployment- its so awesome')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
