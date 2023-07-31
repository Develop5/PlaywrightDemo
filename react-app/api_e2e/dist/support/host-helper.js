"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieveHostURL = void 0;
var retrieveHostURL = function retrieveHostURL(_ref) {
  var hostsConfig = _ref.hostsConfig;
  var _process$env$API_AUTO = process.env.API_AUTOMATION_HOST,
    hostname = _process$env$API_AUTO === void 0 ? 'production' : _process$env$API_AUTO;
  var hostPath = hostsConfig[hostname];
  var url = new URL(hostPath);
  return url;
};
exports.retrieveHostURL = retrieveHostURL;