"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _cucumber = require("@cucumber/cucumber");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _htmlBehavior = require("../../support/html-behavior");
var _logger = require("../../logger");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(elementKey, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', " contain the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context2.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var elementStable, elementText;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context.sent;
                  if (!elementStable) {
                    _context.next = 16;
                    break;
                  }
                  _context.next = 6;
                  return (0, _htmlBehavior.getElementText)(page, elementIdentifier);
                case 6:
                  elementText = _context.sent;
                  _logger.logger.debug("elementText ", elementText);
                  _logger.logger.debug("expectedElementText ", expectedElementText);
                  if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate)) {
                    _context.next = 13;
                    break;
                  }
                  return _context.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 13:
                  return _context.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 14:
                  _context.next = 17;
                  break;
                case 16:
                  return _context.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText, " \uD83E\uDDE8 ")
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(elementKey, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', " equal the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context4.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var elementStable, elementText;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context3.sent;
                  if (!elementStable) {
                    _context3.next = 14;
                    break;
                  }
                  _context3.next = 6;
                  return (0, _htmlBehavior.getElementText)(page, elementIdentifier);
                case 6:
                  elementText = _context3.sent;
                  if (!(elementText === expectedElementText === !negate)) {
                    _context3.next = 11;
                    break;
                  }
                  return _context3.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context3.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context3.next = 15;
                  break;
                case 14:
                  return _context3.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "equal the text ").concat(expectedElementText, " \uD83E\uDDE8 ")
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  }));
  return function (_x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the value "(.*)"$/, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(elementKey, negate, expectedelementValue) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', " contain the value ").concat(expectedelementValue));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context6.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var elementStable, elementText;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context5.sent;
                  if (!elementStable) {
                    _context5.next = 14;
                    break;
                  }
                  _context5.next = 6;
                  return (0, _htmlBehavior.getElementValue)(page, elementIdentifier);
                case 6:
                  elementText = _context5.sent;
                  if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedelementValue)) === !negate)) {
                    _context5.next = 11;
                    break;
                  }
                  return _context5.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context5.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context5.next = 15;
                  break;
                case 14:
                  return _context5.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the value ").concat(expectedelementValue, " \uD83E\uDDE8 ")
          });
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6, this);
  }));
  return function (_x9, _x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the value "(.*)"$/, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(elementKey, negate, expectedelementValue) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', " equal the value ").concat(expectedelementValue));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context8.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var elementStable, elementAttribute;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context7.sent;
                  if (!elementStable) {
                    _context7.next = 14;
                    break;
                  }
                  _context7.next = 6;
                  return (0, _htmlBehavior.getElementValue)(page, elementIdentifier);
                case 6:
                  elementAttribute = _context7.sent;
                  if (!(elementAttribute === expectedelementValue === !negate)) {
                    _context7.next = 11;
                    break;
                  }
                  return _context7.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context7.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context7.next = 15;
                  break;
                case 14:
                  return _context7.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "equal the value ").concat(expectedelementValue, " \uD83E\uDDE8 ")
          });
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8, this);
  }));
  return function (_x13, _x14, _x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be enabled$/, /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(elementKey, negate) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', " be enabled"));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context10.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var elementStable, isElementEnabled;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context9.sent;
                  if (!elementStable) {
                    _context9.next = 14;
                    break;
                  }
                  _context9.next = 6;
                  return (0, _htmlBehavior.elementEnabled)(page, elementIdentifier);
                case 6:
                  isElementEnabled = _context9.sent;
                  if (!(isElementEnabled === !negate)) {
                    _context9.next = 11;
                    break;
                  }
                  return _context9.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context9.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context9.next = 15;
                  break;
                case 14:
                  return _context9.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "be enable \uD83E\uDDE8 ")
          });
        case 5:
        case "end":
          return _context10.stop();
      }
    }, _callee10, this);
  }));
  return function (_x17, _x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(elementPosition, elementKey, negate, expectedElementText) {
    var _elementPosition$matc;
    var page, globalConfig, elementIdentifier, index;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementPosition, " ").concat(elementKey, " should ").concat(negate ? 'not ' : '', " contain the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          index = Number((_elementPosition$matc = elementPosition.match(/\d/g)) === null || _elementPosition$matc === void 0 ? void 0 : _elementPosition$matc.join('')) - 1;
          _context12.next = 6;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var elementStable, elementText;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context11.sent;
                  if (!elementStable) {
                    _context11.next = 14;
                    break;
                  }
                  _context11.next = 6;
                  return (0, _htmlBehavior.getElementTextAtIndex)(page, elementIdentifier, index);
                case 6:
                  elementText = _context11.sent;
                  if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate)) {
                    _context11.next = 11;
                    break;
                  }
                  return _context11.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context11.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context11.next = 15;
                  break;
                case 14:
                  return _context11.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context11.stop();
              }
            }, _callee11);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText, " \uD83E\uDDE8 ")
          });
        case 6:
        case "end":
          return _context12.stop();
      }
    }, _callee12, this);
  }));
  return function (_x20, _x21, _x22, _x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" "([^"]*)" attribute should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(elementKey, attribute, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          page = this.screen.page, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " ").concat(attribute, " should ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText));
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context14.next = 5;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            var elementStable, attributeText;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
                case 2:
                  elementStable = _context13.sent;
                  if (!elementStable) {
                    _context13.next = 14;
                    break;
                  }
                  _context13.next = 6;
                  return (0, _htmlBehavior.getAttributeText)(page, elementIdentifier, attribute);
                case 6:
                  attributeText = _context13.sent;
                  if (!((attributeText === null || attributeText === void 0 ? void 0 : attributeText.includes(expectedElementText)) === !negate)) {
                    _context13.next = 11;
                    break;
                  }
                  return _context13.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 11:
                  return _context13.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 12:
                  _context13.next = 15;
                  break;
                case 14:
                  return _context13.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 15:
                case "end":
                  return _context13.stop();
              }
            }, _callee13);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText, " \uD83E\uDDE8 ")
          });
        case 5:
        case "end":
          return _context14.stop();
      }
    }, _callee14, this);
  }));
  return function (_x25, _x26, _x27, _x28, _x29) {
    return _ref13.apply(this, arguments);
  };
}());