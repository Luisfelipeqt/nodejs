
const http = require('http');


const server = http.createServer((request, response) => {
    console.log(`Request method. ${request.method} | Endpoint: ${request.url}`);

    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('<h1> Ola, mundo!</h1>');
});

server.listen(8080, () => console.log('Server started at http://localhost:8080'))