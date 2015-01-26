var test = require('tape');
var server = require('./server');
var port = process.env.ZUUL_PORT || process.env.PORT;

test('start local signalling server', function(t) {
  t.plan(1);
  server.listen(parseInt(port, 10) || 3000, t.ifError);
});

require('./dc-connect');

test('close server', function(t) {
  t.plan(1);
  server.close();
  t.pass('server closed');
});
