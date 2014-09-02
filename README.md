# rtc-plugin-node

This is an rtc.io plugin that allows users to use modules such as
[rtc-quickconnect](https://github.com/rtc-io/rtc-quickconnect) with node
thanks to the awesome [node-webrtc](https://github.com/js-platform/node-webrtc)
(`wrtc`) module.


[![NPM](https://nodei.co/npm/rtc-plugin-node.png)](https://nodei.co/npm/rtc-plugin-node/)

[![Build Status](https://img.shields.io/travis/rtc-io/rtc-plugin-node.svg?branch=master)](https://travis-ci.org/rtc-io/rtc-plugin-node) [![experimental](https://img.shields.io/badge/stability-experimental-red.svg)](https://github.com/dominictarr/stability#experimental) 

## Example Usage

The following example demonstrates how the plugin can be used in your code and enable
the same code to be written once, and work both in the browser and node environments:

```js
var quickconnect = require('rtc-quickconnect');
var opts = {
  room: 'nodeplugin-test',
  plugins: [ require('rtc-plugin-node') ]
};

quickconnect('http://localhost:3000/', opts)
  .createDataChannel('test')
  .on('channel:opened:test', function(id, dc) {
    console.log('dc opened');
  });

```

If you'd like to take it for a spin, then clone this repo, install
[beefy](https://github.com/chrisdickinson/beefy) (`npm install -g beefy`) and take
it for a spin:

- run `beefy examples/datachannel.js` in terminal, and open your browser at:

  http://localhost:9966/

- run `node examples/datachannel.js` in another terminal and you should see console
  output of `dc opened` between the two :)

## License(s)

### Apache 2.0

Copyright 2014 National ICT Australia Limited (NICTA)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
