
const http = require('http');
const users = require('./mocks/users');

const server = http.createServer((request, response) => {
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    if(request.url == '/users' && request.method == 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        
        response.end(JSON.stringify(users));

    }
    else {
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(`Cannot ${request.method} ${request.url}`)
    }
});

server.listen(8080, () => console.log('Server started at http://localhost:8080'))