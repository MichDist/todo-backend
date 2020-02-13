const http = require('http')

// Create webserver and register an event handler
const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello World!')
})


// Define port
const port = 3001
app.listen(port)
console.log(`Server is running on port ${port}`)