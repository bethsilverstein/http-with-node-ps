/*
    Copied from PS course
*/

const http = require('http');
const services = require('../../services');

const server = http.createServer();
server.on('request', (request, response) => {
  console.log(request);
});

server.listen(8080);


