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

// Borrar todo esto
/* Read File */
//console.log(`Nombre del fichero: ${process.env.COMMON_CONFIG_FILE}`)
//const filename = env('UI_AUTOMATION_BROWSER')
//const filename = process.env.COMMON_CONFIG_FILE

/*
fs.readFile(filename, bar)
console.log(`Leyendo fichero: ${filename}  ::::::::::::::::::::::::::: `)
function bar (err, data)
  {
  err ? console.log("HAY ERROR     zzzzzzzz  " + err) : console.log("CORRECTO!")
  err ? Function("error","throw error")(err) : console.log(JSON.stringify(data) );
  };
// Hasta aquí
*/

var common = "./src/features/**/*.feature                 --require-module ts-node/register                 --require ./src/step-definitions/**/**/*.ts                 -f json:./reports/report.json                 --format progress-bar";
var dev = "".concat(common, " --tags '@dev'");
exports.dev = dev;
var smoke = "".concat(common, " --tags '@smoke'");
exports.smoke = smoke;
var regression = "".concat(common, " --tags '@regression'");

//console.log('\n 😃  😃  😃  😃')
exports.regression = regression;