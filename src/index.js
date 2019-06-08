"use strict";

var _employers = require("./employers");

var _datamoney = require("./datamoney");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calc =
/*#__PURE__*/
function () {
  function Calc(owner) {
    var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Victor";
    var cash = arguments.length > 2 ? arguments[2] : undefined;
    var emp = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Calc);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  _createClass(Calc, [{
    key: "dataCheck",
    value: function dataCheck() {
      var eu = _datamoney.sponsors.eu,
          rus = _datamoney.sponsors.rus;
      var sumSponsors = eu.concat(rus, "unexpected sponsor");
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp, "\nAnd we have a sponsors:\n").concat(sumSponsors, "\nNote. Be careful with ").concat(eu[0], ". It's a huge risk."));
    }
  }]);

  return Calc;
}();

var firma = new Calc("Sam", undefined, _datamoney.money, _employers.employersNames);
firma.dataCheck();