const http = require('http')

const server = http.createServer((req, res) => {
    console.log("Request received:", req.url)
    if (req.url === '/' && req.method === 'GET') {
        res.end('<h1>Welcome to Node Server</h1>')
    }
    else if (req.url === '/about' && req.method === 'GET') {
        res.end('<h1>About Page</h1> <p>All about info can be found here</p>')
    }
    else if (req.url === '/contact' && req.method === 'GET') {
        res.end('<h1>Contact Page</h1>')
    }
    else {
        res.statusCode = 404
        res.end('Error: 404 - Page Not Found')
    }
})
const port = 3000

server.listen(port, () => {
    console.log('Server has started on port', port)
})
