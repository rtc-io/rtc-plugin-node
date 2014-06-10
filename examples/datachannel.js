var quickconnect = require('rtc-quickconnect');
var opts = {
  room: 'nodeplugin-test',
  plugins: [ require('..') ]
};

quickconnect('http://localhost:3000/', opts)
  .createDataChannel('test')
  .on('channel:opened:test', function(id, dc) {
    console.log('dc opened');
  });
