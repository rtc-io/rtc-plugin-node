var webrtc = require('wrtc');

/**
  # rtc-plugin-node

  This is an rtc.io plugin that allows users to use modules such as
  [rtc-quickconnect](https://github.com/rtc-io/rtc-quickconnect) with node
  thanks to the awesome [node-webrtc](https://github.com/js-platform/node-webrtc)
  (`wrtc`) module.

  ## Example Usage

  The following example demonstrates how the plugin can be used in your code and enable
  the same code to be written once, and work both in the browser and node environments:

  <<< examples/datachannel.js

**/
exports.supported = function(platform) {
  return platform && platform.browser === 'node';
};

exports.init = function(opts, callback) {
  callback();
};

exports.createIceCandidate = function(opts) {
  return new webrtc.RTCIceCandidate(opts);
};

exports.createConnection = function(config, constraints) {
  return new webrtc.RTCPeerConnection(config, constraints);
};

exports.createSessionDescription = function(opts) {
  return new webrtc.RTCSessionDescription(opts);
};
