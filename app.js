//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

var router = require("./router.js");



//Create a web server
// var http = require('http');
// http.createServer(function (request, response) {
//   router.home(request, response);
//   router.user(request, response);
// }).listen(3000);
// console.log('Server running at http://');


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  router.home(req, res);
  router.user(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});















