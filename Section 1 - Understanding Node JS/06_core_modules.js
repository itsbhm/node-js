const http = require('http');

const server = http.createServer((req, resp) => {
    resp.end("HTTP Server Created");
});

server.listen(3000);