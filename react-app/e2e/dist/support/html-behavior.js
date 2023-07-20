"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncheckElement = exports.selectElementValue = exports.scrollElementIntoView = exports.inputValueOnPage = exports.inputValueOnIframe = exports.inputElementValue = exports.getTitleWithinPage = exports.getTextWithinIframeElement = exports.getTableData = exports.getIframeElement = exports.getElements = exports.getElementWithinIframe = exports.getElementValue = exports.getElementTextWithinPage = exports.getElementTextAtIndex = exports.getElementText = exports.getElementOnPage = exports.getElementAtIndex = exports.getElement = exports.getAttributeText = exports.elementEnabled = exports.elementChecked = exports.clickElementAtIndex = exports.clickElement = exports.checkElement = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var clickElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, elementIdentifier) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return page.click(elementIdentifier);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function clickElement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.clickElement = clickElement;
var clickElementAtIndex = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(page, elementIdentifier, elementPosition) {
    var element;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return page.$("".concat(elementIdentifier, ">>nth=").concat(elementPosition));
        case 2:
          element = _context2.sent;
          _context2.next = 5;
          return element === null || element === void 0 ? void 0 : element.click();
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function clickElementAtIndex(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

//inputValue ahora inputElementValue
exports.clickElementAtIndex = clickElementAtIndex;
var inputElementValue = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(page, elementIdentifier, input) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return page.focus(elementIdentifier);
        case 2:
          _context3.next = 4;
          return page.fill(elementIdentifier, input);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function inputElementValue(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

//selectValue ahora selectElementValue
exports.inputElementValue = inputElementValue;
var selectElementValue = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(page, elementIdentifier, option) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return page.focus(elementIdentifier);
        case 2:
          _context4.next = 4;
          return page.selectOption(elementIdentifier, option);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function selectElementValue(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();
exports.selectElementValue = selectElementValue;
var checkElement = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(page, elementIdentifier) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return page.check(elementIdentifier);
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function checkElement(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();
exports.checkElement = checkElement;
var uncheckElement = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(page, elementIdentifier) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return page.uncheck(elementIdentifier);
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function uncheckElement(_x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();
exports.uncheckElement = uncheckElement;
var inputValueOnIframe = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(elementIframe, elementIdentifier, inputValue) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return elementIframe.fill(elementIdentifier, inputValue);
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function inputValueOnIframe(_x16, _x17, _x18) {
    return _ref7.apply(this, arguments);
  };
}();

//inputValeOnPage ahora inputValueOnPage
exports.inputValueOnIframe = inputValueOnIframe;
var inputValueOnPage = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(pages, pageIndex, elementIdentifier, inputValue) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return pages[pageIndex].focus(elementIdentifier);
        case 2:
          _context8.next = 4;
          return pages[pageIndex].fill(elementIdentifier, inputValue);
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function inputValueOnPage(_x19, _x20, _x21, _x22) {
    return _ref8.apply(this, arguments);
  };
}();

//scrollIntoView ahora scrollElementIntoView
exports.inputValueOnPage = inputValueOnPage;
var scrollElementIntoView = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(page, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          element = page.locator(elementIdentifier);
          _context9.next = 3;
          return element.scrollIntoViewIfNeeded();
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function scrollElementIntoView(_x23, _x24) {
    return _ref9.apply(this, arguments);
  };
}();
exports.scrollElementIntoView = scrollElementIntoView;
var getElement = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(page, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return page.$(elementIdentifier);
        case 2:
          element = _context10.sent;
          return _context10.abrupt("return", element);
        case 4:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function getElement(_x25, _x26) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getElement = getElement;
var getElements = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(page, elementIdentifier) {
    var elements;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return page.$$(elementIdentifier);
        case 2:
          elements = _context11.sent;
          return _context11.abrupt("return", elements);
        case 4:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function getElements(_x27, _x28) {
    return _ref11.apply(this, arguments);
  };
}();
exports.getElements = getElements;
var getElementAtIndex = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(page, elementIdentifier, index) {
    var elementAtIndex;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return page.$("".concat(elementIdentifier, ">>nth=").concat(index));
        case 2:
          elementAtIndex = _context12.sent;
          return _context12.abrupt("return", elementAtIndex);
        case 4:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function getElementAtIndex(_x29, _x30, _x31) {
    return _ref12.apply(this, arguments);
  };
}();

//getValue ahora getElementValue
exports.getElementAtIndex = getElementAtIndex;
var getElementValue = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(page, elementIdentifier) {
    var value;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return page.waitForSelector(elementIdentifier);
        case 2:
          _context13.next = 4;
          return page.$eval(elementIdentifier, function (el) {
            return el.value;
          });
        case 4:
          value = _context13.sent;
          return _context13.abrupt("return", value);
        case 6:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function getElementValue(_x32, _x33) {
    return _ref13.apply(this, arguments);
  };
}();
exports.getElementValue = getElementValue;
var getIframeElement = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(page, iframeIdentifier) {
    var elementHandle, elementIframe;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return page.waitForSelector(iframeIdentifier);
        case 2:
          _context14.next = 4;
          return page.$(iframeIdentifier);
        case 4:
          elementHandle = _context14.sent;
          _context14.next = 7;
          return elementHandle === null || elementHandle === void 0 ? void 0 : elementHandle.contentFrame();
        case 7:
          elementIframe = _context14.sent;
          return _context14.abrupt("return", elementIframe);
        case 9:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function getIframeElement(_x34, _x35) {
    return _ref14.apply(this, arguments);
  };
}();
exports.getIframeElement = getIframeElement;
var getElementWithinIframe = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(elementIframe, elementIdentifier) {
    var visibleOnIframeElement;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return elementIframe === null || elementIframe === void 0 ? void 0 : elementIframe.$(elementIdentifier);
        case 2:
          visibleOnIframeElement = _context15.sent;
          return _context15.abrupt("return", visibleOnIframeElement);
        case 4:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function getElementWithinIframe(_x36, _x37) {
    return _ref15.apply(this, arguments);
  };
}();
exports.getElementWithinIframe = getElementWithinIframe;
var getTextWithinIframeElement = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(elementIframe, elementIdentifier) {
    var textOnIframeEleemnt;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return elementIframe === null || elementIframe === void 0 ? void 0 : elementIframe.textContent(elementIdentifier);
        case 2:
          textOnIframeEleemnt = _context16.sent;
          return _context16.abrupt("return", textOnIframeEleemnt);
        case 4:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function getTextWithinIframeElement(_x38, _x39) {
    return _ref16.apply(this, arguments);
  };
}();
exports.getTextWithinIframeElement = getTextWithinIframeElement;
var getTitleWithinPage = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(page, pages, pageIndex) {
    var titleWithinPage;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return pages[pageIndex].title();
        case 2:
          titleWithinPage = _context17.sent;
          return _context17.abrupt("return", titleWithinPage);
        case 4:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function getTitleWithinPage(_x40, _x41, _x42) {
    return _ref17.apply(this, arguments);
  };
}();
exports.getTitleWithinPage = getTitleWithinPage;
var getElementOnPage = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(page, elementIdentifier, pages, pageIndex) {
    var elementOnPage;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return pages[pageIndex].$(elementIdentifier);
        case 2:
          elementOnPage = _context18.sent;
          return _context18.abrupt("return", elementOnPage);
        case 4:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function getElementOnPage(_x43, _x44, _x45, _x46) {
    return _ref18.apply(this, arguments);
  };
}();
exports.getElementOnPage = getElementOnPage;
var getElementTextWithinPage = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(page, elementIdentifier, pages, pageIndex) {
    var textWithinPage;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return pages[pageIndex].textContent(elementIdentifier);
        case 2:
          textWithinPage = _context19.sent;
          return _context19.abrupt("return", textWithinPage);
        case 4:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function getElementTextWithinPage(_x47, _x48, _x49, _x50) {
    return _ref19.apply(this, arguments);
  };
}();
exports.getElementTextWithinPage = getElementTextWithinPage;
var getAttributeText = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(page, elementIdentifier, attribute) {
    var attributeText;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          attributeText = page.locator(elementIdentifier).getAttribute(attribute);
          return _context20.abrupt("return", attributeText);
        case 2:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function getAttributeText(_x51, _x52, _x53) {
    return _ref20.apply(this, arguments);
  };
}();
exports.getAttributeText = getAttributeText;
var getElementText = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(page, elementIdentifier) {
    var text;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return page.textContent(elementIdentifier);
        case 2:
          text = _context21.sent;
          return _context21.abrupt("return", text);
        case 4:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function getElementText(_x54, _x55) {
    return _ref21.apply(this, arguments);
  };
}();
exports.getElementText = getElementText;
var getElementTextAtIndex = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(page, elementIdentifier, index) {
    var textAtIndex;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return page.textContent("".concat(elementIdentifier, ">>nth=").concat(index));
        case 2:
          textAtIndex = _context22.sent;
          return _context22.abrupt("return", textAtIndex);
        case 4:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function getElementTextAtIndex(_x56, _x57, _x58) {
    return _ref22.apply(this, arguments);
  };
}();
exports.getElementTextAtIndex = getElementTextAtIndex;
var getTableData = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(page, elementIdentifier) {
    var table;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return page.$$eval(elementIdentifier + " tbody tr", function (rows) {
            return rows.map(function (row) {
              var cells = row.querySelectorAll('td');
              return Array.from(cells).map(function (cell) {
                return cell.textContent;
              });
            });
          });
        case 2:
          table = _context23.sent;
          return _context23.abrupt("return", JSON.stringify(table));
        case 4:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function getTableData(_x59, _x60) {
    return _ref23.apply(this, arguments);
  };
}();
exports.getTableData = getTableData;
var elementEnabled = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(page, elementIdentifier) {
    var enabled;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return page.isEnabled(elementIdentifier);
        case 2:
          enabled = _context24.sent;
          return _context24.abrupt("return", enabled);
        case 4:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function elementEnabled(_x61, _x62) {
    return _ref24.apply(this, arguments);
  };
}();
exports.elementEnabled = elementEnabled;
var elementChecked = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(page, elementIdentifier) {
    var checked;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return page.isChecked(elementIdentifier);
        case 2:
          checked = _context25.sent;
          return _context25.abrupt("return", checked);
        case 4:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function elementChecked(_x63, _x64) {
    return _ref25.apply(this, arguments);
  };
}();
exports.elementChecked = elementChecked;