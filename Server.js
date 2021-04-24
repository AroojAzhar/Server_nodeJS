const http = require('http');
const dotenv = require('dotenv');

// configure dotenv
dotenv.config({path : './config/config.env'});

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

// create a server
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
const server = http.createServer((request, response) => {
   response.statusCode = 200; // successful response
   response.setHeader('Content-Type' , 'text/html');
   response.end(`<h2 style="color: white;background-color: limegreen">Welcome to Node JS</h2>`);
});

// listen
server.listen(port, hostname, () => {
   console.log(`Node JS server is started at http://${hostname}:${port}`);
});
