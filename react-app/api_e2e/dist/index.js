"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _parseEnv = require("./env/parseEnv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
var hostsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('HOSTS_URLS_PATH'));
var worldParameters = {
  hostsConfig: hostsConfig
};
var common = "./src/features/**/*.feature                 --require-module ts-node/register                 --require ./src/step-definitions/**/**/*.ts                 --world-parameters ".concat(JSON.stringify(worldParameters), "                 -f json:./reports/report.json                 --parallel ").concat((0, _parseEnv.env)('PARALLEL'), "                 --retry ").concat((0, _parseEnv.env)('RETRY'), "                 --format progress-bar");
var dev = "".concat(common, " --tags '@dev'");
exports.dev = dev;
var smoke = "".concat(common, " --tags '@smoke'");
exports.smoke = smoke;
var regression = "".concat(common, " --tags '@regression'");
exports.regression = regression;
console.log("\n \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E \uD83D\uDC7E  \n");