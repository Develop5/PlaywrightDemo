"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsonFromFile = exports.env = void 0;
// Validate that the environment variable is found in the process.env

var env = function env(key) {
  var value = process.env[key];
  if (!value) {
    throw Error("\uD83E\uDDE8  No environment variable found for ".concat(key, "  \uD83E\uDDE8 "));
  }
  return value;
};
exports.env = env;
var getJsonFromFile = function getJsonFromFile(path) {
  return require("".concat(process.cwd()).concat(path));
};
exports.getJsonFromFile = getJsonFromFile;