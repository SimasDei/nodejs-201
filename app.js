const http = require('http');
const express = require('express');

const app = express();

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(app);

server.listen(3000);
