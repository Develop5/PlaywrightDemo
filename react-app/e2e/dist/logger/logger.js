"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLogger = void 0;
var _parseEnv = require("../env/parseEnv");
var _optionsHelper = require("../support/options-helper");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DEBUG = 'debug';
var LOG = 'log';
var ERROR = 'error';
var OFF = 'off';
var LOG_LEVELS = [DEBUG, LOG, ERROR, OFF];
var logFuncAtLevels = function logFuncAtLevels(logLevels) {
  var logFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console;
  return function (logLevel) {
    for (var _len = arguments.length, msg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      msg[_key - 1] = arguments[_key];
    }
    if (logLevel !== OFF && logLevels.indexOf(logLevel) !== -1 && msg.length > 0) {
      logFunction[logLevel].apply(logFunction, msg);
    }
  };
};
var getLogLevel = function getLogLevel(logLevel) {
  var dynamicLogLevelIndex = LOG_LEVELS.indexOf(logLevel);
  return LOG_LEVELS.slice(dynamicLogLevelIndex);
};
var createLogger = function createLogger(logLevel) {
  var activeLogLevels = getLogLevel(logLevel);
  var logger = logFuncAtLevels(activeLogLevels);
  return LOG_LEVELS.reduce(function (accumulator, level) {
    return _objectSpread(_objectSpread({}, accumulator), {}, _defineProperty({}, level, function () {
      for (var _len2 = arguments.length, msg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        msg[_key2] = arguments[_key2];
      }
      return logger.apply(void 0, [level].concat(msg));
    }));
  }, {});
};
var loggerSingleton = null;
var getLogger = function getLogger() {
  if (!loggerSingleton) {
    var logLevel = (0, _parseEnv.env)('LOG_LEVEL');
    var validLogLevel = (0, _optionsHelper.stringIsOfOptions)(logLevel, LOG_LEVELS);
    loggerSingleton = createLogger(validLogLevel);
  }
  return loggerSingleton;
};
exports.getLogger = getLogger;