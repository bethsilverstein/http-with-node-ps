const http = require('http');

const request = http.get(
    'http://www.google.com',
    (response) => {
        console.log(`statusCode: ${response.statusCode}`);
        console.log(response.headers);

        response.on('data', (chunk) => {
            console.log('This is a chunk of data: \n');
            console.log(chunk.toString());
        })
    }
);

request.on('error', (err) => {
    console.error(err);
});

/*
const request = http.request(
    { hostname: 'www.google.com' },
    (response) => {
        console.log(`statusCode: ${response.statusCode}`);
        console.log(response.headers);

        response.on('data', (chunk) => {
            console.log('This is a chunk of data: \n');
            console.log(chunk.toString());
        })
    }
);

request.on('error', (err) => {
    console.error(err);
});

request.end();
*/
