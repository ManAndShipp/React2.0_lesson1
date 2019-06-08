"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = exports.employers = void 0;
var employers = ["Alex", "", "ludmila", "Viktor", "", "oleg", "iNna", "Ivan", "Alex", "Olga", " Ann"];
exports.employers = employers;
var employersNames = employers.filter(function (el) {
  return typeof el === "string" && el.trim() != "";
}).map(function (el) {
  return el.toLowerCase().trim();
});
exports.employersNames = employersNames;