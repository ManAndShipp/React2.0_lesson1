"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcCash = calcCash;
exports.sponsors = exports.money = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ["SRL", "PLO", "J&K"],
  rus: ["RusAuto", "SBO"]
};
exports.sponsors = sponsors;

function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      _ref2 = _toArray(_ref),
      everyCash = _ref2.slice(0);

  return everyCash.reduce(function () {
    var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : own;
    var el = arguments.length > 1 ? arguments[1] : undefined;
    return total += el;
  });
}

var money = calcCash(null, sponsors.cash);
exports.money = money;