"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringIsOfOptions = void 0;
var stringLevelIsT = function stringLevelIsT(string, options) {
  return options.includes(string);
};
var stringIsOfOptions = function stringIsOfOptions(stringLevel, options) {
  if (stringLevelIsT(stringLevel, options)) {
    return stringLevel;
  }
  throw Error("\uD83E\uDDE8 Logger '".concat(stringLevel, "' needs to be one of ").concat(options, " \uD83E\uDDE8"));
};
exports.stringIsOfOptions = stringIsOfOptions;