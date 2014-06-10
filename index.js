var webrtc = require('wrtc');

/**
  # rtc-plugin-node



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
