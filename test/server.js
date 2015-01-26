var http = require('http');
var server = module.exports = http.createServer();
var switchboard = require('rtc-switchboard')(server, { servelib: true });
