"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCucumberRuntimeTag = void 0;
// Return ED dev. And to determine what environment not to run the test on.

var generateCucumberRuntimeTag = function generateCucumberRuntimeTag(commonConfig, runtimeEnv, availableEnvList, runtimeTag) {
  var tagExpression = availableEnvList.filter(function (e) {
    return e !== runtimeEnv;
  }).map(function (e) {
    return "(@".concat(runtimeTag, " and not @").concat(e, ")");
  }).join(' and ');
  return "".concat(commonConfig, " --tags '").concat(tagExpression, "'"); // OJO >>. En el original hay más comillas
};
exports.generateCucumberRuntimeTag = generateCucumberRuntimeTag;