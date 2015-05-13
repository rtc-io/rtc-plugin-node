var quickconnect = require('rtc-quickconnect');
var opts = {
  room: 'nodeplugin-test',
  plugins: [ require('..') ]
};

quickconnect('https://switchboard.rtc.io/', opts)
  .createDataChannel('test')
  .on('channel:opened:test', function(id, dc) {
    console.log('dc opened');
  });

