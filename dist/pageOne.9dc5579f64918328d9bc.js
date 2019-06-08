/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/datamoney.js":
/*!**************************!*\
  !*** ./src/datamoney.js ***!
  \**************************/
/*! exports provided: money, calcCash, sponsors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"money\", function() { return money; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcCash\", function() { return calcCash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sponsors\", function() { return sponsors; });\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar sponsors = {\n  cash: [40000, 5000, 30400, 12000],\n  eu: [\"SRL\", \"PLO\", \"J&K\"],\n  rus: [\"RusAuto\", \"SBO\"]\n};\n\nfunction calcCash() {\n  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n  var _ref = arguments.length > 1 ? arguments[1] : undefined,\n      _ref2 = _toArray(_ref),\n      everyCash = _ref2.slice(0);\n\n  return everyCash.reduce(function () {\n    var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : own;\n    var el = arguments.length > 1 ? arguments[1] : undefined;\n    return total += el;\n  });\n}\n\nvar money = calcCash(null, sponsors.cash);\n\n\n//# sourceURL=webpack:///./src/datamoney.js?");

/***/ }),

/***/ "./src/employers.js":
/*!**************************!*\
  !*** ./src/employers.js ***!
  \**************************/
/*! exports provided: employers, employersNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"employers\", function() { return employers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"employersNames\", function() { return employersNames; });\nvar employers = [\"Alex\", \"\", \"ludmila\", \"Viktor\", \"\", \"oleg\", \"iNna\", \"Ivan\", \"Alex\", \"Olga\", \" Ann\"];\nvar employersNames = employers.filter(function (el) {\n  return typeof el === \"string\" && el.trim() != \"\";\n}).map(function (el) {\n  return el.toLowerCase().trim();\n});\n\n\n//# sourceURL=webpack:///./src/employers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _employers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employers */ \"./src/employers.js\");\n/* harmony import */ var _datamoney__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datamoney */ \"./src/datamoney.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Calc =\n/*#__PURE__*/\nfunction () {\n  function Calc(owner) {\n    var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"Victor\";\n    var cash = arguments.length > 2 ? arguments[2] : undefined;\n    var emp = arguments.length > 3 ? arguments[3] : undefined;\n\n    _classCallCheck(this, Calc);\n\n    this.owner = owner;\n    this.director = director;\n    this.cash = cash;\n    this.emp = emp;\n  }\n\n  _createClass(Calc, [{\n    key: \"dataCheck\",\n    value: function dataCheck() {\n      var eu = _datamoney__WEBPACK_IMPORTED_MODULE_1__[\"sponsors\"].eu,\n          rus = _datamoney__WEBPACK_IMPORTED_MODULE_1__[\"sponsors\"].rus;\n      var sumSponsors = eu.concat(rus, \"unexpected sponsor\");\n      console.log(\"We have a business. Owner: \".concat(this.owner, \", director: \").concat(this.director, \". Our budget: \").concat(this.cash, \". And our employers: \").concat(this.emp, \"\\nAnd we have a sponsors:\\n\").concat(sumSponsors, \"\\nNote. Be careful with \").concat(eu[0], \". It's a huge risk.\"));\n    }\n  }]);\n\n  return Calc;\n}();\n\nvar firma = new Calc(\"Sam\", undefined, _datamoney__WEBPACK_IMPORTED_MODULE_1__[\"money\"], _employers__WEBPACK_IMPORTED_MODULE_0__[\"employersNames\"]);\nfirma.dataCheck();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });