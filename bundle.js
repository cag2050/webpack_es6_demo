/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: G:/WebstormProjects/webpack_es6_demo/es6/Person.js: Unexpected token (11:23)\n\n\u001b[0m   9 | \n  10 |     say\u001b[34m\u001b[1m(\u001b[22m\u001b[39m\u001b[34m\u001b[1m)\u001b[22m\u001b[39m \u001b[32m{\u001b[39m\n> 11 |         \u001b[36mreturn\u001b[39m \u001b[31m'我是'\u001b[39m \u001b[1m+\u001b[22m $\u001b[32m{\u001b[39m\u001b[36mthis\u001b[39m\u001b[1m.\u001b[22mname\u001b[32m}\u001b[39m\u001b[31m',我今年'\u001b[39m \u001b[1m+\u001b[22m $\u001b[32m{\u001b[39m\u001b[36mthis\u001b[39m\u001b[1m.\u001b[22mage\u001b[32m}\u001b[39m \u001b[1m+\u001b[22m\u001b[31m'岁了。'\u001b[39m\u001b[1m;\u001b[22m\n     |                        ^\n  12 |     \u001b[32m}\u001b[39m\n  13 | \u001b[32m}\u001b[39m\n  14 | \u001b[0m\n");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _Person = __webpack_require__(0);

var _Person2 = _interopRequireDefault(_Person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = new _Person2.default('张三', 20); /**
                                         * Created by chenag on 2016/9/22.
                                         */

document.write(p.say());

/***/ }
/******/ ]);