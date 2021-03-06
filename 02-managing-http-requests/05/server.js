const http = require('http');
const services = require('../../services');
const url = require('url');
const textBody = require('body');

const server = http.createServer();
server.on('request', (request, response) => {
    const parsedUrl = url.parse(request.url, true);
    if (request.method === 'GET' && parsedUrl.pathname === '/metadata') {
        const { id } = parsedUrl.query;
        const metadata = services.fetchImageMetadata(id);
        console.log(request.headers)
    };
    const body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const parsedJSON = JSON.parse(Buffer.concat(body));
        const userName = parsedJSON[0]['userName'];
        console.log(userName);
        services.createUser(userName);
    });
});

server.listen(8080);