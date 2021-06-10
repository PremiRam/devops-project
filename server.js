const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connecton')
    res.end('\x1b[44m', 'Hello everyone- now with continuos deployment' +  new Date() )
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
