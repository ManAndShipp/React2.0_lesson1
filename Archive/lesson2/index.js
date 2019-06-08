"use strict";

var _script = _interopRequireWildcard(require("./script"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//import { btn, Slider as sl} from "./script";
//import * as total from './script';
//import React, {Component} from 'react';
var slider = new _script.default(100, 100, 5);
slider.whoAmI();
console.log((0, _script.btn)());
console.log("22");