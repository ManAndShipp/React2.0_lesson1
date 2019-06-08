"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.btn = exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable indent */
var button = function button() {
  return "button";
};

exports.btn = button;

var Slider =
/*#__PURE__*/
function () {
  function Slider(width, height, count) {
    _classCallCheck(this, Slider);

    this.width = width;
    this.height = height;
    this.count = count;
  }

  _createClass(Slider, [{
    key: "nextSlede",
    value: function nextSlede() {
      console.log("Moving foward");
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      console.log("Moving back");
    }
  }, {
    key: "whoAmI",
    value: function whoAmI() {
      console.log(this.width, this.height, this.count);
    }
  }]);

  return Slider;
}();
/* const slider = new Slider(600, 400, 5),
      someSlider = new Slider(300,450,10);
slider.whoAmI(); */


exports.default = Slider;

var AutoSlider =
/*#__PURE__*/
function (_Slider) {
  _inherits(AutoSlider, _Slider);

  function AutoSlider(width, height, count, auto) {
    var _this;

    _classCallCheck(this, AutoSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoSlider).call(this, width, height, count));
    _this.auto = auto;
    return _this;
  }

  _createClass(AutoSlider, [{
    key: "play",
    value: function play() {
      console.log("Autoplay: ".concat(this.auto));
    }
  }]);

  return AutoSlider;
}(Slider);
/* const slider = new AutoSlider(600, 400, 5, true);
slider.whoAmI();
slider.play(); */
//export default Slider; - только 1